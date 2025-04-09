// pages/presson/[id].tsx

import { useRouter } from "next/router";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Product } from "@/components/PressOnCatalog";

const products: Product[] = [
  {
    id: 1,
    title: "Diseño Floral",
    price: "$15",
    image: "/products/floral.jpg",
    shortDescription: "Uñas con diseño floral para primavera",
    description:
      "Disfruta de un detalle primaveral con estas uñas personalizadas y llenas de frescura. Perfectas para resaltar tu belleza natural.",
  },
  {
    id: 2,
    title: "Glitter Chic",
    price: "$18",
    image: "/products/glitter.jpg",
    shortDescription: "Uñas con brillo y glitter",
    description:
      "Uñas con brillo y glitter para destacar en cualquier evento. Un toque de glamour que marcará la diferencia.",
  },
  {
    id: 3,
    title: "Minimal Elegance",
    price: "$12",
    image: "/products/minimal.jpg",
    shortDescription: "Diseño minimalista y elegante",
    description:
      "Diseño minimalista y elegante que aporta sofisticación. Ideal para quienes buscan la simplicidad con estilo.",
  },
  {
    id: 4,
    title: "Pastel Dream",
    price: "$16",
    image: "/products/pastel.jpg",
    shortDescription: "Uñas en tonos pastel",
    description:
      "Con colores pastel armoniosos, estas uñas te brindan un look delicado y soñador para cualquier ocasión.",
  },
  {
    id: 5,
    title: "Bold & Bright",
    price: "$20",
    image: "/products/bold.jpg",
    shortDescription: "Diseños atrevidos con colores vivos",
    description:
      "Atrévete a lucir diseños vibrantes con colores intensos. Ideal para destacar y marcar tendencia.",
  },
  {
    id: 6,
    title: "Elegant Marble",
    price: "$22",
    image: "/products/marble.jpg",
    shortDescription: "Diseño marmoleado elegante",
    description:
      "Inspirado en el mármol, este diseño sofisticado es perfecto para quienes buscan un toque único y refinado.",
  },
];

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Evitamos errores de tipado al no tener el id todavía en el cliente
  if (!id) return null;

  // Convertir id a número y buscar el producto
  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product)
    return (
      <MaxWidthWrapper className="py-16 sm:py-24">
        <p className="text-center text-gray-700">Producto no encontrado.</p>
      </MaxWidthWrapper>
    );

  return (
    <MaxWidthWrapper className="py-16 sm:py-24">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <AspectRatio ratio={1}>
            <img
              src={product.image}
              alt={product.title}
              className="object-cover rounded-md"
            />
          </AspectRatio>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-gray-900">
            {product.title}
          </h1>
          <p className="text-2xl text-pink-500 font-semibold">
            {product.price}
          </p>
          <p className="text-gray-700">{product.description}</p>
          <button
            onClick={() => alert("Realizar pedido")}
            className="mt-4 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            Comprar
          </button>
          <Link href="/#catalogo-presson">
            <span className="mt-4 inline-block text-pink-500 hover:underline cursor-pointer">
              Volver al catálogo
            </span>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductDetail;
