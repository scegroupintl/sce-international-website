import Link from "next/link";
import { Oswald } from "next/font/google";
import { NavBar } from "@/lib/components/NavBar";

const oswald = Oswald({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <NavBar />
      <div className="text-center p-8 rounded shadow bg-white">
        <h1
          className={`text-5xl font-bold text-blue-700 mb-4 ${oswald.className}`}
        >
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Página no encontrada
        </h2>
        <p className="text-gray-600 mb-6">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link href="/">
          <button className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded shadow transition-colors duration-200">
            Volver al Inicio
          </button>
        </Link>
      </div>
    </main>
  );
}
