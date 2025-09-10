import Contact from "@/lib/components/Contact";
import { NavBar } from "@/lib/components/NavBar";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { AboutCompany } from "@/lib/components/AboutCompany";

const titleFont = Oswald({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <NavBar />

      {/*<!-- Hero Section --> */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-b from-sky-800 via-green-800 to-gray-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1
                className={`text-5xl md:text-5xl font-bold leading-tight ${titleFont.className}`}
              >
                Servicios especializados con soluciones a la medida
              </h1>
              <p className="text-xl text-blue-100">
                Garantizando calidad, eficiencia y cumplimiento en cada trabajo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-center">
                <Link href="/#contact">
                  <div className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 text-center">
                    Contacto
                  </div>
                </Link>
                <Link
                  href="#services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition duration-300 text-center"
                >
                  Nuestros Servicios
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src={`${process.env.PAGES_BASE_PATH}/business-deal.jpg`}
                alt="SCE International"
                className="rounded-lg backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/*<!-- Services Section --> */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600">
              Ofrecemos una amplia gama de servicios para satisfacer todas sus
              necesidades de construcción y mantenimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96?auto=format&fit=crop&w=600&q=80"
                alt="Landscaping"
                className="w-full h-32 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">Landscaping</h3>
                <p className="text-gray-600 mb-4">
                  Diseñamos, construimos y damos mantenimiento a áreas verdes y
                  exteriores, creando espacios funcionales y estéticamente
                  atractivos.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Jardines residenciales y comerciales</li>
                  <li>• Sistemas de riego</li>
                  <li>• Mantenimiento de áreas verdes</li>
                  <li>• Iluminación para exteriores</li>
                </ul>

                <Link href="/services/landscaping" className="ml-auto mt-auto">
                  <button className="mt-4 bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                    Ver más
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col">
              <img
                src="https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?auto=format&fit=crop&w=600&q=80"
                alt="HVAC"
                className="w-full h-32 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">
                  Mantenimiento de Aires Acondicionados
                </h3>
                <p className="text-gray-600 mb-4">
                  Instalación y reparación completa de sistemas de calefacción,
                  ventilación y aire acondicionado.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Instalación y reparación de aire acondicionado</li>
                  <li>• Servicios de sistemas de calefacción</li>
                  <li>• Limpieza e instalación de ductos</li>
                  <li>• Mejoras de eficiencia energética</li>
                </ul>
                <Link href="/services/hvac" className="ml-auto mt-auto">
                  <button className="mt-4 bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                    Ver más
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80"
                alt="Pintura"
                className="w-full h-32 object-cover border-b border-gray-100 rounded-t-xl"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">
                  Servicios de Pintura
                </h3>
                <p className="text-gray-600 mb-4">
                  Pintura profesional de interiores y exteriores con materiales
                  de primera calidad.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Pintura de interiores</li>
                  <li>• Pintura de exteriores</li>
                  <li>• Pintura de muebles</li>
                  <li>• Pintado decorativo</li>
                </ul>
                <Link href="/services/painting" className="ml-auto mt-auto">
                  <button className="mt-4 bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                    Ver más
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col">
              <img
                src="https://plus.unsplash.com/premium_photo-1664301972519-506636f0245d?auto=format&fit=crop&w=600&q=80"
                alt="Plomería"
                className="w-full h-32 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">Plomería</h3>
                <p className="text-gray-600 mb-4">
                  Servicios expertos de plomería para reparaciones,
                  instalaciones y emergencias.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Reparaciones de emergencia</li>
                  <li>• Instalación de tuberías</li>
                  <li>• Reemplazo de accesorios</li>
                  <li>• Limpieza de drenajes</li>
                </ul>
                <Link href="/services/plumbing" className="ml-auto mt-auto">
                  <button className="mt-4 bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                    Ver más
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col">
              <img
                src="https://plus.unsplash.com/premium_photo-1683141600497-e27591786d0d?auto=format&fit=crop&w=600&q=80"
                alt="Albañilería"
                className="w-full h-32 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">Albañilería</h3>
                <p className="text-gray-600 mb-4">
                  Servicios integrales de construcción para proyectos
                  residenciales y comerciales.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Renovaciones de viviendas</li>
                  <li>• Ampliaciones de habitaciones</li>
                  <li>• Remodelación de cocina y baño</li>
                  <li>• Proyectos comerciales</li>
                </ul>
                <Link href="/services/construction" className="ml-auto mt-auto">
                  <button className="mt-4 bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                    Ver más
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1607400201515-c2c41c07d307?auto=format&fit=crop&w=600&q=80"
                alt="Mantenimiento"
                className="w-full h-32 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">
                  Servicios de Mantenimiento
                </h3>
                <p className="text-gray-600 mb-4">
                  Servicios regulares de mantenimiento y reparación para
                  mantener su propiedad en óptimas condiciones.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Mantenimiento preventivo</li>
                  <li>• Reparaciones de emergencia</li>
                  <li>• Inspección de propiedades</li>
                  <li>• Servicios estacionales</li>
                </ul>
                <Link href="/services/maintenance" className="ml-auto mt-auto">
                  <button className="mt-4 bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                    Ver más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutCompany />

      <Contact />
    </main>
  );
}
