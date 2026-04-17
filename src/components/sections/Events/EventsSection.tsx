import CarouselWrapper from '@/components/ui/Carousel/CarouselWrapper';
import { EVENTS_SECTION_CONTENT } from '@/constants';
import Title from '@/lib/components/title';
import EventsDescription from './EventsDescription';
type EventsSectionProps = {
  carouselImages: Array<{ src: string; alt: string }>;
};

const EventsSection = ({ carouselImages }: EventsSectionProps) => {
  const { title, subtitle } = EVENTS_SECTION_CONTENT;

  return (
    <section className="flex flex-col items-center py-10 xl:grid xl:grid-flow-col xl:grid-rows-4 xl:items-start xl:gap-x-3.5 xl:py-20">
      <div className="xl:col-span-1 xl:row-start-2">
        <Title title={title} subtitle={subtitle} />
      </div>

      <div className="mb-5 h-[350px] w-[350px] xl:order-first xl:row-span-6 xl:h-[590px] xl:w-[590px]">
        <CarouselWrapper images={carouselImages} />
      </div>

      <EventsDescription />
    </section>
  );
};

export default EventsSection;
