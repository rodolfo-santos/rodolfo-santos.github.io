# Instruções do portfólio

## Entrada

Portfólio pessoal de Rodolfo dos Santos, em pt-BR, estático e destinado ao GitHub Pages.
Leia HARNESS.md para operar e docs/ESTADO.md para retomar a entrega atual.
Leia docs/PLANO.md e docs/REFERENCIAS.md antes de implementar a apresentação.
O harness prepara a construção; a página inicial atual é apenas uma base de desenvolvimento.

## Git: direto na main

Preferência explícita do titular em 06/11/2026: trabalhar na main, fazer commit e push diretamente.
Não abrir PR, não criar branch de feature e não pedir aprovação de PR como etapa habitual.
Validar antes do push. Usar git add com caminhos explícitos e revisar git diff --cached.
Não usar force push, apagar histórico ou contornar hooks com --no-verify.
Se origin/main avançar, integrar sem sobrescrever trabalho alheio e repetir os checks afetados.
Push de código e publicação do site são ações distintas; o deploy tem comando manual no GitHub Actions.

## Comandos

- npm ci: instala versões do lockfile e ativa os hooks locais de Git.
- npm run dev: abre o ambiente Astro de desenvolvimento.
- npm run format: formata arquivos; revisar o diff depois.
- npm run verify: privacidade, lint, formatação, tipos, testes e build.
- npm run harness: executa harness-score, exigindo pelo menos L3.
- npm run harness:report: grava JSON e Markdown em reports/ (ignorados pelo Git).
- npm run preview: serve o build estático em localhost.

## Arquitetura e qualidade

Astro estático, CSS próprio, TypeScript estrito e GSAP/ScrollTrigger.
src/ contém a interface; scripts/ e tests/ mantêm o harness executável.
.agents/skills/ contém procedimentos específicos e portáveis deste projeto.
Não introduzir servidor, banco, login ou integrações remotas sem necessidade do produto.
Preservar grafite, violeta luminoso, fotografia real, profundidade e movimento ligado à rolagem.
Conteúdo legível sem JavaScript; respeitar prefers-reduced-motion e navegação por teclado.
Não usar scroll hijacking, carregamento bloqueante, flashes ou efeitos que prejudiquem o celular.
Mudança visual exige inspeção de desktop/mobile e evidência real antes de declarar revisão visual.

## Conteúdo e privacidade

Somente conteúdo preparado para publicação entra neste repositório público.
Não copiar acervo de carreira, notas de candidatura, pretensão salarial, fontes internas ou URLs privadas.
Diagramas são conceituais; preservar contribuição pessoal, cronologia e limites de autoria.
Métricas e depoimentos exigem comprovação; não inventar contadores para decorar a página.
Fotos originais, candidatos e fontes ficam fora do repositório; publicar só derivados finais confirmados, sem metadados pessoais.
Não atribuir identidade por comparação facial. Não publicar foto cuja pessoa retratada ainda não foi confirmada.

## Encerramento e recuperação

Atualizar docs/ESTADO.md com entrega, validação, limitações e próximo passo concreto.
Só declarar testes, nota, revisão visual ou deploy depois de verificar o resultado correspondente.
Registrar falhas reais em docs/APRENDIZADOS.md, com correção e prevenção proporcionais.
Não inflar a nota do scanner com testes vazios, configurações sem uso ou integração fictícia.
