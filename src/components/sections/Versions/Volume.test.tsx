import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type React from 'react';
import type { VolumeType } from '@/types';
import Volume from './Volume';

vi.mock('next/image', () => {
  type MockImageProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };

  return {
    default: ({ src, alt, ...rest }: MockImageProps) => (
      <img src={src} alt={alt} {...rest} />
    ),
  };
});

describe('Volume', () => {
  it('renders as an external link when spotifyUrl is provided and clicking the content triggers the link click', () => {
    const spotifyUrl = 'https://open.spotify.com/album/3RTbg6nammKOXbEFgJmBf8';

    const volume: VolumeType = {
      src: '/img.webp',
      alt: 'Volumen 1',
      title: 'Volumen 1',
      year: '2021',
      songs: ['Track 1'],
      spotifyUrl,
    };

    render(<Volume volume={volume} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', spotifyUrl);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');

    const onClick = vi.fn();
    link.addEventListener('click', onClick);

    fireEvent.click(screen.getByText('Volumen 1'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders as a non-link container when spotifyUrl is not provided', () => {
    const volume: VolumeType = {
      src: '/img.webp',
      alt: 'Sin Spotify',
      title: 'Sin Spotify',
      year: '2021',
      format: 'Single',
    };

    render(<Volume volume={volume} />);

    expect(screen.queryByRole('link')).toBeNull();
    expect(screen.getByText('Sin Spotify')).toBeDefined();
  });
});
