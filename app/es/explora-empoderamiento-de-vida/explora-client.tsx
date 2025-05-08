'use client';

import Link from 'next/link';

export default function ExploreLifeEmpowermentClientEs() {
  return (
    <section className="text-center px-6 py-20 md:py-32 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Paquetes de Empoderamiento de Vida</h1>
        <p className="text-lg text-gray-700 mb-10">
          Elige el paquete ideal para tu viaje de transformación. Cada opción está diseñada para apoyarte en cambios profundos y conscientes.
        </p>

        {/* 🌱 Sesión de Despertar */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">🌱 Sesión de Despertar</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            • 1 sesión profunda de 90 min (claridad en vida y espiritualidad)<br />
            • Lectura básica de Diseño Humano<br />
            • Plan de acción personalizado<br />
            • 4 sesiones semanales de coaching (60 min)
          </p>
          <p className="font-bold text-xl mb-2">$197 CAD</p>
          <p className="text-md text-gray-500 mb-4">
            Ideal para quienes están iniciando su camino hacia la alineación espiritual y personal.
          </p>
          <Link
            href="/es/contacto?subject=Sesión%20de%20Despertar"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
          >
            Reservar
          </Link>
        </div>

        {/* 🔥 Viaje de Empoderamiento */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">🔥 Viaje de Empoderamiento</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            • Lectura completa de Diseño Humano<br />
            • Mapa de Vida (finanzas, salud, relaciones)<br />
            • 8 sesiones quincenales de 75 min durante 4 meses
          </p>
          <p className="font-bold text-xl mb-2">$697 CAD</p>
          <p className="text-md text-gray-500 mb-4">
            Ideal para quienes están listos para realizar cambios reales en su vida.
          </p>
          <Link
            href="/es/contacto?subject=Viaje%20de%20Empoderamiento"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
          >
            Reservar
          </Link>
        </div>

        {/* 🌟 Camino de Maestría de Vida */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">🌟 Camino de Maestría de Vida</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            • Diseño Humano + Integración del Propósito<br />
            • Sesión de hipnosis QHHT (opcional)<br />
            • 8 sesiones quincenales de 75 min durante 4 meses
          </p>
          <p className="font-bold text-xl mb-2">$1,797 CAD</p>
          <p className="text-md text-gray-500 mb-4">
            Ideal para quienes desean transformar cada área de su vida desde lo profundo.
          </p>
          <Link
            href="/es/contacto?subject=Camino%20de%20Maestría%20de%20Vida"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
          >
            Reservar
          </Link>
        </div>

        {/* ✨ Complementos */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg text-left">
          <h3 className="text-2xl font-semibold mb-4 text-center">✨ Complementos</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Sesión adicional de hipnosis QHHT — <strong>$333</strong></li>
            <li>Sesión extra de coaching — <strong>$150</strong></li>
            <li>Exploración profunda de Diseño Humano — <strong>$197</strong></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
