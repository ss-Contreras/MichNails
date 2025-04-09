'use client'

import Link from "next/link";
import { useState } from "react";
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

// Array de ejemplo con productos
const products: Product[] = [
  {
    id: 1,
    title: "Diseño Floral",
    price: "$15",
    shortDescription: "Uñas con diseño floral",
    image: "/testimonials/1.jpeg",
    description:
      "Disfruta de un detalle primaveral con estas uñas personalizadas y llenas de frescura.",
  },
  {
    id: 2,
    title: "Glitter Chic",
    price: "$18",
    shortDescription: "Uñas con brillo y glitter",
    image: "/testimonials/2.jpeg",
    description:
      "Uñas con brillo y glitter perfectas para destacar en cualquier evento especial.",
  },
  {
    id: 3,
    title: "Minimal Elegance",
    price: "$12",
    shortDescription: "Diseño minimalista y elegante",
    image: "/testimonials/3.jpeg",
    description:
      "Un estilo sutil pero sofisticado para quienes prefieren la elegancia minimalista.",
  },
  {
    id: 4,
    title: "Pastel Dream",
    price: "$16",
    shortDescription: "Uñas en tonos pastel",
    image: "/testimonials/4.jpeg",
    description:
      "Colores suaves y armoniosos que reflejan un estilo único y sosegado.",
  },
  {
    id: 5,
    title: "Bold & Bright",
    price: "$20",
    shortDescription: "Diseños atrevidos con colores vivos",
    image: "/testimonials/5.jpeg",
    description:
      "Atrévete a lucir diseños vibrantes que te harán destacar en cualquier ocasión.",
  },
  {
    id: 6,
    title: "Elegant Marble",
    price: "$22",
    shortDescription: "Diseño marmoleado elegante",
    image: "/testimonials/6.jpeg",
    description:
      "Inspirado en mármol, este diseño sofisticado aporta un toque de distinción.",
  },
  // Agrega más productos según lo necesites
];

const itemsPerPage = 4;

const PressOnCatalog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="catalogo-presson" className="py-16 sm:py-24 bg-white">
      <MaxWidthWrapper className="flex flex-col items-center gap-12">
        <h2 className="tracking-tight font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 text-center">
          Venta de Uñas Personalizadas Press On
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {currentProducts.map((product) => (
            <Link key={product.id} href={`/presson/${product.id}`}>
              <div className="border rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer p-4 bg-slate-50">
                <AspectRatio ratio={1}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full rounded-md"
                  />
                </AspectRatio>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">{product.shortDescription}</p>
                  <p className="mt-2 font-bold text-pink-500">
                    {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Paginación */}
        <div className="flex items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-pink-500 text-white rounded disabled:opacity-50"
          >
            Anterior
          </button>
          <span className="text-gray-700">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-pink-500 text-white rounded disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PressOnCatalog;
