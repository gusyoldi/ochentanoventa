import { HERO_SECTION_CONTENT } from '@/app/constants';
import ImageCarousel from './Carousel';

type HeroSectionProps = {
  carouselImages: Array<{ src: string; alt: string }>;
};

export default function HeroSection({ carouselImages }: HeroSectionProps) {
  const { title, subtitle, seoTitle, paragraphs } = HERO_SECTION_CONTENT;

  return (
    <section className="border-divider flex flex-col items-center border-b py-10 xl:grid xl:grid-flow-col xl:grid-rows-4 xl:items-start xl:gap-x-3.5 xl:py-20">
      <h1 className="sr-only">{seoTitle}</h1>

      <div className="font-montserrat text-center leading-8 uppercase xl:col-span-1 xl:row-start-2 xl:text-start xl:leading-14">
        <h2 className="text-heading-md xl:text-heading-xl font-extrabold text-nowrap">
          {title}
        </h2>
        <h3 className="text-gold text-heading-sm xl:text-heading-lg mb-5 font-bold xl:mb-10">
          {subtitle}
        </h3>
      </div>

      <div className="mb-5 h-[350px] w-[350px] xl:order-first xl:row-span-6 xl:h-[590px] xl:w-[590px]">
        <ImageCarousel images={carouselImages} />
      </div>

      <div className="text-body-sm font-roboto xl:text-body-md flex flex-col gap-6 leading-5 tracking-wide xl:col-span-1 xl:row-span-2">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph.fullText}</p>
        ))}
      </div>
    </section>
  );
}
