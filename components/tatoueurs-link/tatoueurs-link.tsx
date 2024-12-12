'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const TatoueursLink = () => {
  const pathname = usePathname();
  return (
    <Link
      className="link-light sm:link-dark"
      href={pathname === '/' ? '#tatoueurs' : '/#tatoueurs'}
    >
      Tatoueurs
    </Link>
  );
};
