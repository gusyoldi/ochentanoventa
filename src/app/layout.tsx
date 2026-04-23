import { montserratSans, robotoSans } from '@/app/_lib/fonts/fonts';
import JsonLd from '@/app/_lib/seo/JsonLd';
import Footer from '@/components/layout/Footer/Footer';
import Navbar from '@/components/layout/Navbar/Navbar';
import Toaster from '@/components/ui/Toaster';
import { layoutMetadata } from './_lib/seo/metadata';
import './_styles/globals.css';

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
