export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  role: string;
  context: string;
  before: string;
  after: string;
  contribution: string[];
  decisions: { title: string; body: string }[];
  outcomes: string[];
  stack: string[];
  accent: 'violet' | 'blue' | 'mint';
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'arquitetura-financeira',
    title: 'De planilhas dispersas a uma operação financeira integrada',
    subtitle:
      'Grande parte da consolidação financeira e da carga no sistema de gestão passou a ser automatizada com a reconstrução da arquitetura de pagamentos.',
    category: 'Arquitetura · Pagamentos · Operação',
    period: 'Construção e evolução ao longo da trajetória',
    role: 'Arquitetura, implementação e liderança técnica',
    context:
      'O Financeiro precisava reunir informações de diferentes produtos para registrar a receita no sistema de gestão TOTVS Protheus. Reconstruí a arquitetura que conecta o pagamento, as cobranças recorrentes, a emissão fiscal, a previsão de caixa e a contabilidade, combinando implementação e liderança técnica.',
    before:
      'O Financeiro recebia planilhas Excel dispersas pela empresa, consolidava e tratava os dados e fazia a carga manual no sistema de gestão Protheus. Reunir as informações de vendas e pagamentos exigia esse trabalho de consolidação.',
    after:
      'Grande parte da consolidação financeira e da carga no Protheus passou a ser automatizada. A arquitetura conecta a operação de pagamentos aos dados fiscais, recebíveis e registros contábeis. O Financeiro continua atuando na análise e no tratamento de exceções.',
    contribution: [
      'Reconstruí a arquitetura de pagamentos, combinando desenho dos serviços, implementação e coordenação das integrações.',
      'Adicionei Stark Bank, Pix recorrente, Pix Automático e suporte a múltiplas contas de múltiplos adquirentes ao gateway.',
      'Construí administração de transações, reembolsos e chargebacks e integração de vendas externas ao fluxo financeiro.',
      'Conectei gestão de recebíveis e conferências financeiras ao fluxo contábil. No Livro Razão, geri a construção e tomei decisões de arquitetura junto ao responsável de Produto.',
    ],
    decisions: [
      {
        title: 'Centralizar a receita e distribuir os eventos',
        body: 'O gateway já integrava Adyen e Pagar.me. Ampliei essa base e o transformei em um hub para reunir receitas de diferentes origens e disponibilizar eventos aos sistemas financeiros. O objetivo era conectar o processamento da venda às responsabilidades posteriores de cada serviço.',
      },
      {
        title: 'Conferir antes de contabilizar',
        body: 'Para encaminhar os dados corretos à contabilidade, o fluxo confere recebíveis com dados das adquirentes, notas fiscais e extratos bancários. Valores divergentes ficam retidos até a resolução da pendência, antes de gerar eventos de lançamento.',
      },
      {
        title: 'Automatizar o caminho até o Protheus',
        body: 'O trabalho de reunir e carregar planilhas no sistema de gestão era o ponto de partida da operação. A reconstrução integrou esses dados; grande parte da consolidação e da carga passou a ser automatizada, sem eliminar a análise humana das exceções.',
      },
    ],
    outcomes: [
      'Grande parte da consolidação financeira e da carga no Protheus automatizada.',
      'Pagamentos, recorrência, fiscal e contabilidade conectados em uma arquitetura de serviços.',
      'Operação de adquirentes, transações, reembolsos e chargebacks reunida no hub.',
    ],
    stack: [
      'APIs',
      'Eventos',
      'Kafka',
      'PostgreSQL',
      'TOTVS Protheus',
      'Adyen',
      'Pagar.me',
      'Stark Bank',
    ],
    accent: 'violet',
  },
  {
    slug: 'orquestracao-de-pagamentos',
    title: 'Pagamentos e assinaturas para diferentes produtos',
    subtitle:
      'Uma plataforma para aplicar regras de cobrança, gerir assinaturas e dividir os valores dos pagamentos e das notas fiscais.',
    category: 'Produto · Backend · Pagamentos',
    period: 'Quero Educação · 02/2025 a 08/2025',
    role: 'Engineering Manager com atuação direta na construção',
    context:
      'Diferentes produtos precisam cobrar seus clientes, gerir assinaturas e distribuir os valores conforme suas regras comerciais. Como Engineering Manager na Quero Educação, construí a plataforma que coordena essas operações e as conecta aos serviços de pagamento e emissão fiscal.',
    before:
      'A necessidade era atender regras de cobrança e assinatura de diferentes produtos e coordenar a divisão dos pagamentos e das notas fiscais. Encaminhar a cobrança para processamento era apenas uma das responsabilidades desse fluxo.',
    after:
      'A plataforma reúne regras de processamento, gestão de assinaturas e divisão financeira e fiscal. Foi construída durante minha etapa de Engineering Manager na Quero Educação; a continuidade do trabalho inclui evoluções posteriores.',
    contribution: [
      'Construí o orquestrador durante minha atuação como Engineering Manager, mantendo responsabilidade direta pelo desenvolvimento.',
      'Implementei regras de negócio de processamento e gestão de assinaturas para diversos produtos.',
      'Construí os fluxos de split de pagamento e de nota fiscal.',
      'Nas evoluções posteriores, trabalhei em identificação do cliente na tokenização e configuração do texto de identificação da compra por cliente.',
    ],
    decisions: [
      {
        title: 'Coordenar as regras dos produtos',
        body: 'Construí a plataforma para processar regras comerciais, gerir assinaturas e se comunicar com os serviços de pagamento e emissão fiscal. Essa coordenação atende ao escopo de múltiplos produtos confirmado na construção.',
      },
      {
        title: 'Representar a divisão financeira e fiscal',
        body: 'Implementei split, a divisão dos valores de um pagamento, e a divisão da nota fiscal. A plataforma contempla as duas responsabilidades presentes nas regras de processamento dos produtos.',
      },
      {
        title: 'Preservar o contexto de cada cliente',
        body: 'Nas evoluções posteriores, trabalhei na identificação do cliente que abre a sessão de tokenização e na configuração do soft descriptor, texto que identifica a compra. Essas entregas representam o contexto de cada cliente na operação.',
      },
    ],
    outcomes: [
      'Plataforma de orquestração construída para atender diversos produtos.',
      'Regras de processamento, assinaturas e splits reunidas no fluxo de pagamento.',
      'Construção técnica realizada em conjunto com as responsabilidades de gestão de engenharia.',
    ],
    stack: [
      'TypeScript',
      'APIs',
      'Express',
      'Directus',
      'Assinaturas',
      'Split financeiro e fiscal',
    ],
    accent: 'blue',
  },
  {
    slug: 'plataforma-de-publicacao',
    title: 'Uma plataforma para publicar múltiplos sites institucionais',
    subtitle:
      'Uma base compartilhada e gestão de conteúdo para publicar sites de diferentes faculdades, com autonomia editorial.',
    category: 'Plataforma · Frontend · Autonomia editorial',
    period: 'Quero Educação · 02/2025 a 08/2025',
    role: 'Engineering Manager e construtor da plataforma',
    context:
      'Faculdades precisavam publicar seus sites institucionais com conteúdo e identidade próprios. Como Engineering Manager na Quero Educação, construí a plataforma web e seu sistema de gestão de conteúdo, combinando desenvolvimento direto com responsabilidades de liderança.',
    before:
      'A necessidade era criar múltiplos sites institucionais e permitir a publicação de conteúdo pelas instituições sobre uma base técnica compartilhada.',
    after:
      'A plataforma viabilizou sites institucionais de diferentes faculdades, incluindo UniAlphaville, com gestão de conteúdo e uma base web compartilhada. A construção ocorreu na Quero Educação, separada do uso e da evolução posteriores.',
    contribution: [
      'Construí a plataforma web e o CMS headless para publicação de múltiplos sites institucionais.',
      'Combinei Vue, Nuxt e TypeScript à gestão de conteúdo com Directus.',
      'Trabalhei na base compartilhada para sites de diferentes marcas e na autonomia de publicação de conteúdo.',
      'Em evolução posterior, escrevi um guia não técnico do data layer para aproximar a implementação de Marketing, Produto e análise de dados.',
    ],
    decisions: [
      {
        title: 'Separar conteúdo e apresentação',
        body: 'Construí um CMS headless: o conteúdo é administrado em um sistema próprio, separado da apresentação dos sites. Essa organização compõe a plataforma usada para publicar os sites das instituições.',
      },
      {
        title: 'Compartilhar a base entre marcas',
        body: 'Para atender múltiplas instituições, trabalhei em uma base compartilhada com Nuxt, Vue e TypeScript e conteúdo gerido no Directus. O resultado é uma plataforma de publicação que suporta diferentes marcas.',
      },
      {
        title: 'Explicar a instrumentação para quem usa os dados',
        body: 'Em uma evolução posterior, escrevi um guia não técnico sobre a camada de dados do site. O documento foi direcionado a Marketing, Produto e análise de dados para explicar a instrumentação da experiência web.',
      },
    ],
    outcomes: [
      'CMS e plataforma de publicação construídos durante a atuação como Engineering Manager.',
      'Múltiplos sites institucionais publicados sobre a plataforma, incluindo unialphaville.com.br.',
      'Conteúdo headless, frontend compartilhado e autonomia editorial reunidos no produto.',
    ],
    stack: ['Vue', 'Nuxt', 'TypeScript', 'Directus', 'Nx', 'Pinia', 'Vitest'],
    accent: 'mint',
  },
  {
    slug: 'marketplaces-e-busca',
    title: 'Da busca por proximidade à experiência de compra',
    subtitle:
      'Construção de marketplaces educacionais, da administração de ofertas e busca por localização ao checkout e aos pagamentos.',
    category: 'Marketplaces · Busca · Experiência web',
    period: 'Melhor Escola → Quero Educação · 2021 a 2025',
    role: 'Frontend Pleno → Full Stack Sênior → Staff Software Engineer',
    context:
      'Minha atuação em produtos web atravessa a jornada do aluno e as ferramentas de quem administra as ofertas. Na Melhor Escola, trabalhei da área do gestor a pagamentos e reconstrução do marketplace. Como Staff na Quero Educação, atuei nas páginas de listagem do Quero Bolsa e do Quero Escola.',
    before:
      'Quem procura uma escola ou curso precisa encontrar ofertas relevantes e chegar à compra; quem administra o marketplace precisa gerir páginas, ofertas e alunos. Minha atuação cobriu essas duas necessidades em etapas distintas da trajetória.',
    after:
      'Construí áreas administrativas e fluxos de pagamento e trabalhei em páginas de listagem com busca por localização, organização das ofertas e desempenho web. Na Quero Educação, atuei como Staff na evolução da descoberta de ofertas do Quero Bolsa e do Quero Escola.',
    contribution: [
      'Na Melhor Escola, desenvolvi a área do gestor com Nuxt e TypeScript, incluindo gestão de páginas, ofertas, alunos e acesso por perfil.',
      'Como Full Stack Sênior, trabalhei em pagamentos com PHP/Laravel, integrações com Pagar.me e Protheus e na reconstrução web com Nuxt, Layers e Nx.',
      'Como Staff na Quero Educação, desenvolvi páginas de listagem com OpenSearch, geolocalização e mapas, estratégias de cache, SEO e Core Web Vitals.',
      'Implementei busca por proximidade geográfica, deduplicação de cursos e apresentação de ofertas no marketplace.',
    ],
    decisions: [
      {
        title: 'Conectar relevância e localização',
        body: 'Implementei busca por proximidade geográfica e deduplicação de cursos. A localização faz parte dos resultados apresentados ao usuário, junto da organização de ofertas para sua pesquisa.',
      },
      {
        title: 'Construir páginas para descoberta e navegação',
        body: 'Trabalhei em SEO técnico, que ajuda os mecanismos de busca a interpretar as páginas, e em velocidade e experiência de navegação. As entregas incluem renderização no servidor, dados estruturados, URLs canônicas e Core Web Vitals, indicadores de experiência web.',
      },
      {
        title: 'Construir uma base reaproveitável',
        body: 'A reconstrução com Nuxt, Layers e Nx na Melhor Escola e o trabalho com padrões compartilhados como Staff conectam evolução de produto e manutenção da base técnica. São contribuições em etapas distintas da carreira.',
      },
    ],
    outcomes: [
      'Jornada atendida de ponta a ponta: administração de ofertas, descoberta, checkout e pagamentos.',
      'Busca por proximidade e deduplicação de cursos implementadas no marketplace.',
      'SEO, renderização e performance incorporados à engenharia das páginas de listagem.',
    ],
    stack: [
      'TypeScript',
      'Vue',
      'Nuxt',
      'PHP',
      'Laravel',
      'OpenSearch',
      'SSR',
      'Nx',
      'Core Web Vitals',
    ],
    accent: 'blue',
  },
  {
    slug: 'servico-fiscal-go',
    title: 'Processamento fiscal independente do emissor',
    subtitle:
      'Serviço construído individualmente em Go, com assistência de IA, para integrar emissores de notas e organizar o processamento fiscal.',
    category: 'Sistemas distribuídos · Go · Engenharia com IA',
    period: 'Construção e evolução do serviço fiscal',
    role: 'Construção individual com assistência de IA',
    context:
      'A operação fiscal precisa se conectar a emissores de notas e acompanhar o processamento das solicitações. Construí do zero um serviço que independe de um provedor específico, usando especificações e assistência de IA, com responsabilidade individual pelo desenho e pela implementação.',
    before:
      'A necessidade era organizar pedidos de processamento fiscal, integrar emissores e acompanhar tarefas que podem enfrentar falhas ou depender de respostas externas. A construção do serviço tratou esse conjunto de responsabilidades.',
    after:
      'O serviço foi construído com acompanhamento do estado das solicitações, coordenação das tarefas, recuperação de falhas e comunicação por eventos. As entregas foram validadas incrementalmente com provedor simulado.',
    contribution: [
      'Construí individualmente o serviço, do desenho inicial às entregas de implementação, com assistência de IA declarada.',
      'Modelei o domínio fiscal, seus estados e eventos e implementei a coordenação do trabalho assíncrono.',
      'Implementei aquisição de tarefas com SKIP LOCKED e fencing, circuit breaker, watchdogs e observabilidade do processamento.',
      'Construí a outbox transacional e o mecanismo de publicação para Kafka.',
    ],
    decisions: [
      {
        title: 'Persistir o trabalho e controlar quem o executa',
        body: 'Implementei uma fila persistente em PostgreSQL com aquisição de tarefas por SKIP LOCKED e fencing. Esses mecanismos coordenam qual processador está autorizado a executar cada tarefa.',
      },
      {
        title: 'Desenhar a recuperação de falhas',
        body: 'Implementei circuit breaker, para lidar com falhas repetidas da integração, e watchdogs, para acompanhar tarefas que precisam de atenção. Esses mecanismos fazem parte do processamento junto ao controle de estados e à observabilidade.',
      },
      {
        title: 'Conectar estado e publicação de eventos',
        body: 'A outbox transacional registra eventos para publicação em Kafka. Esse mecanismo integra a persistência do serviço à comunicação com os consumidores.',
      },
      {
        title: 'Validar as entregas com um provedor simulado',
        body: 'As especificações orientaram entregas incrementais, validadas com um provedor simulado.',
      },
    ],
    outcomes: [
      'Serviço fiscal construído do zero com responsabilidade individual e assistência de IA.',
      'Acompanhamento das solicitações, coordenação de tarefas, recuperação e publicação de eventos implementados.',
      'Validação incremental das entregas com provedor simulado.',
    ],
    stack: [
      'Go',
      'PostgreSQL',
      'Kafka',
      'Outbox transacional',
      'SDD',
      'IA assistiva',
    ],
    accent: 'violet',
  },
  {
    slug: 'conciliacao-e-rastreabilidade',
    title: 'Conferir os recebíveis antes do registro contábil',
    subtitle:
      'Recebíveis com divergências ficam retidos até a resolução. A operação tem alertas, recursos de análise e identificação de quem alterou os dados.',
    category: 'Full stack · Controles financeiros · Liderança',
    period: 'Construção e evolução ao longo da trajetória',
    role: 'Construção de recebíveis e gestão da construção do Livro Razão',
    context:
      'O Financeiro precisa prever entradas e conferir valores antes de registrá-los na contabilidade. Construí a gestão de recebíveis e suas conciliações. No Livro Razão, o sistema de registro contábil, geri a construção e tomei decisões de arquitetura com o responsável de Produto para encaminhar os dados corretos ao sistema de gestão.',
    before:
      'Diferenças entre o recebível e as fontes de conferência precisam ser identificadas e tratadas antes do lançamento contábil. A operação também precisa entender o motivo da divergência, realizar correções e identificar quem alterou cada informação.',
    after:
      'A operação dispõe de alertas e formulário para resolver divergências. Recebíveis divergentes ficam retidos e só geram eventos de lançamento contábil após a resolução. Alterações registram o usuário responsável e os dados antes e depois da mudança.',
    contribution: [
      'Construí gestão de recebíveis e conciliações financeira, fiscal e bancária.',
      'Implementei o controle por estado que retém recebíveis divergentes antes da publicação para o Livro Razão.',
      'Evoluí a interface de análise de splits em React e Laravel, distinguindo taxa de divergência e organizando o veredito e as evidências de conciliação.',
      'Iniciei a substituição de contas administrativas compartilhadas por identificação individual com Keycloak e auditoria, participando da implantação.',
      'Geri a construção do Livro Razão e defini sua arquitetura junto ao responsável de Produto, com foco no envio correto ao sistema de gestão contábil.',
    ],
    decisions: [
      {
        title: 'Impedir lançamento enquanto houver divergência',
        body: 'Para enviar os dados corretos à contabilidade, a regra consulta o estado do recebível e impede a publicação quando há divergência. Foi validada com testes unitários, testes manuais locais e validação em homologação.',
      },
      {
        title: 'Dar visibilidade e autonomia ao operador',
        body: 'Alertas apoiam a investigação e o formulário permite resolver pendências na gestão de recebíveis. A interface de detalhes organiza o veredito de conciliação, as diferenças e as evidências usadas na análise.',
      },
      {
        title: 'Vincular as alterações a uma pessoa',
        body: 'A identificação individual com Keycloak e o registro do antes e depois das entidades permitem rastrear alterações. A iniciativa nasceu da necessidade de controle e de facilitar investigações sobre acontecimentos passados.',
      },
    ],
    outcomes: [
      'Divergências retidas no contas a receber até sua resolução, antes do lançamento no Livro Razão.',
      'Operação com alertas, análise de evidências e formulário de resolução.',
      'Alterações rastreáveis por identidade individual e estados anterior e posterior.',
      'Conexão entre implementação full stack, controle financeiro e gestão da construção contábil.',
    ],
    stack: [
      'PHP',
      'Laravel',
      'React',
      'Inertia',
      'PostgreSQL',
      'Kafka',
      'Keycloak',
      'Testes unitários',
    ],
    accent: 'mint',
  },
];
