# Portfólio para recrutadores e RH

Status: especificação proposta, 08/11/2026. Não implementada nem validada com recrutadores por este documento. Público principal confirmado: recrutadores e profissionais de RH. Preferências, propostas e decisões técnicas estão separadas em [preferencias.md](preferencias.md).

## Problema e resultado esperado

A apresentação atual mostra trabalho real, mas exige exploração para entender nível profissional, contribuição própria e valor para o negócio. A próxima versão deve ajudar o visitante a identificar quem é Rodolfo, a que oportunidades seu perfil pode se adequar, o que construiu e como iniciar uma conversa.

A avaliação editorial de 07/11/2026 atribuiu 7,4/10 ao conjunto para esse público, com limitações registradas. A meta de excelência orienta a revisão; não existe nota 10 adquirida por aprovar esta especificação, executar o harness ou concluir o build.

## Escopo e percurso propostos

1. Abertura: identidade, cargo atual, proposta de valor e acesso a contato.
2. Encaixe profissional: oportunidades de engenharia Sênior/Staff e gestão, sem confundi-las com cargos simultâneos.
3. Três destaques de negócio para leitura breve, preservando os seis casos completos.
4. Produtos reais, amplitude de competências, liderança e trajetória.
5. Contato e, depois da curadoria necessária, currículo público encaminhável.

Essa ordem e o cenário de leitura em 10 a 30 segundos são propostas editoriais. Não são preferências confirmadas de layout nem resultados de teste com pessoas.

## Requisitos e critérios de aceite

### RH-001: identidade, cargo e encaixe profissional

Prioridade: essencial. Apresentar nome, cargo atual Payments Engineering Manager na Qeevo Group e uma explicação curta em português da combinação de liderança, arquitetura e implementação. Separar claramente a atuação atual do possível encaixe em oportunidades Sênior, Staff e gestão. O nível Staff também integra a trajetória histórica, com período próprio.

Aceite:

- O HTML contém o cargo atual e o empregador correto, separados de texto explicitamente apresentado como oportunidades de interesse ou encaixe.
- A headline e o apoio permitem identificar liderança de engenharia, construção técnica e domínio de pagamentos/produtos, sem depender de uma enumeração de palavras abstratas.
- Em 360 × 800 e 390 × 844 px, na configuração padrão de texto, nome, cargo, proposta curta e ação de contato aparecem na primeira tela; a fotografia pode continuar abaixo dela.
- Em zoom de 200% o conteúdo permanece acessível por rolagem, sem cortes. O critério de primeira tela não obriga reduzir fontes para acomodar zoom.
- Objetivo profissional não aparece em metadados estruturados ou na cronologia como cargo já ocupado.

### RH-002: amplitude profissional

Prioridade: essencial. Preservar engenharia full stack, arquitetura distribuída, pagamentos e operações financeiras, produtos web, qualidade/operação, liderança/ensino e engenharia com IA. IA complementa a identidade profissional e não substitui os demais eixos.

Aceite:

- Cada eixo é recuperável na home ou por um link descritivo da home para conteúdo específico.
- Pagamentos incluem responsabilidades posteriores à aprovação; frontend inclui construção de produto e experiência de uso, não somente uma lista de ferramentas.
- Liderança inclui atuação sobre pessoas e decisões, sem apagar implementação direta; ensino e trajetória anterior continuam acessíveis.
- Nenhum caso recente ou linguagem ocupa sozinho o resumo de toda a carreira. O texto de apresentação usa parágrafos legíveis, alinhados à esquerda.
- Quando houver duração, “mais de dez anos” se refere à trajetória em tecnologia; não representa esse mesmo período inteiro em pagamentos ou engenharia de produto.

### RH-003: impacto e contribuição antes do mecanismo

Prioridade: essencial. Apresentar necessidade, ação pessoal, resultado ou capacidade habilitada antes de stack e detalhe técnico. Diferenciar construção, evolução, participação e gestão da construção.

Aceite:

- Todo destaque começa com problema e efeito compreensíveis fora da engenharia e identifica o papel de Rodolfo.
- A automação financeira preserva o resultado qualitativo confirmado: grande parte da consolidação e da carga antes manuais passou a ser automatizada. Não afirma eliminação total da intervenção humana.
- Termos como CMS, ERP e Protheus recebem explicação funcional na primeira ocorrência relevante ao percurso breve; o visitante não precisa conhecer uma sigla para entender o benefício.
- Decisões apresentam motivo ou restrição somente quando sustentados. Onde falta motivo confirmado, descrevem a construção sem inventar uma alternativa rejeitada.
- Métrica só é usada após revisão de unidade, período, escopo, origem e atribuição. A ausência de métrica não elimina uma realização confirmada.

### RH-004: três destaques propostos e seis casos preservados

Prioridade: essencial para o desenho proposto, seleção editorial ainda revisável. Apresentar uma camada breve com três destaques que mostrem capacidades diferentes:

| Destaque proposto                      | Problema e valor a comunicar                                                                                        | Aprofundamento preservado                       |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Automação da operação financeira       | Conectar pagamentos e dados financeiros, automatizando grande parte da consolidação e da carga no sistema de gestão | Arquitetura financeira; conciliação e controles |
| Plataforma de publicação institucional | Construir uma base e gestão de conteúdo para publicar sites de diferentes instituições                              | Plataforma de publicação, com imagens reais     |
| Marketplaces e jornada de compra       | Construir descoberta de ofertas, busca e experiência de compra, com SEO e desempenho                                | Marketplaces e busca                            |

Aceite:

- Os três destaques trazem uma síntese de problema, contribuição e efeito/capacidade habilitada, com link para o caso correspondente.
- Os seis casos continuam navegáveis: arquitetura financeira, orquestração de pagamentos, publicação institucional, marketplaces/busca, serviço fiscal em Go e conciliação/rastreabilidade.
- Casos não destacados não são apagados, escondidos apenas por JavaScript ou tratados como menos relevantes à carreira.
- As URLs existentes continuam válidas; alterações de endereço exigem preservar o destino anterior.
- Publicação institucional e orquestrador de pagamentos situam a construção na etapa de Engineering Manager da Quero Educação, separada de evolução posterior.
- O serviço fiscal preserva construção individual com assistência de IA e validação com provedor simulado; não recebe alegação de escala ou homologação real não demonstrada.

### RH-005: cronologia e autoria

Prioridade: essencial. Preservar Melhor Escola → Quero Educação → Qeevo Group, cargos e períodos. Casos atravessando etapas não são atribuídos integralmente ao emprego atual.

Aceite:

- Melhor Escola distingue Frontend Pleno de Full Stack Sênior; Quero Educação distingue Staff Software Engineer de Engineering Manager; Qeevo apresenta o cargo atual desde 09/2025.
- Construção, evolução e responsabilidade atual são identificadas quando essa diferença altera a compreensão do caso.
- Gestão da construção do Livro Razão, com decisões junto ao responsável de Produto, não se transforma em autoria individual de todo o código.
- Fatos sem alocação temporal confirmada usam formulação transversal; o layout não inventa uma data para preencher a trajetória.

### RH-006: identidade visual e imagens reais

Prioridade: essencial. Manter grafite, violeta vivo confortável, profundidade e fotografia real, com brilho concentrado nos pontos que orientam a atenção. Não substituir o estilo por uma preferência presumida de RH.

Aceite:

- Há uma revisão comparativa de abertura, destaque, galeria e contato em desktop e celular; o tema continua reconhecível.
- A fotografia principal mantém rosto e identidade visíveis, sem cartão ou efeito cobrindo a região do rosto.
- Cargo e proposta não são duplicados em múltiplas etiquetas flutuantes; ornamentos não competem com nome, retrato e ação principal.
- Produtos e palestra usam imagens reais publicáveis, com alt contextual e legenda útil; o papel profissional tem maior prioridade visual que a origem repetida da imagem.
- Interfaces são preservadas sem corte arbitrário; a explicação do projeto independe da leitura de textos pequenos dentro das miniaturas.
- Cores de texto, foco e estados são medidas sobre as superfícies efetivas, buscando WCAG AA: 4,5:1 para texto comum e 3:1 para texto grande. Gradientes e sobreposições não são aprovados por amostra de cor isolada.

### RH-007: movimento progressivo a serviço da leitura

Prioridade: essencial. Manter movimento ligado à rolagem como melhoria progressiva. A narrativa e os efeitos devem orientar o visitante, respeitando controle e conforto.

Aceite:

- Rolagem nativa, sem captura da roda/toque, travamento longo de seções no celular, flashes ou carregador que bloqueie conteúdo.
- Sem JavaScript, conteúdo essencial, imagens e links continuam disponíveis.
- Com `prefers-reduced-motion: reduce`, não há parallax, órbitas contínuas ou fixação que dependa de movimento; texto e navegação continuam completos.
- Transições não atrasam o acesso a um bloco alcançado por âncora ou teclado. Cada efeito remanescente tem finalidade registrada na revisão: entrada, orientação, progresso ou resposta a uma ação.
- Elementos decorativos ficam fora da árvore de acessibilidade; informação significativa não depende apenas da animação.

### RH-008: leitura, responsividade e ritmo

Prioridade: essencial. Manter composição legível de 360 a 1440 px, reduzindo pequenos rótulos, espaços acumulados e repetição que prolonguem a triagem.

Aceite:

- Inspecionar 360, 390, 768, 1280 e 1440 px: sem sobreposição de texto, corte de ações ou rolagem horizontal causada pela página.
- Corpo de leitura com pelo menos 16 px; papel, datas e informações auxiliares relevantes com pelo menos 13 px. Ornamentos sem valor informativo podem ser removidos, em vez de usar texto minúsculo.
- Parágrafos têm largura controlada, como meta até 80 caracteres por linha em desktop; títulos não deixam uma palavra isolada por quebra evitável nas larguras revisadas.
- Não existem índices numerados em blocos que não representam uma sequência. Cabeçalhos e descrições não repetem a mesma informação em três camadas.
- Intervalos antes/depois de cada seção são inspecionados em conjunto; não há uma tela intermediária vazia decorrente da soma de margens e padding.
- Alvos principais de toque têm pelo menos 44 × 44 px; foco visível e conteúdo ampliado são conferidos no percurso completo.

### RH-009: navegação e contato

Prioridade: essencial. O visitante pode chegar aos destaques, casos, trajetória e conversa com rótulos compreensíveis. LinkedIn permanece como canal profissional existente; não exigir dados privados para completar a experiência.

Aceite:

- A ação de explorar trabalho leva ao conjunto de destaques de negócio, sem pular a prova financeira e aterrissar apenas numa galeria sem contexto.
- Contato profissional é acessível em um clique a partir da primeira tela e do encerramento. O rótulo informa que a conversa ocorre no LinkedIn.
- Todas as âncoras apontam para IDs existentes e deixam o título de destino visível; menu móvel funciona com toque e teclado, informa estado expandido e não bloqueia acesso ao conteúdo.
- Nenhum botão simula envio de mensagem; nenhum canal novo exige formulário, servidor ou publicação de contato privado.

### RH-010: currículo público curado

Prioridade: proposta de apoio à contratação. Preparar um currículo ou resumo público encaminhável, separado dos documentos privados de candidatura. Formato e redação final ainda precisam de curadoria; não são preferência já confirmada do titular.

Aceite para ativar essa proposta:

- Artefato final revisado factual e visualmente, com data de atualização e conteúdo adequado à publicação aberta.
- Não inclui informações privadas, notas de candidatura, origem de evidências ou dados pessoais desnecessários; título atual, trajetória e atuação são coerentes com o site.
- Link identifica formato e ação real; o arquivo abre e permite seleção de texto. Se houver PDF, cada página deve ser inspecionada após renderização.
- Não publicar botão sem arquivo, promessa de download ou documento privado provisório. Enquanto faltar curadoria, marcar este requisito como pendente no acompanhamento, sem declarar a entrega completa desse item.

### RH-011: privacidade e integridade factual

Prioridade: bloqueante de publicação. Somente narrativa e derivados de mídia preparados para publicação entram no repositório público.

Aceite:

- Sem credenciais, caminhos locais, URLs privadas, rastreio do acervo, documentos de candidatura, dados de terceiros ou informações de remuneração.
- Sistemas internos recebem nomes funcionais. Marcas e instituições públicas só aparecem vinculadas a experiências sustentadas.
- Fotos têm identidade confirmada e derivados sem metadados pessoais; não identificar pessoas por comparação facial nem republicar originais privados.
- Nenhum depoimento, contador decorativo, resultado quantitativo ou alegação de produção é criado para aumentar persuasão.
- Revisão humana do conteúdo e mídia complementa o scanner de privacidade; aprovação automática isolada não prova publicação segura.

### RH-012: validação e limites da nota

Prioridade: essencial. Registrar a versão avaliada, evidências reais, testes executados e limitações; separar validação técnica, editorial, visual e com pessoas.

Aceite:

- `npm run verify` e `npm run harness` executados sobre a mudança integrada, sem interpretar o scanner como nota de produto.
- Capturas reais de desktop/celular revisadas, com registro de viewport, versão e data. Teclado, zoom, movimento reduzido e ausência de JavaScript conferidos separadamente.
- Medições de acessibilidade e desempenho só são reportadas quando executadas com ferramenta, condições e resultado registrados. Erro de cota ou ausência de dados não vira nota.
- Rodada exploratória proposta, ainda não realizada: cinco recrutadores/RH veem a versão; após 10 segundos, identificam cargo e especialidade; em até 30 segundos, reconhecem uma contribuição com efeito para o negócio e localizam contato. Meta proposta: pelo menos quatro de cinco em cada tarefa sem ajuda. Registrar respostas, tempo, dificuldades, composição do grupo e limitações da amostra, sem generalizar estatisticamente.
- Se não houver participantes, registrar “validação com RH pendente”; revisão heurística não substitui esse teste nem impede registrar honestamente os checks já concluídos.
- “Nota 10” só pode ser uma avaliação argumentada de versão e escopo definidos. Documentação pronta não significa implementação, teste com pessoas ou deploy concluídos.

### RH-013: robustez e descoberta

Prioridade: baseline técnico. Preservar site estático, rotas e metadados; permitir que a apresentação seja compartilhada e encontrada sem introduzir infraestrutura desnecessária.

Aceite:

- Home e seis casos geram HTML legível com título, descrição, canonical e um h1 próprios; imagens têm dimensões explícitas.
- Links locais e fragmentos entre páginas são verificados no build; destinos profissionais externos são conferidos.
- Sitemap contém as rotas públicas canônicas. Prévia de compartilhamento usa imagem publicável e descrição coerente com a proposta profissional.
- Deploy, quando autorizado como etapa de execução, segue o fluxo existente direto na main e publicação manual após checks. Não criar PR como exigência habitual nem declarar publicação a partir do push.

## Fora do escopo

Não inclui candidatura, envio de mensagens, campanha social, exposição de novos contatos pessoais, pesquisa em contas privadas, coleta de produção ou infraestrutura nova. A criação de specs não autoriza esses trabalhos. Nenhuma nova instalação, alteração de código ou publicação é parte desta entrega documental.

## Dependências e encerramento

Pendências de produto: confirmar a redação de encaixe profissional, revisar a seleção/ordem dos três destaques como proposta, curar o artefato público de currículo e organizar uma eventual rodada com RH. Nenhuma pendência autoriza inventar dados ou apagar realizações sustentadas.

Na implementação, cada requisito deverá receber estado `pendente`, `implementado`, `validado` ou `não aplicável`, acompanhado de evidência pertinente. Um requisito documentalmente descrito continua pendente de execução. Achado material aberto deve aparecer na entrega final com seu efeito e próximo passo.
