import { spawnSync } from 'node:child_process';
import { readFileSync, realpathSync, existsSync } from 'node:fs';
import { dirname, isAbsolute, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pathIssue } from './public-policy.mjs';

const root = realpathSync(
  resolve(dirname(fileURLToPath(import.meta.url)), '..'),
);
let input;
try {
  input = JSON.parse(readFileSync(0, 'utf8'));
} catch {
  console.error('Entrada de hook inválida.');
  process.exit(2);
}
const file = input.tool_input?.file_path;
if (typeof file !== 'string' || !file) {
  console.error('Hook de edição sem file_path.');
  process.exit(2);
}
const absolute = resolve(input.cwd || root, file);
let existing = absolute;
while (!existsSync(existing) && existing !== dirname(existing))
  existing = dirname(existing);
const actual = resolve(realpathSync(existing), relative(existing, absolute));
const local = relative(root, actual);
const issue =
  isAbsolute(local) || local.startsWith('..')
    ? 'Edição fora deste projeto.'
    : pathIssue(local);
if (process.argv[2] === 'gate') {
  if (issue) {
    console.error(issue);
    process.exit(2);
  }
  // No allow override: normal tool permissions still apply.
} else if (process.argv[2] === 'feedback') {
  if (issue) process.exit(0);
  const prettier = resolve(root, 'node_modules/prettier/bin/prettier.cjs');
  if (existsSync(prettier)) {
    const result = spawnSync(
      process.execPath,
      [prettier, '--check', '--ignore-unknown', absolute],
      { cwd: root, encoding: 'utf8', timeout: 10000 },
    );
    if (result.status !== 0)
      console.log(
        JSON.stringify({
          hookSpecificOutput: {
            hookEventName: 'PostToolUse',
            additionalContext: `Formatação pendente em ${local}. Execute npm run format e revise o diff; o hook não altera arquivos.`,
          },
        }),
      );
  }
} else {
  console.error('Modo de hook desconhecido.');
  process.exit(2);
}
