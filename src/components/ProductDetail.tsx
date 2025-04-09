import { Product } from "@/types/types";
import { AspectRatio } from "./ui/aspect-ratio";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden animate-popIn">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <AspectRatio ratio={3/4}>
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
          
          <div className="p-8 flex flex-col">
            <h2 className="text-4xl font-bold mb-4">{product.title}</h2>
            <p className="text-2xl text-pink-500 mb-6">{product.price}</p>
            <p className="text-gray-600 mb-8">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}