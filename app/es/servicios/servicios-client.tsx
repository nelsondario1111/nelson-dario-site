'use client';

import Link from 'next/link';

export default function ServiciosClient() {
  return (
    <main>
      <section className="min-h-screen py-20 bg-white text-center px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mis Servicios</h1>
          <p className="text-lg text-gray-700 mb-10">
            Diseño consciente, coaching y herramientas espirituales para transformar tu vida y negocio.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Empoderamiento de Vida */}
            <div className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold mb-4">Empodera Tu Vida</h2>
              <p className="text-gray-700 mb-6">
                Sesiones de coaching y despertar personal para tu crecimiento, sanación y transformación.
              </p>
              <Link
                href="/es/explora-empoderamiento-de-vida"
                className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
              >
                Explorar
              </Link>
            </div>

            {/* Empoderamiento Empresarial */}
            <div className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold mb-4">Empodera Tu Negocio</h2>
              <p className="text-gray-700 mb-6">
                Branding digital y soporte tecnológico para impulsar tu negocio consciente en línea.
              </p>
              <Link
                href="/es/explora-empoderamiento-empresarial"
                className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
              >
                Explorar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
