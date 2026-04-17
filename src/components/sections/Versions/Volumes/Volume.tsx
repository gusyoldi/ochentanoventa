import type { VolumeType } from '@/types';
import Image from 'next/image';

interface VolumeProps {
  volume: VolumeType;
}

const Volume = ({ volume }: VolumeProps) => {
  const { src, alt, title, year, aditional, format, songs, spotifyUrl } = volume;

  const Wrapper = spotifyUrl ? 'a' : 'div';

  return (
    <Wrapper
      {...(spotifyUrl
        ? { 
            href: spotifyUrl,
            target: '_blank',
            rel: 'noopener noreferrer',
          }
        : {})}
      className="group max-w-[180px] shrink-0 cursor-pointer transition-transform duration-300 ease-out xl:hover:scale-[1.03]"
    >
      <Image src={src} alt={alt} width={180} height={180} />

      <div className="mt-3 leading-5 transition-colors duration-300 group-hover:text-gold">
        {!songs ? (
          <>
            <h6 className="font-bold">{title}</h6>
            <span className="font-semibold text-wrap">{aditional}</span>
            <p>
              {year} - ({format})
            </p>
          </>
        ) : (
          <>
            <h6 className="mr-1 inline-block font-bold">{title}</h6>
            <span>({year})</span>
            <ul className="mt-2 list-inside list-decimal pl-1 text-sm">
              {songs.map((song) => (
                <li key={song}>{song}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Volume;
