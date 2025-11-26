interface LatestVolumeCardProps {
  children: React.ReactNode;
  link?: string;
}

const LatestVolumeCard = ({ children, link }: LatestVolumeCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative mb-5 flex h-[176px] w-[350px] items-center justify-between gap-x-4 overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800/80 via-zinc-700/70 to-zinc-900/90 p-4 text-white shadow-lg ring-1 ring-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-yellow-400/10 xl:order-last xl:row-span-2 xl:h-[296px] xl:w-[590px] xl:justify-center xl:gap-x-10 xl:p-8"
    >
      <div className="absolute inset-0 -z-10 animate-[gradientShift_6s_ease-in-out_infinite] bg-[linear-gradient(135deg,#ffecb3_0%,#4b5563_50%,#1e1e1e_100%)] bg-[length:200%_200%] opacity-20 blur-3xl"></div>
      {children}
    </a>
  );
};

export default LatestVolumeCard;
