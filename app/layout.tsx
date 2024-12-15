import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import { ReactNode } from 'react';
import { ContactSection } from '@/components/contact-section/contact-section';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'], // Desired weights
  variable: '--font-roboto', // Variable name
});

export const metadata: Metadata = {
  title: `INK'A TATTOO`,
  description: 'A description that will be good for seo :-)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <header className="flex flex-col sm:flex-row bg-white text-black">
          <Link
            href="/"
            className="text-2xl font-black sm:mb-0 pt-4 pb-2 px-4 sm:p-6"
          >
            INK&apos;A TATTOO LYON
          </Link>
          <nav className="flex justify-center gap-4 mx-auto sm:ml-auto sm:mr-0 w-full sm:w-auto pt-2 pb-2 px-4 sm:p-6 bg-white overflow-x-scroll">
            <Link className="link-dark" href="/">
              Home
            </Link>
            <Link className="link-dark" href="/tatoueurs">
              Tatoueurs
            </Link>
            <Link className="link-dark whitespace-nowrap" href="/shop">
              Shop
            </Link>
            <Link className="link-dark" href="/news">
              News
            </Link>
            <Link className="link-dark" href="/products">
              Products
            </Link>
          </nav>
        </header>
        {children}
        <ContactSection />
      </body>
    </html>
  );
}
