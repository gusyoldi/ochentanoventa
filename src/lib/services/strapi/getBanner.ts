import { BannerSchema } from './schemas';
import { BannerDTO } from './types';

const { NEXT_PUBLIC_STRAPI_URL } = process.env;

export default async function getBanner(): Promise<BannerDTO> {
  const res = await fetch(`${NEXT_PUBLIC_STRAPI_URL}/banner?populate=*`, {
    next: { revalidate: 60 },
  });

  const { data } = await res.json();

  const parsed = BannerSchema.safeParse(data);

  if (!parsed.success) {
    // eslint-disable-next-line no-console
    console.warn('Banner schema validation failed', parsed.error.issues);
    throw new Error(`Error validating banner response: ${res.statusText}`);
  }

  const banner = {
    desktop: { src: parsed.data.desktop.url, alt: parsed.data.desktop.name },
    mobile: { src: parsed.data.mobile.url, alt: parsed.data.mobile.name },
  };

  return banner;
}
