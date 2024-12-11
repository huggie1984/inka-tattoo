import { ArtistProfile } from '@/components/artist-profile/artist-profile';

export default function Page() {
  return (
    <ArtistProfile
      image={{
        src: '/tatoueurs/tuan_nguyen/profile.webp',
        alt: 'Tuan Nguyen profile',
      }}
      artist="TUAN NGUYEN"
      facebookUrl="https://facebook.com"
      instagramUrl="https://facebook.com"
      portfolio={[
        {
          src: '/tatoueurs/tuan_nguyen/portfolio_1.webp',
          alt: 'tattoo by Tuan',
          width: 960,
          height: 1280,
        },
        {
          src: '/tatoueurs/tuan_nguyen/portfolio_2.webp',
          alt: 'tattoo by Tuan',
          width: 620,
          height: 826,
        },
        {
          src: '/tatoueurs/tuan_nguyen/portfolio_3.webp',
          alt: 'tattoo by Tuan',
          width: 960,
          height: 1282,
        },
        {
          src: '/tatoueurs/tuan_nguyen/portfolio_4.webp',
          alt: 'tattoo by Tuan',
          width: 623,
          height: 623,
        },
        {
          src: '/tatoueurs/tuan_nguyen/portfolio_5.webp',
          alt: 'tattoo by Tuan',
          width: 623,
          height: 623,
        },
        {
          src: '/tatoueurs/tuan_nguyen/portfolio_6.webp',
          alt: 'tattoo by Tuan',
          width: 623,
          height: 1108,
        },
      ]}
    >
      <>
        <p>Styles preferes: Neo-Jap</p>
        <p>Co-fondateur de INK'A TATTOO LYON</p>
      </>
    </ArtistProfile>
  );
}
