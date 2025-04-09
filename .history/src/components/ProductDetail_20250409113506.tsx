import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useRouter } from 'next/router';

const products = [
  {
    id: 1,
    name: 'Diseño Floral Elegante',
    description: 'Uñas con diseño floral en tonos pastel.',
    price: '$50.000',
    image: '/images/floral.jpg',
  },
  // Agrega más productos según sea necesario
];

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/producto/${product.id}`);
  };

  return (
    <Fade>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer transform transition duration-500 hover:scale-105"
        onClick={handleClick}
      >
        <img className="w-full" src={product.image} alt={product.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="text-gray-900 font-bold">{product.price}</span>
        </div>
      </div>
    </Fade>
  );
};

const Catalogo = () => {
  return (
    <section id="catalogo" className="bg-slate-100 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Catálogo de Uñas Personalizadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogo;
