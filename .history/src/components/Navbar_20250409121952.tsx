'use client'

import Link from 'next/link'
import { useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Inicio', href: '/' },
    {
      name: 'Productos',
      submenu: [
        { name: 'Press On', href: '/presson' },
        { name: 'Diseños Personalizados', href: '/disenos' },
        { name: 'Colecciones', href: '/colecciones' },
      ],
    },
    { name: 'Servicios', href: '#services' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contactame' },
  ]

  return (
    <nav className="sticky z-50 top-0 w-full border-b border-pink-200/30 bg-white/80 backdrop-blur-xl shadow-sm transition-all">
      <MaxWidthWrapper>
        <div className="relative h-20 flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center z-40 group"
          >
            <div className="relative h-14 w-14 rounded-full border-2 border-pink-400/80 p-1.5 transition-all group-hover:border-pink-500 group-hover:scale-105">
              <Image
                src="/logo-mich.png"
                alt="Logo MichNails"
                width={56}
                height={56}
                className="rounded-full object-contain shadow-lg"
              />
            </div>
            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Mich<span className="font-light">Nails</span>
            </span>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              item.submenu ? (
                <Menu key={item.name} as="div" className="relative">
                  <Menu.Button className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-pink-600 transition-colors font-medium">
                    {item.name}
                    <ChevronDownIcon className="h-4 w-4 mt-0.5" />
                  </Menu.Button>
                  
                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Menu.Items className="absolute top-full left-0 w-56 mt-2 origin-top-right bg-white/95 backdrop-blur-xl rounded-xl shadow-lg ring-1 ring-black/5 divide-y divide-gray-100/10">
                      {item.submenu.map((subItem) => (
                        <Menu.Item key={subItem.name}>
                          {({ active }) => (
                            <Link
                              href={subItem.href}
                              className={`${
                                active ? 'bg-pink-50 text-pink-600' : 'text-gray-700'
                              } flex px-4 py-3 text-sm font-medium transition-colors`}
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-pink-600 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
            
            {/* Carrito */}
            <button className="ml-4 p-2 text-gray-600 hover:text-pink-600 relative">
              <ShoppingBagIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white h-5 w-5 rounded-full text-xs flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* Botón Menú Mobile */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-pink-600 rounded-lg transition-colors"
            >
              <span className="sr-only">Abrir menú</span>
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú Mobile */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white/95 backdrop-blur-xl`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navigation.map((item) => (
              item.submenu ? (
                <div key={item.name} className="space-y-1">
                  <button className="w-full px-4 py-2 text-left text-gray-700 font-medium">
                    {item.name}
                  </button>
                  <div className="pl-6 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-600 hover:bg-pink-50 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-pink-50 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            
            {/* Carrito Mobile */}
            <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-pink-50 rounded-lg flex items-center gap-2">
              <ShoppingBagIcon className="h-5 w-5" />
              Carrito
              <span className="ml-auto bg-pink-500 text-white h-5 w-5 rounded-full text-xs flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar