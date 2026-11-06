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
    title: 'Da venda ao ERP: uma arquitetura financeira conectada',
    subtitle:
      'Reconstrução dos caminhos entre pagamentos, recebíveis, fiscal e contabilidade, com efeito direto no trabalho do Financeiro.',
    category: 'Arquitetura · Pagamentos · Operação',
    period: 'Construção e evolução ao longo da trajetória',
    role: 'Arquitetura, implementação e liderança técnica',
    context:
      'Um pagamento continua depois da aprovação. Ele precisa chegar à recorrência, à emissão fiscal, à previsão de caixa e à contabilidade. Minha atuação conectou essas responsabilidades em uma arquitetura que acompanha a receita dos produtos até o TOTVS Protheus.',
    before:
      'O Financeiro recebia planilhas Excel dispersas pela empresa, consolidava e tratava os dados e fazia a carga manual no Protheus. O gateway já integrava Adyen e Pagar.me, mas o trabalho de reunir as informações financeiras ainda dependia dessa consolidação.',
    after:
      'Grande parte da consolidação e da carga passou a ser automatizada. O gateway evoluiu para um hub de receitas, integrado à orquestração, à recorrência, ao processamento fiscal, aos recebíveis e ao Livro Razão. A operação segue com análise e tratamento de exceções.',
    contribution: [
      'Reconstruí a arquitetura de pagamentos, combinando desenho dos serviços, implementação e coordenação das integrações.',
      'Adicionei Stark Bank, Pix recorrente, Pix Automático e suporte a múltiplas contas de múltiplos adquirentes ao gateway.',
      'Construí administração de transações, reembolsos e chargebacks e integração de vendas externas ao fluxo financeiro.',
      'Conectei gestão de recebíveis e conciliações ao fluxo contábil, gerindo a construção do Livro Razão com decisões de arquitetura junto ao Product Manager.',
    ],
    decisions: [
      {
        title: 'Centralizar a receita e distribuir os eventos',
        body: 'Transformei o gateway em um hub que reúne pagamentos de diferentes origens e disponibiliza eventos para os sistemas consumidores. Essa integração conecta o processamento da venda às responsabilidades financeiras posteriores.',
      },
      {
        title: 'Conferir antes de contabilizar',
        body: 'O fluxo incorpora conciliações financeira, fiscal e bancária. Recebíveis com divergências ficam retidos até o fechamento da pendência, antes de gerar os eventos de lançamento contábil.',
      },
      {
        title: 'Automatizar o caminho até o Protheus',
        body: 'A reconstrução passou a integrar os dados necessários à operação financeira e ao ERP. O resultado confirmado é a automação de grande parte do processo antes sustentado por planilhas e carga manual.',
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
    title: 'Um orquestrador para produtos, assinaturas e splits',
    subtitle:
      'Construção de uma plataforma que liga as regras dos produtos ao processamento de pagamentos e à divisão financeira e fiscal.',
    category: 'Produto · Backend · Pagamentos',
    period: 'Quero Educação · 02/2025 a 08/2025',
    role: 'Engineering Manager com atuação direta na construção',
    context:
      'Produtos diferentes compartilham a necessidade de cobrar, mas têm regras próprias de pedido, assinatura e distribuição dos valores. Como Engineering Manager na Quero Educação, construí um orquestrador para atender esse conjunto de necessidades.',
    before:
      'O problema de negócio ia além de encaminhar uma cobrança ao adquirente: era necessário representar regras de processamento, gerir assinaturas e coordenar a divisão dos pagamentos e das notas fiscais para diferentes produtos.',
    after:
      'A plataforma passou a reunir essas responsabilidades de orquestração, conectando os produtos ao processamento financeiro.',
    contribution: [
      'Construí o orquestrador durante minha atuação como Engineering Manager, mantendo responsabilidade direta pelo desenvolvimento.',
      'Implementei regras de negócio de processamento e gestão de assinaturas para diversos produtos.',
      'Construí os fluxos de split de pagamento e de nota fiscal.',
      'Nas evoluções posteriores, trabalhei em identificação do cliente na tokenização e configuração do texto de identificação da compra por cliente.',
    ],
    decisions: [
      {
        title: 'Representar a regra do produto na orquestração',
        body: 'O serviço concentra regras de processamento, assinaturas e splits. Essa responsabilidade o coloca entre a experiência de compra dos produtos e os serviços de pagamento e processamento fiscal.',
      },
      {
        title: 'Tratar a divisão financeira e fiscal',
        body: 'A construção contempla tanto o split do pagamento quanto o da nota fiscal. São duas responsabilidades do mesmo fluxo comercial que precisam ser representadas pela plataforma.',
      },
      {
        title: 'Preservar o contexto de cada cliente',
        body: 'As contribuições posteriores incluem identificação do cliente que abre a sessão de tokenização e configuração do soft descriptor, o texto que identifica a compra. Elas tornam explícito qual produto está originando a operação.',
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
      'CMS headless e uma base web compartilhada para transformar conteúdo e identidade de faculdades em sites publicados.',
    category: 'Plataforma · Frontend · Autonomia editorial',
    period: 'Quero Educação · 02/2025 a 08/2025',
    role: 'Engineering Manager e construtor da plataforma',
    context:
      'Publicar sites para diferentes instituições exige combinar conteúdo, identidade visual e uma estrutura técnica reutilizável. Construí o CMS headless e a plataforma de publicação como Engineering Manager na Quero Educação, com atuação direta no produto e na engenharia.',
    before:
      'A necessidade era viabilizar a criação de múltiplos sites institucionais de faculdades e oferecer autonomia de publicação, preservando uma base compartilhada para a experiência web.',
    after:
      'A plataforma viabilizou a publicação de sites institucionais de diferentes faculdades, incluindo unialphaville.com.br. A construção ocorreu na Quero Educação, mesmo com o uso e a evolução da plataforma em etapas posteriores da minha trajetória.',
    contribution: [
      'Construí a plataforma web e o CMS headless para publicação de múltiplos sites institucionais.',
      'Combinei Vue, Nuxt e TypeScript à gestão de conteúdo com Directus.',
      'Trabalhei na base compartilhada para sites de diferentes marcas e na autonomia de publicação de conteúdo.',
      'Em evolução posterior, escrevi um guia não técnico do data layer para aproximar a implementação de Marketing, Produto e análise de dados.',
    ],
    decisions: [
      {
        title: 'Separar conteúdo e apresentação',
        body: 'O CMS headless organiza o conteúdo, enquanto a aplicação web cuida da apresentação. Essa é a base da plataforma construída para publicar os sites institucionais de diferentes faculdades.',
      },
      {
        title: 'Compartilhar a base entre marcas',
        body: 'A plataforma utiliza uma base de frontend com Nuxt, Vue e TypeScript para sustentar múltiplos sites. A reutilização faz parte do desenho do produto, junto à possibilidade de publicação por instituição.',
      },
      {
        title: 'Explicar a instrumentação para quem usa os dados',
        body: 'A documentação posterior do data layer traduz o funcionamento da camada de dados para públicos de Marketing, Produto e análise. O trabalho também inclui tornar decisões técnicas compreensíveis para outras áreas.',
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
      'Engenharia full stack para marketplaces educacionais: descoberta, relevância, SEO técnico, performance e jornada de conversão.',
    category: 'Marketplaces · Busca · Experiência web',
    period: 'Melhor Escola → Quero Educação · 2021 a 2025',
    role: 'Frontend Pleno → Full Stack Sênior → Staff Software Engineer',
    context:
      'Minha atuação em produtos web atravessa a jornada do aluno e as ferramentas de quem administra as ofertas. Na Melhor Escola, trabalhei da área do gestor a pagamentos e reconstrução do marketplace. Como Staff na Quero Educação, atuei nas páginas de listagem do Quero Bolsa e do Quero Escola.',
    before:
      'Os desafios abrangiam organizar páginas, ofertas e alunos; evoluir checkout e pagamentos; reconstruir a base web; e apresentar ofertas relevantes por localização. Busca, indexação, renderização e velocidade faziam parte do mesmo problema de experiência.',
    after:
      'As entregas conectaram áreas administrativas, pagamentos, bases reutilizáveis de frontend e páginas de listagem com busca geoespacial, SEO e performance. Esse percurso combina implementação de backend e frontend com decisões compartilhadas em nível Staff.',
    contribution: [
      'Na Melhor Escola, desenvolvi a área do gestor com Nuxt e TypeScript, incluindo gestão de páginas, ofertas, alunos e acesso por perfil.',
      'Como Full Stack Sênior, trabalhei em pagamentos com PHP/Laravel, integrações com Pagar.me e Protheus e na reconstrução web com Nuxt, Layers e Nx.',
      'Como Staff na Quero Educação, desenvolvi páginas de listagem com OpenSearch, geolocalização e mapas, estratégias de cache, SEO e Core Web Vitals.',
      'Implementei busca por proximidade geográfica, deduplicação de cursos e apresentação de ofertas no marketplace.',
    ],
    decisions: [
      {
        title: 'Conectar relevância e localização',
        body: 'A busca por proximidade geográfica e a deduplicação de cursos atuam diretamente na apresentação de ofertas. A localização participa da descoberta, junto da organização dos resultados que o usuário recebe.',
      },
      {
        title: 'Tratar descoberta e renderização em conjunto',
        body: 'Nas páginas de listagem, trabalhei com renderização no servidor, SEO técnico, dados estruturados, URLs canônicas e Core Web Vitals. A engenharia contempla tanto os mecanismos de busca quanto a experiência de quem navega.',
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
    title: 'Um serviço fiscal em Go, construído do zero com IA',
    subtitle:
      'Construção individual orientada a especificações, com fila persistente, controle de concorrência e publicação de eventos.',
    category: 'Sistemas distribuídos · Go · Engenharia com IA',
    period: 'Construção e evolução do serviço fiscal',
    role: 'Construção individual com assistência de IA',
    context:
      'Construí do zero um serviço fiscal agnóstico a provedor para integrar emissores de notas e organizar o processamento fiscal. Usei especificações e assistência de IA na construção, mantendo a responsabilidade pelo desenho e pela implementação do serviço.',
    before:
      'O problema técnico era estruturar um serviço fiscal capaz de representar o domínio, coordenar processamento assíncrono, lidar com falhas dos provedores e publicar os eventos resultantes.',
    after:
      'A construção entregou a fundação Go, o modelo de domínio, a máquina de estados, a fila PostgreSQL, mecanismos de recuperação e a outbox Kafka. As entregas foram validadas incrementalmente com provedor simulado.',
    contribution: [
      'Construí individualmente o serviço, do desenho inicial às entregas de implementação, com assistência de IA declarada.',
      'Modelei o domínio fiscal, seus estados e eventos e implementei a coordenação do trabalho assíncrono.',
      'Implementei aquisição de tarefas com SKIP LOCKED e fencing, circuit breaker, watchdogs e observabilidade do processamento.',
      'Construí a outbox transacional e o mecanismo de publicação para Kafka.',
    ],
    decisions: [
      {
        title: 'Persistir o trabalho e controlar quem o executa',
        body: 'A fila usa PostgreSQL e aquisição de tarefas com SKIP LOCKED e fencing. Esses mecanismos fazem parte do controle de concorrência e da coordenação dos processadores.',
      },
      {
        title: 'Desenhar a recuperação de falhas',
        body: 'Circuit breaker e watchdogs compõem o processamento junto da máquina de estados e da observabilidade. A construção considera a integração externa e o acompanhamento de tarefas, além do caminho de sucesso.',
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
      'Domínio, fila, controle de concorrência, recuperação e publicação de eventos implementados.',
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
    title: 'Divergência resolvida antes do Livro Razão',
    subtitle:
      'Controles de conciliação, autonomia para a operação e rastreabilidade das alterações no caminho entre recebíveis e contabilidade.',
    category: 'Full stack · Controles financeiros · Liderança',
    period: 'Construção e evolução ao longo da trajetória',
    role: 'Construção de recebíveis e gestão da construção do Livro Razão',
    context:
      'Construí a gestão de recebíveis para prever entradas mensais e conferir pagamentos com adquirentes, notas e extratos bancários. No Livro Razão, meu papel foi gerir a construção e tomar decisões de arquitetura junto ao Product Manager para encaminhar dados corretos ao ERP contábil.',
    before:
      'Diferenças entre o recebível e as fontes de conferência precisam ser identificadas e tratadas antes do lançamento contábil. A operação também precisa entender o motivo da divergência, realizar correções e identificar quem alterou cada informação.',
    after:
      'O backoffice apresenta alertas e um formulário para resolver divergências. A máquina de estados impede a publicação dos recebíveis divergentes; os eventos contábeis são enviados após o fechamento da pendência. Alterações registram o usuário responsável e os estados anterior e posterior.',
    contribution: [
      'Construí gestão de recebíveis e conciliações financeira, fiscal e bancária.',
      'Implementei o controle por estado que retém recebíveis divergentes antes da publicação para o Livro Razão.',
      'Evoluí a interface de análise de splits em React e Laravel, distinguindo taxa de divergência e organizando o veredito e as evidências de conciliação.',
      'Iniciei a substituição de contas administrativas compartilhadas por identificação individual com Keycloak e auditoria, participando da implantação.',
      'Geri a construção do Livro Razão e defini sua arquitetura junto ao Product Manager, com foco no envio correto ao ERP.',
    ],
    decisions: [
      {
        title: 'Usar o estado como condição de publicação',
        body: 'Se o recebível está em divergência, ele não é publicado. A regra foi validada com testes unitários, testes manuais locais e validação em homologação.',
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
