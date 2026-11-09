# Refatoração editorial guiada pela referência em vídeo

Data: 09/11/2026. Estado: primeiro piloto implementado e validado no escopo de
[IMPLEMENTACAO-EDITORIAL.md](../../docs/IMPLEMENTACAO-EDITORIAL.md), com a evolução
completa ainda pendente. Esta spec complementa os requisitos de
[portfólio para recrutadores](../001-portfolio-recrutadores/spec.md) e suas
[preferências confirmadas](../001-portfolio-recrutadores/preferencias.md).

## Intenção e decisão de origem

O titular quer uma apresentação visual, animada e dinâmica próxima da nova
referência audiovisual, que valorize a pessoa, os trabalhos reais e sua trajetória.
O público principal continua sendo recrutadores e RH, com profundidade disponível
para lideranças de engenharia.

O vídeo mostra a conta [echo__builds](https://www.instagram.com/echo__builds/),
uma abertura clara com tipografia grande e retrato central, mudanças para seções
escuras, uma faixa de projetos com profundidade e um encerramento de contato.
A conta exibida não comprova autoria exclusiva do código. O endereço mostrado
é local, não um site de produção identificado.

**Template, repositório correspondente e licença de reutilização não foram
confirmados.** A base desta proposta é uma reconstrução própria por observação,
com conteúdo e ativos de Rodolfo. Se surgir uma fonte utilizável, registrar a
correspondência visual, licença e decisão antes de incorporar código, fontes ou
imagens dela. Uma oferta de código na legenda não equivale a licença.

## Direção visual proposta

Creme e grafite articulam a alternância observada na referência. Violeta preserva
a identidade já solicitada no projeto. Essa combinação e os valores abaixo são
uma proposta da equipe, não cores exatas extraídas do vídeo nem preferência de
paleta confirmada pelo titular.

| Token proposto    | Valor inicial | Aplicação                                |
| ----------------- | ------------- | ---------------------------------------- |
| Papel             | `#F3F0E8`     | Abertura e galeria editorial             |
| Grafite           | `#0B0D12`     | Capítulos de profundidade e contato      |
| Superfície escura | `#171923`     | Camadas funcionais sobre grafite         |
| Violeta           | `#A78BFA`     | Acentos, conexões e resposta à interação |
| Tinta             | `#20222A`     | Texto sobre papel                        |
| Texto claro       | `#F3F1F7`     | Texto sobre grafite                      |

Usar Sora e Manrope locais como ponto de partida, com suas licenças existentes.
A fonte da referência não foi identificada. Tipografia de destaque pode ser
grande e expressiva; textos de leitura permanecem alinhados à esquerda, com
corpo a partir de 16 px e metadados relevantes a partir de 13 px. Contraste de
texto, foco, links e botões precisa ser medido nos estados reais da implementação.

Composição: abertura centrada na pessoa, seguida de uma transformação de negócio;
galeria com imagens reais como principal gesto visual; competências e trajetória
em capítulos próprios; palestra e contato como encerramento humano. Evitar
converter toda a página em uma grade uniforme de cartões.

```text
Abertura clara: nome + cargo + retrato + proposta + contato
Transformação escura: problema → contribuição → efeito
Galeria clara: trabalhos reais + estudo de caso + site público
Competências e trajetória: tecnologia aplicada + pessoas + etapas
Palestras e contato: imagem real + tema + convite profissional
```

## Contratos de produto

| ID    | Requisito                               | Aceite verificável                                                                                                                                                                                                                                                                                             |
| ----- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ED-01 | Pessoa e posicionamento antes do efeito | Nome, Payments Engineering Manager na Qeevo Group, proposta curta e ação de contato legíveis na primeira tela em 360×800 e 390×844, em texto padrão. Interesse em Sênior/Staff/gestão é apresentado separadamente do cargo atual. Foto real confirmada; efeitos não cobrem rosto nem ações.                    |
| ED-02 | Realizações com valor e autoria         | A abertura para os trabalhos explica problema, contribuição e efeito sustentado. Preservar seis casos e suas URLs, com três destaques como composição revisável. Gestão da construção e construção individual não se tornam equivalentes. Sem números ou justificativas de decisão inventados.                 |
| ED-03 | Galeria visual de produtos reais        | Thumbnails curadas e proporcionais de entregas próprias, nomes legíveis e contexto da atuação. Cada ação de caso e de produção tem destino e rótulo distintos. Links de produção só aparecem para destinos públicos verificados. A versão atual do produto não é apresentada como autoria integral de Rodolfo. |
| ED-04 | Tecnologias em contexto                 | Logos locais e nomes acessíveis relacionados a uso confirmado nos trabalhos; origem/licença registradas. Nenhum percentual de domínio, certificação ou tempo de experiência é inferido da marca. Sem dependência de script remoto só para mostrar ícones.                                                      |
| ED-05 | Trajetória e conhecimento compartilhado | Preservar Melhor Escola → Quero Educação → Qeevo Group e cargos/períodos. Ensino, liderança e engenharia com IA mantêm espaço. Palestras e eventos distinguem palestrante de participante, usando tema/data/foto/link confirmados e sem preencher lacunas com placeholders públicos.                           |
| ED-06 | Contato e encaminhamento                | LinkedIn acessível na abertura e no encerramento; currículo público continua em `/curriculo/`. Conteúdo de encaminhamento coerente com o site, sem contato privado, remuneração, candidaturas ou fontes internas. Impressão não herda o layout de celular.                                                     |
| ED-07 | Linguagem da nova referência            | Comparações reais de abertura, capítulo escuro, galeria e encerramento demonstram a alternância de superfícies, escala tipográfica e prioridade das imagens. Diferenças deliberadas para acomodar conteúdo de Rodolfo são registradas. Não usar capturas do vídeo como ativos finais do site.                  |

Em todos os contratos, formação, cronologia e contribuições usam a base canônica
de carreira na revisão privada. Só o texto preparado para publicação entra no
repositório público. O vídeo de terceiro não é evidência biográfica.

## Movimento proposto e alternativa estática

A referência demonstra efeitos visuais; a técnica exata, valores de easing,
timings e relação com eventos do usuário não estão todos confirmados. GSAP e
CSS são escolhas de reprodução propostas. O movimento precisa ser perceptível
na experiência padrão e preservar leitura e controle.

| Momento                 | Interpretação proposta                                                                      | Alternativa e aceite                                                                                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Entrada                 | Nome, tipografia e retrato compõem uma entrada curta; profundidade em camadas               | Conteúdo presente no HTML; sem carregador bloqueante. Falha do script mantém proposta e contato disponíveis.                                                              |
| Mudança de capítulo     | O avanço revela a alternância papel/grafite e liga visualmente o problema ao efeito         | Rolagem nativa; não capturar roda/toque. Texto não espera o fim de uma transição para ser lido ou focado.                                                                 |
| Projetos                | Faixa com perspectiva e deslocamento limitado ligados ao scroll, usando thumbnails próprias | Links continuam elementos nativos e alcançáveis por teclado. Celular usa fluxo vertical ou trilho nativo controlável; nenhum caso exige gesto ou pin longo para aparecer. |
| Competências e palestra | Resposta discreta de marcas/imagens ao avanço e à interação                                 | Nenhuma informação depende de transformações; foco tem resposta visual equivalente ao hover.                                                                              |
| Encerramento            | Tipografia de contato marca a conclusão do percurso                                         | Ação profissional permanece clara e acionável sem animação.                                                                                                               |

Com movimento reduzido do sistema ou controle local ativado, remover parallax,
rotações contínuas, perspectiva em deslocamento e fixações; manter os mesmos
conteúdos e destinos. Não atribuir ao site movimentos causados pela câmera ou
pela edição da gravação. Usar `matchMedia`, cleanup e `ScrollTrigger.refresh()`
quando a implementação exigir; sem timers ou loops desconectados de propósito.

### Passagens a comparar na reprodução

Intervalos aproximados da gravação recebida, não durações dos efeitos nem medidas
de um site em produção. A gravação inclui um navegador desktop; a apresentação
em celular descrita nesta spec é adaptação própria, não comportamento demonstrado
pelo vídeo.

| Passagem da referência                                                         | Aplicação proposta para Rodolfo                                                                                                                             |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Até cerca de 1 s: marca de entrada; 1–3 s: abertura                            | Entrada curta de identidade e hero com foto real, sem copiar marca ou bloquear contato                                                                      |
| Abertura de ABOUT em duas partes e expansão de capítulo escuro                 | Transição para o resumo profissional e o problema de negócio, com texto estável e legível                                                                   |
| Deslocamento horizontal de trajetória                                          | Exploração de etapas profissionais no desktop; lista cronológica completa no celular e por teclado                                                          |
| Cerca de 12–17 s: faixa curva de projetos                                      | Thumbnails reais dos casos, com perspectiva e progresso ligado à rolagem                                                                                    |
| Cerca de 17,5–19 s: anel de seis cartões; cerca de 19–24,5 s: cartões em pilha | Experimento opcional com os seis casos, somente se preservar ordem, links e descoberta; uma lista estática acessível deve conter todos os destinos          |
| Cerca de 25 s: linhas expansíveis; 26–28 s: contato                            | Domínios de atuação em expansão acessível, quando útil, e chamada final ao LinkedIn; não copiar uma oferta comercial de agência como histórico profissional |

Faixa e anel são opções de composição a comparar em piloto, não exigência de
somar dois efeitos complexos à mesma galeria. Selecionar a alternativa que melhor
apresente imagens, contribuição e navegação. Nenhuma técnica 3D específica,
biblioteca ou easing foi identificado só pela gravação.

## Arquitetura e lotes com posse de arquivos

Preservar Astro estático, TypeScript, CSS próprio e GSAP. Não introduzir backend,
login, banco ou migração de framework para copiar uma aparência. Caminhos novos
abaixo são propostas, sujeitos a ajuste registrado antes da escrita.

| Lote                          | Dono e caminhos exclusivos durante o lote                                                                                                                                                | Dependência                                | Aceite da entrega                                                                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| E0: fechar discovery          | Orquestrador e revisor, esta spec e relatório privado da referência                                                                                                                      | Discovery audiovisual e pesquisa de origem | Observação, hipótese e proposta distintas; origem/licença pendentes explícitas; escopo editorial fixado sem alegar template encontrado.                       |
| E1: conteúdo e ativos         | Editorial de carreira, `src/content/portfolio.ts`, `case-studies.ts`, `visuals.ts`, `events.ts`, `public-resume.ts`; ativos curados em `public/images/`                                  | E0                                         | Mapa de conteúdo para cada capítulo, exemplos sustentados, derivados revisados, licenças e links públicos conferidos. Entregar contrato de dados ao frontend. |
| E2: composição piloto         | Design/frontend, `src/pages/index.astro`, `src/components/PortfolioBody.astro`, novo `src/styles/editorial.css`, tokens em `global.css`                                                  | E1                                         | Hero e um destaque real em desktop/celular; comparação com referência e critérios ED-01/02/07 antes de expandir.                                              |
| E3: galeria, casos e palestra | Frontend de projetos, `ProjectShowcase.astro`, `SpeakingEvents.astro`, template `src/pages/projetos/[slug].astro` e seus estilos; `PortfolioBody.astro` somente após transferência de E2 | E2 e contrato de E1                        | ED-03/04/05 preservados, seis rotas válidas, imagens com dimensões, links distintos, estático completo antes de aprimorar.                                    |
| E4: movimento                 | Especialista GSAP, `src/scripts/motion.ts`; atributos e CSS só após transferência dos respectivos donos                                                                                  | E2/E3 estáveis                             | Percurso padrão perceptível em navegador, sem pin móvel longo; menu, âncoras e foco preservados; reduced motion e noJS realmente exercitados.                 |
| E5: QA integrada              | Revisor de interface/editorial, evidências e relatórios; correções retornam ao dono do arquivo                                                                                           | E1–E4                                      | Matriz abaixo, fatos e privacidade conferidos; relatar participação prévia na implementação. Sem nota nova de produto baseada apenas em scanner ou build.     |
| E6: entrega                   | Orquestrador, atualização de `docs/ESTADO.md` e operações Git/publicação                                                                                                                 | E5 e achados materiais resolvidos          | Caminhos explícitos, diff revisado, commit/push direto na main, CI confirmado; deploy manual separado e URL final conferida.                                  |

Não abrir PR nem criar branch de feature. Nunca dois agentes editam o mesmo
arquivo ao mesmo tempo: o orquestrador registra a transferência de posse.
Especialistas não concentram Git nem publicam independentemente.

## Matriz de validação antes da publicação

- Conferir home, seis casos e currículo em 360, 390, 768, 1280 e 1440 px, com
  altura, navegador, zoom, URL e SHA registrados. Observar overflow, recorte,
  quebra de títulos, leitura e acesso a ações; alvos principais de pelo menos
  44×44 px como objetivo do projeto.
- Exercitar teclado, skip link, foco, menu/Escape e âncoras; zoom de 200%;
  conteúdo sem JavaScript; movimento reduzido do sistema e controle local.
  Ferramenta de leitor de tela e percurso são registrados quando executados.
- Comparar capturas reais com os quadros da referência por composição e hierarquia;
  para movimento, observar a sequência em execução. Captura estática não comprova
  scroll, transição ou interação.
- Revisar contraste nas superfícies e estados efetivos, origem/licença das mídias,
  pixels e metadados; conferir links externos e impressão do currículo.
- Rodar `npm run verify` e `npm run harness` no estado integrado, respeitando os
  hooks existentes. Registrar resultados do SHA realmente enviado.
- Desempenho só recebe números após medições com condições registradas. Usar
  séries comparáveis e mostrar observações/mediana; TBT não substitui INP.
  Dados de campo ausentes continuam ausentes. Harness não é nota visual ou de RH.

Se navegador, participantes de RH ou ferramenta de medição estiverem indisponíveis,
registrar o item pendente e seu efeito. Não declarar revisão completa, publicação
ou nota 10 por ter concluído esta especificação. Os pesos da rubrica anterior
permanecem estáveis para uma futura avaliação comparável.

## Estado e fontes de trabalho

E0 está concluído como discovery e especificação, com origem e licença ainda não
resolvidas. E1 reaproveitou conteúdo e ativos públicos existentes; E2–E4 têm o
primeiro corte implementado. E5 foi executado para esse corte com limites no
relatório. A matriz completa de aceites e a evolução da refatoração permanecem
abertas. E6 depende do envio e da publicação registrados em docs/ESTADO.md.
A origem do vídeo segue
em investigação; não existe template selecionado para baixar/incorporar.

Referências públicas de implementação: [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/),
[GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia/) e
[Astro](https://docs.astro.build/). São alternativas de construção, não prova da
stack ou da autoria do portfólio exibido.
