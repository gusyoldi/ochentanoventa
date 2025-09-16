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
            <div className="relative h-[350px] w-[350px] xl:h-[590px] xl:w-[590px]">
              <Image
                src={img.src}
                alt={img.alt}
                className="object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default ImageCarousel;
