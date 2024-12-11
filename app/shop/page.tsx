import { ContactSection } from '@/components/contact-section/contact-section';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container flex flex-col gap-4 mb-4">
      <section className="grid grid-cols-6 gap-1">
        <Image
          src="/shop/shop_1.webp"
          alt="tattoo shop"
          width={2790}
          height={1868}
          className="col-span-4 w-full h-full object-cover"
        />
        <Image
          src="/shop/shop_2.webp"
          alt="tattoo shop"
          width={1236}
          height={1698}
          className="col-span-2 w-full h-full object-cover"
        />
        <Image
          src="/shop/shop_3.webp"
          alt="tattoo shop"
          width={738}
          height={932}
          className="col-span-3 w-full h-full object-cover"
        />
        <Image
          src="/shop/shop_4.webp"
          alt="tattoo shop"
          width={918}
          height={932}
          className="col-span-3 w-full h-full object-cover"
        />
      </section>
      <ContactSection />
    </main>
  );
}
