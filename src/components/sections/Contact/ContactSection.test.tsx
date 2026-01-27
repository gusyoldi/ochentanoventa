import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ContactSection from './ContactSection';

// Mock dependencies
vi.mock('@/components/ui/Form', () => ({
  default: () => <form data-testid="contact-form">Form</form>,
}));

vi.mock('@/components/ui/ImageCarousel', () => ({
  default: () => <div data-testid="image-carousel">Image Carousel</div>,
}));

describe('ContactSection', () => {
  const mockImages = [{ src: '/img1.jpg', alt: 'img1' }];

  it('renders the contact form', () => {
    render(<ContactSection carouselImages={mockImages} />);
    expect(screen.getByTestId('contact-form')).toBeDefined();
  });

  it('renders the image carousel', () => {
    render(<ContactSection carouselImages={mockImages} />);
    expect(screen.getByTestId('image-carousel')).toBeDefined();
  });
});
