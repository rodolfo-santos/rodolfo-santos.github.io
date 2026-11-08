# Plano de execução: portfólio para recrutadores

Estado: reconciliação T00 concluída por revisão interna; implementação pendente. Data: 08/11/2026.

## Objetivo e referências

Elevar a clareza, a leitura rápida e a demonstração de impacto do portfólio, preservando a identidade visual e a amplitude profissional de Rodolfo. O resultado deve permitir entender o papel atual, os tipos de oportunidade de interesse, a contribuição pessoal e como iniciar uma conversa.

Entradas versionadas: [AGENTS.md](../../AGENTS.md), [HARNESS.md](../../HARNESS.md), [estado](../../docs/ESTADO.md), [spec](spec.md) e [preferências](preferencias.md). Antes da implementação, o orquestrador deve conferir coerência entre esses documentos e este plano. A aprovação editorial das specs não significa nota 10, revisão no navegador ou autorização de publicação de documentos privados.

A avaliação original em `reports/audit-2026-11-07/AVALIACAO-RH.md` é consulta local opcional: reports é ignorado pelo Git e não estará disponível num clone público. Este plano preserva a baseline e os achados operacionais necessários para execução, sem depender desse arquivo.

A avaliação de referência é a versão `f6d620b`. O estado histórico dos documentos não substitui conferir o checkout e o artefato efetivamente testados.

Achados de referência: headline ampla sem distinguir cargo atual de objetivo; impacto financeiro confirmado pouco imediato; percurso longo e CTA inicial voltado à galeria; decisões dos casos nem sempre explicam restrição e efeito; sobreposições no retrato e rótulos pequenos; ausência de resumo público encaminhável; sitemap ausente, CSS legado compartilhado e verificação incompleta de fragmentos entre páginas. Havia sete rotas com canonical e conteúdo estático rastreável. Lighthouse e dados de campo não tinham medição válida; as notas da tabela final são editoriais e provisórias. Esses achados orientam os lotes abaixo, sem transformar oportunidades propostas em preferências confirmadas.

## Arquitetura preservada

- Astro estático, TypeScript, CSS próprio e GSAP/ScrollTrigger, com publicação no GitHub Pages.
- Sem backend, banco, login, formulário de coleta, nova plataforma ou dependência remota necessária à leitura.
- Conteúdo publicável em `src/content/`; apresentação em componentes/páginas e CSS; movimento progressivo em `src/scripts/motion.ts`.
- Conteúdo, links, casos e currículo encaminhável acessíveis sem JavaScript. Movimento reduzido mantém a informação e a navegação completas.
- Grafite/violeta, fotografia confirmada, logos contextualizados e produtos reais permanecem. Simplificação deve melhorar hierarquia, sem retirar arbitrariamente a identidade.

## Contratos de colaboração e entrega

Maestri indisponível nesta sessão, com socket não configurado. Delegação é local e transparente; não afirmar criação ou acompanhamento de terminais no canvas.

O orquestrador atribui lotes, controla a posse dos arquivos, integra resultados e concentra Git, checks integrados e publicação. Agentes especializados não fazem commits, push ou deploy. T00 foi concluída por revisão interna em 08/11/2026; T01–T19 permanecem pendentes e só mudam de estado com entrega e evidência correspondente.

Fluxo exclusivamente na main: sem branches, PRs, force push ou bypass de hooks. Após validação, o orquestrador adiciona caminhos explícitos, revisa `git diff --cached`, commita e faz push em `origin main`. Se houver avanço remoto, integra preservando o trabalho recebido e repete os checks afetados. Push e deploy são etapas distintas; o workflow de publicação é manual. Registrar SHA, CI, execução de deploy e URL conferida separadamente.

Posse concorrente: editorial escreve dados; design escreve home e CSS; cases escreve template dos casos e seu CSS; engenharia escreve configuração/scripts/testes. O editorial termina a alteração de `PortfolioBody.astro` antes de transferir esse arquivo ao design, se necessário. O orquestrador resolve qualquer sobreposição antes da escrita. CV possui rota própria. QA não corrige arquivos sob posse de outro agente, registra o problema e devolve ao dono.

## Lotes executáveis

Inventário de estilos conferido em 08/11/2026 com `rg --files src/styles`: `global.css`, `portfolio-v2.css`, `case-study.css` e `project-showcase.css` existem. Arquivos novos ou mudanças de organização devem ser registrados pelo dono antes da implementação.

Rastreabilidade acordada com o dono de `spec.md`: RH-001 posicionamento; RH-002 amplitude; RH-003 impacto/autoria; RH-004 destaques e seis casos; RH-005 cronologia; RH-006 identidade/foto; RH-007 movimento; RH-008 responsividade; RH-009 navegação/contato; RH-010 currículo público; RH-011 privacidade; RH-012 validação/nota; RH-013 SEO/robustez. A seleção de três destaques na home é proposta editorial para L1/L2, preservando acesso aos seis casos. Três destaques, currículo público e triagem de 10–30 segundos são propostas/metas a avaliar, não preferências confirmadas ou resultados medidos.

| Lote                             | Dono especializado                                | Arquivos previstos                                                                                                                                 | Dependências                                                     | Aceite resumido                                                                                                                              | Estado                                    |
| -------------------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| L0: reconciliar requisitos       | Orquestrador                                      | `specs/001-portfolio-recrutadores/{spec,preferencias,plan,tasks}.md`                                                                               | Entregas dos agentes de specs                                    | Requisitos, privacidade, escopo e contratos reconciliados; rubrica preservada                                                                | Concluída em 08/11/2026 (revisão interna) |
| L1: posicionamento RH            | Editorial de carreira/RH                          | `src/content/portfolio.ts`, textos de `src/components/PortfolioBody.astro`, `src/content/case-studies.ts`                                          | L0                                                               | Papel atual distinto de objetivo; valor confirmado na abertura; cronologia e autoria preservadas; texto sem salário/dados privados           | Pendente                                  |
| L2: hero, hierarquia e movimento | Design/frontend                                   | `src/pages/index.astro`, `src/styles/global.css`, `src/styles/portfolio-v2.css`, `src/scripts/motion.ts`; `PortfolioBody.astro` após transferência | L1 para integração; composição pode começar com contrato textual | Hero legível, CTA para prova forte, menos sobreposição no retrato, rótulos confortáveis, movimento progressivo e toque/teclado consistentes  | Pendente                                  |
| L3: casos orientados a impacto   | Editorial de casos + frontend de casos            | `src/content/case-studies.ts` após L1; `src/pages/projetos/[slug].astro`, `src/styles/case-study.css`                                              | L1 e contrato de dados estabilizado                              | Seis casos com problema, contribuição, decisão fundamentada e efeito; detalhes técnicos em segunda leitura; limites de evidência claros      | Pendente                                  |
| L4: currículo público curado     | Editorial de carreira + frontend de conteúdo      | Nova rota `src/pages/curriculo.astro`, dados públicos dedicados em `src/content/`; link integrado pelo dono da home                                | L1 e curadoria de publicação                                     | Resumo encaminhável sem fontes/contatos privados; HTML imprimível; destino real e atual; PDF somente se houver produção e revisão específica | Pendente                                  |
| L5: SEO e manutenção             | Engenharia frontend/qualidade                     | `astro.config.mjs`, gerador estático de sitemap ou rota estática equivalente, `scripts/check-build.mjs`, `tests/`; CSS global após L2              | L0 para SEO/testes; L2 para limpeza CSS                          | Sete rotas atuais e nova rota pública no sitemap; anchors cruzados verificados; CSS legado retirado com prova de não uso; canonical coerente | Pendente                                  |
| L6: QA e avaliação               | QA/acessibilidade/performance + revisor editorial | Evidências e relatórios locais em `reports/`; síntese em `docs/ESTADO.md` pelo orquestrador                                                        | L2, L3, L4 e L5 integrados                                       | Matriz de viewport/estados, privacidade, verify/harness e medições registradas; reavaliação com pesos congelados e limitações                | Pendente                                  |
| L7: entrega na main e publicação | Orquestrador                                      | Arquivos explicitamente revisados; `docs/ESTADO.md`                                                                                                | L6 e correções necessárias                                       | Commit/push main, CI confirmado; deploy separado quando executado e validação pública por URL/SHA                                            | Pendente                                  |

Os caminhos novos são propostas concretas de implementação, não arquivos já existentes ou entregas concluídas. O dono deve registrar ajustes proporcionais antes de ampliar o escopo.

## Estratégia editorial e de privacidade

Abrir com nível, especialidade e valor confirmado, preservando Payments Engineering Manager como cargo ocupado. O objetivo Staff/Sênior/gestão não deve aparecer como cargo histórico. A automação de grande parte da consolidação e carga manual do Financeiro é um efeito qualitativo sustentado; não criar percentual, economia ou janela temporal inexistente.

Cada caso deve explicar a restrição que motivou a escolha quando sustentada por fonte, ou registrar lacuna editorial quando não confirmada, e preservar o efeito observado sustentado. Se a motivação não tiver fonte, registrar lacuna editorial e usar apenas o que pode ser sustentado. Distinguir construção individual, construção com assistência de IA, gestão da construção, responsabilidade atual e validação com provedor simulado.

T00 ativou três destaques e HTML de currículo curado como decisões editoriais revisáveis na implementação, sem tratá-los como preferências confirmadas ou exigir questionário adicional ao titular. Se o currículo for adiado por decisão registrada do orquestrador, T07/T08 ficam não aplicáveis; sitemap, metadados, matriz de rotas e QA/Lighthouse excluem a rota não entregue. Nenhum botão ou link pode apontar para currículo inexistente.

Currículo público é artefato novo e curado. Um currículo privado já existente não recebe autorização automática para publicação. Selecionar apenas conteúdo publicável revisado; excluir salário, telefone/endereço não destinados a publicação, dados de candidatura, fontes internas e links privados. PDF opcional não deve atrasar um HTML imprimível útil; caso produzido, revisar todas as páginas e seus metadados antes de disponibilizar.

`npm run privacy` é heurístico: revisão humana de textos, imagens, OCR visível e metadados continua necessária. Não fazer nova coleta AWS ou acessar fontes privadas indiscriminadamente para preencher lacunas.

## Validação e condições de medição

### Interface e acessibilidade

Inspecionar home, os seis casos e currículo público em 360, 390, 768, 1280 e 1440 px. Registrar altura do viewport, navegador/versão, sistema, URL e SHA. Verificar legibilidade, ausência de overflow, preservação de imagens e alvos de toque confortáveis (44 px como alvo de projeto). Não confundir esse alvo com o mínimo de 24 px de determinados critérios WCAG.

Exercitar teclado completo, skip link, menu, Escape, ordem/foco visível, links e retorno aos projetos; conferir âncoras sem cobertura. Verificar zoom de 200%, redução de movimento do sistema e controle local, e nova navegação com JavaScript desabilitado. Leitor de tela: registrar ferramenta/versão e percursos efetivamente realizados. Automatização não substitui esses percursos.

### Comandos e evidência técnica

Executar `npm run privacy`, `npm run verify` e `npm run harness` no estado integrado. Registrar versão do Node, harness-score, SHA, resultados e falhas corrigidas. Não duplicar checks sem mudança ou dúvida nova. Atualizar o teste de build para fragmentos cruzados e comprovar com caso válido e destino inexistente. Nenhuma pontuação de harness entra na nota visual/RH.

### Lighthouse

Realizar três execuções por condição definida, com a mesma URL, SHA, versão do Lighthouse/Chrome, dispositivo/emulação, viewport/DPR, throttle de CPU/rede, estado de cache, modo de navegação e ambiente de hospedagem. Proposta mínima: home mobile e desktop; repetir condição móvel para um caso com imagem, o caso fiscal e a rota de currículo. Não misturar localhost com domínio público na mesma série. Registrar horário, hardware/SO e interferências relevantes; repetir uma série comprometida em vez de selecionar o melhor resultado.

Salvar relatórios brutos e apresentar mediana por métrica/nota de cada condição com as três observações. LCP, CLS e TBT de laboratório são diagnósticos; TBT não é INP. Não inferir INP, dados CrUX/RUM, aprovação WCAG ou ranking a partir de Lighthouse. Objetivos LCP ≤2,5 s e CLS ≤0,1 são metas de diagnóstico; INP ≤200 ms exige medição representativa própria. Quota/erro/ferramenta indisponível deixa medição pendente, sem nota fabricada.

| Condição               | Execução 1 | Execução 2 | Execução 3 | Mediana  | Estado   |
| ---------------------- | ---------- | ---------- | ---------- | -------- | -------- |
| Home mobile            | Não medida | Não medida | Não medida | Pendente | Pendente |
| Home desktop           | Não medida | Não medida | Não medida | Pendente | Pendente |
| Caso com imagem mobile | Não medida | Não medida | Não medida | Pendente | Pendente |
| Caso fiscal mobile     | Não medida | Não medida | Não medida | Pendente | Pendente |
| Currículo mobile       | Não medida | Não medida | Não medida | Pendente | Pendente |

### Pessoas reais

Teste somente com participantes disponíveis que aceitem participar; não contatar recrutadores, enviar mensagens ou recrutar pessoas sem autorização específica. Propor tarefas de identificar cargo atual, tipo de oportunidade, contribuição e caminho para contato/encaminhamento. Registrar protocolo, tamanho e perfil da amostra, observações anonimizadas e limites. Sem participantes, registrar pendência; a heurística de 10–30 segundos não vira tempo de compreensão medido.

## Rubrica congelada e conclusão

| Critério                            | Peso | Baseline provisória |
| ----------------------------------- | ---- | ------------------- |
| Clareza de posicionamento e encaixe | 20%  | 7,0                 |
| Leitura rápida e hierarquia         | 20%  | 7,0                 |
| Casos e provas de impacto           | 20%  | 7,5                 |
| Design visual e confiança           | 15%  | 7,8                 |
| Leitura no celular                  | 5%   | 7,7                 |
| Caminho para contato/contratação    | 10%  | 7,5                 |
| SEO técnico                         | 5%   | 8,5                 |
| Confiabilidade técnica              | 5%   | 8,0                 |

Baseline ponderada: **7,43/10**, provisória, versão f6d620b. Reavaliar a versão integrada com os mesmos critérios e pesos, justificando cada alteração com evidência e separando autoavaliação de revisão externa. Harness de referência: **103/105**, não nota visual ou RH. Nota 10 é objetivo, nunca consequência automática da execução da lista. Pendências materiais impedem declarar o escopo excepcionalmente atendido; limitações de medição devem permanecer explícitas.
