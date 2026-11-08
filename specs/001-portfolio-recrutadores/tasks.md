# Tarefas: portfólio para recrutadores

Data: 08/11/2026. **T00 concluída; T01–T10/T12 implementadas com validação parcial; T11/T13/T17 parciais; T14–T16 e T18–T19 pendentes**. Estados atualizados em 08/11/2026; código implementado não equivale a aceite visual, nova nota ou deploy. Execução técnica e contratos detalhados em `plan.md`.

## Estado da implementação em 08/11/2026

| Tarefas      | Estado real                                                                          |
| ------------ | ------------------------------------------------------------------------------------ |
| T00          | Revisão interna concluída                                                            |
| T01–T10, T12 | Implementadas; validação parcial por fonte e build, sem aceite visual/interativo     |
| T11          | Inventário e limpeza CSS realizados; comparação visual pendente                      |
| T13          | Revisão editorial estática realizada; inspeção integral de mídia e execução pendente |
| T14          | Pendente: CUA nativo e host de navegador indisponíveis                               |
| T15–T16      | Pendentes: nenhum Lighthouse novo e nenhum participante de RH                        |
| T17          | Verify e harness aprovados na árvore de código; nota e revisão visual pendentes      |
| T18          | Orquestrador prepara commit/push e conferência do CI; envio ainda não registrado     |
| T19          | Deploy desta implementação não executado                                             |

Os aceites ainda incompletos permanecem sem checkbox de conclusão integral. Node 24.14.1: verify aprovado, 15 testes, oito páginas e sitemap; harness-score 1.8.4, L4, 103/105 (98%). A documentação foi atualizada depois desses checks. Baseline **7,43/10** preservada, sem nova nota. Limitações e evidências em [IMPLEMENTACAO-RH.md](../../docs/IMPLEMENTACAO-RH.md).

## Regras de execução

Somente main, commit e push sem PR nem branches. O orquestrador concentra Git e deploy; especialistas entregam alterações em arquivos atribuídos. Maestri está indisponível (socket não configurado); usar delegação local explícita. Transferir posse antes de dois agentes editarem o mesmo arquivo. Não modificar critérios/pesos para produzir nota maior.

## L0: contrato de implementação

Rastreabilidade com os requisitos de `spec.md`:

| Requisito                                     | Tarefas                      |
| --------------------------------------------- | ---------------------------- |
| RH-001: posicionamento e cargo/objetivo       | T01, T03, T13                |
| RH-002: amplitude                             | T02, T05, T13                |
| RH-003: impacto e autoria                     | T02, T05, T06, T13           |
| RH-004: três destaques propostos e seis casos | T02, T03, T05, T06           |
| RH-005: cronologia                            | T02, T07, T13                |
| RH-006: identidade e foto                     | T03, T13, T14                |
| RH-007: movimento                             | T04, T14                     |
| RH-008: responsividade e leitura              | T03, T06, T08, T14           |
| RH-009: navegação e contato                   | T03, T06, T08, T10, T14      |
| RH-010: currículo público curado proposto     | T07, T08, T13                |
| RH-011: privacidade                           | T07, T13, T17, T18           |
| RH-012: validação e nota                      | T00, T14, T15, T16, T17      |
| RH-013: SEO e robustez                        | T09, T10, T11, T12, T17, T19 |

A seleção de três destaques, a triagem de 10–30 segundos e o currículo público são propostas editoriais/metas de produto. T00 registrou decisões editoriais revisáveis para implementação; não tratá-los como preferência confirmada ou teste já realizado.

- [x] **T00, concluída em 08/11/2026 por revisão interna.** Dono: orquestrador. Arquivos: `spec.md`, `preferencias.md`, `plan.md`, `tasks.md` deste diretório. Dependências: entrega dos documentos paralelos. Aceite: resolver divergências de requisitos, fixar escopo e donos; preservar baseline 7,43 e distinguir papel atual/objetivo/publicação. Registrar decisão editorial sem alegar teste no navegador. Evidência: reconciliação de RH-001–RH-013 entre spec/preferências/plano/tarefas, com baseline e contratos preservados. Três destaques e HTML de currículo curado ativados como decisões editoriais revisáveis na implementação, sem questionário adicional ao titular e sem presumir documento privado publicável. Não houve implementação, teste com usuários ou validação no navegador desta etapa.

## L1: conteúdo orientado à triagem

- [ ] **T01, implementada em 08/11/2026; validação parcial por fonte e build.** Dono: editorial RH/carreira. Arquivos: `src/content/portfolio.ts`. Dependência: T00. Aceite: nome, cargo atual e proposta de valor compreensíveis na abertura; oportunidades Staff/Sênior/gestão identificadas como objetivo; sem cargo histórico alterado, salário ou métrica criada. Texto aprovado pelo revisor editorial para implementação.
- [ ] **T02, implementada em 08/11/2026; validação parcial por fonte e build.** Dono: editorial RH/carreira. Arquivos: `src/components/PortfolioBody.astro`, conteúdo de `src/content/case-studies.ts`. Dependência: T01. Aceite: hierarquia prioriza transformação financeira, evita repetições e mantém amplitude backend/web/financeiro/operação/pessoas/IA e cronologia. Registrar fontes no acervo privado sem copiá-las ao repositório público. Transferir posse de PortfolioBody ao design e de case-studies ao dono de casos ao concluir.

## L2: hero, design e movimento

- [ ] **T03, implementada em 08/11/2026; validação parcial por fonte e build.** Dono: design/frontend. Arquivos: `src/pages/index.astro`, `src/styles/global.css`, `src/styles/portfolio-v2.css`; PortfolioBody após transferência. Dependências: T01–T02. Aceite: CTA inicial chega à prova principal de impacto, sem remover acesso à galeria; menos sobreposição sobre foto, metadados legíveis, contato orientado a oportunidades. Grafite/violeta e imagens reais preservados. Capturas de composição em 390/1440 antes de expandir alterações.
- [ ] **T04, implementada em 08/11/2026; validação parcial por fonte e build.** Dono: frontend/motion. Arquivos: `src/scripts/motion.ts`, CSS e marcação sob posse do design. Dependência: T03. Aceite: rolagem nativa, sem bloqueio de conteúdo, efeitos progressivos pertinentes; reduced motion do sistema e controle local funcionais; menu/controles com área confortável, teclado e foco visível. Registrar teste real, incluindo ausência de JS, antes de dizer validado.

## L3: casos com prova e profundidade

- [ ] **T05, implementada em 08/11/2026; validação parcial por fonte e build.** Dono: editorial de casos. Arquivo: `src/content/case-studies.ts`. Dependência: T02 e transferência da posse. Aceite: seis casos explicitam problema, contribuição pessoal, motivo da decisão sustentado por fonte ou lacuna editorial registrada quando não confirmado, e efeito sustentado; nunca preencher a motivação por inferência inventada; sem percentuais inventados; limitações permanecem. Caso fiscal distingue validação com provedor simulado de operação em produção; arquitetura contábil distingue gestão/decisão de implementação individual.
- [ ] **T06, implementada em 08/11/2026; validação parcial por fonte e build.** Dono: frontend de casos. Arquivos: `src/pages/projetos/[slug].astro`, `src/styles/case-study.css`. Dependência: T05. Aceite: síntese de negócio antes da profundidade técnica, navegação por capítulos e próximo caso preservadas; imagens/legendas honestas e diagrama fiscal legíveis; seis URLs com conteúdo sem JS, foco e retorno aos projetos válidos.

## L4: currículo público para encaminhamento

Ativado em T00 como decisão editorial revisável: produzir HTML curado. Se a curadoria tornar esse escopo inadequado, o orquestrador registra o adiamento e marca T07/T08 como não aplicáveis, sem exigir novo questionário. T09/T12/T14/T15 e as listas de rotas passam a cobrir somente as páginas efetivamente entregues; não renderizar botão, link ou entrada de sitemap para currículo inexistente.

- [ ] **T07, implementada em 08/11/2026; validação parcial por fonte e build.** Dono: editorial de carreira. Arquivos: novo conteúdo curado em `src/content/`, somente dados destinados a publicação. Dependência: T01–T02. Aceite: selecionar resumo, experiências e formação pertinentes; revisão factual, cronológica e de privacidade. Não copiar currículo privado como se a publicação já estivesse autorizada; separar lacunas e revisar conteúdo final publicável antes da integração.
- [ ] **T08, implementada em 08/11/2026; validação parcial por fonte e build.** Dono: frontend de conteúdo. Arquivos: `src/pages/curriculo.astro` e CSS necessário com posse combinada; link da home integrado pelo dono da home. Dependência: T07. Aceite: HTML imprimível e encaminhável, CTA descritivo com destino real, conteúdo completo sem JS; sem documentos internos. Se PDF for incluído, produzir e revisar todas as páginas/metadados antes de publicar; caso contrário, entregar HTML sem link de PDF fictício.

## L5: SEO e manutenção

- [ ] **T09, implementada em 08/11/2026; validação parcial por fonte e build.** Dono: engenharia frontend. Arquivos: `astro.config.mjs` e gerador/rota estática de sitemap escolhido. Dependência: T00; T08 antes da lista final. Aceite: sitemap XML com home, seis casos e currículo público, URLs canônicas absolutas corretas; geração reproduzível no build. robots.txt opcional; sua ausência isolada não é bloqueio de rastreamento. Não criar WebMCP/llms.txt para pontuar.
- [ ] **T10, implementada em 08/11/2026; validação parcial por fonte e build.** Dono: engenharia de qualidade. Arquivos: `scripts/check-build.mjs`, testes direcionados em `tests/`. Dependência: T00. Aceite: verificar fragmentos de outra página e preservar verificação de assets/IDs; testes significativos com fragmento válido, inexistente e URL local com query, sem acessar destinos externos indiscriminadamente.
- [ ] **T11, parcial em 08/11/2026: inventário e limpeza em código; comparação visual pendente.** Dono: engenharia frontend, após transferência do design. Arquivos: `src/styles/global.css` e componentes legados comprovadamente sem uso. Dependência: T03–T04. Aceite: inventariar seletores e classes dinâmicas, remover apenas legado confirmado, comparar home/seis casos/currículo antes/depois nos viewports. Registrar bytes antes/depois sem chamar redução de bytes de ganho de LCP medido. Preservar resets, fontes, skip link, foco e reduced motion.
- [ ] **T12, implementada em 08/11/2026; validação parcial por fonte e build.** Dono: engenharia frontend com integração do orquestrador. Arquivos: cabeçalhos SEO em index/casos/currículo ou componente Head compartilhado. Dependências: T06, T08 e liberação dos templates pelos donos. Aceite: title/description/canonical e socialmeta próprios e coerentes; Person factual na home; evitar duplicação e ausência de metadados na rota nova. Schema adicional somente se representar o conteúdo, sem promessa de rich results.

## L6: QA com evidência

- [ ] **T13, parcial em 08/11/2026: revisão editorial estática realizada; inspeção visual/mídia integral pendente.** Dono: QA/editorial. Arquivos: relatórios/evidências locais. Dependências: T04, T06, T08–T12. Aceite: revisar fatos, atribuição, cronologia, links externos e conteúdo publicável de todas as rotas. Conferir texto visível em imagens e metadados dos derivados; privacy não faz OCR nem valida autorização. Sem copiar originais privados, fontes internas ou valores de remuneração.
- [ ] **T14, pendente: navegador indisponível nesta sessão.** Dono: QA de interface/acessibilidade. Arquivos: relatórios/evidências locais. Dependências: integração concluída e T13. Aceite: home, seis casos e currículo em **360/390/768/1280/1440 px**; teclado, skip/menu/Escape/foco, âncoras, zoom200%, reduced motion e noJS; registrar ferramentas, estados, falhas e capturas. Leitor de tela com ferramenta/versão registrada; sem ferramenta, declarar pendência. Corrigir falhas materiais pelos donos e repetir apenas verificações afetadas.
- [ ] **T15, pendente: nenhuma nova execução Lighthouse.** Dono: QA de performance. Arquivos: relatórios brutos e resumo local. Dependência: versão integrada estável. Aceite: três execuções Lighthouse por condição do plan, mesmas configurações documentadas; tabela com três valores e mediana de cada métrica/nota, sem escolher melhor rodada. Registrar URL/SHA, versões, hardware, viewport/DPR, cache, throttle e horário. Erro/cota deixa pendente; TBT não representa INP; não inventar CrUX/RUM.
- [ ] **T16, pendente: nenhum participante ou teste com recrutadores.** Dono: revisor editorial/UX. Arquivos: protocolo e observações anonimizadas locais. Dependência: versão integrada; participantes disponíveis. Aceite: teste de compreensão/encaminhamento com pessoas que aceitem participar, amostra e limitações declaradas. Não enviar mensagens nem contatar recrutadores sem autorização. Sem participantes, manter pendência de validação com usuários, distinguindo-a da revisão heurística.
- [ ] **T17, parcial em 08/11/2026: checks técnicos aprovados; validação visual e nova nota pendentes.** Dono: orquestrador + revisor de qualidade. Arquivos: resultados locais e síntese em `docs/ESTADO.md`. Dependências: correções de T13–T15; T16 registrada como realizada ou indisponível. Aceite: `npm run privacy`, `npm run verify`, `npm run harness` aprovados no SHA avaliado; registrar versões e limites. Recalcular nota com pesos congelados, evidências e lacunas, sem converter harness103/105 em nota visual ou prometer 10. Registrar se revisão foi interna/autorrevisão ou externa.

## L7: código e publicação

- [ ] **T18, pendente.** Dono: orquestrador. Arquivos: somente entrega revisada. Dependência: T17 e ausência de pendência material para o escopo declarado. Aceite: main, `git add` explícito, revisão de diff staged/privacidade, commit e push origin main sem PR/branch/force/bypass; CI conferido. Integração remota preserva histórico e alterações de outros.
- [ ] **T19, pendente.** Dono: orquestrador. Arquivos: `docs/ESTADO.md` e registro de evidências de publicação. Dependência: T18 e decisão explícita de executar publicação no escopo autorizado. Aceite: deploy manual separado, execução/URL/SHA registrados, páginas e assets públicos conferidos após publicação; diferenciar código enviado, CI aprovado e site efetivamente publicado. Não declarar sucesso pelo simples push.

## Registro de conclusão

Cada tarefa concluída deve receber data, SHA/artefato, responsável, verificação realizada e limitações. Não marcar como concluída por ter sido delegada ou por existir documento de intenção. Baseline congelada: clareza20%7,0; leitura rápida20%7,0; casos20%7,5; visual15%7,8; mobile5%7,7; contato10%7,5; SEO5%8,5; confiabilidade5%8,0, total **7,43/10 provisório**. Novas notas permanecem pendentes até avaliação da implementação.

## Adendo: tecnologias, entregas, produção e eventos

Direção confirmada em 08/11/2026, PC-10/PC-11. Novos contratos: RH-014 → T20, RH-015 → T21, RH-016 → T22, RH-017 → T23. Todas as tarefas novas estão pendentes; mantêm os gates e responsabilidades anteriores.

- [ ] **T20, pendente.** Donos: curadoria de ativos e frontend, com posse combinada de `src/content/`, `public/images/` e componentes pertinentes. Dependências: conteúdo de T02/T05 e curadoria de marca. Aceite RH-014: logos reais agrupadas por uso confirmado, nomes acessíveis, origem/licença/atribuição registradas, ativos locais otimizados com formatos/bytes; revisar tema escuro, celular e noJS. Não inferir proficiência ou certificação da marca.
- [ ] **T21, pendente.** Donos: editorial/visual e frontend de galeria, sob contrato de posse. Dependências: seleção de entregas e revisão de publicabilidade. Aceite RH-015: snapshots reais pertinentes, origem/data conhecida e contexto de papel/versão, derivados revisados quanto a pixels/metadados e dimensões. Galeria funciona por teclado/toque/noJS; sem operação privada, telas geradas como prova ou placeholders.
- [ ] **T22, pendente.** Donos: pesquisador público e frontend de produtos. Dependências: produtos e destinos candidatos confirmados. Aceite RH-016: verificação externa de URL final, conteúdo, disponibilidade e data registrada; ação de produção distinta do caso, sem URLs privadas/de sessão. Preservar papel e período; verificação indisponível fica pendente. Não executar compras, formulários ou login para validar.
- [ ] **T23, pendente.** Donos: editorial de carreira e frontend. Dependências: recuperação do acervo de palestras/eventos e curadoria da mídia. Aceite RH-017: seção visual com conteúdos confirmados, papel palestrante/participante explícito, tema/data sem inferências, fotos e links publicáveis quando disponíveis; pedir complemento ao titular um item por vez e não publicar placeholders. Validar celular, teclado, movimento reduzido e noJS.

T04/RH-007 preserva dinamismo perceptível no percurso padrão e resposta à interação, com revisão real em navegador. T20–T23 não significam preenchimento decorativo; informação de contratação e leitura por RH continuam prioritárias. Integrar esses lotes à revisão T13–T17 e registrar limitações antes dos gates de publicação existentes.
