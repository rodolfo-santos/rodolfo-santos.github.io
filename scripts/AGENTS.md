---
description: Invariantes dos checks e hooks do harness.
paths:
  - 'scripts/**'
  - 'tests/**'
---

# Harness executável

Scripts devem rodar offline depois de npm ci. Use execFile/spawn com arrays de argumentos; não construir shell a partir de nomes de arquivo, payload de hook ou mensagem do usuário.

Privacidade no pre-commit lê blobs do índice, não apenas arquivos do disco. Não imprimir conteúdo suspeito. Verificação de push mantém main:main e histórico fast-forward. Hooks Claude não concedem permissão nem substituem sandbox ou revisão de conteúdo.

Teste caminhos de recusa e de sucesso com fixtures isoladas. Não criar teste que só procura palavras em instruções ou configuração. Não exigir PR para executar nenhum comando.
