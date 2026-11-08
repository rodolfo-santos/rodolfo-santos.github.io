export interface ProjectVisual {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}
const alpha: ProjectVisual = {
  src: '/images/projects/unialphaville.webp',
  alt: 'Site UniAlphaville com identidade dourada, vitrine de pós-graduação e busca de cursos.',
  caption:
    'UniAlphaville · imagem publicada na seção de projetos do meu LinkedIn.',
  width: 480,
  height: 267,
};
const asp: ProjectVisual = {
  src: '/images/projects/uniasp.webp',
  alt: 'Site UniASP com identidade turquesa e jornada de descoberta de cursos.',
  caption: 'UniASP · imagem publicada na seção de projetos do meu LinkedIn.',
  width: 480,
  height: 247,
};
const school: ProjectVisual = {
  src: '/images/projects/melhor-escola.webp',
  alt: 'Marketplace Melhor Escola com busca de escolas e navegação por etapa de ensino.',
  caption:
    'Melhor Escola · imagem publicada na seção de projetos do meu LinkedIn.',
  width: 480,
  height: 275,
};
const ledger: ProjectVisual = {
  src: '/images/projects/accounting-login.webp',
  alt: 'Tela de entrada do motor contábil, com identidade violeta e formulário de acesso.',
  caption:
    'Motor contábil · tela de entrada publicada no meu LinkedIn. Minha atuação: gestão da construção e decisões de arquitetura com Produto.',
  width: 480,
  height: 271,
};
export const projectVisuals: Record<string, ProjectVisual[]> = {
  'arquitetura-financeira': [ledger],
  'plataforma-de-publicacao': [alpha, asp],
  'marketplaces-e-busca': [school],
  'conciliacao-e-rastreabilidade': [ledger],
};
export const showcaseProducts: Array<{
  title: string;
  description: string;
  role: string;
  href: string;
  productionHref: string;
  image: ProjectVisual;
  color: string;
}> = [
  {
    title: 'UniAlphaville',
    description:
      'Uma das experiências institucionais que exemplificam a plataforma de sites e o CMS headless que construí.',
    role: 'Construção da plataforma · Engineering Manager',
    href: '/projetos/plataforma-de-publicacao/',
    productionHref: 'https://unialphaville.com.br/',
    image: alpha,
    color: '#eac962',
  },
  {
    title: 'UniASP',
    description:
      'Outra identidade, a mesma base de publicação: conteúdo, tema e jornada adaptados à instituição.',
    role: 'Plataforma de publicação · Frontend e CMS',
    href: '/projetos/plataforma-de-publicacao/',
    productionHref: 'https://uniasp.com.br/',
    image: asp,
    color: '#83e7cd',
  },
  {
    title: 'Melhor Escola',
    description:
      'Marketplace em que atuei no frontend, backend, checkout, pagamentos e evolução da arquitetura web.',
    role: 'Desenvolvimento full stack · Marketplaces',
    href: '/projetos/marketplaces-e-busca/',
    productionHref: 'https://www.melhorescola.com.br/',
    image: school,
    color: '#ff9b64',
  },
];
export const companyLogos: Record<string, string> = {
  'Qeevo Group': '/images/companies/qeevo.webp',
  'Quero Educação': '/images/companies/quero-educacao.webp',
  'Melhor Escola': '/images/companies/melhor-escola.webp',
  SoluCX: '/images/companies/solucx.webp',
  Embraer: '/images/companies/embraer.webp',
  'Anova Sistemas': '/images/companies/anova.webp',
  'Escola de Governo de São Paulo': '/images/companies/escola-governo.webp',
};
