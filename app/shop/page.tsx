import Image from 'next/image';

export default function Page() {
  return (
    <main className="container flex flex-col gap-4 mb-4">
      <section className="grid grid-cols-6 gap-1">
        <Image
          src="/shop/shop_1.webp"
          alt="tattoo shop"
          width={852}
          height={582}
          className="col-span-4 w-full h-full object-cover"
        />
        <Image
          src="/shop/shop_2.webp"
          alt="tattoo shop"
          width={424}
          height={582}
          className="col-span-2 w-full h-full object-cover"
        />
        <Image
          src="/shop/shop_3.webp"
          alt="tattoo shop"
          width={638}
          height={582}
          className="col-span-3 w-full h-full object-cover"
        />
        <Image
          src="/shop/shop_4.webp"
          alt="tattoo shop"
          width={638}
          height={582}
          className="col-span-3 w-full h-full object-cover"
        />
      </section>
    </main>
  );
}
