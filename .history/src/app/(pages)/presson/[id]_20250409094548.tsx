import { useParams } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Product } from "@/types";

const products: Product[] = [
  {
    id: 1,
    title: "Uñas Diseño Floral",
    price: 45000,
    description: "Diseño floral delicado con brillo y detalles en 3D",
    image: "/press-on1.jpg"
  },
  // ... más productos
];

export default function ProductDetail() {
  const params = useParams();
  const product = products.find(p => p.id === Number(params.id));

  if (!product) return <div>Producto no encontrado</div>;

  const whatsappMessage = encodeURIComponent(
    `¡Hola! Quiero ordenar: ${product.title} (${product.price})`
  );

  return (
    <div className="container mx-auto max-w-3xl space-y-6 py-12">
      <AspectRatio ratio={16/9}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </AspectRatio>
      <div className="space-y-4 px-4 sm:px-0">
        <h1 className="text-4xl font-bold text-pink-500">
          {product.title}
        </h1>
        <p className="text-2xl font-medium">${product.price}</p>
        <p className="text-gray-700">{product.description}</p>
        <a 
          href={`https://api.whatsapp.com/send?phone=+573224400528&text=${whatsappMessage}`}
          className="flex items-center gap-2 bg-green-500 
                     hover:bg-green-600 text-white px-6 py-3 
                     rounded-full transition-colors"
        >
          <FaWhatsapp size={24} /> 
          Ordenar por WhatsApp
        </a>
      </div>
    </div>
  );
}