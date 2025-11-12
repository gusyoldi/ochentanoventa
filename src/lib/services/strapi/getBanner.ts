import { BannerDTO } from './types';

const { NEXT_PUBLIC_STRAPI_URL } = process.env;

export default async function getBanner(): Promise<BannerDTO> {
  const res = await fetch(`${NEXT_PUBLIC_STRAPI_URL}/banner?populate=*`, {
    next: { revalidate: 60 },
  });

  const { data } = await res.json();

  if (!data.desktop.url || !data.mobile.url) {
    throw new Error(`Error fetching banner images: ${res.statusText}`);
  }

  const banner = {
    desktop: { src: data.desktop.url, alt: data.desktop.name },
    mobile: { src: data.mobile.url, alt: data.mobile.name },
  };

  return banner;
}
