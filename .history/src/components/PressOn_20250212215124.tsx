import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';

const pressOnProducts = [
  {
    id: 1,
    title: 'Uñas Press On Personalizadas',
    description: 'Estilos y Diseños Para Cualquier Ocasión.',
    image: '/testimonials/1.jpeg',
  },
  {
    id: 2,
    title: 'Glamour Glitter',
    description: 'Un toque de brillo para destacar en cada ocasión.',
    image: '/testimonials/2.jpeg',
  },
  {
    id: 3,
    title: 'Vintage Chic',
    description: 'Estilo retro y moderno en un solo look.',
    image: '/testimonials/17.jpeg',
  },
  // Agrega más productos según lo requieras...
];

const PressOn = () => {
  return (
    <section id="presson" className="py-16 bg-white/80 backdrop-blur-lg">
      <MaxWidthWrapper>
        {/* Título y descripción de la sección */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Press On Personalizadas
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra exclusiva colección de uñas press on, diseñadas para resaltar tu estilo único con elegancia y sofisticación.
          </p>
        </div> */}

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressOnProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-pink-300 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <button className="mt-4 w-full px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition-colors duration-300">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PressOn;
