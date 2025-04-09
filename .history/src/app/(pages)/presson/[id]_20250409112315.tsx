import { FaWhatsapp } from "react-icons/fa";
import { notFound } from "next/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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

const getProductById = (id: number): Product | undefined =>
  products.find((product) => product.id === id);

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = getProductById(Number(params.id));

  if (!product) {
    return notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `¡Hola! Quiero ordenar: ${product.title} (${product.price})`
  );

  return (
    <div className="container mx-auto max-w-3xl py-16 px-4 sm:px-0">
      <div className="space-y-8">
        <AspectRatio ratio={16 / 9}>
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full rounded-3xl shadow-lg"
          />
        </AspectRatio>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-pink-500">{product.title}</h1>
          <p className="text-2xl font-medium">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
          <a
            href={`https://api.whatsapp.com/send?phone=+573224400528&text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold shadow-md transition-all"
          >
            <FaWhatsapp size={24} />
            Ordenar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}