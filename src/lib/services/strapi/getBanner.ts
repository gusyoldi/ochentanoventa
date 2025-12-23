import { BannerSchema } from './schemas';
import { BannerDTO } from './types';

const { NEXT_PUBLIC_STRAPI_URL } = process.env;

export default async function getBanner(): Promise<BannerDTO | null> {
  const res = await fetch(`${NEXT_PUBLIC_STRAPI_URL}/banner?populate=*`, {
    next: { revalidate: 60 },
  });

  const { data } = await res.json();

  const parsed = BannerSchema.safeParse(data);

  if (!parsed.success) {
    console.warn('Banner schema validation failed', parsed.error.issues);
    return null;
  }

  const { desktop, mobile } = parsed.data;

  if (!desktop || !mobile) {
    return null;
  }

  return {
    desktop: {
      src: desktop.url,
      alt: desktop.alternativeText ?? desktop.name,
    },
    mobile: {
      src: mobile.url,
      alt: mobile.alternativeText ?? mobile.name,
    },
  };
}
