// Central export point for all constants
export { SITE_CONFIG, SPOTIFY_LINKS } from '../config/site';
export { EVENTS_SECTION_CONTENT } from './events';
export { HERO_SECTION_CONTENT } from './hero';
export { CAROUSEL_2_IMG, CAROUSEL_3_IMG, VOLUMES_LIST } from './media';
export { VERSIONS_SECTION_CONTENT } from './versions';

// Re-export VolumeType for backward compatibility
export type { VolumeType } from '@/lib/types';

export const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==';
