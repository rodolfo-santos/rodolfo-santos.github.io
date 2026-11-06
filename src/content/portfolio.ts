export const site = {
  name: 'Rodolfo dos Santos',
  role: 'Payments Engineering Manager',
  headlineLines: ['Engenharia que', 'conecta sistemas', 'e pessoas.'],
  intro:
    'Combino desenvolvimento, arquitetura e liderança para construir produtos web e plataformas de pagamentos, da experiência de compra à operação financeira. Com IA integrada à forma de desenvolver.',
  github: 'https://github.com/rodolfo-santos',
  linkedin: 'https://linkedin.com/in/rodolfosantos29',
};

export interface PortfolioCase {
  id: string;
  kicker: string;
  title: string;
  description: string;
  role: string;
  details: string[];
  tags: string[];
  theme: 'violet' | 'blue' | 'mint';
}

export const cases: PortfolioCase[] = [
  {
    id: 'pagamentos',
    kicker: 'Pagamentos e sistemas financeiros',
    title: 'Da compra à conciliação.',
    description:
      'Conecto checkout, pagamentos e recorrência à operação financeira. Minha atuação vai da arquitetura e implementação às integrações que levam cada transação até recebíveis, conciliação e contabilidade.',
    role: 'Arquitetura, implementação e liderança técnica',
    details: [
      'Construção de um ecossistema com gateway multiadquirente, orquestração de pagamentos, assinaturas e cobrança recorrente por cartão, Pix e boleto.',
      'Integrações com adquirentes, bancos e sistemas de gestão, cobrindo reembolsos, chargebacks, split e o ciclo de vida dos pedidos.',
      'Arquitetura e evolução de soluções para recebíveis, conciliação financeira, fiscal e bancária e consolidação contábil.',
    ],
    tags: ['Sistemas distribuídos', 'Eventos', 'Recorrência', 'Integrações'],
    theme: 'violet',
  },
  {
    id: 'produtos',
    kicker: 'Produtos web e plataformas',
    title: 'Encontrar. Comprar. Publicar.',
    description:
      'Construo experiências de ponta a ponta: marketplaces, busca, checkout e plataformas de publicação. Conecto frontend e backend para que a arquitetura acompanhe o produto e a jornada de quem usa.',
    role: 'Desenvolvimento full stack e construção de plataformas',
    details: [
      'Construção e evolução de marketplaces com Vue, Nuxt e TypeScript, incluindo áreas administrativas, ofertas, estoque e experiências white label.',
      'Busca com OpenSearch, geolocalização e mapas, com atenção a SEO técnico, renderização no servidor, desempenho e estratégias de cache.',
      'Na Quero Educação, como Engineering Manager, construí uma plataforma de sites institucionais e um CMS headless para dar autonomia de publicação às áreas de negócio.',
    ],
    tags: ['Vue e Nuxt', 'TypeScript', 'Busca e SEO', 'CMS headless'],
    theme: 'blue',
  },
  {
    id: 'ia',
    kicker: 'Engenharia com IA',
    title: 'Especificar. Construir. Verificar.',
    description:
      'Integro IA ao trabalho de engenharia com especificações, contexto e validação. Construo ferramentas e orquestro agentes para apoiar implementação, testes, documentação e investigação técnica.',
    role: 'Construção de ferramentas e orquestração de agentes',
    details: [
      'Desenvolvimento orientado a especificações e Harness Engineering com Claude e Codex, conectando instruções, evidências e verificações executáveis.',
      'Construção de MCPs, alimentação de bases para recuperação de conhecimento e orquestração de agentes com Maestri.',
      'Construção incremental de um serviço fiscal com assistência de IA, preservando decisões de arquitetura, processamento assíncrono e integração com diferentes provedores.',
    ],
    tags: ['Agentes', 'SDD e harnesses', 'MCP', 'RAG'],
    theme: 'mint',
  },
];

export const timeline = [
  {
    company: 'Melhor Escola',
    period: '08/2021 — 11/2022',
    role: 'Frontend Pleno',
    description:
      'Construção de experiências administrativas com Nuxt e TypeScript para gestão de páginas, ofertas e alunos, com acesso por perfil e testes.',
  },
  {
    company: 'Melhor Escola',
    period: '11/2022 — 07/2024',
    role: 'Full Stack Sênior',
    description:
      'Marketplaces, pagamentos e integrações financeiras, além da evolução para Nuxt 3, arquitetura white label e gestão de estoque com histórico.',
  },
  {
    company: 'Quero Educação',
    period: '07/2024 — 02/2025',
    role: 'Staff Software Engineer',
    description:
      'Busca e páginas de ofertas com OpenSearch, geolocalização, SEO, Core Web Vitals e cache, conectando arquitetura à experiência de descoberta.',
  },
  {
    company: 'Quero Educação',
    period: '02/2025 — 08/2025',
    role: 'Engineering Manager',
    description:
      'Construção de plataformas de publicação e orquestração de pagamentos, com atuação em sistemas financeiros, recorrência, integrações e liderança de engenharia.',
  },
  {
    company: 'Qeevo Group',
    period: '09/2025 — atual',
    role: 'Payments Engineering Manager',
    description:
      'Engenharia de uma plataforma que conecta pagamentos, sistemas financeiros e checkout de múltiplos produtos, combinando arquitetura, implementação, qualidade e desenvolvimento do time.',
  },
];

export const teaching = {
  title: 'Conhecimento ganha força quando circula.',
  body: 'Cinco anos como professor de tecnologia fazem parte de como lidero. Ensino, mentoria e compartilhamento de conhecimento atravessam meu trabalho: desenvolver engenheiros, discutir decisões e aproximar tecnologia das necessidades de Produto e Negócio.',
};
