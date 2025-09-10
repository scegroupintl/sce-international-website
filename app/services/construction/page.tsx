import { NavBar } from "@/lib/components/NavBar";
import { ServicesAndContactButtons } from "@/lib/components/ServicesAndContactButtons";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function ConstructionPage() {
  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      <NavBar />
      {/* Banner Image with Header Overlay */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden flex items-center justify-center bg-[url('https://plus.unsplash.com/premium_photo-1683141600497-e27591786d0d')] bg-cover bg-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-slate-900/40 p-12">
            <h1
              className={`text-4xl font-bold text-white text-center drop-shadow-lg ${oswald.className}`}
            >
              Servicios de Albañilería
            </h1>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center py-8">
        <div className="container mx-auto px-4 flex flex-col items-center max-w-5xl">
          <div className="md:w-2/3">
            <p className="md:text-lg text-gray-700 mb-6 text-justify">
              En SCE Services & Supplies, ofrecemos servicios de albañilería de
              alta calidad, adaptados a las necesidades de cada cliente. Nuestro
              equipo de expertos está listo para llevar a cabo su proyecto con
              la máxima profesionalidad y atención al detalle.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 mb-6 flex items-center gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-800">
                Servicios que ofrecemos
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Construcción de muros de ladrillo</li>
                <li>Remodelaciones y ampliaciones</li>
                <li>Colocación de pisos (frotachado, pulido)</li>
                <li>Tarrajeo de muros</li>
                <li>Colocación de ladrillo pastelero</li>
                <li>Construcción de columnas y vigas</li>
                <li>Encofrado y escaleras</li>
                <li>Enchapado de cerámica y porcelanato</li>
                <li>Obras civiles para el hogar y comercio</li>
              </ul>
            </div>
            <img
              width="400"
              className="fade-in bg-blue-100 rounded-md shadow-lg mb-6"
              src={`${process.env.PAGES_BASE_PATH}/servicio_albanileria.jpg`}
              alt="Ejemplo de albañilería profesional"
            />
          </div>
          <p className="md:text-lg text-gray-700 mb-4">
            En SCE Services & Supplies, trabajamos para ti.
          </p>
          <ServicesAndContactButtons />
        </div>
      </section>
    </main>
  );
}
