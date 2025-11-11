import ImageCarousel from '@/lib/components/Carousel';
import Form from '@/lib/components/Form';
import NewVolume from '@/lib/components/NewVolume';
import Volume from '@/lib/components/Volume';

import Banner from '@/lib/components/Banner';
import getResourceFromStrapi from '@/lib/services/strapi/getResourceFromStrapi';
import {
  StrapiBanner,
  StrapiCarousel,
  StrapiImage,
  StrapiNew,
} from '@/lib/services/strapi/types';
import Image from 'next/image';
import { VOLUMES_LIST } from './constants';

export default async function HomePage() {
  const { title, volume, songs, image }: StrapiNew =
    await getResourceFromStrapi('new', true);

  const carouselData = await getResourceFromStrapi<StrapiCarousel>(
    'carousel',
    true,
  );

  const bannerData = await getResourceFromStrapi<StrapiBanner>('banner', true);

  const mapImages = (images: StrapiImage[]) =>
    images.map(({ url, name }) => ({ src: url, alt: name }));

  const carousels = {
    first: mapImages(carouselData.first),
    second: mapImages(carouselData.second),
    third: mapImages(carouselData.third),
  };

  const banner = {
    desktop: { src: bannerData.desktop.url, alt: bannerData.desktop.name },
    mobile: { src: bannerData.mobile.url, alt: bannerData.mobile.name },
  };

  return (
    <main className="mx-auto max-w-[350px] text-white xl:max-w-7xl">
      <section className="pt-5 pb-0 xl:pt-20">
        <Banner img={banner} />
      </section>
      <section className="border-divider flex flex-col items-center border-b py-10 xl:grid xl:grid-flow-col xl:grid-rows-4 xl:items-start xl:gap-x-3.5 xl:py-20">
        <div className="font-montserrat text-center leading-8 uppercase xl:col-span-1 xl:row-start-2 xl:text-start xl:leading-14">
          <h1 className="sr-only">
            Ochenta Noventa - Banda de Rock Argentino para tu evento
          </h1>
          <h2 className="text-heading-md xl:text-heading-xl font-extrabold text-nowrap">
            Rock argentino
          </h2>
          <h3 className="text-gold text-heading-sm xl:text-heading-lg mb-5 font-bold xl:mb-10">
            En versiones distintas
          </h3>
        </div>
        <div className="mb-5 h-[350px] w-[350px] xl:order-first xl:row-span-6 xl:h-[590px] xl:w-[590px]">
          <ImageCarousel images={carousels.first} />
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
      <section className="border-divider border-b pt-10 pb-10 xl:pt-20">
        <div className="flex flex-col items-center xl:grid xl:grid-flow-col xl:grid-rows-2 xl:items-start xl:gap-x-3.5">
          <div className="font-montserrat text-center leading-8 uppercase xl:col-span-1 xl:text-start xl:leading-14">
            <h2 className="text-heading-md xl:text-heading-xl font-extrabold text-nowrap">
              Versiones
            </h2>
            <h3 className="text-gold text-heading-sm xl:text-heading-lg mb-5 font-bold xl:mb-10">
              Estudio
            </h3>
          </div>

          <NewVolume
            title={title}
            volume={volume}
            songs={songs}
            image={image.url}
            link="https://open.spotify.com/album/7bzp0pZEHxEo1LpcnZfLv5"
          />

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

        <div className="mt-10 grid-cols-2 xl:mt-20">
          <div className="flex max-w-[350px] justify-between gap-5 overflow-x-auto xl:max-w-full">
            {VOLUMES_LIST.map((volume) => (
              <Volume key={volume.title} volume={volume} />
            ))}
          </div>
        </div>

        <a
          className="font-roboto mx-auto mt-10 flex items-center justify-center gap-2 py-1 text-white uppercase hover:opacity-60"
          href="https://open.spotify.com/artist/1t7L3htJvTcz93Fa9aMiI6?si=UOBAljXzSP-pWnYKDBEL5Q"
        >
          <Image
            src="/images/footer/spotify.png"
            alt="spotify-link"
            width={22}
            height={22}
          />
          <span>Escuchar ahora</span>
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
          <ImageCarousel images={carousels.second} />
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
        <div className="bg-secondary mx-auto mb-10 rounded-md sm:hidden xl:mb-20 xl:max-w-[874px]">
          <Form />
        </div>
        <div className="mx-auto h-[350px] w-[350px] xl:order-first xl:row-span-6 xl:h-[800px] xl:w-[1280px]">
          <ImageCarousel images={carousels.third} size="lg" />
        </div>
      </section>
    </main>
  );
}
