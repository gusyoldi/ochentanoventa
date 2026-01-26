import { DEFAULT_CAROUSEL_IMAGES } from './defaults';
import { CarouselSchema } from './schemas';
import { CarouselDTO } from './types';
import mapCarouselResponseToDTO from './utils';

const { NEXT_PUBLIC_STRAPI_URL } = process.env;

export default async function getCarousel(): Promise<CarouselDTO> {
  try {
    const res = await fetch(`${NEXT_PUBLIC_STRAPI_URL}/carousel?populate=*`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Strapi fetch failed: ${res.status} ${res.statusText}`);
    }

    const { data } = await res.json();

    const parsed = CarouselSchema.safeParse(data);

    if (!parsed.success) {
      console.warn('Carousel schema validation failed', parsed.error.issues);
      throw new Error('Error validating carousel response');
    }

    const carousel = mapCarouselResponseToDTO(parsed.data);

    return carousel;
  } catch (error) {
    console.error('Error fetching carousel from Strapi:', error);
    // Return fallback images
    return {
      first: DEFAULT_CAROUSEL_IMAGES,
      second: DEFAULT_CAROUSEL_IMAGES,
      third: DEFAULT_CAROUSEL_IMAGES,
    };
  }
}
