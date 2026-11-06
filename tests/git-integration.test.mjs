import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { test } from 'node:test';

const scanner = resolve('scripts/check-public.mjs');
const hook = resolve('scripts/agent-hook.mjs');
const pushCheck = resolve('scripts/check-push.mjs');
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'portfolio-harness-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const git = (args) =>
    execFileSync('git', args, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
  git(['init', '-b', 'main']);
  return { root, git };
}

test('scanner inspeciona segredo staged mesmo após corrigir somente o arquivo de trabalho', (t) => {
  const { root, git } = fixture(t);
  writeFileSync(
    join(root, 'content.txt'),
    ['ghp', '_', 'x'.repeat(30)].join(''),
  );
  git(['add', 'content.txt']);
  writeFileSync(join(root, 'content.txt'), 'Conteúdo público corrigido.');
  const rejected = spawnSync(process.execPath, [scanner, '--staged'], {
    cwd: root,
    encoding: 'utf8',
  });
  assert.equal(rejected.status, 1);
  assert.ok(
    !rejected.stderr.includes('x'.repeat(30)),
    'não deve expor segredo no diagnóstico',
  );
  git(['add', 'content.txt']);
  const accepted = spawnSync(process.execPath, [scanner, '--staged'], {
    cwd: root,
    encoding: 'utf8',
  });
  assert.equal(accepted.status, 0);
});

test('scanner recusa arquivo privado mesmo se for adicionado com git add -f', (t) => {
  const { root, git } = fixture(t);
  writeFileSync(join(root, '.env'), 'EXAMPLE=placeholder');
  git(['add', '-f', '.env']);
  const rejected = spawnSync(process.execPath, [scanner, '--staged'], {
    cwd: root,
    encoding: 'utf8',
  });
  assert.equal(rejected.status, 1);
});

test('gate de edição recusa symlink que aponta para fora do projeto', (t) => {
  const { root } = fixture(t);
  const target = join(root, 'outside.txt');
  writeFileSync(target, 'placeholder');
  const link = resolve(`.harness-link-${process.pid}`);
  symlinkSync(target, link);
  t.after(() => rmSync(link, { force: true }));
  const result = spawnSync(process.execPath, [hook, 'gate'], {
    input: JSON.stringify({
      cwd: process.cwd(),
      tool_input: { file_path: link },
    }),
    encoding: 'utf8',
  });
  assert.equal(result.status, 2);
});

test('pre-push valida o HEAD limpo e recusa mudança unstaged que mascara o commit enviado', (t) => {
  const { root, git } = fixture(t);
  git(['config', 'user.name', 'Harness Test']);
  git(['config', 'user.email', 'harness@example.invalid']);
  writeFileSync(join(root, 'content.txt'), 'Primeira versão pública.');
  git(['add', 'content.txt']);
  git(['commit', '-m', 'base']);
  const base = git(['rev-parse', 'HEAD']).trim();
  writeFileSync(join(root, 'content.txt'), 'Segunda versão pública.');
  git(['add', 'content.txt']);
  git(['commit', '-m', 'update']);
  const head = git(['rev-parse', 'HEAD']).trim();
  const push = (sha) =>
    spawnSync(process.execPath, [pushCheck], {
      cwd: root,
      input: `refs/heads/main ${sha} refs/heads/main ${base}\n`,
      encoding: 'utf8',
    });
  assert.equal(push(head).status, 0, 'fast-forward do HEAD limpo é permitido');
  assert.equal(push(base).status, 1, 'outro SHA não é o snapshot validado');
  writeFileSync(join(root, 'content.txt'), 'Correção ainda não commitada.');
  assert.equal(push(head).status, 1, 'mudança unstaged deve impedir push');
  git(['add', 'content.txt']);
  assert.equal(push(head).status, 1, 'mudança staged também deve impedir push');
});
