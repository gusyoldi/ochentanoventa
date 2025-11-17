import { EVENTS_SECTION_CONTENT } from '@/app/constants';
import ImageCarousel from './Carousel';
import EventsDescription from './EventsDescription';
import TitleSection from './TitleSection';

type EventsSectionProps = {
  carouselImages: Array<{ src: string; alt: string }>;
};

export default function EventsSection({ carouselImages }: EventsSectionProps) {
  const { title, subtitle } = EVENTS_SECTION_CONTENT;

  return (
    <section className="flex flex-col items-center py-10 xl:grid xl:grid-flow-col xl:grid-rows-4 xl:items-start xl:gap-x-3.5 xl:py-20">
      {/* Title Section */}
      <div className="xl:col-span-1 xl:row-start-2">
        <TitleSection title={title} subtitle={subtitle} />
      </div>

      {/* Carousel */}
      <div className="mb-5 h-[350px] w-[350px] xl:order-first xl:row-span-6 xl:h-[590px] xl:w-[590px]">
        <ImageCarousel images={carouselImages} />
      </div>

      {/* Description */}
      <EventsDescription />
    </section>
  );
}
