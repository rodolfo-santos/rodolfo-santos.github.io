# Harness de desenvolvimento

Entrada independente de provedor para construir este portfólio. As regras do projeto estão em AGENTS.md; o Claude importa o mesmo arquivo por CLAUDE.md.

## Começar

Use Node da .nvmrc e execute:

```sh
npm ci
npm run dev
```

O npm ci também ativa os hooks apenas neste checkout. Não modifica configuração global. Para retomar, leia docs/ESTADO.md, depois o cartão correspondente em docs/IMPLEMENTACAO.md. O site inicial é uma base técnica, não a apresentação final.

## Ciclo de trabalho

1. Confira git status e git branch --show-current. O fluxo autorizado é direto na main.
2. Leia só o contexto do cartão atual. Não carregue acervos privados ou todas as skills sem necessidade.
3. Implemente uma entrega coerente, preservando o design e os fatos públicos.
4. Execute npm run verify e npm run harness. Corrija falhas observadas; não adicione arquivos para simular maturidade.
5. Para interface, inspecione visualmente desktop e celular, teclado, redução de movimento e versão sem JavaScript. O build sozinho não faz essa revisão.
6. Atualize docs/ESTADO.md. Registre em docs/APRENDIZADOS.md apenas uma falha real com prevenção útil.
7. Revise o diff e publique o código diretamente:

```sh
git add <arquivos-da-entrega>
git diff --cached
git commit -m "Descreve a entrega"
git push origin main
```

Não abrir PR nem criar branch de feature. Nunca usar force push ou --no-verify. Não commitar mudanças alheias. Se o remoto avançar, conferir o trabalho recebido e integrar sem apagar histórico.

## Comandos de feedback

| Comando                | Evidência                                                                     |
| ---------------------- | ----------------------------------------------------------------------------- |
| npm run privacy        | Caminhos e conteúdo textual publicável na árvore Git e arquivos não ignorados |
| npm run privacy:staged | Mesmo controle sobre os blobs do índice, antes do commit                      |
| npm run lint           | Problemas em JavaScript/TypeScript pelo Biome                                 |
| npm run format:check   | Formatação de Astro, CSS, Markdown e código pelo Prettier                     |
| npm run typecheck      | Diagnósticos Astro e TypeScript estrito                                       |
| npm test               | Comportamento real das políticas e hooks em processos/fixtures isoladas       |
| npm run build          | Geração do site estático em dist/                                             |
| npm run verify         | Todos os controles anteriores, sem publicar                                   |
| npm run harness        | Scanner harness-score com gate L3, somente este repositório                   |
| npm run harness:report | JSON e Markdown locais, sem LLM nem chamadas remotas do scanner               |

As dependências são fixadas no package-lock.json. Instalação requer rede; os checks locais não consultam contas pessoais. Não incluir --scope user/system na avaliação compartilhável: ela deve funcionar em outro computador.

## Camadas de proteção

O pre-commit examina o índice para capturar segredo já staged mesmo se o arquivo de trabalho tiver sido corrigido. O pre-push permite somente main:main, exige árvore limpa e SHA enviado igual ao HEAD, rejeita exclusão/reescrita de histórico e executa verify mais o gate do scanner. A exigência de árvore limpa impede que uma correção ainda não commitada mascare um erro no código enviado.

Claude Code tem PreToolUse para Write/Edit e PostToolUse para feedback de formatação, definidos em .claude/settings.json. Os scripts são versionados e testáveis; não concedem permissões adicionais. O hook de edição resolve symlinks antes de conferir confinamento. Ele não intercepta Bash nem MCP e não é um sandbox. Codex e outros agentes usam AGENTS.md, os comandos e os hooks do Git; não se presume suporte aos hooks do Claude.

A detecção de segredos é heurística e não faz OCR, auditoria EXIF nem verificação factual. Fotos finais exigem curadoria e limpeza de metadados; testes aprovados não autorizam publicar originais privados.

## Skills e papéis

- .agents/skills/portfolio-feature/SKILL.md: construção de seções e movimento com revisão visual.
- .agents/skills/portfolio-main/SKILL.md: entrega validada por commit/push na main.
- .claude/commands/: entradas curtas de retomada e entrega para Claude Code.
- .claude/agents/portfolio-reviewer.md: revisão independente quando delegação for autorizada.

As skills externas de design/GSAP foram pesquisadas em docs/REFERENCIAS.md. A instalação pessoal não é necessária para build, testes ou scanner. Na falta dessas skills, o plano, os contratos locais e a documentação oficial continuam disponíveis. Não copiar conteúdo licenciado de terceiros sem preservar a licença.

## CI e publicação

ci.yml roda em cada push da main e por disparo manual: privacidade, lint, formatação, tipos, testes, build e harness-score. O relatório fica como artefato da execução. Uma falha no CI não desfaz um commit já enviado; corrigir e enviar novo commit na main. Não configurar regras que exijam PR.

deploy.yml é manual e só publica a main depois de executar novamente os checks. Não dispara automaticamente a página-base. Quando a apresentação estiver revisada, habilitar Pages com fonte GitHub Actions e disparar o workflow. Registrar URL e execução confirmada em docs/ESTADO.md. Não declarar deploy feito por ter enviado código.

## Limites da nota

harness-score é um scanner estático de estrutura, não uma certificação de segurança, qualidade visual ou qualidade de testes. O relatório deve indicar a versão usada, escopo, data e limitações. Não criar configurações de ferramentas que não usamos só para aumentar a pontuação.
