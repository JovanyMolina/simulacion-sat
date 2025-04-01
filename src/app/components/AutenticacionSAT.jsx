"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AutenticacionSAT = () => {
  const router = useRouter();

  // States for form inputs
  const [certificateFile, setCertificateFile] = useState(null);
  const [certificatePath, setCertificatePath] = useState("");
  const [privateKeyFile, setPrivateKeyFile] = useState(null);
  const [privatePath, setPrivatePath] = useState("");
  const [password, setPassword] = useState("");
  const [rfc, setRfc] = useState("");

  // Handle certificate file selection
  const handleCertificateChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCertificateFile(file);
      setCertificatePath(file.name);
    }
  };

  // Handle private key file selection
  const handlePrivateKeyChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPrivateKeyFile(file);
      setPrivatePath(file.name);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      certificateFile,
      privateKeyFile,
      password,
      rfc,
    });
    // Here you would implement the actual authentication logic
    alert(`Formulario enviado con RFC: ${rfc}`);
  };

  const goToPasswordPage = () => {
    router.push("/contrasena");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#8a1538] text-white p-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/mexico-logo.png"
              alt="Gobierno de México"
              width={150}
              height={40}
              className="mr-2"
            />
          </div>
          <div className="flex space-x-6">
            <Link href="/tramites" className="hover:underline">
              Trámites
            </Link>
            <Link href="/gobierno" className="hover:underline">
              Gobierno
            </Link>
            <button className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 px-4">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
            <span className="mx-2">›</span>
            <Link href="/tramite" className="hover:underline">
              Trámite
            </Link>
            <span className="mx-2">›</span>
            <span>Inicio</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-white py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-2xl font-medium text-gray-700 mb-8">
            Acceso con e.firma
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="certificate" className="block mb-2 font-medium">
                Certificado (.cer):
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="certificate"
                  className="border border-gray-300 p-2 rounded w-full bg-gray-100"
                  placeholder="Ubicación del certificado"
                  value={certificatePath}
                  disabled
                />
                <button
                  type="button"
                  className="border border-gray-300 px-4 py-2 bg-white text-gray-700 rounded"
                  onClick={() =>
                    document.getElementById("certificateFile").click()
                  }
                >
                  Buscar
                </button>
                <input
                  id="certificateFile"
                  type="file"
                  className="hidden"
                  accept=".cer"
                  onChange={handleCertificateChange}
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="privateKey" className="block mb-2 font-medium">
                Clave privada (.key):
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="privateKey"
                  className="border border-gray-300 p-2 rounded w-full bg-gray-100"
                  placeholder="Ubicación de la llave privada"
                  value={privatePath}
                  disabled
                />
                <button
                  type="button"
                  className="border border-gray-300 px-4 py-2 bg-white text-gray-700 rounded"
                  onClick={() =>
                    document.getElementById("privateKeyFile").click()
                  }
                >
                  Buscar
                </button>
                <input
                  id="privateKeyFile"
                  type="file"
                  className="hidden"
                  accept=".key"
                  onChange={handlePrivateKeyChange}
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 font-medium flex items-center"
              >
                Contraseña de clave privada:
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-8">
              <label htmlFor="rfc" className="block mb-2 font-medium">
                RFC:
              </label>
              <input
                type="text"
                id="rfc"
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="RFC"
                value={rfc}
                onChange={(e) => setRfc(e.target.value)}
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="border border-gray-300 px-6 py-2 bg-white text-gray-700 rounded"
                onClick={goToPasswordPage}
              >
                Contraseña
              </button>
              <button
                type="submit"
                className="border border-[#8a1538] px-6 py-2 bg-white text-[#8a1538] rounded hover:bg-gray-100"
              >
                Enviar
              </button>
            </div>
          </form>

          {/* Privacy Notice */}
          <div className="mt-12 bg-blue-50 border border-blue-100 p-6 text-sm text-gray-700">
            <h2 className="text-center mb-4 text-blue-700 font-medium">
              Aviso de privacidad simplificado
            </h2>
            <p className="text-center mb-4">
              El Servicio de Administración Tributaria, es el responsable del
              tratamiento de los datos personales que se recolectan a través de
              su portal de internet (
              <a
                href="https://www.sat.gob.mx"
                className="text-blue-700 hover:underline"
              >
                https://www.sat.gob.mx
              </a>
              ) los cuales son protegidos conforme a lo dispuesto en la Ley
              General de Protección de Datos Personales en Posesión de Sujetos
              Obligados y la normatividad que resulte aplicable.
            </p>
            <p className="text-center">
              Para mayor información acerca de este tema y de los derechos que
              puedes hacer valer, ponemos a tu disposición el Aviso de
              privacidad en el sitio:
              <a
                href="https://repositorio.cloudb.sat.gob.mx/FTP/avisoprivacidad/802_NV_aviso_integral.html"
                className="text-blue-700 hover:underline"
              >
                {" "}
                https://repositorio.cloudb.sat.gob.mx/FTP/avisoprivacidad/802_NV_aviso_integral.html
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AutenticacionSAT;
