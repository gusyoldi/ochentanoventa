import { StrapiCarousel, StrapiImage } from './schemas';
import { CarouselDTO, Image } from './types';

const formatImages = (images: StrapiImage[]) =>
  images.map(({ url, name }): Image => ({ src: url, alt: name }));

export default function mapCarouselResponseToDTO(
  response: StrapiCarousel,
): CarouselDTO {
  const { first, second, third } = response;

  return {
    first: formatImages(first),
    second: formatImages(second),
    third: formatImages(third),
  };
}
