# Primeiro piloto editorial

09/11/2026. Implementação da abertura, galeria e encerramento orientada pela
[spec 004](../specs/004-referencia-editorial/README.md). A composição interpreta
a referência audiovisual com código próprio e ativos reais já curados. Fonte de
código e licença do exemplo continuam desconhecidas; nenhum asset dele foi copiado.

## Resultado

Nome em escala editorial, cargo atual e foto real abrem a página em creme.
Contato e currículo permanecem disponíveis na primeira tela móvel. Os capítulos
em grafite preservam arquitetura, projetos, competências, liderança, palestra e
cronologia. A galeria combina três snapshots reais, perspectiva ligada à rolagem
e texto estável sobre contribuição, com destinos separados para caso e produção.
O encerramento violeta mantém o contato em evidência.

Astro estático e as dependências existentes foram preservados. Novos estilos
ficam sob `editorial-page`; o movimento complementar acompanha o estado do
controle local e a preferência do sistema. Sem JavaScript, os conteúdos e links
continuam no documento. Sem carregador bloqueante, captura de rolagem ou pin longo.
A perspectiva aproxima profundidade em planos; não reproduz a curvatura contínua
do exemplo nem identifica sua tecnologia.

## Evidências reais

- [Abertura desktop](evidence/editorial-desktop.png), 1440×800.
- [Abertura móvel](evidence/editorial-mobile.png), 360×800.
- [Galeria desktop](evidence/editorial-gallery.png), 1440×1000.

O orquestrador inspecionou abertura em desktop, tablet e celular, galeria,
transformação financeira, trajetória móvel, contato e versão sem JavaScript.
As imagens documentam estados estáticos, não substituem a verificação do movimento.
O teste de interação registrou mudança das variáveis e da matriz de perspectiva
entre posições de scroll; o controle local removeu as transformações e restaurou
os efeitos ao ser reativado.

## Validação

Chromium Headless 148.0.7778.96 em perfil isolado, servido a partir do build local.
Oito rotas em 360, 390, 768, 1280 e 1440 px, altura de 800 px: 40 combinações
sem overflow horizontal, imagens quebradas ou erros de JavaScript. Essa matriz
é uma verificação geométrica e de carregamento, não uma revisão visual manual
de todas as combinações. Home também exercitada sem JavaScript e com movimento
reduzido. Menu abriu, fechou com Escape e devolveu o foco. Na abertura móvel,
o bloco de ações terminou em 732 px (360) e 690 px (390).

Lighthouse 13.6.0, modo móvel, três execuções consecutivas no mesmo build.
Throttling simulado padrão: RTT 150 ms, 1638,4 Kbps e CPU 4×. Resultado repetido:

| Critério automático | Execuções       |
| ------------------- | --------------- |
| Desempenho          | 98 / 98 / 98    |
| Acessibilidade      | 100 / 100 / 100 |
| Boas práticas       | 100 / 100 / 100 |
| SEO                 | 100 / 100 / 100 |

Medianas: LCP 2,43 s, CLS 0 e TBT 2 ms. A medição anterior de uma execução tinha
CLS 0,118; o menu recolhia após o primeiro desenho. O modo de navegação com
JavaScript agora é definido antes do primeiro desenho, mantendo links visíveis
quando JavaScript está desligado. Também foram corrigidos nomes acessíveis dos
links e o pequeno overflow das ações em 360 px.

HTTP local sem compressão ou política de cache de produção. Essas medições não
são dados de campo, não medem INP e não estabelecem nota visual ou aprovação de
RH. O relatório ainda aponta JavaScript parcialmente não usado e dependências
no caminho de renderização. Acessibilidade automática não substitui leitor de
tela, que não foi exercitado nesta etapa. Zoom de navegador, dispositivos físicos
e revisão integral da impressão do currículo permanecem fora desta validação.

`npm run verify`: privacidade, lint, formatação, tipos, 15 testes, build de oito
páginas e referências locais aprovados. A validação final do envio e o harness
são registrados no estado da entrega.

## Orquestração e continuidade

Três agentes implementaram composição, galeria e movimento com arquivos separados.
A revisão dos agentes foi interrompida por falta de créditos; o orquestrador
integrou, corrigiu os achados e executou a validação acima. A revisão final não é
independente da integração.

E1 reaproveita conteúdo e ativos públicos existentes. E2, E3 e E4 têm o primeiro
corte implementado. E5 foi executado no escopo descrito, com limites explícitos.
A evolução completa da spec continua: comparar efeitos de maior transformação,
curar mais imagens reais, aprofundar a identidade visual dos casos e testar com
recrutadores. Nenhuma nova nota de produto foi atribuída. Entrega por commit e
push na main, sem PR. Código `660585e`, CI 42694991777 e publicação manual
42695153246 concluídos com sucesso. A página pública foi conferida em Chromium
em 390 e 1440 px, com novo layout, imagens carregadas e sem erros de JavaScript
ou overflow. A evolução completa da refatoração continua aberta.
