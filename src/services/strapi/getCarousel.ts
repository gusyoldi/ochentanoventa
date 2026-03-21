import {
  DEFAULT_CAROUSEL_1_IMAGES,
  DEFAULT_CAROUSEL_2_IMAGES,
  DEFAULT_CAROUSEL_3_IMAGES,
} from './defaults';
import { CarouselSchema } from './schemas';
import { CarouselDTO } from './types';
import mapCarouselResponseToDTO from './utils';

const { NEXT_PUBLIC_STRAPI_URL } = process.env;

export default async function getCarousel(): Promise<CarouselDTO> {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  if (!strapiUrl) {
    console.warn(
      'NEXT_PUBLIC_STRAPI_URL is not defined. Using fallback carousel images.',
    );
    return {
      first: DEFAULT_CAROUSEL_1_IMAGES,
      second: DEFAULT_CAROUSEL_2_IMAGES,
      third: DEFAULT_CAROUSEL_3_IMAGES,
    };
  }

  try {
    const res = await fetch(`${strapiUrl}/carousel?populate=*`, {
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
      first: DEFAULT_CAROUSEL_1_IMAGES,
      second: DEFAULT_CAROUSEL_2_IMAGES,
      third: DEFAULT_CAROUSEL_3_IMAGES,
    };
  }
}
