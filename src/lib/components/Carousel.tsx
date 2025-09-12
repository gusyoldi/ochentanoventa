import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

type ImageCarouselProps = React.ComponentProps<typeof Carousel> & {
  images: { src: string; alt: string }[];
};

const ImageCarousel = ({ images, ...props }: ImageCarouselProps) => {
  return (
    <Carousel {...props}>
      <CarouselContent>
        {images.map((img) => (
          <CarouselItem key={img.src}>
            <Image
              src="images/carousel1/patu1.svg"
              alt="carousel-image"
              height={350}
              width={350}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;
