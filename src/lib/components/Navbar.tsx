import Image from 'next/image';

const Navbar = () => {
  return (
    <header className="border-divider flex items-center justify-center border-b py-12">
      <Image src="/images/header/logo.svg" alt="logo" width={154} height={56} />
    </header>
  );
};

export default Navbar;
