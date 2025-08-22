import Image from "next/image";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-footer w-dvw h-[83px] text-white flex items-center justify-evenly">
      <Image
        src="/images/footer/logo.svg"
        alt="logo"
        width={100}
        height={100}
      />
      <SocialLinks />
      <span>© Copyright 2025</span>
    </footer>
  );
};

export default Footer;
