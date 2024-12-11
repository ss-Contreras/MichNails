import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'

const Navbar = () => {
  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/50 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          {/* Logo */}
          <Link href='/' className='flex z-40 font-semibold text-xl'>
            Mich <span className='text-pink-400'> Nails</span>
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
