// Default fallback images for when Strapi fails
export const DEFAULT_CAROUSEL_IMAGES = [
  { src: '/images/placeholder-carousel.webp', alt: 'Ochenta Noventa' },
];

// Carousel 1 local images (fallback from /public)
export const DEFAULT_CAROUSEL_1_IMAGES = [
  { src: '/images/carousel1/foto1.webp', alt: 'Ochenta Noventa - Foto 1' },
  { src: '/images/carousel1/foto2.webp', alt: 'Ochenta Noventa - Foto 2' },
  { src: '/images/carousel1/foto3.webp', alt: 'Ochenta Noventa - Foto 3' },
  { src: '/images/carousel1/foto4.webp', alt: 'Ochenta Noventa - Foto 4' },
];

// Carousel 2 local images (fallback from /public)
export const DEFAULT_CAROUSEL_2_IMAGES = [
  { src: '/images/carousel2/foto1.webp', alt: 'Ochenta Noventa - Foto 5' },
  { src: '/images/carousel2/foto2.webp', alt: 'Ochenta Noventa - Foto 6' },
  { src: '/images/carousel2/foto3.webp', alt: 'Ochenta Noventa - Foto 7' },
  { src: '/images/carousel2/foto4.webp', alt: 'Ochenta Noventa - Foto 8' },
];

// Carousel 3 local images (fallback from /public)
export const DEFAULT_CAROUSEL_3_IMAGES = [
  { src: '/images/carousel3/foto1.webp', alt: 'Ochenta Noventa - Foto 9' },
  { src: '/images/carousel3/foto2.webp', alt: 'Ochenta Noventa - Foto 10' },
  { src: '/images/carousel3/foto3.webp', alt: 'Ochenta Noventa - Foto 11' },
  { src: '/images/carousel3/foto4.webp', alt: 'Ochenta Noventa - Foto 12' },
];

export const DEFAULT_BANNER = null; // Banner is optional, return null on error

export const DEFAULT_LAST_VOLUME = {
  songs: ['Fué amor', 'Madre escúchame', 'El loco ft Chelo Zimbabwe', 'Bajan'],
  volume: 'Volumen 3',
  title: '¡Último lanzamiento!',
  image: { url: '/images/volumes/last.webp' },
  link: 'https://open.spotify.com/album/7bzp0pZEHxEo1LpcnZfLv5',
};
