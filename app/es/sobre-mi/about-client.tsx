'use client';

import Link from 'next/link';

export default function AboutClientEs() {
  return (
    <section
      className="flex items-center justify-center bg-white px-6 py-20 md:py-32 text-center"
      aria-label="Acerca de Nelson Dario"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nelson Dario</h1>
        <p className="text-lg text-gray-700 mb-6">
          Soy Nelson Dario — diseñador consciente, coach y guía espiritual comprometido con ayudarte a despertar tu máximo potencial.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Combinando diseño práctico, trabajo energético y herramientas modernas de transformación, empodero a personas y emprendedores para sanar, evolucionar y prosperar.
        </p>
        <Link
          href="/es/servicios"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
        >
          Explora Mis Servicios
        </Link>
      </div>
    </section>
  );
}
