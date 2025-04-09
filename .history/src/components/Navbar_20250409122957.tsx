'use client'

import Link from 'next/link'
import { useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ShoppingBagIcon, SparklesIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigation = [
    { 
      name: 'Diseños',
      submenu: [
        { name: '💎 Acrilicos', href: '/presson/3' },
        { name: '🎨 Diseño Rosa', href: '/presson/2' },
        { name: '🌟 Uñas de Anime', href: '/presson/1' },
      ]
    },
    { name: 'Catalogo', href: '#catalogo' },
    { name: 'Servicios', href: '#services' },
    { name: 'Personalizadas', href: '#videos' },
    { name: 'Contáctame', href: '#contactame' },
  ]

  return (
    <nav className="sticky z-50 top-0 w-full bg-gradient-to-b from-pink-100/95 to-white/90 backdrop-blur-xl shadow-sm border-b border-pink-200">
      <MaxWidthWrapper>
        <div className="relative h-20 flex items-center justify-between px-4 sm:px-6">
          {/* Logo con efecto brillo */}
          <Link href="/" className="flex items-center group space-x-3">
            <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 p-1 shadow-lg transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo-mich.png"
                alt="Logo GlamNails"
                width={56}
                height={56}
                className="rounded-full object-contain border-2 border-white"
              />
              <div className="absolute inset-0 rounded-full animate-pulse opacity-20 bg-gradient-to-r from-pink-300 to-transparent" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
              Glam<span className="font-light">Nails</span>
            </span>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {navigation.map((item) => (
              item.submenu ? (
                <Menu key={item.name} as="div" className="relative">
                  <Menu.Button className="flex items-center gap-1 px-4 py-2.5 text-pink-900 hover:text-rose-600 transition-all font-medium group">
                    {item.name}
                    <ChevronDownIcon className="h-4 w-4 mt-0.5 text-pink-500 group-hover:text-rose-600 transition-colors" />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Menu.Button>
                  
                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Menu.Items className="absolute top-full left-0 w-56 mt-2 origin-top-right bg-white/95 backdrop-blur-xl rounded-xl shadow-xl ring-1 ring-pink-100/50 divide-y divide-pink-100/30">
                      {item.submenu.map((subItem) => (
                        <Menu.Item key={subItem.name}>
                          {({ active }: { active: boolean }) => (
                            <Link
                              href={subItem.href}
                              className={`${
                                active ? 'bg-pink-50 text-rose-600' : 'text-pink-800'
                              } flex items-center px-4 py-3 text-sm font-medium transition-all group`}
                            >
                              <span className="mr-2 text-lg">{subItem.name.split(' ')[0]}</span>
                              <span className="border-l border-pink-200 pl-2">
                                {subItem.name.split(' ').slice(1).join(' ')}
                              </span>
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
                  className="px-4 py-2.5 text-pink-900 hover:text-rose-600 relative group transition-colors"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              )
            ))}
            
            {/* Carrito con efecto especial */}
            <button className="ml-4 p-2 relative group">
              <div className="relative bg-gradient-to-br from-pink-300 to-rose-400 p-2 rounded-full shadow-lg">
                <ShoppingBagIcon className="h-6 w-6 text-white" />
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white h-6 w-6 rounded-full text-xs flex items-center justify-center shadow-sm">
                  3
                </span>
              </div>
              <div className="absolute inset-0 rounded-full animate-ping opacity-0 group-hover:opacity-20 bg-rose-400 duration-1000" />
            </button>
          </div>

          {/* Botón Menú Mobile */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-rose-600 hover:text-pink-700 rounded-lg transition-colors"
            >
              <span className="sr-only">Abrir menú</span>
              <svg
                className="h-8 w-8"
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

        {/* Menú Mobile con diseño floral */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-pink-100">
            <div className="px-4 pt-4 pb-6 space-y-2 relative overflow-hidden">
              {/* Decoración floral */}
              <div className="absolute -right-10 -top-10 opacity-20 rotate-12">
                <svg className="h-32 w-32 text-pink-200" viewBox="0 0 100 100">
                  <path fill="currentColor" d="M88.9 58.9c0-13.3-8.4-25.1-21-29.5 2.8 7.8 1.8 16.5-3.4 23.3-5.9 7.7-15.9 10.7-25.1 8.1C35.2 57.2 30 48.5 30 38.7c0-15.2 12.3-27.5 27.5-27.5S85 23.5 85 38.7c0 5.8-1.8 11.2-4.9 15.7 11.8-2.6 20.8-12.5 20.8-24.5 0-13.8-11.2-25-25-25-12.2 0-22.4 8.8-24.5 20.4 5.2-3.3 11.7-5.2 18.6-5.2 16.6 0 30 13.4 30 30 0 16.6-13.4 30-30 30-16.6 0-30-13.4-30-30 0-4.6 1-8.9 2.9-12.9-3.6 2.1-7.8 3.4-12.2 3.4-9.7 0-17.9-6.4-20.6-15.2C5.8 33.1 0 42.7 0 53.7c0 13.8 11.2 25 25 25 12.4 0 22.6-9.1 24.7-20.8-4.9 4.2-11.3 6.7-18.2 6.7-16.6 0-30-13.4-30-30 0-16.6 13.4-30 30-30 16.6 0 30 13.4 30 30 0 5.9-1.7 11.4-4.6 16.1 8.8-4.8 15.2-13.7 16.8-24.1 1.4 7.2 4.7 13.7 9.7 18.7 6.3 6.3 15 10 24.6 10 13.8 0 25-11.2 25-25z"/>
                </svg>
              </div>
              
              {navigation.map((item) => (
                item.submenu ? (
                  <div key={item.name} className="space-y-1">
                    <button className="w-full px-4 py-3 text-left text-rose-600 font-semibold bg-pink-50 rounded-xl">
                      {item.name} ✨
                    </button>
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-pink-800 hover:bg-pink-50 rounded-lg transition-colors border-l-2 border-pink-200 ml-2"
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
                    className="block px-4 py-3 text-pink-900 hover:bg-pink-50 rounded-lg transition-colors font-medium border-b border-pink-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              {/* Carrito Mobile */}
              <button className="w-full px-4 py-3 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-xl flex items-center gap-2 justify-center font-semibold mt-4">
                <ShoppingBagIcon className="h-5 w-5" />
                Mi Carrito
                <span className="ml-2 bg-white text-rose-600 h-6 w-6 rounded-full text-sm flex items-center justify-center shadow-inner">
                  3
                </span>
              </button>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar