import Image from 'next/image';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="font-roboto bg-secondary h-20 px-3 py-5 text-white xl:py-6">
      <div className="mx-auto flex max-w-[350px] items-center justify-between xl:max-w-7xl">
        <Image
          src="/images/footer/logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-1 xl:contents">
          <SocialLinks />
          <span className="ml-auto text-[10px] xl:m-0 xl:text-xs">
            © Copyright 2025
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
