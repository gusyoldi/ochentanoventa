import { LastVolumeSchema } from './schemas';
import { StrapiLastVolume } from './types';

const { NEXT_PUBLIC_STRAPI_URL } = process.env;

export default async function getLastVolume(): Promise<StrapiLastVolume> {
  const res = await fetch(`${NEXT_PUBLIC_STRAPI_URL}/new?populate=*`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(
      `Error fetching last volume: ${res.status} ${res.statusText}`,
    );
  }

  const json = await res.json();
  const parsed = LastVolumeSchema.safeParse(json);

  if (!parsed.success) {
    console.warn('LastVolume schema validation failed', parsed.error.issues);
    throw new Error(`Error validating last volume response: ${res.statusText}`);
  }

  return parsed.data;
}
