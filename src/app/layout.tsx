import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import Script from 'next/script';

import Toaster from '@/lib/components/Toaster';
import Footer from '../lib/components/Footer';
import Navbar from '../lib/components/Navbar/Navbar';
import './globals.css';

const robotoSans = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['700', '400', '100'],
});
const montserratSans = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['800', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ochentanoventa.com.ar'),
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
    url: 'https://www.ochentanoventa.com.ar',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Ochenta Noventa (Sitio Oficial)',
              url: 'https://www.ochentanoventa.com.ar',
              logo: 'https://www.ochentanoventa.com.ar/logo.png',
            }),
          }}
        />
      </head>
      <body
        className={`${robotoSans.variable} ${montserratSans.variable} antialiased`}
      >
        <Toaster />

        <div id="main-content" className="grid h-dvh grid-rows-[auto_1fr_auto]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
