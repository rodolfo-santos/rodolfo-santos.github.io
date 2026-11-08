export interface SpeakingEvent {
  id: string;
  title: string;
  institution: string;
  year: string;
  role: 'Palestrante' | 'Participante';
  description: string;
  image: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  };
  link: {
    href: string;
    label: string;
  };
}

export const speakingEvents: SpeakingEvent[] = [
  {
    id: 'fatec-performance-web-2024',
    title: 'Performance Web e Core Web Vitals',
    institution: 'FATEC Jacareí',
    year: '2024',
    role: 'Palestrante',
    description:
      'Compartilhei práticas de desempenho e experiência web na FATEC Jacareí, levando a experiência de engenharia para uma conversa sobre como construir sites melhores para quem os utiliza.',
    image: {
      src: '/images/speaking/fatec-performance-web.webp',
      alt: 'Rodolfo na palestra de Performance Web da FATEC Jacareí, com a apresentação projetada ao fundo.',
      caption: 'Registro da palestra na FATEC Jacareí, em 2024.',
      width: 480,
      height: 480,
    },
    link: {
      href: 'https://www.linkedin.com/feed/update/urn:li:activity:7254986455985360897/',
      label: 'Ver relato da palestra no LinkedIn',
    },
  },
];
