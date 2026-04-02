import { Metadata } from 'next';

export const layoutMetadata: Metadata = {
  metadataBase: new URL('https://ochentanoventa.com.ar'),
  alternates: {
    canonical: '/',
  },
  title:
    'Ochenta Noventa - Clásicos del Rock Argentino para eventos en versiones propias',
  description:
    'La banda ofrece versiones únicas de clásicos del Rock Argentino para casamientos, cumpleaños y eventos corporativos en Buenos Aires.',
  keywords: [
    'Rock Argentino',
    'Eventos',
    'Casamientos',
    'Banda en vivo',
    'Buenos Aires',
    'Covers',
    'Country',
    'Folk',
  ],
  authors: [{ name: 'Ochenta Noventa' }],
  openGraph: {
    title: 'Ochenta Noventa - Rock Argentino para tu evento',
    description:
      'Versiones únicas de clásicos del Rock Argentino para casamientos, cumpleaños y eventos corporativos.',
    url: 'https://ochentanoventa.com.ar',
    siteName: 'Ochenta Noventa',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Banda Ochenta Noventa tocando en vivo',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ochenta Noventa - Rock Argentino para tu evento',
    description:
      'Versiones únicas de clásicos del Rock Argentino para casamientos, cumpleaños y eventos corporativos.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
};
