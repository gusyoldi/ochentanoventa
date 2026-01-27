import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SocialLinks from './SocialLinks';

describe('SocialLinks', () => {
  const socialPlatforms = [
    { name: 'Instagram', href: 'https://www.instagram.com/ochenta.90' },
    { name: 'Youtube', href: 'https://www.youtube.com/channel/UCmoocg2jeWF5OZwGXvi5dfw' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@ochenta.90' },
    { name: 'Spotify', href: 'https://open.spotify.com/artist/1t7L3htJvTcz93Fa9aMiI6?si=UOBAljXzSP-pWnYKDBEL5Q' },
  ];

  it('renders all social links with correct icons and hrefs', () => {
    render(<SocialLinks />);
    
    socialPlatforms.forEach((platform) => {
      const link = screen.getByTitle(platform.name);
      expect(link).toBeDefined();
      expect(link.getAttribute('href')).toBe(platform.href);
      expect(link.getAttribute('target')).toBe('_blank');
      
      const icon = screen.getByAltText(platform.name);
      expect(icon).toBeDefined();
    });
  });

  it('has correct rel attributes for security', () => {
    render(<SocialLinks />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    });
  });
});
