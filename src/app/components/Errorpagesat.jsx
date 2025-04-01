"use client";

import Image from "next/image";
import Link from "next/link";

const AutenticacionError = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Encabezado */}
      <header className="bg-[#8a1538] text-white p-3">
        <div className="container mx-auto flex justify-between items-center">
          <Image
            src="/mexico-logo.png" 
            alt="Gobierno de México"
            width={150}
            height={40}
          />
          <div className="flex space-x-6">
            <Link href="/tramites" className="hover:underline">
              Trámites
            </Link>
            <Link href="/gobierno" className="hover:underline">
              Gobierno
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 px-4">
        <div className="container mx-auto text-sm">
          <span className="text-gray-600">Inicio › Error</span>
        </div>
      </div>

      {/* Contenido principal */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <Image
          src="/usuario.png" // Asegúrate de tener esta imagen en /public
          alt="Error"
          width={100}
          height={100}
          className="mb-6"
        />
        <h1 className="text-2xl font-semibold text-red-700 mb-2">¡Error!</h1>
        <p className="text-gray-700 mb-6">Ocurrió un problema durante la autenticación.</p>
        <Link
          href="/"
          className="text-[#8a1538] font-medium hover:underline"
        >
          Volver al inicio
        </Link>
      </main>
    </div>
  );
};

export default AutenticacionError;
