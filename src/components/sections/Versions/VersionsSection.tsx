import SpotifyLink from '@/components/layout/Footer/SpotifyLink';
import { SPOTIFY_LINKS, VERSIONS_SECTION_CONTENT } from '@/constants';
import Title from '@/lib/components/title';
import { VolumeType } from '@/types';

import LatestVolume from '@/components/ui/LatestVolume/LatestVolume';
import VersionsDescription from './VersionsDescription';
import VolumesList from './volume/VolumesList';

type VersionsSectionProps = {
  volumes: VolumeType[];
};

const VersionsSection = ({ volumes }: VersionsSectionProps) => {
  const { title, subtitle, spotifyText } = VERSIONS_SECTION_CONTENT;

  return (
    <section className="border-divider border-b pt-10 pb-10 xl:pt-20">
      <div className="flex flex-col items-center xl:grid xl:grid-flow-col xl:grid-rows-2 xl:items-start xl:gap-x-3.5">
        <Title title={title} subtitle={subtitle} />
        <LatestVolume />
        <VersionsDescription />
      </div>

      <VolumesList volumes={volumes} />
      <SpotifyLink href={SPOTIFY_LINKS.ARTIST} text={spotifyText} />
    </section>
  );
};

export default VersionsSection;
