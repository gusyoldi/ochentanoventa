import { Montserrat, Roboto } from 'next/font/google';

export const robotoSans = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['700', '400', '100'],
});

export const montserratSans = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['800', '700'],
});
