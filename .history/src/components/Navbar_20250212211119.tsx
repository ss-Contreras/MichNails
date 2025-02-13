import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Contáctame', href: '#contactame' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-60 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full border-2 border-pink-400 shadow-lg transition-transform duration-300 transform hover:scale-110"
                  src="/logo-mich.png"
                  alt="Logo de Mich Nails"
                />
                <span className="ml-3 text-2xl font-bold text-gray-800">
                  Mich<span className="text-pink-500">Nails</span>
                </span>
              </a>
            </Link>
          </div>

          {/* Menú */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="text-gray-800 hover:text-pink-500 font-semibold transition-colors duration-300">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="block text-gray-800 hover:text-pink-500 font-semibold transition-colors duration-300">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
