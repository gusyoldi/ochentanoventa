import { StrapiLastVolume } from './types';

const { NEXT_PUBLIC_STRAPI_URL } = process.env;

export default async function getLastVolume(): Promise<StrapiLastVolume> {
  const res = await fetch(`${NEXT_PUBLIC_STRAPI_URL}/new?populate=*`, {
    next: { revalidate: 60 },
  });

  const { data } = await res.json();

  if (!data) {
    throw new Error(`Error fetching last volume: ${res.statusText}`);
  }

  return data;
}
