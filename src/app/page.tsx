import ImageCarousel from '@/lib/components/Carousel';
import Form from '@/lib/components/Form';
import Image from 'next/image';

const CAROUSEL_1_IMG = [
  { src: '/images/carousel1/foto1.webp', alt: 'Slide 1' },
  { src: '/images/carousel1/foto2.webp', alt: 'Slide 2' },
  { src: '/images/carousel1/foto3.webp', alt: 'Slide 3' },
  { src: '/images/carousel1/foto4.webp', alt: 'Slide 4' },
];

const CAROUSEL_2_IMG = [
  { src: '/images/carousel2/foto1.webp', alt: 'Slide 1' },
  { src: '/images/carousel2/foto2.webp', alt: 'Slide 2' },
  { src: '/images/carousel2/foto3.webp', alt: 'Slide 3' },
  { src: '/images/carousel2/foto4.webp', alt: 'Slide 4' },
];

const CAROUSEL_3_IMG = [
  { src: '/images/carousel3/foto1.webp', alt: 'Slide 1' },
  { src: '/images/carousel3/foto2.webp', alt: 'Slide 2' },
  { src: '/images/carousel3/foto3.webp', alt: 'Slide 3' },
  { src: '/images/carousel3/foto4.webp', alt: 'Slide 4' },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[350px] text-white xl:max-w-7xl">
      <section className="border-divider flex flex-col items-center border-b py-10 xl:grid xl:grid-flow-col xl:grid-rows-4 xl:items-start xl:gap-x-3.5 xl:py-20">
        <div className="font-montserrat text-center leading-8 uppercase xl:col-span-1 xl:row-start-2 xl:text-start xl:leading-14">
          <h2 className="text-heading-md xl:text-heading-xl font-extrabold text-nowrap">
            Rock argentino
          </h2>
          <h3 className="text-gold text-heading-sm xl:text-heading-lg mb-5 font-bold xl:mb-10">
            En versiones distintas
          </h3>
        </div>
        <div className="mb-5 h-[350px] w-[350px] xl:order-first xl:row-span-6 xl:h-[590px] xl:w-[590px]">
          <ImageCarousel images={CAROUSEL_1_IMG} />
        </div>
        <div className="text-body-sm font-roboto xl:text-body-md flex flex-col gap-6 leading-5 tracking-wide xl:col-span-1 xl:row-span-2">
          <p>
            <span className="font-bold">Ochenta Noventa</span> es una banda de
            Buenos Aires que elige clásicos del{' '}
            <span className="font-bold">Rock Argentino</span> para hacer sus
            propias versiones, combinando estilos como{' '}
            <span className="font-bold">
              Country, Folk, Rock & Roll y Blues
            </span>
            .
          </p>
          <p>
            Es un <span className="font-bold">proyecto artístico</span> con un
            formato ideal para sonar en{' '}
            <span className="font-bold">eventos</span>.
          </p>
          <p>
            Instrumentos acústicos como el Banjo, la Mandolina, el Washboard y
            las cucharas le dan el toque country y folk que destaca la
            propuesta.
          </p>
        </div>
      </section>
      <section className="border-divider border-b py-10 xl:py-20">
        <div className="flex flex-col items-center xl:grid xl:grid-flow-col xl:grid-rows-2 xl:items-start xl:gap-x-3.5">
          <div className="font-montserrat text-center leading-8 uppercase xl:col-span-1 xl:text-start xl:leading-14">
            <h2 className="text-heading-md xl:text-heading-xl font-extrabold text-nowrap">
              Versiones
            </h2>
            <h3 className="text-gold text-heading-sm xl:text-heading-lg mb-5 font-bold xl:mb-10">
              Estudio
            </h3>
          </div>

          <div className="bg-secondary mb-5 flex h-[176px] w-[350px] items-center justify-between gap-x-4 rounded-md p-4 xl:order-last xl:row-span-2 xl:h-[296px] xl:w-[590px] xl:justify-center xl:gap-x-10 xl:p-7">
            <div className="relative h-[142px] w-[142px] xl:h-[240px] xl:w-[240px]">
              <Image
                src="/images/volumes/last-volume.svg"
                alt="last-volume"
                fill
                className="object-cover"
              />
            </div>
            <div className="font-roboto text-white">
              <h3 className="text-body-md mb-1.5 font-bold xl:mb-5 xl:text-2xl">
                Último Lanzamiento!
              </h3>
              <h4 className="mb-1 text-sm font-bold xl:mb-3 xl:text-xl">
                Volumen 3 (2025)
              </h4>
              <ul className="xl:text-body-md list-inside list-decimal pl-1 text-xs">
                <li>Fue amor</li>
                <li>Madre Escúchame</li>
                <li>El Loco ft Chelo Zimbabwe</li>
                <li>Bajan</li>
              </ul>
            </div>
          </div>

          <div className="text-body-sm font-roboto xl:text-body-md flex flex-col gap-6 leading-5 tracking-wide">
            <p>
              <span className="font-bold">Ochenta Noventa</span> disfruta de
              re-versionar sus canciones preferidas, dándole una nueva vida a
              clásicos de nuestro queridísimo rock argentino.
            </p>
            <p>
              Contamos con varias versiones grabadas en estudio subidas a todas
              las <span className="font-bold">plataformas digitales</span> para
              que ustedes también puedan disfrutarlas.{' '}
            </p>
          </div>
        </div>
        <div className="mt-10 h-[180px] grid-cols-2 bg-stone-400 xl:mt-20">
          {/* <ImageCarousel images={CAROUSEL_2_IMG} /> */}
        </div>

        <a
          className="font-roboto mx-auto mt-10 flex items-center justify-center gap-2 py-1 text-white uppercase opacity-40 hover:opacity-100"
          href="https://open.spotify.com/artist/1t7L3htJvTcz93Fa9aMiI6?si=UOBAljXzSP-pWnYKDBEL5Q"
        >
          <Image
            src="/images/footer/spotify.svg"
            alt="spotify-link"
            width={22}
            height={22}
            className=""
          />
          <span className="hover:font-bold">Escuchar ahora</span>
        </a>
      </section>
      <section className="flex flex-col items-center py-10 xl:grid xl:grid-flow-col xl:grid-rows-4 xl:items-start xl:gap-x-3.5 xl:py-20">
        <div className="font-montserrat text-center leading-8 uppercase xl:col-span-1 xl:row-start-2 xl:text-start xl:leading-14">
          <h2 className="text-heading-md xl:text-heading-xl font-extrabold text-nowrap">
            Eventos
          </h2>
          <h3 className="text-gold text-heading-sm xl:text-heading-lg mb-5 font-bold xl:mb-10">
            Privados
          </h3>
        </div>
        <div className="mb-5 h-[350px] w-[350px] xl:order-first xl:row-span-6 xl:h-[590px] xl:w-[590px]">
          <ImageCarousel images={CAROUSEL_2_IMG} />
        </div>
        <div className="text-body-sm font-roboto xl:text-body-md flex max-w-96 flex-col gap-6 leading-5 tracking-wide xl:col-span-1 xl:row-span-2">
          <p>
            Con más de 40 shows en vivo,{' '}
            <span className="font-bold">Ochenta Noventa</span> continúa
            programando recepciones de{' '}
            <span className="font-bold">Casamientos</span>,{' '}
            <span className="font-bold">Cumpleaños</span> y eventos{' '}
            <span className="font-bold">corporativos</span>.
          </p>
          <p>
            <span className="font-bold">Formatos:</span>
            <br />
            <span className="font-bold">Acústico</span> para disfrutar de los
            sonidos de instrumentos característicos del Country.
            <br />
            <span className="font-bold">Eléctrico</span> para festejar bien
            arriba.
            <br />
            <span className="font-bold">Mixto</span> para un evento súper
            climático y completo.
          </p>
        </div>
      </section>
      <section className="pb-10 xl:pb-20">
        <div className="bg-secondary mx-auto mb-10 rounded-md xl:mb-20 xl:max-w-[874px]">
          <Form />
        </div>
        <div className="mx-auto h-[350px] w-[350px] xl:order-first xl:row-span-6 xl:h-[800px] xl:w-[1200px]">
          <ImageCarousel images={CAROUSEL_3_IMG} size="lg" />
        </div>
      </section>
    </main>
  );
}
