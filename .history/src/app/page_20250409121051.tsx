import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Icons } from "@/components/Icon";
import { Check } from "lucide-react";
import { Reviews } from "@/components/Reviews";
import { FaWhatsapp } from "react-icons/fa";
import PressOn from "@/components/PressOn";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
}

// Datos de ejemplo para el catálogo
const products: Product[] = [
  {
    id: 1,
    title: "Presson de Anime Gojo",
    price: "$200.000",
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
  // Agrega más productos según sea necesario
];

export default function Home() {

  const isMobile = typeof window !== "undefined" && /Mobi|Android/i.test(navigator.userAgent);
  const whatsappLink = isMobile
    ? "https://api.whatsapp.com/send?phone=+573224400528&text=¡Hola!%20Quiero%20más%20información%20sobre%20tus%20servicios%20de%20uñas."
    : "https://api.whatsapp.com/send?phone=+573224400528&text=¡Hola!%20Quiero%20más%20información%20sobre%20tus%20servicios%20de%20uñas.";
  return (
    <div className="bg-slate-50">
      <section id="inicio">
        <MaxWidthWrapper className="pb-24 pt-2 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-6 lg:pb-6">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                {/* <img src="/nail.png" className="w-full" /> */}
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl"> Manicurista <span className="bg-pink-300 px-2 text-white">Profesional</span>
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                ¡Dale a tus manos el cuidado que merecen! 💅🏼 Ofrecemos manicuras clásicas, diseños personalizados,
                uñas <span className="font-semibold"> Semipermanente, <span className="mt-4 text-lg text-center text-pink-400 font-semibold animate-fadeIn">Press on Personalizadas</span> y Polygel </span> que reflejan tu personalidad. Disfruta de un ambiente relajante mientras transformamos
                tus uñas en verdaderas obras de arte.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-pink-400" />
                    Certificación Profesional, Calidad Garantizada
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-pink-400" />
                    Diseños Personalizados para Cada Ocasión
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-pink-400" />
                    Uso de Productos de Alta Durabilidad y Brillo
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              >
              </div>
            </div>
            <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
              <div className="relative md:max-w-xl">
                <img src="/line.png" className="absolute w-20 -left-6 -bottom-6 select-none animate-pulse text-rose-300" />
                <div className="relative overflow-hidden rounded-[1.5rem] shadow-lg">
                  <img className="object-cover w-full h-full rounded-[1.5rem] transform hover:scale-105 transition-transform duration-300" src="/testimonials/mich.jpeg" />
                </div>
                <p className="mt-4 text-lg text-center text-pink-400 font-semibold animate-fadeIn">
                  Michelle Solangie
                </p>
              </div>
            </div>
            <div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
                >
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Catálogo de Uñas Personalizadas Press On */}
      <section id="press-on" className="py-16 sm:py-24 bg-gradient-to-b from-pink-50 to-white">
        <MaxWidthWrapper>
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
              Nuestros Diseños{" "}
              <span className="bg-pink-400 text-white px-4 transform -rotate-3 inline-block">
                Press On
              </span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestras creaciones exclusivas, cada set incluye 24 uñas + kit de aplicación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {products.map((product) => (
              <Link 
                key={product.id} 
                href={`/presson/${product.id}`}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2"
              >
                <div className="overflow-hidden rounded-t-2xl">
                  <AspectRatio ratio={3/4}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 min-h-[60px]">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-2xl font-bold text-pink-500">{product.price}</span>
                    <button className="bg-pink-400 text-white px-6 py-2 rounded-full hover:bg-pink-500 transition-colors">
                      Ver más
                    </button>
                  </div>
                </div>

                {/* Etiqueta destacada */}
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md text-pink-500 font-bold">
                  ¡Nuevo!
                </div>
              </Link>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Sección de Reviews */}
      <section id="catalogo" className="bg-slate-100 py-16 sm:py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">
              Uñas de nuestras
              <span className="relative px-2">
                clientas
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-pink-400" />
              </span>
            </h2>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section id="services" className=" py-16 sm:py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">
              Nuestros {" "}
              <span className="relative px-2 text-pink-400 font-semibold animate-fadeIn">Servicios 💅</span>
            </h2>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <PressOn/>
        </div>
      </section>

      <section id="videos" className="bg-slate-100 py-16 sm:py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="text-center">
          <h2 className="tracking-tight font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">
            Un poco de Nuestros{" "}
            <span className="relative px-2 text-pink-400 font-semibold animate-fadeIn">
              Diseños Realizados
            </span>
          </h2>
        </div>

        <div className="grid-cols-1 md:grid-cols-2 gap-8 w-full px-4">
          {/* Video Local */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white p-4">
            <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
              <video
                controls
                className="w-full h-full rounded-lg"
                poster="/video/poster-gorillaz.jpg"
              >
                <source src="/video/gorillaz-nails.mp4" type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
            </AspectRatio>
            <p className="text-center mt-3 font-medium text-gray-700 text-lg">
            Uñas Personalizadas Gorillaz
            </p>
          </div>

          {/* Video de YouTube Embed */}
          {/* <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white p-4">
            <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/xPuIyOqFmto"
                title="Video de YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </AspectRatio>
            <p className="text-center mt-3 font-medium text-gray-700 text-lg">
              Uñas Personalizadas Gorillaz
            </p>
          </div> */}
        </div>
      </MaxWidthWrapper>
    </section>

      {/* Sección de Contacto */}
      <section id="contactame" className="bg-white py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">Contáctame</h2>
            <p className="text-lg max-w-prose mx-auto text-gray-600">
              ¡Agenda tu cita o resuelve tus dudas directamente conmigo a través de WhatsApp! Respuesta rápida y personalizada.
            </p>
            <div className="w-full max-w-2xl bg-slate-50 p-8 shadow-lg rounded-xl flex flex-col items-center gap-6 text-center">
              <p className="text-lg text-gray-700">
                Haz clic en el botón de abajo para enviarme un mensaje por WhatsApp y empezar a transformar tus uñas.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full text-lg font-semibold shadow-md transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                <FaWhatsapp className="h-6 w-6" />
                Contáctame por WhatsApp
              </a>

              <div className="mt-4">
                <p className="text-lg text-gray-700 font-medium">Michelle Solangie</p>
                <p className="text-lg font-semibold text-gray-700">Número de contacto: +57 322 4400528</p>
                <p className="text-sm text-gray-500">
                  ¡Te responderé lo antes posible!
                </p>
              </div>
            </div>
          </div>


        </MaxWidthWrapper>
      </section>
    </div>
  );
}
