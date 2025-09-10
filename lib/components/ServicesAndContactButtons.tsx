import Link from "next/link";
export const ServicesAndContactButtons = () => {
  return (
    <div className="flex justify-center w-full gap-6 mt-6">
      <Link href={`/#services`}>
        <button className="cursor-pointer px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded shadow transition-colors duration-200">
          Ver Más Servicios
        </button>
      </Link>
      <Link href={`/#contact`}>
        <button className="cursor-pointer px-6 py-2 bg-green-700 hover:bg-green-800 text-white font-semibold rounded shadow transition-colors duration-200">
          Contacto
        </button>
      </Link>
    </div>
  );
};
