import ContactSection from '@/components/sections/contact/ContactSection';
import EventsSection from '@/components/sections/events/EventsSection';
import HeroSection from '@/components/sections/hero/HeroSection';
import VersionsSection from '@/components/sections/versions/VersionsSection';
import Banner from '@/components/ui/Banner';
import { VOLUMES_LIST } from '@/constants';
import getCarousel from '@/services/strapi/getCarousel';

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
