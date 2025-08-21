import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center py-12 border-b border-divider">
      <Image src="/images/logo.webp" alt="logo" width={154} height={56} />
    </nav>
  );
};

export default Navbar;
