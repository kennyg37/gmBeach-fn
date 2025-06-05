import React from 'react';
import Logo from './navbar/Logo';
import Navbar from './navbar/Navbar';

const Header = ({ className = '' }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-brown-800/40  ${className}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center text-white">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;