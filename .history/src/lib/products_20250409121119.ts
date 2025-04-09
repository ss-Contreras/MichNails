export interface Product {
    id: number;
    title: string;
    price: string;
    description: string;
    shortDescription?: string;
    image: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      title: "Diseño Floral",
      price: 15000,
      shortDescription: "Uñas con diseño floral",
      image: "/testimonials/1.jpeg",
      description: "Disfruta de un detalle primaveral con estas uñas personalizadas y llenas de frescura.",
    },
    // ...otros productos
  ];
  