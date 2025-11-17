import {
  SPOTIFY_LINKS,
  VERSIONS_SECTION_CONTENT,
  VolumeType,
} from '@/app/constants';
import LatestVolume from './LatestVolume';
import SpotifyLink from './SpotifyLink';
import TitleSection from './TitleSection';
import VolumesList from './VolumesList';

type VersionsSectionProps = {
  volumes: VolumeType[];
};

export default function VersionsSection({ volumes }: VersionsSectionProps) {
  const { title, subtitle, paragraphs, spotifyText } = VERSIONS_SECTION_CONTENT;

  return (
    <section className="border-divider border-b pt-10 pb-10 xl:pt-20">
      <div className="flex flex-col items-center xl:grid xl:grid-flow-col xl:grid-rows-2 xl:items-start xl:gap-x-3.5">
        {/* Title Section */}
        <TitleSection title={title} subtitle={subtitle} />

        {/* Latest Volume */}
        <LatestVolume />

        {/* Description */}
        <div className="text-body-sm font-roboto xl:text-body-md flex flex-col gap-6 leading-5 tracking-wide">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Volumes List */}
      <VolumesList volumes={volumes} />

      {/* Spotify Link */}
      <SpotifyLink href={SPOTIFY_LINKS.ARTIST} text={spotifyText} />
    </section>
  );
}
