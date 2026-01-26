import type { SectionContent } from '@/lib/types';

export const VERSIONS_SECTION_CONTENT: SectionContent & {
  spotifyText: string;
} = {
  title: 'Versiones',
  subtitle: 'Estudio',
  paragraphs: [
    'Ochenta Noventa disfruta de re-versionar sus canciones preferidas, dándole una nueva vida a clásicos de nuestro queridísimo rock argentino.',
    'Contamos con varias versiones grabadas en estudio subidas a todas las plataformas digitales para que ustedes también puedan disfrutarlas.',
  ],
  spotifyText: 'Escuchar ahora',
};
