import ContactSection from '@/components/sections/Contact/ContactSection';
import EventsSection from '@/components/sections/Events/EventsSection';
import HeroSection from '@/components/sections/Hero/HeroSection';
import VersionsSection from '@/components/sections/Versions/VersionsSection';
import Banner from '@/components/ui/Banner';

import getCarousel from '@/services/strapi/getCarousel';
import { VOLUMES_LIST } from './_lib/constants';

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
