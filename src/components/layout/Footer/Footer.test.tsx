import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the logo with correct alt text', () => {
    render(<Footer />);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeDefined();
    expect(decodeURIComponent(logo.getAttribute('src') || '')).toContain('footer/logo.png');
  });

  it('renders the copyright text with current year', () => {
    render(<Footer />);
    expect(screen.getByText(/© Copyright 2025/i)).toBeDefined();
  });

  it('contains the SocialLinks component', () => {
    render(<Footer />);
    // Check if any of the social links are present
    expect(screen.getByTitle('Instagram')).toBeDefined();
    expect(screen.getByTitle('Youtube')).toBeDefined();
    expect(screen.getByTitle('TikTok')).toBeDefined();
    expect(screen.getByTitle('Spotify')).toBeDefined();
  });
});
