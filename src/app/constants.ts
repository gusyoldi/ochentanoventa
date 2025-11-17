export type VolumeType = {
  src: string;
  alt: string;
  title: string;
  year: string;
  aditional?: string;
  format?: string;
  songs?: string[];
};

export const CAROUSEL_2_IMG = [
  { src: '/images/carousel2/foto1.webp', alt: 'Slide 1' },
  { src: '/images/carousel2/foto2.webp', alt: 'Slide 2' },
  { src: '/images/carousel2/foto3.webp', alt: 'Slide 3' },
  { src: '/images/carousel2/foto4.webp', alt: 'Slide 4' },
];

export const CAROUSEL_3_IMG = [
  {
    src: '/images/carousel3/foto1.webp',
    alt: 'Banda Ochenta Noventa tocando en evento de tipo festival - 1',
  },
  {
    src: '/images/carousel3/foto2.webp',
    alt: 'Banda Ochenta Noventa tocando en evento de tipo festival - 2',
  },
  {
    src: '/images/carousel3/foto3.webp',
    alt: 'Banda Ochenta Noventa tocando en evento de tipo festival - 3',
  },
  {
    src: '/images/carousel3/foto4.webp',
    alt: 'Banda Ochenta Noventa tocando en evento de tipo festival - 4',
  },
];

export const HERO_SECTION_CONTENT = {
  title: 'Rock argentino',
  subtitle: 'En versiones distintas',
  seoTitle: 'Ochenta Noventa - Banda de Rock Argentino para tu evento',
  paragraphs: [
    {
      text: 'es una banda de Buenos Aires que elige clásicos del',
      highlights: [
        { text: 'Ochenta Noventa', position: 'start' },
        { text: 'Rock Argentino', position: 'middle' },
        {
          text: 'Country, Folk, Rock & Roll y Blues',
          position: 'end',
        },
      ],
      fullText:
        'Ochenta Noventa es una banda de Buenos Aires que elige clásicos del Rock Argentino para hacer sus propias versiones, combinando estilos como Country, Folk, Rock & Roll y Blues.',
    },
    {
      text: 'con un formato ideal para sonar en',
      highlights: [
        { text: 'Es un proyecto artístico', position: 'start' },
        { text: 'eventos', position: 'end' },
      ],
      fullText:
        'Es un proyecto artístico con un formato ideal para sonar en eventos.',
    },
    {
      text: 'le dan el toque country y folk que destaca la propuesta.',
      highlights: [],
      fullText:
        'Instrumentos acústicos como el Banjo, la Mandolina, el Washboard y las cucharas le dan el toque country y folk que destaca la propuesta.',
    },
  ],
};

export const SPOTIFY_LINKS = {
  ALBUM: 'https://open.spotify.com/album/7bzp0pZEHxEo1LpcnZfLv5',
  ARTIST:
    'https://open.spotify.com/artist/1t7L3htJvTcz93Fa9aMiI6?si=UOBAljXzSP-pWnYKDBEL5Q',
};

export const VERSIONS_SECTION_CONTENT = {
  title: 'Versiones',
  subtitle: 'Estudio',
  paragraphs: [
    'Ochenta Noventa disfruta de re-versionar sus canciones preferidas, dándole una nueva vida a clásicos de nuestro queridísimo rock argentino.',
    'Contamos con varias versiones grabadas en estudio subidas a todas las plataformas digitales para que ustedes también puedan disfrutarlas.',
  ],
  spotifyText: 'Escuchar ahora',
};

export const VOLUMES_LIST: VolumeType[] = [
  {
    src: '/images/volumes/foto1.webp',
    alt: 'Slide 1',
    title: 'Qué ves?',
    aditional: 'ft. Bochi Bozzalla Las Pastillas del Abuelo',
    year: '2024',
    format: 'Single',
  },
  {
    src: '/images/volumes/foto2.webp',
    alt: 'Slide 2',
    title: 'Rezo por vos',
    year: '2023',
    format: 'Single',
  },
  {
    src: '/images/volumes/foto3.webp',
    alt: 'Slide 3',
    title: 'Sin cadenas',
    year: '2023',
    format: 'Single',
  },
  {
    src: '/images/volumes/foto4.webp',
    alt: 'Slide 4',
    title: 'Nada es para siempre',
    year: '2023',
    format: 'Single',
  },
  {
    src: '/images/volumes/foto5.webp',
    alt: 'Slide 5',
    title: 'Volumen 2',
    year: '2022',
    songs: ['Lunes por la madrugada', 'Seminare', 'Lamento boliviano'],
  },
  {
    src: '/images/volumes/foto6.webp',
    alt: 'Slide 6',
    title: 'Volumen 1',
    year: '2021',
    songs: [
      'Fabricante de mentiras',
      'Dame una señal',
      'En la ciudad de la furia',
    ],
  },
];
