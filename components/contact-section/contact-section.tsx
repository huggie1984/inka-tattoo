import Image from 'next/image';

export const ContactSection = () => (
  <section id="contact" className="container grid grid-cols-6 gap-1 w-full">
    <div className="col-span-6 md:col-span-3 lg:col-span-2 flex flex-col gap-4 justify-center px-4 xl:px-0">
      <div>
        <h3 className="heading-3">Adresse</h3>
        <address>
          <p>5 rue Longue</p>
          <p>69001, LYON</p>
          <p>
            <a href="tel:0981368774" className="link-light flex gap-2">
              <Image
                src="/phone.svg"
                alt="phone"
                width={18}
                height={18}
                className="w-5 h-5"
              />
              09 81 36 87 74
            </a>
          </p>
          <p>
            <a
              href="mailto:inkatattoolyon@hotmail.com"
              className="link-light flex gap-2"
            >
              <Image
                src="/mail.svg"
                alt="mail"
                width={18}
                height={18}
                className="w-5 h-5"
              />
              inkatattoolyon@hotmail.com
            </a>
          </p>
        </address>
      </div>

      <div>
        <h3 className="heading-3">Horaires d&apos;ouverture</h3>
        <p>Mardi - Samedi: 10h00 - 18h00</p>{' '}
        <p>Tatouage uniquement sur rdv (nous ne tatouns pas les mineurs)</p>
      </div>
    </div>
    <div className="col-span-6 md:col-span-3 lg:col-span-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.29115919671!2d4.829429577014385!3d45.76535487108065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eaffa2f479db%3A0x23e2056b75312a86!2sInka%20Tattoo%20Lyon!5e0!3m2!1sen!2sfr!4v1733928021247!5m2!1sen!2sfr"
        className="w-full"
        width="600"
        height="450"
        loading="lazy"
        frameBorder="0"
      ></iframe>
    </div>
  </section>
);
