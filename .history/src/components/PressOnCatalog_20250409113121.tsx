'use client';

import Link from "next/link";
import { useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Pagination from "@/components/Pagination"; // Asegúrate de importarlo correctamente

export interface Product {
  id: number;
  title: string;
  price: number;
  shortDescription: string;
  description: string;
  image: string;
}

// Array de productos de ejemplo
const products: Product[] = [
  {
    id: 1,
    title: "Diseño Floral",
    price: 15000,
    shortDescription: "Uñas con diseño floral delicado",
    description:
      "Disfruta de un detalle primaveral con estas uñas personalizadas y llenas de frescura.",
    image: "/testimonials/1.jpeg",
  },
  {
    id: 2,
    title: "Diseño Geométrico",
    price: 18000,
    shortDescription: "Uñas con patrones geométricos",
    description:
      "Perfectas para quienes buscan un estilo moderno y elegante.",
    image: "/testimonials/2.jpeg",
  },
  // Agrega más productos aquí...
];

const itemsPerPage = 8;

const PressOnCatalog = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="catalogo-presson" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <MaxWidthWrapper className="flex flex-col items-center gap-12">
        <h2 className="tracking-tight font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 text-center">
          Catálogo de Uñas Personalizadas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {currentProducts.map((product) => (
            <Link href={`/press-on/${product.id}`} key={product.id}>
              <div
                className="group relative flex flex-col overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <AspectRatio ratio={1}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full rounded-t-3xl group-hover:scale-110 transition-transform duration-500"
                  />
                </AspectRatio>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-pink-500 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <p className="text-pink-500 font-bold text-lg">
                    ${product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Paginación */}
        <Pagination
          total={products.length}
          pageSize={itemsPerPage}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          className="justify-center"
        />
      </MaxWidthWrapper>
    </section>
  );
};

export default PressOnCatalog;