import { site } from './portfolio';

export interface ResumeExperience {
  company: string;
  roles: { title: string; period: string }[];
  highlights: string[];
}

export const publicResume = {
  name: site.name,
  currentRole: site.role,
  currentEmployer: site.employer,
  positioning: 'Engenharia de software, arquitetura e liderança técnica',
  opportunities: site.opportunities,
  updatedAt: '2026-11-08',
  updatedLabel: '08/11/2026',
  description:
    'Currículo público de Rodolfo dos Santos: engenharia de software, arquitetura, pagamentos, produtos web e liderança. Payments Engineering Manager na Qeevo Group.',
  summary: [
    'Engenheiro de software com mais de dez anos de trajetória em tecnologia, especializado em sistemas distribuídos, pagamentos e operações financeiras. Combino desenvolvimento full stack, arquitetura e liderança, mantendo atuação direta na construção dos sistemas. Hoje sou Payments Engineering Manager na Qeevo Group.',
    'Pagamentos e arquitetura: construo soluções que conectam cobrança, assinaturas, recebíveis, conciliação financeira, fiscal e bancária e contabilidade. Trabalho com APIs, eventos e processamento assíncrono em Ruby on Rails, Go e PHP/Laravel, integrando adquirentes, bancos e o sistema de gestão TOTVS Protheus.',
    'Produtos web: desenvolvo marketplaces, checkout, áreas administrativas e plataformas de publicação. Uso JavaScript, TypeScript, Vue e Nuxt para construir experiências de descoberta e compra, com busca por localização, OpenSearch, SEO técnico, renderização no servidor e atenção a Core Web Vitals.',
    'Qualidade e liderança: desenvolvo com testes unitários e de ponta a ponta, documentação, revisão de código e integração contínua. Trabalho com observabilidade, resposta a incidentes e infraestrutura em parceria com SRE. Minha experiência inclui cinco anos como professor de tecnologia, além de mentoria, contratação e desenvolvimento de engenheiros.',
    'Engenharia com IA: utilizo desenvolvimento orientado a especificações, Harness Engineering, Claude e Codex. Construo integrações com MCPs, alimento bases para recuperação de conhecimento e orquestro agentes com Maestri. Essas práticas complementam minha atuação em arquitetura, implementação, testes e investigação técnica.',
  ],
  achievements: [
    {
      title: 'Da venda à operação financeira',
      text: 'Reconstruí a arquitetura de pagamentos que conecta os produtos à operação financeira e contábil. Grande parte da consolidação e da carga no Protheus, antes realizadas a partir de planilhas dispersas, passou a ser automatizada.',
      href: '/projetos/arquitetura-financeira/',
    },
    {
      title: 'Plataformas construídas como gestor',
      text: 'Como Engineering Manager na Quero Educação, construí uma plataforma de publicação e gestão de conteúdo para sites institucionais e um orquestrador de pagamentos, assinaturas e divisão financeira e fiscal para diferentes produtos.',
      href: '/projetos/plataforma-de-publicacao/',
    },
    {
      title: 'Da descoberta à compra',
      text: 'Na Melhor Escola e na Quero Educação, trabalhei na construção de marketplaces, áreas administrativas, pagamentos e busca por localização. Como Staff, atuei em páginas de listagem, SEO, desempenho web e padrões compartilhados.',
      href: '/projetos/marketplaces-e-busca/',
    },
  ],
  experience: [
    {
      company: 'Qeevo Group',
      roles: [
        { title: 'Payments Engineering Manager', period: '09/2025 a atual' },
      ],
      highlights: [
        'Lidero a engenharia de pagamentos, sistemas financeiros e checkout de múltiplos produtos, com atuação direta em arquitetura, implementação e integrações.',
        'Trabalho em serviços orientados a eventos, qualidade, observabilidade e desenvolvimento do time. Minha atuação conecta os problemas de Produto e Negócio à construção e à operação dos sistemas.',
      ],
    },
    {
      company: 'Quero Educação',
      roles: [{ title: 'Engineering Manager', period: '02/2025 a 08/2025' }],
      highlights: [
        'Construí a plataforma web e o sistema de gestão de conteúdo para publicar sites institucionais de diferentes faculdades, incluindo UniAlphaville.',
        'Construí o orquestrador de pagamentos de múltiplos produtos, com regras de processamento, gestão de assinaturas e divisão de pagamentos e notas fiscais.',
        'Combinei responsabilidades de gestão com construção técnica em sistemas financeiros, recorrência e integrações com adquirentes.',
      ],
    },
    {
      company: 'Quero Educação',
      roles: [
        { title: 'Staff Software Engineer', period: '07/2024 a 02/2025' },
      ],
      highlights: [
        'Desenvolvi páginas de listagem do Quero Bolsa e do Quero Escola, com OpenSearch, geolocalização e mapas.',
        'Trabalhei em SEO técnico, Core Web Vitals, estratégias de cache e padrões compartilhados para as experiências de descoberta de ofertas.',
      ],
    },
    {
      company: 'Melhor Escola',
      roles: [
        {
          title: 'Engenheiro de Software Full Stack Sênior',
          period: '11/2022 a 07/2024',
        },
        {
          title: 'Engenheiro de Software Frontend Pleno',
          period: '08/2021 a 11/2022',
        },
      ],
      highlights: [
        'Como Sênior, trabalhei em pagamentos dos marketplaces com PHP/Laravel, integrações com Pagar.me e Protheus e gestão de estoque com histórico e balanço.',
        'Participei da reconstrução web com Nuxt, Layers e Nx para experiências de múltiplas marcas.',
        'Como Frontend Pleno, desenvolvi a área do gestor em Nuxt e TypeScript, com gestão de páginas, ofertas e alunos, acesso por perfil, versionamento e testes.',
      ],
    },
    {
      company: 'SoluCX',
      roles: [
        { title: 'Squad Leader', period: '04/2021 a 09/2021' },
        {
          title: 'Engenheiro de Software Frontend Pleno',
          period: '11/2020 a 09/2021',
        },
      ],
      highlights: [
        'Desenvolvimento de produtos web e atuação em liderança de squad.',
      ],
    },
    {
      company: 'Embraer',
      roles: [
        {
          title: 'Analista de Sistemas Financeiros',
          period: '09/2020 a 11/2020',
        },
        {
          title: 'Estágio em Análise de Sistemas',
          period: '02/2020 a 09/2020',
        },
      ],
      highlights: [
        'Atuei no setor financeiro, com liderança de solução e trabalho em separação e reintegração de dados, utilizando Java e Spring Boot.',
        'Tive uso prático de Oracle Database e SQL Server nesse contexto.',
      ],
    },
    {
      company: 'Anova Sistemas',
      roles: [
        { title: 'Engenheiro de Software Júnior', period: '11/2019 a 01/2020' },
      ],
      highlights: [],
    },
    {
      company: 'Microcamp',
      roles: [
        { title: 'Professor de Tecnologia', period: '03/2015 a 02/2020' },
      ],
      highlights: [
        'Ensinei tecnologia, informática e web design, desenvolvendo uma base de comunicação e compartilhamento de conhecimento que levo para a liderança de engenharia.',
      ],
    },
    {
      company: 'Escola de Governo do Estado de São Paulo',
      roles: [{ title: 'Estagiário de TI', period: '01/2014 a 01/2015' }],
      highlights: [],
    },
  ] satisfies ResumeExperience[],
  education: [
    {
      degree:
        'MBA em Arquitetura de Software, Ciência de Dados e Cybersecurity',
      institution: 'PUC Campinas',
      period: '10/2024 a 10/2025',
    },
    {
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'FATEC São José dos Campos, Prof. Jessen Vidal',
      period: '07/2017 a 12/2022',
    },
    {
      degree: 'Técnico em Redes de Computadores',
      institution: 'SENAI São Paulo',
      period: '2015 a 2016',
    },
  ],
};
