import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';
import Footer from '../lib/components/Footer';
import Navbar from '../lib/components/Navbar';
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
  title:
    'Ochenta Noventa - Clásicos del Rock Argentino para eventos en versiones propias',
  description:
    'La banda ofrece versiones únicas de clásicos del Rock Argentino para casamientos, cumpleaños y eventos corporativos en Buenos Aires.',
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
    <html lang="en">
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
        <Toaster
          position="bottom-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'black',
              border: '1px solid var(--color-gold)',
              color: 'var(--color-white)',
              fontFamily: 'var(--font-roboto)',
              fontWeight: '700',
            },
          }}
        />

        <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
