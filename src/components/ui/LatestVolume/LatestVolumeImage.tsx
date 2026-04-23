'use client';

import { Skeleton } from '@/app/_lib/components/skeleton';
import { cn } from '@/utils';
import Image from 'next/image';
import { useState } from 'react';

interface LatestVolumeImageProps {
  src: string;
  alt: string;
}

export default function LatestVolumeImage({
  src,
  alt,
}: LatestVolumeImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative h-[142px] w-[142px] overflow-hidden rounded-lg transition-transform duration-700 xl:h-[240px] xl:w-[240px]">
      {isLoading && <Skeleton className="absolute inset-0 z-10 size-full" />}
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          'object-cover transition-opacity duration-1000',
          isLoading ? 'opacity-0' : 'opacity-100',
        )}
        sizes="(max-width: 768px) 142px, 240px"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
