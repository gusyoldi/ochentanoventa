import Banner from '@/lib/components/Banner';
import ContactSection from '@/lib/components/ContactSection';
import EventsSection from '@/lib/components/EventsSection';
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

      <ContactSection carouselImages={carousel.third} />
    </main>
  );
}
