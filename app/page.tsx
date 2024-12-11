import Image from 'next/image';
import { ArtistCard } from '@/components/artist-card/artist-card';
import { ContactSection } from '@/components/contact-section/contact-section';

export default function Home() {
  return (
    <main className="container flex flex-col items-center gap-4 md:mt-4 mb-4">
      <section className="grid grid-cols-6">
        <Image
          src="/home.webp"
          alt="inside shop"
          width={640}
          height={625}
          loading="eager"
          className="col-span-6 sm:col-span-3 w-full h-[300px] object-cover"
        />
        <div className="col-span-6 sm:col-span-3 bg-black p-4 text-white flex items-end">
          <p>
            Ouvert en décembre 2013 <strong>INK'A TATTOO LYON</strong> est une
            entreprise familiale. Le shop est situé dans le 1er arrondissement
            de Lyon tout près de la place des Terreaux. @ INKATATTOOLYON
          </p>
        </div>
      </section>
      <section
        className="grid grid-cols-6 gap-1 w-full container"
        id="tatoueurs"
      >
        <ArtistCard
          name="TUAN NGUYEN"
          image={{
            src: '/tatoueurs/tuan_nguyen/tuan_nguyen.webp',
            alt: 'Tuan Nguyen profile',
          }}
        />
        <ArtistCard
          name="ANA"
          image={{ src: '/tatoueurs/ana/ana.webp', alt: 'Ana profile' }}
        />
        <ArtistCard
          name="LA GUIGNE"
          image={{
            src: '/tatoueurs/la_guigne/la_guigne.webp',
            alt: 'La Guigne profile',
          }}
        />
        <ArtistCard
          name="GUEST THOMAS"
          image={{
            src: '/tatoueurs/guest_thomas/guest_thomas.webp',
            alt: 'Guest Tomas profile',
          }}
        />
        <ArtistCard
          name="UGGY"
          image={{ src: '/tatoueurs/uggy/uggy.webp', alt: 'Uggy profile' }}
        />
      </section>
      <ContactSection />
    </main>
  );
}
