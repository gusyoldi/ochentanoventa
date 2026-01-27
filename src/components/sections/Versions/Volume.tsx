import Image from 'next/image';

interface VolumeProps {
  volume: {
    src: string;
    alt: string;
    title: string;
    year: string;
    aditional?: string;
    format?: string;
    songs?: string[];
  };
}

const Volume = ({ volume }: VolumeProps) => {
  const { src, alt, title, year, aditional, format, songs } = volume;

  return (
    <div className="max-w-[180px] shrink-0">
      <Image src={src} alt={alt} width={180} height={180} />

      <div className="mt-3 leading-5">
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
    </div>
  );
};

export default Volume;
