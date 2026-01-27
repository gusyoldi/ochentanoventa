import getBanner from '@/services/strapi/getBanner';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Banner from './Banner';

vi.mock('@/services/strapi/getBanner', () => ({
  default: vi.fn(),
}));

describe('Banner', () => {
  const mockBannerData = {
    mobile: { src: '/mobile.jpg', alt: 'Mobile Alt' },
    desktop: { src: '/desktop.jpg', alt: 'Desktop Alt' },
  };

  it('renders the banner when data is available', async () => {
    vi.mocked(getBanner).mockResolvedValue(mockBannerData);
    
    // Banner is an async component, so we await its rendering
    const BannerComponent = await Banner();
    render(BannerComponent);

    const img = screen.getByAltText('Mobile Alt');
    expect(img).toBeDefined();
    expect(img.getAttribute('src')).toBe('/mobile.jpg');
    
    const source = document.querySelector('source');
    expect(source?.getAttribute('srcSet')).toBe('/desktop.jpg');
  });

  it('returns null when banner data is missing', async () => {
    vi.mocked(getBanner).mockResolvedValue(null);
    
    const BannerComponent = await Banner();
    expect(BannerComponent).toBeNull();
  });
});
