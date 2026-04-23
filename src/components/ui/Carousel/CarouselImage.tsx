import { Skeleton } from '@/app/_lib/components/skeleton';
import { cn } from '@/utils';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import { useState } from 'react';

const imageContainerVariants = cva('relative overflow-hidden', {
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

const CarouselImage = ({
  src,
  alt,
  size,
  priority,
}: {
  src: string;
  alt: string;
  size: 'sm' | 'lg';
  priority: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn(imageContainerVariants({ size }))}>
      {isLoading && <Skeleton className="absolute inset-0 z-10 size-full" />}
      <Image
        src={src}
        alt={alt}
        className={cn(
          'object-cover transition-opacity duration-1000',
          isLoading ? 'opacity-0' : 'opacity-100',
        )}
        fill
        sizes={
          size === 'lg'
            ? '100vw'
            : '(max-width: 640px) 100vw, (max-width: 1280px) 50vw'
        }
        priority={priority}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default CarouselImage;
