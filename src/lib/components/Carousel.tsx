import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

import { cva } from 'class-variance-authority';
import { cn } from '../utils';

const imageContainerVariants = cva('relative', {
  variants: {
    size: {
      sm: 'h-[350px] w-[350px] xl:h-[590px] xl:w-[590px]',
      lg: 'h-[350px] w-full xl:h-[800px] xl:w-[1280px]',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

type ImageCarouselProps = React.ComponentProps<typeof Carousel> & {
  images: { src: string; alt: string }[];
  size?: 'sm' | 'lg';
};

const ImageCarousel = ({
  images,
  size = 'sm',
  ...props
}: ImageCarouselProps) => {
  return (
    <Carousel {...props}>
      <CarouselContent>
        {images.map((img) => (
          <CarouselItem key={img.src}>
            <div className={cn(imageContainerVariants({ size }))}>
              <Image
                src={img.src}
                alt={img.alt}
                className="object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw"
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
