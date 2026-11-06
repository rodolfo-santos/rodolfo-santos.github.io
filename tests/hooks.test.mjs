import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { test } from 'node:test';
import { resolve } from 'node:path';
import { writeFileSync, readFileSync, rmSync } from 'node:fs';

const hook = resolve('scripts/agent-hook.mjs');
function run(file) {
  return spawnSync(process.execPath, [hook, 'gate'], {
    input: JSON.stringify({
      cwd: process.cwd(),
      tool_input: { file_path: file },
    }),
    encoding: 'utf8',
  });
}
test('hook permite edição da interface e bloqueia arquivos privados ou externos', () => {
  assert.equal(run('src/pages/index.astro').status, 0);
  assert.equal(run('private/original.jpg').status, 2);
  assert.equal(run('../outside.txt').status, 2);
  assert.equal(run('.env').status, 2);
});

test('hook rejeita payload inválido', () => {
  const result = spawnSync(process.execPath, [hook, 'gate'], {
    input: 'invalid',
    encoding: 'utf8',
  });
  assert.equal(result.status, 2);
});

test('feedback informa formatação pendente sem alterar o arquivo', (t) => {
  const file = resolve(`.hook-feedback-${process.pid}.json`);
  const contents = '{"value":1}';
  writeFileSync(file, contents);
  t.after(() => rmSync(file, { force: true }));
  const result = spawnSync(process.execPath, [hook, 'feedback'], {
    input: JSON.stringify({
      cwd: process.cwd(),
      tool_input: { file_path: file },
    }),
    encoding: 'utf8',
  });
  assert.equal(result.status, 0);
  assert.equal(
    JSON.parse(result.stdout).hookSpecificOutput.hookEventName,
    'PostToolUse',
  );
  assert.equal(readFileSync(file, 'utf8'), contents);
});
