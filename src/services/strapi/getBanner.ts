import { DEFAULT_BANNER } from './defaults';
import { BannerSchema } from './schemas';
import { BannerDTO } from './types';


export default async function getBanner(): Promise<BannerDTO | null> {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  if (!strapiUrl) {
    console.warn('NEXT_PUBLIC_STRAPI_URL is not defined. Using fallback banner.');
    return DEFAULT_BANNER;
  }

  try {
    const res = await fetch(`${strapiUrl}/banner?populate=*`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Strapi fetch failed: ${res.status} ${res.statusText}`);
    }

    const { data } = await res.json();

    const parsed = BannerSchema.safeParse(data);

    if (!parsed.success) {
      console.warn('Banner schema validation failed', parsed.error.issues);
      return DEFAULT_BANNER;
    }

    const { desktop, mobile } = parsed.data;

    if (!desktop || !mobile) {
      return DEFAULT_BANNER;
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
  } catch (error) {
    console.error('Error fetching banner from Strapi:', error);
    return DEFAULT_BANNER;
  }
}
