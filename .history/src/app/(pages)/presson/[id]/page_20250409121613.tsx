// app/(pages)/presson/[id]/page.tsx
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { FaWhatsapp } from 'react-icons/fa'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Link from 'next/link'
import { Check } from 'lucide-react'

interface Product {
    id: number
    title: string
    price: string
    description: string
    image: string
}

const products: Product[] = [
    {
        id: 1,
        title: "Presson de Anime Gojo",
        price: "$100.000",
        description: "Uñas press on personalizadas de tus personajes favoritos",
        image: "/testimonials/1.jpeg"
    },
    {
        id: 2,
        title: "Diseño Rosa Press-on",
        price: "$60.000",
        description: "Mezcla explosiva de colores y estilos únicos",
        image: "/testimonials/16.jpeg"
    },
    {
        id: 3,
        title: "Uñas en Acrilico",
        price: "$60.000",
        description: "Elegancia y estilo en tus uñas",
        image: "/testimonials/17.jpeg"
    },
]

export async function generateStaticParams() {
    return products.map(product => ({
        id: product.id.toString(),
    }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = products.find(p => p.id === Number(params.id))

    if (!product) {
        return <div>Producto no encontrado</div>
    }

    const isMobile = typeof window !== "undefined" && /Mobi|Android/i.test(navigator.userAgent)
    const whatsappLink = isMobile
        ? `https://api.whatsapp.com/send?phone=+573224400528&text=¡Hola!%20Estoy%20interesado%20en%20el%20producto:%20${encodeURIComponent(product.title)}`
        : `https://web.whatsapp.com/send?phone=+573224400528&text=¡Hola!%20Estoy%20interesado%20en%20el%20producto:%20${encodeURIComponent(product.title)}`

    return (
        <div className="bg-slate-50 min-h-screen">
            <MaxWidthWrapper className="py-16">
                <div className="bg-white rounded-2xl shadow-xl p-8 animate-popIn">
                    <Link
                        href="/#press-on"
                        className="group mb-8 inline-flex items-center gap-2 rounded-full bg-pink-50 px-6 py-3 text-pink-600 shadow-sm transition-all hover:bg-pink-100 hover:shadow-md hover:scale-105"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                        <span className="font-medium">Volver al catálogo</span>
                    </Link>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="relative overflow-hidden rounded-2xl">
                            <AspectRatio ratio={3 / 4}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                                />
                            </AspectRatio>
                        </div>

                        <div className="flex flex-col justify-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                {product.title}
                            </h1>

                            <p className="text-2xl text-pink-500 mb-6">
                                {product.price}
                            </p>

                            <p className="text-lg text-gray-600 mb-8">
                                {product.description}
                            </p>

                            <div className="space-y-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 text-white py-4 px-8 rounded-full flex items-center justify-center gap-3 hover:bg-green-600 transition-colors"
                                >
                                    <FaWhatsapp className="w-6 h-6" />
                                    Pedir por WhatsApp
                                </a>

                                <p className="text-center text-gray-500 text-sm">
                                    ¡Respuesta inmediata! 💬
                                </p>
                            </div>

                            <div className="mt-8 border-t pt-8">
                                <h3 className="text-xl font-bold mb-4">Detalles del producto</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-pink-500" />
                                        Incluye 10 uñas + kit de aplicación
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-pink-500" />
                                        Duración de 15-30 días
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-5 h-5 text-pink-500" />
                                        Materiales hipoalergénicos
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}