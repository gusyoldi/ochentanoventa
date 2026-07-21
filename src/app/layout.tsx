import { montserratSans, robotoSans } from '@/app/_lib/fonts/fonts';
import JsonLd from '@/app/_lib/seo/JsonLd';
import Footer from '@/components/layout/Footer/Footer';
import Navbar from '@/components/layout/Navbar/Navbar';
import Toaster from '@/components/ui/Toaster';
import { layoutMetadata } from './_lib/seo/metadata';
import './_styles/globals.css';

//Import Mixpanel SDK
import mixpanel from "mixpanel-browser";

// Create an instance of the Mixpanel object, your token is already added to this snippet
mixpanel.init('47a7a696fc445fed7c658478583857bf', {
  autocapture: true,
  record_sessions_percent: 100,
})

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
