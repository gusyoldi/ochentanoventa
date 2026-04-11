import Image from 'next/image';

const Logo = ({ ['datatest-id']: dataTestId = 'logo' }) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2">
      <Image
        data-testid={dataTestId}
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
