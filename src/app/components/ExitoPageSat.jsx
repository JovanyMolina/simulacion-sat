"use client";

import Image from "next/image";
import Link from "next/link";

const AutenticacionExito = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Encabezado */}
      <header className="bg-[#8a1538] text-white p-3">
        <div className="container mx-auto flex justify-between items-center">
          <Image
            src="/mexico-logo.svg"
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
          <span className="text-gray-600">Inicio › Confirmación</span>
        </div>
      </div>

      {/* Contenido principal */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <Image
          src="/comprobado.png" // Asegúrate de tener esta imagen en /public
          alt="Éxito"
          width={100}
          height={100}
          className="mb-6"
        />
        <h1 className="text-2xl font-semibold text-green-700 mb-2">
          ¡Inicio de sesión exitoso!
        </h1>
        <p className="text-gray-700 mb-6">
          Has accedido correctamente a tu cuenta.
        </p>
        <Link
          href="/"
          className="text-[#8a1538] font-medium hover:underline"
        >
          Ir al inicio
        </Link>
      </main>
    </div>
  );
};

export default AutenticacionExito;
