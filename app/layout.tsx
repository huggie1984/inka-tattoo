import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { TatoueursLink } from '@/components/tatoueurs-link/tatoueurs-link';
import { ContactLink } from '@/components/contact-link/contact-link';
import { Roboto } from 'next/font/google';
import { ReactNode } from 'react';

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
        <header className="flex flex-col md:flex-row p-4 md:p-6 bg-white text-black">
          <Link href="/" className="text-xl font-black mb-4 md:mb-0">
            INK&apos;a TATTOO LYON
          </Link>
          <nav className="flex gap-4 ml-auto mr-auto md:ml-auto md:mr-0">
            <TatoueursLink />
            <ContactLink />
            <Link className="link-dark" href="/shop">
              Shop
            </Link>
            <Link className="link-dark" href="/news">
              News
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
