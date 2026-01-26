import { z } from 'zod';

export type StrapiImage = z.infer<typeof StrapiImageSchema>;
export type StrapiCarousel = z.infer<typeof CarouselSchema>;
export type StrapiBanner = z.infer<typeof BannerSchema>;
export type StrapiLastVolume = z.infer<typeof LastVolumeSchema>;

export const StrapiFormatSchema = z.object({
  url: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});

export const StrapiImageSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  url: z.string(),
  alternativeText: z.string().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
  formats: z
    .object({
      large: StrapiFormatSchema.optional(),
      medium: StrapiFormatSchema.optional(),
      small: StrapiFormatSchema.optional(),
      thumbnail: StrapiFormatSchema.optional(),
    })
    .optional(),
});

export const CarouselSchema = z.object({
  first: z.array(StrapiImageSchema),
  second: z.array(StrapiImageSchema),
  third: z.array(StrapiImageSchema),
});

export const BannerSchema = z.object({
  desktop: StrapiImageSchema.nullable(),
  mobile: StrapiImageSchema.nullable(),
});

export const LastVolumeSchema = z.object({
  songs: z.array(z.string()).optional(),
  volume: z.string().optional(),
  title: z.string().optional(),
  image: z.object({ url: z.string() }).optional(),
  link: z.string().optional(),
});



