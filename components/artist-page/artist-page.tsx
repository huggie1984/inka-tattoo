import { ReactNode } from 'react';
import { AppImage } from '@/types/image';
import Image from 'next/image';

interface PortfolioImage extends AppImage {
  width: number;
  height: number;
}

export const ArtistPage = ({
  image,
  children,
  artist,
  facebookUrl,
  instagramUrl,
  portfolio,
}: {
  image: AppImage;
  children: ReactNode;
  artist: string;
  facebookUrl: string;
  instagramUrl: string;
  portfolio: PortfolioImage[];
}) => (
  <main className="container flex flex-col gap-4">
    <section className="grid grid-cols-6">
      <div className="bg-black sm:bg-transparent col-span-6 sm:col-span-3 md:col-start-2 md:col-span-2 flex flex-col justify-center items-center p-4 order-2 sm:order-1 sm:mx-auto">
        <div className="w-full flex flex-col gap-4 items-start">
          <h1 className="heading-1">{artist}</h1>
          <ul className="flex gap-4">
            <li>
              <a href={facebookUrl} target="_blank">
                <Image
                  width={30}
                  height={30}
                  src="/facebook.svg"
                  alt="facebook"
                />
              </a>
            </li>
            <li>
              <a href={instagramUrl} target="_blank">
                <Image
                  width={30}
                  height={30}
                  src="/instagram.svg"
                  alt="instagram"
                />
              </a>
            </li>
          </ul>
          {children}
        </div>
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={600}
        height={600}
        className="col-span-6 sm:col-span-3 md:col-span-2 w-full h-auto object-cover order-1 md:order-2 "
      />
    </section>
    <section className="flex overflow-x-auto space-x-4 px-4 pb-4">
      {portfolio.map((image, key) => (
        <div
          key={key}
          className="relative flex-shrink-0"
          style={{
            height: '300px',
            width: `${(image?.width / image?.height) * 300}px`,
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
        </div>
      ))}
    </section>
  </main>
);
