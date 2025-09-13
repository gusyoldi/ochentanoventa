import Image from 'next/image';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="font-roboto bg-secondary flex h-[83px] items-center justify-between px-3 py-5 text-white">
      <Image
        src="/images/footer/logo.svg"
        alt="logo"
        width={100}
        height={100}
      />
      <div className="flex flex-col gap-1">
        <SocialLinks />
        <span className="ml-auto text-[10px]">© Copyright 2025</span>
      </div>
    </footer>
  );
};

export default Footer;
