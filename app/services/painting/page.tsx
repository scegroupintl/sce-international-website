import { NavBar } from "@/lib/components/NavBar";
import { ServicesAndContactButtons } from "@/lib/components/ServicesAndContactButtons";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function PaintingPage() {
  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      <NavBar />
      {/* Banner Image with Header Overlay */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden flex items-center justify-center bg-slate-500">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-slate-900/40 p-12">
            <h1
              className={`text-4xl font-bold text-white text-center drop-shadow-lg ${oswald.className}`}
            >
              Servicios de Pintura
            </h1>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center py-8">
        <div className="container mx-auto px-4 flex flex-col items-center max-w-4xl">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-2/3">
              <p className="md:text-lg text-gray-700 mb-6 text-justify">
                Ofrecemos servicios profesionales de pintura para interiores y
                exteriores, utilizando materiales de primera calidad y técnicas
                modernas para lograr acabados duraderos y estéticos. Nuestro
                equipo está capacitado para transformar cualquier espacio,
                adaptándose a sus preferencias y necesidades.
                <br />
                <br />
                Ofrecemos los servicios de pintura para: Edificios, casas,
                locales, empresas y colegios.
              </p>
            </div>
            <img
              width="400"
              className="fade-in bg-blue-100 rounded-md shadow-lg mb-6"
              src="/servicio_de_pintura.jpg"
              alt="Ejemplo de pintura profesional"
            />
          </div>
          <p className="md:text-lg text-gray-700 mb-4 text-justify">
            Realizamos pintura de interiores, exteriores, muebles y acabados
            decorativos, siempre garantizando limpieza, puntualidad y resultados
            que superan las expectativas. Trabajamos con marcas reconocidas y
            ofrecemos asesoría personalizada para elegir los colores y estilos
            que mejor se adapten a su proyecto.
            <br />
            <br />
            Confíe en SCE Services & Supplies para renovar y embellecer sus
            espacios con la máxima calidad y profesionalismo.
          </p>
          <ServicesAndContactButtons />
        </div>
      </section>
    </main>
  );
}
