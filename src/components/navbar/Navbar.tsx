import Logo from './Logo'; 

const Navbar = () => {
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 flex items-center justify-between text-white border-2 border-red-600">
      {/* Logo */}
      <Logo />

      {/* Curved Navigation Menu */}
      <div className="relative">
        <div className="bg-white text-black flex gap-6 px-10 py-3 rounded-full shadow-lg nav-wave text-sm font-medium">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-gray-600 transition">
              {item.name}
            </a>
          ))}
        </div>

        {/* Custom curved nav shape */}
        <style>
          {`
            .nav-wave {
              clip-path: path("M 0 30 Q 20 0 60 0 H 240 Q 280 0 300 30 Q 280 60 240 60 H 60 Q 20 60 0 30 Z");
            }

            @media (min-width: 768px) {
              .nav-wave {
                clip-path: path("M 0 50 Q 40 0 100 0 H 400 Q 460 0 500 50 Q 460 100 400 100 H 100 Q 40 100 0 50 Z");
              }
            }
          `}
        </style>
      </div>

      {/* Book Button */}
      <a
        href="#book-now"
        className="px-6 py-2 bg-secondary-color text-white rounded-full font-semibold tracking-wide hover:bg-secondary-color-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
      >
        Book Your Stay
      </a>
    </header>
  );
};

export default Navbar;
