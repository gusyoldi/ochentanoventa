import type {
  StrapiBanner as SchemaStrapiBanner,
  StrapiCarousel as SchemaStrapiCarousel,
  StrapiImage as SchemaStrapiImage,
  StrapiLastVolume as SchemaStrapiLastVolume,
} from './schemas';

//Infered Types
export type StrapiImage = SchemaStrapiImage;
export type StrapiCarouselResponse = SchemaStrapiCarousel;
export type StrapiBanner = SchemaStrapiBanner;
export type StrapiLastVolume = SchemaStrapiLastVolume;

//DTO
export type CarouselDTO = {
  first: Image[];
  second: Image[];
  third: Image[];
};

export type BannerDTO = {
  mobile: Image;
  desktop: Image;
};

export type Image = {
  src: string;
  alt: string;
};
