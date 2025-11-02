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
