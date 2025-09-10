import { NavBar } from "@/lib/components/NavBar";
import { ServicesAndContactButtons } from "@/lib/components/ServicesAndContactButtons";
import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({ subsets: ["latin"] });

export default function HVACPage() {
  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      <NavBar />
      {/* Banner Image with Header Overlay */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden flex items-center justify-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?auto=format&fit=crop&w=1600&q=80"
          alt="HVAC Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-slate-900/40 p-12">
            <h1
              className={`text-4xl font-bold text-white text-center drop-shadow-lg ${oswald.className}`}
            >
              Mantenimiento de Aires Acondicionados
            </h1>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-cente py-8">
        <div className="container mx-auto px-4 flex flex-col items-center max-w-4xl">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-2/3">
              <p className="md:text-lg text-gray-700 mb-6 text-justify">
                Nuestra empresa ofrece servicios de mantenimiento y reparación
                de aire acondicionado tanto para hogares como para negocios,
                respaldados por años de experiencia y la confianza de nuestros
                clientes. Nos especializamos en todas las áreas del rubro,
                brindando soluciones adaptadas a cada necesidad.
                <br />
                <br />
                Disponemos de repuestos originales con garantía de fábrica y
                trabajamos con técnicos certificados en las marcas más
                reconocidas del mercado.
              </p>
            </div>
            <img
              width="400"
              className="fade-in bg-blue-100 rounded-md shadow-lg mb-6 md:mt-3"
              src="/mantenimiento_de_aires_interno.jpg"
              alt="Ejemplo de servicio HVAC"
            />
          </div>
          <p className="md:text-lg text-gray-700 mb-6 text-justify">
            Nuestro equipo se mantiene en constante capacitación para asegurar
            un servicio eficiente y de alta calidad, atendiendo desde equipos
            residenciales tipo split hasta sistemas industriales como chillers
            enfriados por agua y amoníaco (absorción).
            <br />
            <br />
            En SCE Services & Supplies, la satisfacción del cliente es nuestra
            prioridad. Por eso, trabajamos con el máximo compromiso y empleamos
            las mejores marcas del mercado para garantizar resultados duraderos
            y confiables en cada proyecto.
          </p>
          <ServicesAndContactButtons />
        </div>
      </section>
    </main>
  );
}
