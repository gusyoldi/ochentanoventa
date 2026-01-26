import Banner from '@/lib/components/Banner';
import ContactSection from '@/lib/components/ContactSection';
import EventsSection from '@/lib/components/EventsSection';
import HeroSection from '@/lib/components/HeroSection';
import VersionsSection from '@/lib/components/VersionsSection';

import { VOLUMES_LIST } from '@/lib/constants';
import getCarousel from '@/lib/services/strapi/getCarousel';

export default async function HomePage() {
  const carousel = await getCarousel();

  return (
    <main className="mx-auto max-w-[350px] text-white xl:max-w-7xl">
      <Banner />
      <HeroSection carouselImages={carousel.first} />
      <VersionsSection volumes={VOLUMES_LIST} />
      <EventsSection carouselImages={carousel.second} />
      <ContactSection carouselImages={carousel.third} />
    </main>
  );
}
