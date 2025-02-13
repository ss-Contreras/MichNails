import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='sticky z-[100] h-20 inset-x-0 top-0 w-full border-b border-pink-300 bg-white/60 backdrop-blur-lg shadow-md transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-20 items-center justify-between border-b border-pink-300 px-6'>
          {/* Logo */}
          <Link href='/' className='flex items-center z-40 font-bold text-2xl text-gray-800'>
            <Image
              className='h-14 w-auto object-contain rounded-full transform hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-pink-400'
              src='/logo-mich.png'
              alt='Logo of Mich Nails'
              width={56} // specify the width
              height={56} // specify the height
            />
            <div className='ml-3 mt-2 tracking-wide'>
              Mich<span className='text-pink-500'>Nails</span>
            </div>
          </Link>

          {/* Menú de enlaces */}
          <div className='h-full flex items-center space-x-4'>
            <Link
              href='#catalogo'
              className={`${buttonVariants({
                size: 'lg',
                variant: 'default',
              })} font-semibold hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500`}
            >
              Catálogo
            </Link>
            <Link
              href='#contactame' // Redirige a la sección de Reviews
              className={`${buttonVariants({
                size: 'lg',
                variant: 'default',
              })} font-semibold`}>
              Contáctame
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Navbar
