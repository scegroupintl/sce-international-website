export const AboutCompany = () => {
  const mapIcon = (
    <svg
      className="w-5 h-5 text-blue-600"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 2C6.686 2 4 4.686 4 8c0 4.418 5.25 9.54 5.477 9.76a1 1 0 0 0 1.046 0C10.75 17.54 16 12.418 16 8c0-3.314-2.686-6-6-6zm0 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  );

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre SCE Services & Supplies
            </h2>
            <p className="text-gray-600 mb-6">
              Con más de 15 años de experiencia en la industria de la
              construcción, SCE Services & Supplies se ha convertido en un
              nombre de confianza por su calidad y servicio confiable. Nuestro
              equipo de profesionales calificados está dedicado a hacer realidad
              su visión, manteniendo los más altos estándares de seguridad y
              calidad.
            </p>
            <p className="text-gray-600 mb-8">
              Desde pequeñas reparaciones hasta proyectos de construcción a gran
              escala, contamos con la experiencia y los recursos para manejar
              proyectos de cualquier tamaño. Nuestro compromiso con la
              satisfacción del cliente y la atención al detalle nos distingue en
              la industria.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  2000+
                </div>
                <div className="text-gray-600">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">7+</div>
                <div className="text-gray-600">Años de Experiencia</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">
              Estados de Venezuela que cubrimos
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="text-gray-700 text-lg space-y-2">
                <li className="flex items-center gap-2">
                  {mapIcon}
                  Distrito Capital
                </li>
                <li className="flex items-center gap-2">
                  {mapIcon}
                  Miranda
                </li>
                <li className="flex items-center gap-2">
                  {mapIcon}
                  Aragua
                </li>
                <li className="flex items-center gap-2">
                  {mapIcon}
                  Carabobo
                </li>
                <li className="flex items-center gap-2">
                  {mapIcon}
                  Lara
                </li>
              </ul>
              <ul className="text-gray-700 text-lg space-y-2">
                <li className="flex items-center gap-2">
                  {mapIcon}
                  Anzoátegui
                </li>
                <li className="flex items-center gap-2">
                  {mapIcon}
                  Guárico
                </li>
                <li className="flex items-center gap-2">
                  {mapIcon}
                  Monagas
                </li>
                <li className="flex items-center gap-2">
                  {mapIcon}
                  Mérida
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
