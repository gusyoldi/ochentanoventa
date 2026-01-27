import type {
    StrapiBanner as SchemaStrapiBanner,
    StrapiCarousel as SchemaStrapiCarousel,
    StrapiImage as SchemaStrapiImage,
    StrapiLastVolume as SchemaStrapiLastVolume,
} from './schemas';

// Strapi-specific inferred types
export type StrapiImage = SchemaStrapiImage;
export type StrapiCarouselResponse = SchemaStrapiCarousel;
export type StrapiBanner = SchemaStrapiBanner;
export type StrapiLastVolume = SchemaStrapiLastVolume;

// Re-export DTOs from centralized location
export type { BannerDTO, CarouselDTO, Image } from '@/types';

