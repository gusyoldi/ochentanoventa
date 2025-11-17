import {
  SPOTIFY_LINKS,
  VERSIONS_SECTION_CONTENT,
  VolumeType,
} from '@/app/constants';
import LatestVolume from './LatestVolume';
import SpotifyLink from './SpotifyLink';
import TitleSection from './TitleSection';
import VersionsDescription from './VersionsDescription';
import VolumesList from './VolumesList';

type VersionsSectionProps = {
  volumes: VolumeType[];
};

export default function VersionsSection({ volumes }: VersionsSectionProps) {
  const { title, subtitle, spotifyText } = VERSIONS_SECTION_CONTENT;

  return (
    <section className="border-divider border-b pt-10 pb-10 xl:pt-20">
      <div className="flex flex-col items-center xl:grid xl:grid-flow-col xl:grid-rows-2 xl:items-start xl:gap-x-3.5">
        <TitleSection title={title} subtitle={subtitle} />
        <LatestVolume />
        <VersionsDescription />
      </div>

      <VolumesList volumes={volumes} />
      <SpotifyLink href={SPOTIFY_LINKS.ARTIST} text={spotifyText} />
    </section>
  );
}
