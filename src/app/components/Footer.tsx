import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900-700 w-dvw h-[83px] text-white opacity-80 flex items-center justify-evenly">
      <div>OCHENTA NOVENTA</div>
      <div className="flex items-center gap-4">
        <Image
          src="/images/footer/instagram.svg"
          width={30}
          height={30}
          alt="instagram"
        />
        <Image
          src="/images/footer/tiktok.svg"
          width={30}
          height={30}
          alt="instagram"
        />
        <Image
          src="/images/footer/spotify.svg"
          width={30}
          height={30}
          alt="instagram"
        />
        <Image
          src="/images/footer/youtube.svg"
          width={30}
          height={30}
          alt="instagram"
        />
      </div>
      <div>© Copyright 2025</div>
    </footer>
  );
};

export default Footer;
