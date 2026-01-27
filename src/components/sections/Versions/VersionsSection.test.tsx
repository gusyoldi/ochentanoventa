import { VERSIONS_SECTION_CONTENT } from '@/constants';
import { VolumeType } from '@/types';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import VersionsSection from './VersionsSection';

// Mock dependencies
vi.mock('@/components/ui/TitleSection', () => ({
  default: ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div data-testid="title-section">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  ),
}));

vi.mock('../LatestVolume/LatestVolume', () => ({
  default: () => <div data-testid="latest-volume">Latest Volume</div>,
}));

vi.mock('./VersionsDescription', () => ({
  default: () => <div data-testid="versions-description">Versions Description</div>,
}));

vi.mock('./VolumesList', () => ({
  default: () => <div data-testid="volumes-list">Volumes List</div>,
}));

vi.mock('@/components/layout/Footer/SpotifyLink', () => ({
  default: ({ text }: { text: string }) => <a href="#">{text}</a>,
}));

describe('VersionsSection', () => {
  const mockVolumes: VolumeType[] = [
    {
      src: '/img.jpg',
      alt: 'Vol 1',
      title: 'Vol 1',
      year: '2023',
    }
  ];

  it('renders the section with correct structure', () => {
    render(<VersionsSection volumes={mockVolumes} />);
    
    expect(screen.getByTestId('title-section')).toBeDefined();
    expect(screen.getByTestId('latest-volume')).toBeDefined();
    expect(screen.getByTestId('versions-description')).toBeDefined();
    expect(screen.getByTestId('volumes-list')).toBeDefined();
  });

  it('passes correct props to TitleSection', () => {
    render(<VersionsSection volumes={mockVolumes} />);
    expect(screen.getByText(VERSIONS_SECTION_CONTENT.title)).toBeDefined();
    expect(screen.getByText(VERSIONS_SECTION_CONTENT.subtitle)).toBeDefined();
  });

  it('renders the Spotify link', () => {
    render(<VersionsSection volumes={mockVolumes} />);
    expect(screen.getByText(VERSIONS_SECTION_CONTENT.spotifyText)).toBeDefined();
  });
});
