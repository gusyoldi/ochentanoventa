import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Navbar from './Navbar';

// Mock child components to isolate Navbar test
vi.mock('./Logo', () => ({
  default: () => <div data-testid="mock-logo">Logo</div>,
}));

vi.mock('./ContactButton', () => ({
  default: () => <div data-testid="mock-contact-button">Contact Button</div>,
}));

describe('Navbar', () => {
  it('renders correctly with Logo and ContactButton', () => {
    render(<Navbar />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByTestId('mock-logo')).toBeInTheDocument();
    expect(screen.getByTestId('mock-contact-button')).toBeInTheDocument();
  });

  it('has the correct accessibility label', () => {
    render(<Navbar />);
    expect(screen.getByLabelText(/navegación principal/i)).toBeInTheDocument();
  });
});
