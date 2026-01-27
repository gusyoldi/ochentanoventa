// Image type
export interface Image {
  src: string;
  alt: string;
}

// Carousel types
export interface CarouselDTO {
  first: Image[];
  second: Image[];
  third: Image[];
}

// Banner types
export interface BannerDTO {
  desktop: Image;
  mobile: Image;
}

// Volume types
export interface VolumeType {
  src: string;
  alt: string;
  title: string;
  year: string;
  aditional?: string;
  format?: string;
  songs?: string[];
  spotifyUrl?: string;
}

// Content section types
export interface Highlight {
  text: string;
  position: 'start' | 'middle' | 'end';
}

export interface Paragraph {
  text: string;
  highlights: Highlight[];
  fullText: string;
}

export interface SectionContent {
  title: string;
  subtitle: string;
  paragraphs: (string | { text: string; subItems: string[] })[];
}

export interface HeroSectionContent {
  title: string;
  subtitle: string;
  seoTitle: string;
  paragraphs: Paragraph[];
}
