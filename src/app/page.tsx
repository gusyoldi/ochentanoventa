const images = [
  { src: '/images/slide1.jpg', alt: 'Slide 1' },
  { src: '/images/slide2.jpg', alt: 'Slide 2' },
  { src: '/images/slide3.jpg', alt: 'Slide 3' },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[350px] overflow-y-scroll">
      <section className="border-divider flex flex-col items-center border-b py-10 text-white">
        <div className="font-montserrat text-center uppercase">
          <h2 className="text-heading-md leading-8 font-extrabold">
            Rock argentino
          </h2>
          <h3 className="text-gold text-heading-sm mb-5 font-bold">
            En versiones distintas
          </h3>
        </div>
        <div className="mb-5 h-[350px] w-[350px] bg-stone-400">
          {/* <ImageCarousel images={images} /> */}
        </div>
        <div className="text-body-sm font-roboto flex flex-col gap-6 leading-5 tracking-wide">
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
