export type StrapiLastVolume = {
  songs: string[];
  volume: string;
  title: string;
  image: {
    url: string;
  };
};

export type StrapiCarouselResponse = {
  first: StrapiImage[];
  second: StrapiImage[];
  third: StrapiImage[];
};

export type StrapiBanner = {
  mobile: StrapiImage;
  desktop: StrapiImage;
};

export type StrapiImage = {
  id: number;
  name: string;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  formats?: {
    large?: StrapiFormat;
    medium?: StrapiFormat;
    small?: StrapiFormat;
    thumbnail?: StrapiFormat;
  };
};

export type StrapiFormat = {
  url: string;
  width: number;
  height: number;
};

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
