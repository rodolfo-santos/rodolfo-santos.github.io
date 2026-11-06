# Revisão da primeira versão

06/11/2026. Implementação integrada pelo orquestrador a partir de trabalhos especializados em conteúdo, composição visual e animações. A revisão independente de código cobriu inicialmente conteúdo, fluxo de menu e ciclo GSAP; a integração e a revisão visual final foram realizadas pelo orquestrador.

## O que foi construído

Hero com retrato público, fontes locais e paleta grafite/violeta/menta. Três casos com aprofundamento por details nativo. Cena conceitual de arquitetura ligada à rolagem, linha do tempo, ensino e contato. Menu progressivo no celular e controle de movimento reduzido. Metadados e dados estruturados públicos, sem contatos privados.

## Verificações

- Privacidade, lint, formatação, Astro/TypeScript, dez testes do harness e build estático aprovados.
- Verificador do build sem destinos locais ausentes ou IDs duplicados no HTML/CSS produzido.
- harness-score 1.8.4 manteve L4, 103/105, escopo repo.
- Chrome: 360, 390, 768, 1280 e 1440 px com largura da página igual à viewport. Inspeção de hero, casos, diagrama, trajetória e contato.
- Menu abre/fecha, atualiza aria-expanded, recusa foco nos links escondidos e responde a Escape com retorno ao botão. Navegação interna fecha o painel.
- Details abre por clique e fecha por Enter, mantendo os detalhes no HTML servido.
- Redução de movimento ativa aria-pressed, reverte GSAP e força rolagem sem suavização. O controle também permite retomar os efeitos. A preferência do sistema tem precedência no código.
- Cópia local do HTML de produção com os scripts removidos: título, três casos, cinco cargos e navegação permanecem acessíveis; details continua funcionando nativamente. Essa verificação simula ausência dos scripts da página, sem alterar o JavaScript global do navegador.
- Fontes e retrato carregados; sem requisição de fonte externa pelo visitante. O retrato é um WebP derivado do perfil público, sem metadados pessoais.

## Ajustes encontrados na integração

Órbitas decorativas causavam transbordamento em telas menores; o desenho foi contido sem restringir a rolagem vertical. Classes genéricas de legenda colidiam entre os casos e a arquitetura; o componente recebeu classes específicas. Tamanhos de texto de leitura foram ampliados. A restauração de scroll-behavior inline pelo GSAP foi subordinada ao modo reduzido. O primeiro tom do gradiente do botão foi escurecido para melhorar contraste com texto branco.

## Limites e continuidade

A foto pública do GitHub compõe esta primeira versão. Não foram publicadas fotos privadas do Google Fotos; uma seleção posterior pode substituí-la. A narrativa usa efeitos qualitativos sustentados, sem inventar métricas de adoção ou disponibilidade. A linha do tempo destaca as etapas recentes; o LinkedIn oferece a trajetória completa.

Não foi realizada medição de Core Web Vitals em campo nem certificação completa de acessibilidade. O score do harness avalia estrutura e não substitui essas análises. A confirmação da publicação fica em ESTADO.md.
