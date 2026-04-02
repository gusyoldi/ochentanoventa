'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/lib/components/carousel';
import CarouselImage from './CarouselImage';

type ImageCarouselProps = React.ComponentProps<typeof Carousel> & {
  images: { src: string; alt: string }[];
  size?: 'sm' | 'lg';
  priority?: boolean;
};

const CarouselWrapper = ({
  images,
  size = 'sm',
  priority = false,
  ...props
}: ImageCarouselProps) => {
  return (
    <Carousel role="region" aria-label="Galería de imágenes" {...props}>
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={img.src}>
            <CarouselImage
              src={img.src}
              alt={img.alt}
              size={size}
              priority={priority && index === 0}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default CarouselWrapper;
