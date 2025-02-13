import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'

const Navbar = () => {
  return (
    <nav className='sticky z-[100] h-20 inset-x-0 top-0 w-full border-b border-pink-300 bg-white/60 backdrop-blur-lg shadow-md transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-20 items-center justify-between border-b border-pink-300 px-6'>
          {/* Logo */}
          <Link href='/' className='flex items-center z-40 font-bold text-2xl text-gray-800'>
            <img
              className='h-14 w-auto object-contain rounded-full transform hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-pink-400'
              src='/logo-mich.png'
              alt='Mich Nails Logo'
            />
            <div className='ml-3 mt-2 tracking-wide'>
              Mich<span className='text-pink-500'>Nails</span>
            </div>
          </Link>

          {/* Menú de enlaces */}
          <div className='h-full flex items-center space-x-4'>
            <Link
              href='#catalogo' // Redirige a la sección de Catálogo
              className={`${buttonVariants({
                size: 'sm',
                variant: 'default',
              })} font-semibold`}>
              Catálogo
            </Link>
            <Link
              href='#contactame' // Redirige a la sección de Reviews
              className={`${buttonVariants({
                size: 'sm',
                variant: 'default',
              })} font-semibold`}>
              Contáctame
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
