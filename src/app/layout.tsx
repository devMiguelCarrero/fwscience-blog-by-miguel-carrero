import type { Metadata } from 'next';
import { Oswald, Roboto } from 'next/font/google';
import '@/shared/common/main-split.scss';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '700'],
  display: 'swap',
  variable: '--font-oswald',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Next.js Test Blog',
    default: 'Next.js Test Blog by devMiguelCarrero',
  },
  authors: [
    { url: 'https://github.com/devMiguelCarrero', name: 'devMiguelCarrero' },
  ],
  description:
    'This is a custom Blog made with Next.js by devMiguelCarrero with the purpose of accomplish a coding test sent by fwscience. In the future, this will be used as a Next.js blog boilerplate',
  keywords:
    'Next.js, Blog, Coding Test, devMiguelCarrero, fwscience, Web Development, JavaScript, React',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
