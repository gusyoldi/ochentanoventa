import Image from 'next/image';

const Logo = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2">
      <Image
        src="/images/header/logo.svg"
        alt="logo"
        width={154}
        height={56}
        priority
      />
    </div>
  );
};

export default Logo;
