import { CarouselSchema } from './schemas';
import { CarouselDTO } from './types';
import mapCarouselResponseToDTO from './utils';

const { NEXT_PUBLIC_STRAPI_URL } = process.env;

export default async function getCarousel(): Promise<CarouselDTO> {
  const res = await fetch(`${NEXT_PUBLIC_STRAPI_URL}/carousel?populate=*`, {
    next: { revalidate: 60 },
  });

  const { data } = await res.json();

  const parsed = CarouselSchema.safeParse(data);

  if (!parsed.success) {
    // Log details for debugging and throw a readable error
    // eslint-disable-next-line no-console
    console.warn('Carousel schema validation failed', parsed.error.issues);
    throw new Error(`Error validating carousel response: ${res.statusText}`);
  }

  const carousel = mapCarouselResponseToDTO(parsed.data);

  return carousel;
}
