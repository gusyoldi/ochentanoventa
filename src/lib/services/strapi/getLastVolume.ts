import { DEFAULT_LAST_VOLUME } from './defaults';
import { LastVolumeSchema } from './schemas';
import { StrapiLastVolume } from './types';

export default async function getLastVolume(): Promise<StrapiLastVolume> {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  if (!strapiUrl) {
    console.warn('NEXT_PUBLIC_STRAPI_URL is not defined. Using fallback last volume.');
    return DEFAULT_LAST_VOLUME;
  }

  try {
    const res = await fetch(`${strapiUrl}/new?populate=*`, {
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
      return DEFAULT_LAST_VOLUME;
    }

    return parsed.data;
  } catch (error) {
    console.error('Error fetching last volume from Strapi:', error);
    return DEFAULT_LAST_VOLUME;
  }
}
