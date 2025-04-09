'use client'

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface Product {
  id: number;
  title: string;
  price: string;
  shortDescription: string;
  image: string;
  description: string;
}

const products: Product[] = [
  // (Mismos productos)
];

const itemsPerPage = 4;

const PressOnCatalog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    anime({
      targets: productRefs.current,
      opacity: [0, 1],
      translateY: [40, 0],
      delay: anime.stagger(100),
      duration: 800,
      easing: 'easeOutExpo',
    });
  }, [currentPage]);

  return (
    <section id="catalogo-presson" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <MaxWidthWrapper className="flex flex-col items-center gap-12">
        <h2 className="tracking-tight font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 text-center">
          Venta de Uñas Personalizadas Press On
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {currentProducts.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (productRefs.current[index] = el)}
              className="flex flex-col justify-between border border-gray-200 rounded-xl shadow-lg p-4 bg-white hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <div>
                <AspectRatio ratio={1}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full rounded-md"
                  />
                </AspectRatio>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
                  <p className="text-gray-600">{product.shortDescription}</p>
                  <p className="mt-2 font-bold text-pink-500">{product.price}</p>
                </div>
              </div>
              <div className="mt-4">
                <Link href={`/presson/${product.id}`}>
                  <button className="w-full py-2 px-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-md transition-colors">
                    Comprar
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Paginación */}
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 disabled:opacity-50 transition-colors"
          >
            Anterior
          </button>
          <span className="text-gray-700 font-medium">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 disabled:opacity-50 transition-colors"
          >
            Siguiente
          </button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PressOnCatalog;
