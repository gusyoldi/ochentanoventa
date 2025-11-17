import Banner from '@/lib/components/Banner';
import ImageCarousel from '@/lib/components/Carousel';
import EventsSection from '@/lib/components/EventsSection';
import Form from '@/lib/components/Form';
import HeroSection from '@/lib/components/HeroSection';
import VersionsSection from '@/lib/components/VersionsSection';

import getCarousel from '@/lib/services/strapi/getCarousel';
import { VOLUMES_LIST } from './constants';

export default async function HomePage() {
  const carousel = await getCarousel();

  return (
    <main className="mx-auto max-w-[350px] text-white xl:max-w-7xl">
      <section className="pt-5 pb-0 xl:pt-20">
        <Banner />
      </section>

      <HeroSection carouselImages={carousel.first} />

      <VersionsSection volumes={VOLUMES_LIST} />

      <EventsSection carouselImages={carousel.second} />

      <section className="pb-10 xl:pb-20">
        <div className="bg-secondary mx-auto mb-10 rounded-md sm:hidden xl:mb-20 xl:max-w-[874px]">
          <Form />
        </div>
        <div className="mx-auto h-[350px] w-[350px] xl:order-first xl:row-span-6 xl:h-[800px] xl:w-[1280px]">
          <ImageCarousel images={carousel.third} size="lg" />
        </div>
      </section>
    </main>
  );
}
