'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const ContactLink = () => {
  const pathname = usePathname();
  return (
    <Link
      className="link-dark"
      href={pathname === '/' ? '#contact' : '/#contact'}
    >
      Contact
    </Link>
  );
};
