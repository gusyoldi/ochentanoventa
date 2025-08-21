import ImageCarousel from "@/lib/components/Carousel";

const images = [
  { src: "/images/slide1.jpg", alt: "Slide 1" },
  { src: "/images/slide2.jpg", alt: "Slide 2" },
  { src: "/images/slide3.jpg", alt: "Slide 3" },
];

export default function HomePage() {
  return (
    <main className="px-128 max-w-7xl mx-auto">
      <section className="py-80 flex items-center max-h-[680px] border-b border-divider gap-4">
        <div className="min-w-1/2">
          <ImageCarousel images={images} />
        </div>
        <div className="text-white min-w-1/2">
          <h2 className="text-heading-xl uppercase">Rock argentino</h2>
          <h3 className="text-heading-lg text-gold uppercase mb-10">
            En versiones distintas
          </h3>
          <div className="flex flex-col gap-6">
            <p className="opacity-90 font-light">
              <span className="text-white font-extrabold">Ochenta Noventa</span>{" "}
              es una banda de Buenos Aires que elige clásicos del{" "}
              <span className="text-white font-extrabold">Rock Argentino</span>{" "}
              para hacer sus propias versiones, combinando estilos como{" "}
              <span className="text-white font-extrabold">
                Country, Folk, Rock & Roll y Blues.
              </span>
            </p>
            <p className="opacity-90 font-light">
              Es un{" "}
              <span className="text-white font-extrabold">
                proyecto artístico
              </span>{" "}
              con un formato ideal para sonar en{" "}
              <span className="text-white font-extrabold">eventos.</span>
            </p>
            <p className="opacity-90 font-light">
              Instrumentos acústicos como el Banjo, la Mandolina, el Washboard y
              las cucharas le dan el toque country y folk que destaca la
              propuesta.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
