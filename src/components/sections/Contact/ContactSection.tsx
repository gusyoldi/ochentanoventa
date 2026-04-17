import CarouselWrapper from '@/components/ui/Carousel/CarouselWrapper';
import Form from '@/components/ui/Form/Form';

type ContactSectionProps = {
  carouselImages: Array<{ src: string; alt: string }>;
};

export default function ContactSection({
  carouselImages,
}: ContactSectionProps) {
  return (
    <section className="pb-10 xl:pb-20">
      <div className="bg-secondary mx-auto mb-10 rounded-md sm:hidden xl:mb-20 xl:max-w-[874px]">
        <Form />
      </div>
      <div className="mx-auto h-[350px] w-[350px] xl:order-first xl:row-span-6 xl:h-[800px] xl:w-[1280px]">
        <CarouselWrapper images={carouselImages} size="lg" />
      </div>
    </section>
  );
}
