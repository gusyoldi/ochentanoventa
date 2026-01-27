import type { HeroSectionContent } from '@/types';

export const HERO_SECTION_CONTENT: HeroSectionContent = {
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
