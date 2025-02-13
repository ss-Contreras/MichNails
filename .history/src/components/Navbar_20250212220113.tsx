'use client'

import Link from 'next/link';
import { useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky z-[100] h-20 inset-x-0 top-0 w-full border-b border-pink-300 bg-white/60 backdrop-blur-lg shadow-md transition-all">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between border-b border-pink-300 px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center z-40 font-bold text-2xl text-gray-800"
          >
            <Image
              className='h-14 w-auto object-contain rounded-full transform hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-pink-400'
              src='/logo-mich.png'
              alt='Logo of Mich Nails'
              width={56} // specify the width
              height={56} // specify the height
            />
            <div className="ml-3 mt-2 tracking-wide">
              Mich<span className="text-pink-500">Nails</span>
            </div>
          </Link>

          {/* Menú de enlaces para desktop */}
          <div className="hidden md:flex h-full items-center space-x-4">
            <Link
              href="#catalogo"
              className={`${buttonVariants({
                size: 'lg',
                variant: 'default',
              })} font-semibold`}
            >
              Catálogo
            </Link>
            <Link
              href="#services"
              className={`${buttonVariants({
                size: 'lg',
                variant: 'default',
              })} font-semibold`}
            >
              Servicios
            </Link>
            <Link
              href="#contactame"
              className={`${buttonVariants({
                size: 'lg',
                variant: 'default',
              })} font-semibold`}
            >
              Contáctame
            </Link>
          </div>

          {/* Botón para menú móvil */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-800 hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {isMobileMenuOpen ? (
                // Icono para cerrar menú
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                // Icono de menú hamburguesa
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden sticky border-t border-pink-300">
          <div className="px-6 py-4 flex flex-col space-y-2">
            <Link
              href="#catalogo"
              className={`${buttonVariants({
                size: 'lg',
                variant: 'default',
              })} font-semibold`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Catálogo
            </Link>
            <Link
              href="#services"
              className={`${buttonVariants({
                size: 'lg',
                variant: 'default',
              })} font-semibold`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#contactame"
              className={`${buttonVariants({
                size: 'lg',
                variant: 'default',
              })} font-semibold`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contáctame
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
