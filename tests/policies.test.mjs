import assert from 'node:assert/strict';
import { test } from 'node:test';
import { contentIssue, pathIssue } from '../scripts/public-policy.mjs';
import { pushIssue } from '../scripts/push-policy.mjs';

test('impede originais, credenciais, dados privados e escape de diretório', () => {
  for (const path of [
    '.env',
    '.env.production',
    'private/photo.jpg',
    'originals/portrait.jpg',
    'dados/candidaturas.json',
    '../secrets',
    'public/key.pem',
  ])
    assert.ok(pathIssue(path), path);
  for (const path of [
    'src/pages/index.astro',
    'public/images/portrait.webp',
    'docs/PLANO.md',
  ])
    assert.equal(pathIssue(path), null);
});

test('detecta segredo e URL interna sem rejeitar perfil público', () => {
  assert.ok(contentIssue(['ghp', '_', 'x'.repeat(30)].join('')));
  assert.ok(
    contentIssue(['https://github.com/', 'quero-edu', '/internal'].join('')),
  );
  assert.equal(contentIssue('https://github.com/rodolfo-santos'), null);
});

test('permite main:main e recusa exclusão ou publicação de outra branch', () => {
  const sha = 'a'.repeat(40);
  const zero = '0'.repeat(40);
  assert.equal(
    pushIssue(`refs/heads/main ${sha} refs/heads/main ${zero}`),
    null,
  );
  assert.ok(pushIssue(`refs/heads/feature ${sha} refs/heads/main ${zero}`));
  assert.ok(pushIssue(`refs/heads/main ${sha} refs/heads/feature ${zero}`));
  assert.ok(pushIssue(`(delete) ${zero} refs/heads/main ${sha}`));
});
