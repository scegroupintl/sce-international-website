import { NavBar } from "@/lib/components/NavBar";
import { ServicesAndContactButtons } from "@/lib/components/ServicesAndContactButtons";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function MaintenancePage() {
  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      <NavBar />
      {/* Banner Image with Header Overlay */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1607400201515-c2c41c07d307?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-slate-900/40 p-12">
            <h1
              className={`text-4xl font-bold text-white text-center drop-shadow-lg ${oswald.className}`}
            >
              Servicios de Mantenimiento
            </h1>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center py-8">
        <div className="container mx-auto px-4 flex flex-col items-center max-w-4xl">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-2/3">
              <p className="md:text-lg text-gray-700 mb-6 text-justify">
                Nuestro equipo de mantenimiento cuenta con amplia experiencia en
                el cuidado y reparación de propiedades residenciales y
                comerciales. Ofrecemos servicios regulares y preventivos para
                asegurar que su inmueble se mantenga en óptimas condiciones
                durante todo el año.
                <br />
                <br />
                Atendemos emergencias, inspecciones y servicios estacionales,
                brindando soluciones rápidas y efectivas a un precio justo.
              </p>
            </div>
            <img
              width="400"
              className="fade-in bg-blue-100 rounded-md shadow-lg mb-6"
              src="https://images.unsplash.com/photo-1645651964715-d200ce0939cc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ejemplo de mantenimiento profesional"
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
