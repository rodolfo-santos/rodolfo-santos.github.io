# Portfólio Rodolfo dos Santos

Planejamento de 06/11/2026. Direção proposta para a primeira versão, ainda sem implementação visual aprovada.

## Propósito

Apresentar Rodolfo a recrutadores, lideranças de engenharia e possíveis colaboradores. A experiência deve comunicar domínio técnico, capacidade de construir produtos e liderança com atuação direta em engenharia.

Conceito: engenharia em movimento. O visitante entra pela pessoa, explora sistemas e decisões e termina com um convite claro para conversar.

## Direção visual

A imagem One Peak fornecida pelo titular é a principal referência: atmosfera escura, luz violeta, retrato marcante e profundidade. Adaptar a linguagem a um portfólio pessoal com identidade própria.

| Token | Cor | Aplicação |
|---|---|---|
| Grafite | #0B0D12 | Fundo principal |
| Superfície | #141722 | Camadas e painéis |
| Texto | #F3F1F7 | Títulos e leitura |
| Texto de apoio | #B9BDCB | Descrições |
| Violeta | #A78BFA | Luz e ações principais |
| Azul | #818CF8 | Profundidade e conexões |
| Menta | #70E1C8 | Ênfase pontual |

Base majoritariamente neutra; cores vívidas concentradas nos pontos de atenção. Contraste deve ser medido na implementação, incluindo botões e estados de foco.

Tipografia proposta: Sora para títulos e Manrope para leitura, com arquivos WOFF2 locais e licenças preservadas. Títulos fluidos, parágrafos alinhados à esquerda, linhas curtas e espaço generoso. Conferir disponibilidade e licença na aquisição dos arquivos.

Composição assimétrica no desktop, texto e retrato em diálogo. No celular, título, retrato e conteúdo em fluxo vertical. Evitar transformar todas as seções em grades iguais de cards.

## Roteiro da página

1. Abertura: nome, posicionamento e retrato real. Chamada inicial proposta: “Construo sistemas. Conecto produtos. Desenvolvo pessoas.” Texto de apoio apresenta software, arquitetura, pagamentos e liderança, com IA como parte do trabalho. Ações “Conheça meu trabalho” e “Vamos conversar”.
2. Domínios conectados: arquitetura, pagamentos, produtos web, operação, liderança e IA numa composição visual que mostra sua relação.
3. Casos: ecossistema de pagamentos e financeiro; marketplaces e publicação; engenharia com IA. Cada caso explica necessidade, contribuição pessoal, decisão e efeito qualitativo sustentado. Alternar texto, diagramas e imagens, com detalhes expansíveis acessíveis.
4. Como construo: diagrama conceitual que acompanha a passagem de problema a arquitetura, implementação e operação. Este é o principal momento visual ligado ao scroll.
5. Trajetória: preservar Melhor Escola → Quero Educação → Qeevo Group, com cargos e períodos conferidos. Etapas anteriores entram após revisão editorial, sem inventar datas.
6. Conhecimento compartilhado: ensino, mentoria e experimentação, com fotos profissionais quando houver seleção confirmada.
7. Contato: GitHub, LinkedIn e contato profissional confirmado. Um currículo público pode ser incluído após revisão específica para publicação.

## Movimento

| Momento | Comportamento |
|---|---|
| Entrada | Sequência coordenada de nome, retrato e luz, sem impedir a leitura |
| Hero | Halo discreto e profundidade suave; efeito de ponteiro somente em dispositivo adequado |
| Casos | Transições distintas conforme a narrativa, sem repetir fade em todos os blocos |
| Diagrama | Conexões e etapas respondem ao progresso da rolagem |
| Trajetória | Indicador luminoso acompanha o avanço |
| Ações | Hover e foco com resposta visual clara |

Preferir transform e opacity, 450–800 ms para transições usuais. Rolagem nativa. Sem cursor substituto, áudio automático, flashes ou carregador bloqueante. Desligar parallax e fixações longas no celular. Modo de movimento reduzido mantém a composição estática e o conteúdo completo.

## Arquitetura proposta

Astro em saída estática, TypeScript, CSS próprio e GSAP/ScrollTrigger. Sem servidor, banco ou login. Conteúdo editorial separado dos componentes. Imagens responsivas AVIF/WebP e dimensões declaradas; fontes locais com subset necessário.

Estrutura prevista: src/pages/index.astro, src/components/, src/content/, src/styles/, src/scripts/motion.ts, public/images/ e .github/workflows/deploy.yml.

Publicação no repositório pessoal rodolfo-santos/rodolfo-santos.github.io, via GitHub Actions e GitHub Pages. Configuração de site na raiz, sem base de subdiretório. O repositório rodolfo-santos/rodolfo-santos já existe e será preservado; uma alteração posterior acrescentará a entrada visual para o portfólio.

## Fotografia

O Google Fotos foi acessado pela sessão pessoal já autenticada no navegador. A busca textual por Rodolfo apresentou retratos e imagens em eventos. A seleção ainda não está concluída. Avaliar enquadramento, nitidez, espaço para composição e contexto profissional, sem inferir identidade por reconhecimento de rosto.

Planejar um retrato principal e duas imagens de contexto, preferindo fotos individuais ou recortes que não exponham terceiros. Candidatos e links privados ficam em registro local fora deste repositório. A seleção final precisa confirmar a pessoa retratada antes da publicação. Nenhum original foi publicado nesta etapa.

## Equipe e execução

Pesquisa de direção visual e pesquisa de skills realizadas por dois agentes especializados. Terceiro agente responsável pela revisão de posicionamento. Integração, curadoria e preparação do repositório sob responsabilidade do agente principal. Equipe interna da sessão; o canvas Maestri não estava conectado.

| Etapa | Entrega | Estado |
|---|---|---|
| Descoberta | Referências, direção e skills oficiais | Concluída |
| Planejamento | Roteiro, movimento e arquitetura | Concluído |
| Fotografia | Seleção privada com identidade confirmada | Em andamento |
| Direção em tela | Hero e uma seção de caso em desktop e celular | Pendente |
| Implementação | Página completa e movimento responsivo | Pendente |
| Revisão | Conteúdo, navegação, acessibilidade e desempenho | Pendente |
| Publicação | Pages funcional e entrada no perfil | Pendente |

A próxima entrega é uma primeira composição real do hero e do diagrama, usando conteúdo publicável. Essa composição permite avaliar cores, retrato e movimento antes de expandir a página.

## Critérios de aceite

- Identidade e proposta profissional compreensíveis na primeira tela.
- Amplitude de carreira preservada; cronologia correta e contribuição individual descrita com precisão.
- Interface legível em 360, 390, 768, 1280 e 1440 px, sem rolagem lateral acidental.
- Navegação por teclado, foco visível, menu acessível e contraste WCAG AA verificado.
- Conteúdo completo com movimento reduzido e sem JavaScript.
- Imagens sem dados de localização ou outros metadados pessoais na versão pública.
- Build e links válidos; screenshots reais de desktop e celular revisados.
- Objetivos de desempenho: LCP até 2,5 s, CLS até 0,1 e INP até 200 ms quando houver medição representativa. Lighthouse local é diagnóstico, não comprovação de dados reais de campo.
- URL do Pages validada após deploy. Perfil aponta para o site sem substituir o conteúdo anterior inadvertidamente.
