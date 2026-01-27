import { EVENTS_SECTION_CONTENT } from '@/constants';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import EventsSection from './EventsSection';

// Mock dependencies
vi.mock('@/components/ui/ImageCarousel', () => ({
  default: () => <div data-testid="image-carousel">Image Carousel</div>,
}));

vi.mock('@/components/ui/TitleSection', () => ({
  default: ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div data-testid="title-section">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  ),
}));

vi.mock('./EventsDescription', () => ({
  default: () => <div data-testid="events-description">Events Description</div>,
}));

describe('EventsSection', () => {
  const mockImages = [{ src: '/img1.jpg', alt: 'img1' }];

  it('renders the section with correct structure', () => {
    render(<EventsSection carouselImages={mockImages} />);
    
    expect(screen.getByTestId('image-carousel')).toBeDefined();
    expect(screen.getByTestId('title-section')).toBeDefined();
    expect(screen.getByTestId('events-description')).toBeDefined();
  });

  it('passes correct props to TitleSection', () => {
    render(<EventsSection carouselImages={mockImages} />);
    expect(screen.getByText(EVENTS_SECTION_CONTENT.title)).toBeDefined();
    expect(screen.getByText(EVENTS_SECTION_CONTENT.subtitle)).toBeDefined();
  });
});
