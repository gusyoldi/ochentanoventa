'use client';

import ContactButton from './ContactButton';
import Logo from './Logo';

const Navbar = () => {
  return (
    <header className="border-divider relative flex items-center justify-center border-b py-10">
      <Logo />
      <ContactButton />
    </header>
  );
};

export default Navbar;
