import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
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
  title: 'Ochenta Noventa',
  description: 'Banda para eventos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${montserratSans.variable} antialiased`}
      >
        <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
