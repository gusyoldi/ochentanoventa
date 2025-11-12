import { CarouselDTO } from './types';
import mapCarouselResponseToDTO from './utils';

const { NEXT_PUBLIC_STRAPI_URL } = process.env;

export default async function getCarousel(): Promise<CarouselDTO> {
  const res = await fetch(`${NEXT_PUBLIC_STRAPI_URL}/carousel?populate=*`, {
    next: { revalidate: 60 },
  });

  const { data } = await res.json();

  if (!data.first || !data.second || !data.third) {
    throw new Error(`Error fetching carousel images: ${res.statusText}`);
  }

  const carousel = mapCarouselResponseToDTO(data);

  return carousel;
}
