import Link from 'next/link';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-lg border-t border-pink-300 shadow-inner py-8">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo y Nombre */}
          <div className="flex items-center">
            <Link href="/" className='flex items-center'>
                <Image
                  className="h-14 w-auto object-contain rounded-full transform hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-pink-400"
                  src="/logo-mich.png"
                  alt="Logo of Mich Nails"
                  width={56}
                  height={56}
                />
                <span className="ml-3 text-2xl font-bold text-gray-800">
                  Mich<span className="text-pink-500">Nails</span>
                </span>
            </Link>
          </div>

          {/* Datos y contacto */}
          <div className="mt-4 md:mt-0 text-center md:text-right text-gray-600">
            <p className="font-semibold">Manicuras Profesionales</p>
            <p className="mt-1">Realza tu belleza con elegancia y estilo.</p>
            <p className="mt-2">
              <Link
                href="mailto:contacto@michnails.com"
                className="text-pink-500 hover:underline transition-colors duration-300"
              >
                contacto@michnails.com
              </Link>
            </p>
          </div>
        </div>

        {/* Pie de página */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Mich Nails. Todos los derechos reservados.
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
