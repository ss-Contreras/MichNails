// components/PressOnCatalog.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import { Product } from "@/types/types";

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

export default function PressOnCatalog() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link href={`/press-on/${product.id}`} key={product.id}>
            <Card className="hover:shadow-lg transition-shadow group">
              <AspectRatio ratio={4/3}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="object-cover w-full h-full rounded-t-lg 
                            group-hover:scale-105 transition-transform"
                />
              </AspectRatio>
              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold text-lg line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-pink-500 font-medium">${product.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <Pagination 
        total={products.length}
        pageSize={6}
        className="justify-center"
      />
    </div>
  );
}