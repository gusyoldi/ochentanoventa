import getLastVolume from '../../services/strapi/getLastVolume';
import LatestVolumeCard from './LatestVolumeCard';
import LatestVolumeImage from './LatestVolumeImage';
import { LINK, SONGS } from './constants';

const LatestVolume = async () => {
  const {
    title = '¡Último lanzamiento!',
    volume = 'Volumen 3',
    songs = SONGS,
    image = { url: '/images/volumes/last.webp' },
    link = LINK,
  } = await getLastVolume();

  return (
    <LatestVolumeCard link={link}>
      <LatestVolumeImage src={image.url} alt="last-volume" />

      <div className="font-roboto z-10">
        <h3 className="text-body-md text-gold hover:text-gold mb-1.5 font-bold transition-colors duration-500 xl:mb-5 xl:text-3xl">
          {title}
        </h3>

        <h4 className="mb-2 text-sm font-semibold text-gray-300 xl:mb-3 xl:text-xl">
          {volume}
        </h4>

        <ul className="list-inside list-decimal space-y-0.5 pl-1 text-xs text-gray-400 xl:text-base">
          {songs.map((song) => (
            <li key={song} className="transition-all duration-300">
              {song}
            </li>
          ))}
        </ul>
      </div>
    </LatestVolumeCard>
  );
};

export default LatestVolume;
