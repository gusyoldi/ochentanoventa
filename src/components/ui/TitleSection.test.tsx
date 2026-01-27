import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TitleSection from './TitleSection';

describe('TitleSection', () => {
  it('renders the title and subtitle', () => {
    render(<TitleSection title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Title')).toBeDefined();
    expect(screen.getByText('Test Subtitle')).toBeDefined();
  });

  it('applies default variant classes', () => {
    const { container } = render(<TitleSection title="Title" subtitle="Subtitle" />);
    const subtitleElement = screen.getByText('Subtitle');
    expect(subtitleElement.className).toContain('mb-5');
    expect(subtitleElement.className).toContain('xl:mb-10');
  });

  it('applies compact variant classes', () => {
    const { container } = render(<TitleSection title="Title" subtitle="Subtitle" variant="compact" />);
    const subtitleElement = screen.getByText('Subtitle');
    expect(subtitleElement.className).toContain('mb-3');
    expect(subtitleElement.className).toContain('xl:mb-5');
  });
});
