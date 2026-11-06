# Avaliação do harness

Executada em 06/11/2026 com harness-score 1.8.4, escopo somente deste repositório, sem incluir configuração pessoal ou de sistema.

| Dimensão            |            Antes |            Depois |
| ------------------- | ---------------: | ----------------: |
| Contexto e guias    |             6/20 |             20/20 |
| Skills e comandos   |             0/17 |             17/17 |
| Hooks e guardrails  |             0/14 |             14/14 |
| Sensores e feedback |             0/20 |             20/20 |
| Feedback de CI      |             0/14 |             14/14 |
| Higiene e segurança |            13/20 |             18/20 |
| Total               | 19/105 (18%), L0 | 103/105 (98%), L4 |

O item não atendido é HYG-05: licença do código ainda não definida. Não foi adicionada uma licença de distribuição por conveniência da nota. O check de credenciais MCP não é aplicável, pois o projeto não tem configuração MCP.

## Evidência de execução

O comando npm run verify passou: privacidade, lint, formatação, tipos, dez testes comportamentais e build estático. As duas skills locais passaram no validador oficial de skills. O hook de edição foi exercitado em processos isolados, incluindo payload inválido e symlink para fora do projeto. O feedback de formatação foi testado sem alterar o arquivo. Os testes do scanner confirmaram que corrigir apenas o arquivo de trabalho não esconde um segredo ainda staged. O pre-push também foi testado contra divergência entre checkout e HEAD.

O feedback de formatação e o hook pre-push fazem parte da configuração versionada. Os hooks específicos do Claude foram testados por seus scripts, não por uma sessão real do Claude Code. O Codex usa comandos e hooks do Git. O CI precisa ter sua execução confirmada após o push; o estado observado é registrado em ESTADO.md.

## Reproduzir

```sh
npm ci
npm run verify
npm run harness
npm run harness:report
```

O último comando grava reports/harness.json e reports/harness.md, ignorados pelo Git; o CI também guarda os relatórios como artefato. A dependência do scanner é fixada no lockfile. As medições iniciais foram preservadas em registro privado de preparação, sem exportar os caminhos do computador para este documento.

L4 é a classificação estrutural do scanner, não uma certificação de segurança ou aprovação do portfólio. Ainda faltam composição visual, fotos selecionadas, interações reais, testes de navegador correspondentes e publicação da apresentação final. Não há exigência de PR: os checks funcionam com commit e push direto na main.
