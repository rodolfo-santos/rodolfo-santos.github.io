import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, relative, dirname, extname } from 'node:path';
import { pathToFileURL } from 'node:url';

/** Inspect the generated files without serving them or requesting external URLs. */
export function inspectBuild(directory) {
  const root = resolve(directory);
  const issues = [];
  const files = [];
  if (!existsSync(resolve(root, 'index.html')))
    return {
      files,
      issues: [
        'Build ausente: execute npm run build antes de verificar os links.',
      ],
    };
  function walk(folder) {
    for (const entry of readdirSync(folder, { withFileTypes: true })) {
      const path = resolve(folder, entry.name);
      if (entry.isDirectory()) walk(path);
      else if (/\.(?:html|css)$/.test(entry.name)) files.push(path);
    }
  }
  walk(root);
  const sources = new Map(
    files.map((file) => [file, readFileSync(file, 'utf8')]),
  );
  const idsByFile = new Map();
  for (const [file, source] of sources) {
    if (!file.endsWith('.html')) continue;
    const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map(
      (match) => match[1],
    );
    idsByFile.set(file, new Set(ids));
    if (new Set(ids).size !== ids.length)
      issues.push(`${relative(root, file)}: há IDs duplicados no HTML.`);
  }
  for (const [file, source] of sources) {
    const name = relative(root, file);
    const html = file.endsWith('.html');
    const references = html
      ? [...source.matchAll(/\b(?:href|src)="([^"]+)"/g)].map(
          (match) => match[1],
        )
      : [...source.matchAll(/url\(\s*['"]?([^'"\s)]+)['"]?\s*\)/g)].map(
          (match) => match[1],
        );
    for (const ref of references) {
      if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(ref)) continue;
      // Local SVG paint references in CSS are not document navigation.
      if (!html && ref.startsWith('#')) continue;
      const hash = ref.indexOf('#');
      const beforeHash = hash === -1 ? ref : ref.slice(0, hash);
      let pathname;
      let fragment;
      try {
        pathname = decodeURIComponent(beforeHash.split('?')[0]);
        fragment = hash === -1 ? '' : decodeURIComponent(ref.slice(hash + 1));
      } catch {
        issues.push(`${name}: URL local com codificação inválida: ${ref}`);
        continue;
      }
      let target = !pathname
        ? file
        : pathname.startsWith('/')
          ? resolve(root, `.${pathname}`)
          : resolve(dirname(file), pathname);
      const within = relative(root, target);
      if (within === '..' || within.startsWith('../')) {
        issues.push(`${name}: caminho sai da pasta pública: ${ref}`);
        continue;
      }
      if (existsSync(target) && statSync(target).isDirectory())
        target = resolve(target, 'index.html');
      // Static hosts also serve a generated directory for extensionless routes.
      if (!existsSync(target) && !extname(target))
        target = resolve(target, 'index.html');
      if (!existsSync(target)) {
        issues.push(`${name}: asset ou página ausente: ${ref}`);
        continue;
      }
      if (
        fragment &&
        target.endsWith('.html') &&
        !idsByFile.get(target)?.has(fragment)
      )
        issues.push(
          `${name}: destino #${fragment} não existe em ${relative(root, target)} (${ref}).`,
        );
    }
  }
  return { files, issues };
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  const { files, issues } = inspectBuild('dist');
  if (issues.length) {
    for (const issue of issues) console.error(issue);
    process.exitCode = 1;
  } else
    console.log(
      `Build: ${files.length} arquivos HTML/CSS verificados, sem links locais quebrados ou IDs duplicados.`,
    );
}
