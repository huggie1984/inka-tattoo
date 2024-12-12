'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useScrolledInView } from '@/hooks/use-scrolled-into-view';
import { useRef } from 'react';
import { AppImage } from '@/types/image';

export const ArtistCard = ({
  name,
  image,
}: {
  name: string;
  image: AppImage;
}) => {
  const imageRef = useRef(null);
  const { isInView } = useScrolledInView({ imageRef });
  return (
    <Link
      ref={imageRef}
      className="col-span-6 sm:col-span-3 lg:col-span-2 flex bg-black hover:opacity-75 overflow-hidden h-[400px] xl:h-[450px]"
      href={`/tatoueurs/${name.replace(' ', '-').toLowerCase()}`}
    >
      <div className="relative w-1/2 h-full overflow-hidden">
        <div
          className={`w-full h-full transition-transform duration-700 ease-in-out ${isInView ? 'scale-110' : 'scale-100'}`}
        >
          <Image
            src={image.src || '/placeholder.svg'}
            alt={image.alt || 'Placeholder'}
            width={375}
            height={500}
            className={`object-cover w-full h-full`}
            priority
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2 p-4 h-full">
        <h3 className="heading-3 text-center text-white">{name}</h3>
      </div>
    </Link>
  );
};
