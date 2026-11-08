import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { inspectBuild } from '../scripts/check-build.mjs';

function fixture(t, files) {
  const root = mkdtempSync(join(tmpdir(), 'portfolio-build-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const [name, source] of Object.entries(files)) {
    const file = join(root, name);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, source);
  }
  return root;
}

test('confere fragmentos locais e entre páginas, incluindo caminho com query e fragmento codificado', (t) => {
  const root = fixture(t, {
    'index.html':
      '<main id="conteudo"><a href="/projetos/caso/?origem=home#decis%C3%A3o">Caso</a><a href="?vista=resumo#conteudo">Resumo</a></main>',
    'projetos/caso/index.html':
      '<h1 id="decisão">Caso</h1><a href="/?origem=caso#conteudo">Início</a><a href="../../index.html#conteudo">Voltar</a>',
  });
  assert.deepEqual(inspectBuild(root).issues, []);
});

test('detecta fragmento inexistente em outra página mesmo com query, sem confundir com página ausente', (t) => {
  const root = fixture(t, {
    'index.html': '<a href="/projetos/caso/?origem=home#ausente">Caso</a>',
    'projetos/caso/index.html': '<h1 id="existente">Caso</h1>',
  });
  const { issues } = inspectBuild(root);
  assert.equal(issues.length, 1);
  assert.match(
    issues[0],
    /destino #ausente não existe em projetos\/caso\/index.html/,
  );
});

test('resolve caminho codificado e relativo à raiz, sem consultar links externos ou outros protocolos', (t) => {
  const root = fixture(t, {
    'index.html':
      '<main id="inicio"><a href="/projetos/vis%C3%A3o/#resumo">Caso</a><a href="https://example.invalid/#ausente">Externo</a><a href="//example.invalid/pagina">Externo</a><a href="mailto:contato@example.invalid">Email</a><a href="tel:+550000000000">Telefone</a></main>',
    'projetos/visão/index.html':
      '<h1 id="resumo">Caso</h1><a href="../../#inicio">Início</a>',
  });
  assert.deepEqual(inspectBuild(root).issues, []);
});

test('preserva detecção de asset ausente no CSS e IDs duplicados', (t) => {
  const root = fixture(t, {
    'index.html':
      '<h1 id="repetido">Um</h1><p id="repetido">Dois</p><link href="/styles.css" rel="stylesheet">',
    'styles.css':
      '.hero { background: url("/imagem-ausente.webp"); } .icon { filter: url(#local); }',
  });
  const { issues } = inspectBuild(root);
  assert.equal(issues.length, 2);
  assert.ok(issues.some((issue) => issue.includes('IDs duplicados')));
  assert.ok(issues.some((issue) => issue.includes('imagem-ausente.webp')));
});

test('informa URL malformada e tentativa de sair da pasta pública sem interromper a auditoria', (t) => {
  const root = fixture(t, {
    'index.html':
      '<a href="/%zz#id">Inválida</a><img src="../fora.webp"><img src="/%2e%2e/fora.webp"><a href="#outro">Ausente</a>',
  });
  const { issues } = inspectBuild(root);
  assert.equal(issues.length, 4);
  assert.ok(issues.some((issue) => issue.includes('codificação inválida')));
  assert.ok(issues.some((issue) => issue.includes('sai da pasta pública')));
  assert.ok(issues.some((issue) => issue.includes('#outro')));
});
