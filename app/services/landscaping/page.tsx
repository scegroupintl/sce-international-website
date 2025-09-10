import { NavBar } from "@/lib/components/NavBar";
import { ServicesAndContactButtons } from "@/lib/components/ServicesAndContactButtons";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export default function LandscapingPage() {
  return (
    <main className="min-h-screen pt-16">
      <NavBar />
      {/* Banner Image with Header Overlay */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96?auto=format&fit=crop&w=1600&q=80"
          alt="Landscaping Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-green-900/40 p-12">
            <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
              Servicios de Landscaping
            </h1>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center bg-gray-50 py-8">
        <div className="container mx-auto px-4 flex flex-col items-center max-w-4xl">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <p className="md:text-lg text-gray-700 mb-4 text-justify">
              Ofrecemos servicios integrales de diseño, construcción y
              mantenimiento de áreas verdes y exteriores. Nuestro equipo crea
              espacios funcionales y estéticamente atractivos, adaptados a las
              necesidades de cada cliente.
              <br />
              <br />
              Realizamos jardines residenciales y comerciales, sistemas de
              riego, paisajismo, decoración exterior e iluminación para
              exteriores. Nos comprometemos con la calidad y el cuidado de cada
              proyecto.
            </p>
            <img
              width="400"
              className="fade-in bg-green-100 rounded-md shadow-lg mb-6 md:m-0"
              src={`${process.env.PAGES_BASE_PATH}/landscaping-example.jpg`}
              alt="Landscaping Example"
            />
          </div>
        </div>

        <div className="container mx-auto p-6 max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-600 mb-2">
              Mira uno de nuestros proyectos realizados:
            </h1>
          </div>

          <div className="">
            <div className="relative bg-white rounded-t-lg shadow-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img
                    src={`${process.env.PAGES_BASE_PATH}/landscaping-before.jpg`}
                    alt="Jardín antes de la renovación"
                    className="w-full h-64 lg:h-full object-cover"
                  />

                  <div className="hidden absolute inset-0 m-auto w-16 h-16 rotate-45 md:flex items-center bg-white text-blue-700 rounded-lg shadow-lg/30">
                    <div className="flex items-center justify-center space-x-2 w-full -rotate-45">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "36px" }}
                      >
                        potted_plant
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 p-6 md:p-14 bg-linear-to-b from-blue-800 to-slate-800 text-white flex flex-col justify-center">
                  <h2 className={`text-2xl font-bold mb-4 ${oswald.className}`}>
                    ANTES
                  </h2>
                  <p className="text-lg leading-relaxed">
                    Antes de iniciar, realizamos un análisis detallado del área
                    y conversamos con el cliente para entender sus expectativas
                    y necesidades. Con el objetivo claro, desarrollamos un
                    diseño gráfico que ilustra cómo se verá el espacio una vez
                    finalizado, brindando al cliente una visión precisa y
                    profesional del resultado esperado.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-b-lg shadow-lg overflow-hidden">
              <div className="relative flex flex-col-reverse lg:flex-row">
                <div className="lg:w-1/2 p-6 md:p-14 bg-linear-to-b from-green-800 to-slate-800 text-white flex flex-col md:h-[365px]">
                  <h2 className={`text-2xl font-bold mb-4 ${oswald.className}`}>
                    DESPUÉS
                  </h2>
                  <p className="text-lg leading-relaxed">
                    Tras la aprobación del diseño, nuestro equipo ejecuta el
                    proyecto con dedicación y atención al detalle. El resultado
                    es un espacio renovado que supera las expectativas del
                    cliente, como se muestra en la fotografía, combinando
                    funcionalidad, belleza y sostenibilidad en cada rincón del
                    jardín.
                  </p>
                </div>

                <div className="lg:w-1/2">
                  <img
                    src={`${process.env.PAGES_BASE_PATH}/landscaping-after.jpg`}
                    alt="Jardín después de la renovación"
                    className="w-full h-64 lg:h-full object-cover"
                  />

                  <div className="hidden absolute inset-0 m-auto w-16 h-16 rotate-45 md:flex items-center bg-white text-green-700 rounded-lg shadow-lg">
                    <div className="flex items-center justify-center space-x-2 w-full -rotate-45">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "36px" }}
                      >
                        nature
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Transformación Completa
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Este proyecto muestra nuestra capacidad para transformar
                completamente un espacio exterior, desde la planificación
                inicial hasta la ejecución final, creando jardines que no solo
                son hermosos sino también funcionales y sostenibles.
              </p>
            </div>
          </div>
        </div>

        <ServicesAndContactButtons />
      </section>
    </main>
  );
}
