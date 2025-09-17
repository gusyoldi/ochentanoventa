import Image from 'next/image';

interface VolumeProps {
  src: string;
  alt: string;
  title: string;
  year: string;
  aditional?: string;
  format?: string;
  songs?: string[];
}

const Volume = ({
  src,
  alt,
  title,
  aditional,
  format,
  year,
  songs,
}: VolumeProps) => {
  return (
    <div className="max-w-[180px]">
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
