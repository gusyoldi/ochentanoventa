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
  { src: '/images/carousel2/foto1.webp', alt: 'Banda Ochenta Noventa en vivo - Primer plano cantante' },
  { src: '/images/carousel2/foto2.webp', alt: 'Integrantes de Ochenta Noventa con instrumentos acústicos' },
  { src: '/images/carousel2/foto3.webp', alt: 'Show en vivo de Ochenta Noventa en evento corporativo' },
  { src: '/images/carousel2/foto4.webp', alt: 'Banda Ochenta Noventa tocando clásicos del rock' },
];

export const CAROUSEL_3_IMG = [
  {
    src: '/images/carousel3/foto1.webp',
    alt: 'Banda Ochenta Noventa tocando en evento de tipo festival - Escenario principal',
  },
  {
    src: '/images/carousel3/foto2.webp',
    alt: 'Banda Ochenta Noventa tocando en evento de tipo festival - Público disfrutando',
  },
  {
    src: '/images/carousel3/foto3.webp',
    alt: 'Banda Ochenta Noventa tocando en evento de tipo festival - Detalle instrumentos',
  },
  {
    src: '/images/carousel3/foto4.webp',
    alt: 'Banda Ochenta Noventa tocando en evento de tipo festival - Cierre del show',
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

export const EVENTS_SECTION_CONTENT = {
  title: 'Eventos',
  subtitle: 'Privados',
  paragraphs: [
    'Con más de 40 shows en vivo, Ochenta Noventa continúa programando recepciones de Casamientos, Cumpleaños y eventos corporativos.',
    {
      text: 'Formatos:',
      subItems: [
        'Acústico para disfrutar de los sonidos de instrumentos característicos del Country.',
        'Eléctrico para festejar bien arriba.',
        'Mixto para un evento súper climático y completo.',
      ],
    },
  ],
};

export const VOLUMES_LIST: VolumeType[] = [
  {
    src: '/images/volumes/foto1.webp',
    alt: 'Portada del single Qué ves? - Ochenta Noventa feat. Bochi Bozzalla',
    title: 'Qué ves?',
    aditional: 'ft. Bochi Bozzalla Las Pastillas del Abuelo',
    year: '2024',
    format: 'Single',
  },
  {
    src: '/images/volumes/foto2.webp',
    alt: 'Portada del single Rezo por vos - Versión Ochenta Noventa',
    title: 'Rezo por vos',
    year: '2023',
    format: 'Single',
  },
  {
    src: '/images/volumes/foto3.webp',
    alt: 'Portada del single Sin cadenas - Versión Ochenta Noventa',
    title: 'Sin cadenas',
    year: '2023',
    format: 'Single',
  },
  {
    src: '/images/volumes/foto4.webp',
    alt: 'Portada del single Nada es para siempre - Versión Ochenta Noventa',
    title: 'Nada es para siempre',
    year: '2023',
    format: 'Single',
  },
  {
    src: '/images/volumes/foto5.webp',
    alt: 'Portada del álbum Volumen 2 - Ochenta Noventa',
    title: 'Volumen 2',
    year: '2022',
    songs: ['Lunes por la madrugada', 'Seminare', 'Lamento boliviano'],
  },
  {
    src: '/images/volumes/foto6.webp',
    alt: 'Portada del álbum Volumen 1 - Ochenta Noventa',
    title: 'Volumen 1',
    year: '2021',
    songs: [
      'Fabricante de mentiras',
      'Dame una señal',
      'En la ciudad de la furia',
    ],
  },
];
