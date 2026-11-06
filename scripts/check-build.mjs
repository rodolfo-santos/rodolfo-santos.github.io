import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, relative, dirname } from 'node:path';

const root = resolve('dist');
if (!existsSync(resolve(root, 'index.html'))) {
  console.error(
    'Build ausente: execute npm run build antes de verificar os links.',
  );
  process.exit(1);
}
const issues = [];
const files = [];
function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (/\.(?:html|css)$/.test(entry.name)) files.push(path);
  }
}
walk(root);
for (const file of files) {
  const source = readFileSync(file, 'utf8');
  const name = relative(root, file);
  const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  if (file.endsWith('.html') && new Set(ids).size !== ids.length)
    issues.push(`${name}: há IDs duplicados no HTML.`);
  const references = file.endsWith('.html')
    ? [...source.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((match) => match[1])
    : [...source.matchAll(/url\(\s*['"]?([^'"\s)]+)['"]?\s*\)/g)].map(
        (match) => match[1],
      );
  for (const ref of references) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(ref)) continue;
    const [pathname, fragment] = ref.split('#');
    if (!pathname) {
      if (file.endsWith('.html') && fragment && !ids.includes(fragment))
        issues.push(`${name}: destino #${fragment} não existe.`);
      continue;
    }
    const path = decodeURIComponent(pathname.split('?')[0]);
    const target = path.startsWith('/')
      ? resolve(root, `.${path}`)
      : resolve(dirname(file), path);
    if (relative(root, target).startsWith('..')) {
      issues.push(`${name}: caminho sai da pasta pública: ${ref}`);
      continue;
    }
    if (!existsSync(target) && !existsSync(resolve(target, 'index.html')))
      issues.push(`${name}: asset ou página ausente: ${ref}`);
  }
}
if (issues.length) {
  for (const issue of issues) console.error(issue);
  process.exitCode = 1;
} else
  console.log(
    `Build: ${files.length} arquivos HTML/CSS verificados, sem links locais quebrados ou IDs duplicados.`,
  );
