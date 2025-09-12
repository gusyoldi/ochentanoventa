const images = [
  { src: '/images/slide1.jpg', alt: 'Slide 1' },
  { src: '/images/slide2.jpg', alt: 'Slide 2' },
  { src: '/images/slide3.jpg', alt: 'Slide 3' },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[350px] xl:max-w-7xl">
      <section className="border-divider flex flex-col items-center border-b py-10 text-white xl:grid xl:grid-flow-col xl:grid-rows-5 xl:items-start xl:gap-x-3.5">
        <div className="font-montserrat text-center leading-8 uppercase xl:col-span-1 xl:row-start-2 xl:text-start xl:leading-14">
          <h2 className="text-heading-md xl:text-heading-xl font-extrabold text-nowrap">
            Rock argentino
          </h2>
          <h3 className="text-gold text-heading-sm xl:text-heading-lg mb-5 font-bold xl:mb-10">
            En versiones distintas
          </h3>
        </div>
        <div className="mb-5 h-[350px] w-[350px] bg-stone-400 xl:order-first xl:row-span-6 xl:h-[590px] xl:w-[590px]">
          {/* <ImageCarousel images={images} /> */}
        </div>
        <div className="text-body-sm font-roboto xl:text-body-md flex flex-col gap-6 leading-5 tracking-wide xl:col-span-2 xl:row-span-2">
          <p>
            <span className="font-bold">Ochenta Noventa</span> es una banda de
            Buenos Aires que elige clásicos del{' '}
            <span className="font-bold">Rock Argentino</span> para hacer sus
            propias versiones, combinando estilos como{' '}
            <span className="font-bold">
              Country, Folk, Rock & Roll y Blues.
            </span>
          </p>
          <p>
            Es un <span className="font-bold">proyecto artístico</span> con un
            formato ideal para sonar en{' '}
            <span className="font-bold">eventos.</span>
          </p>
          <p>
            Instrumentos acústicos como el Banjo, la Mandolina, el Washboard y
            las cucharas le dan el toque country y folk que destaca la
            propuesta.
          </p>
        </div>
      </section>
    </main>
  );
}
