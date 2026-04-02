import Footer from '@/components/layout/Footer/Footer';
import Navbar from '@/components/layout/Navbar/Navbar';
import Toaster from '@/components/ui/Toaster';
import { montserratSans, robotoSans } from '@/lib/fonts/fonts';
import JsonLd from '@/lib/seo/JsonLd';
import './globals.css';
import { layoutMetadata } from './metadata';

export const metadata = layoutMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <JsonLd />
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
