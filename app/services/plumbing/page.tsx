import { NavBar } from "@/lib/components/NavBar";
import { ServicesAndContactButtons } from "@/lib/components/ServicesAndContactButtons";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function PlumbingPage() {
  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      <NavBar />
      {/* Banner Image with Header Overlay */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden flex items-center justify-center bg-[url('https://plus.unsplash.com/premium_photo-1664301972519-506636f0245d')] bg-cover bg-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-slate-900/40 p-12">
            <h1
              className={`text-4xl font-bold text-white text-center drop-shadow-lg ${oswald.className}`}
            >
              Servicios de Plomería
            </h1>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center py-8">
        <div className="container mx-auto px-4 flex flex-col items-center max-w-4xl">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-2/3">
              <p className="md:text-lg text-gray-700 mb-6 text-justify">
                Con mas de 7 años de experiencia, contamos con un equipo de
                plomeros que tienen la capacidad para atender y principalmente
                resolver cualquier problema de plomería y fontanería, de forma
                profesional e inmediata satisfaciendo las necesidades de todos
                nuestro clientes.
                <br />
                <br />
                Atendemos de forma rápida sus urgencias de plomeria, y brindamos
                soluciones eficaces a un precio justo.
              </p>
            </div>
            <img
              width="400"
              className="fade-in bg-blue-100 rounded-md shadow-lg mb-6"
              src={`${process.env.PAGES_BASE_PATH}/servicio_de_plomeria.jpg`}
              alt="Ejemplo de plomería profesional"
            />
          </div>
          <p className="md:text-lg text-gray-700 mb-4 text-justify">
            Nos comprometemos plenamente con la satisfacción total de nuestros
            clientes. Por eso, cada solicitud es atendida por profesionales
            altamente capacitados, asegurando soluciones precisas y de calidad
            en cada servicio.
            <br />
            <br />
            En SCE Services & Supplies, trabajamos para ti.
          </p>
          <ServicesAndContactButtons />
        </div>
      </section>
    </main>
  );
}
