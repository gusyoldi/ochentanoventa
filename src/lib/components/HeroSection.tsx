import { HERO_SECTION_CONTENT } from '@/lib/constants';
import ImageCarousel from './Carousel';
import HeroDescription from './HeroDescription';
import TitleSection from './TitleSection';

type HeroSectionProps = {
  carouselImages: Array<{ src: string; alt: string }>;
};

export default function HeroSection({ carouselImages }: HeroSectionProps) {
  const { title, subtitle, seoTitle } = HERO_SECTION_CONTENT;

  return (
    <section className="border-divider flex flex-col items-center border-b py-10 xl:grid xl:grid-flow-col xl:grid-rows-4 xl:items-start xl:gap-x-3.5 xl:py-20">
      <h1 className="sr-only">{seoTitle}</h1>

      <div className="xl:col-span-1 xl:row-start-2">
        <TitleSection title={title} subtitle={subtitle} />
      </div>

      <div className="mb-5 h-[350px] w-[350px] xl:order-first xl:row-span-6 xl:h-[590px] xl:w-[590px]">
        <ImageCarousel images={carouselImages} />
      </div>

      <HeroDescription />
    </section>
  );
}
