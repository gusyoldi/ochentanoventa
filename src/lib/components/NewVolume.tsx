import Image from 'next/image';

interface NewVolumeProps {
  title?: string;
  volume?: string;
  songs?: string[];
  image: string;
  link: string;
}

const NewVolume = ({
  title = '¡Último lanzamiento!',
  volume = '',
  songs = [],
  image,
  link,
}: NewVolumeProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative mb-5 flex h-[176px] w-[350px] items-center justify-between gap-x-4 overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800/80 via-zinc-700/70 to-zinc-900/90 p-4 text-white shadow-lg ring-1 ring-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-yellow-400/10 xl:order-last xl:row-span-2 xl:h-[296px] xl:w-[590px] xl:justify-center xl:gap-x-10 xl:p-8">
        <div className="absolute inset-0 -z-10 animate-[gradientShift_6s_ease-in-out_infinite] bg-[linear-gradient(135deg,#ffecb3_0%,#4b5563_50%,#1e1e1e_100%)] bg-[length:200%_200%] opacity-20 blur-3xl"></div>

        <div className="relative h-[142px] w-[142px] overflow-hidden rounded-lg transition-transform duration-700 xl:h-[240px] xl:w-[240px]">
          <Image src={image} alt="last-volume" fill className="object-cover" />
        </div>

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
      </div>
    </a>
  );
};

export default NewVolume;
