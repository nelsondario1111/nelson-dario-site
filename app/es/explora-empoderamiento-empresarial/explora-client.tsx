'use client';

import Link from 'next/link';

export default function ExploreBusinessEmpowermentClientEs() {
  return (
    <section className="text-center px-6 py-20 md:py-32 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Paquetes de Empoderamiento Empresarial</h1>
        <p className="text-lg text-gray-700 mb-10">
          Elige el paquete adecuado para tus necesidades y observa cómo tu negocio consciente prospera.
        </p>

        {/* 🚀 Kit de Lanzamiento de Marca */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">🚀 Kit de Lanzamiento de Marca</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            • Diseño de logotipo e identidad visual<br />
            • Mensaje de marca y posicionamiento<br />
            • Sitio web básico (hasta 5 páginas)
          </p>
          <p className="font-bold text-xl mb-2">$997 CAD</p>
          <p className="text-md text-gray-500 mb-4">
            Ideal para nuevos emprendedores que quieren lanzar una marca alineada y con impacto.
          </p>
          <Link
            href="/es/contacto?subject=Kit%20de%20Lanzamiento%20de%20Marca"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
          >
            Reservar
          </Link>
        </div>

        {/* 🌍 Constructor de Presencia Online */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">🌍 Constructor de Presencia Online</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            • Diseño web completo (hasta 10 páginas)<br />
            • Configuración SEO y analítica<br />
            • 2 horas de integración con IA
          </p>
          <p className="font-bold text-xl mb-2">$1,497 CAD</p>
          <p className="text-md text-gray-500 mb-4">
            Ideal para negocios establecidos que desean mejorar su presencia digital.
          </p>
          <Link
            href="/es/contacto?subject=Constructor%20de%20Presencia%20Online"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
          >
            Reservar
          </Link>
        </div>

        {/* 🧠 Suite de Empoderamiento Digital */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">🧠 Suite de Empoderamiento Digital</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            • Chatbot con IA personalizado y automatizaciones<br />
            • Portal de membresía<br />
            • Coaching estratégico mensual (4 sesiones)
          </p>
          <p className="font-bold text-xl mb-2">$2,997 CAD</p>
          <p className="text-md text-gray-500 mb-4">
            Ideal para negocios listos para escalar con IA y modelos de membresía.
          </p>
          <Link
            href="/es/contacto?subject=Suite%20de%20Empoderamiento%20Digital"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
          >
            Reservar
          </Link>
        </div>

        {/* ✨ Complemento */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">✨ Complemento</h3>
          <p className="text-lg text-gray-700">
            Plan mensual de mantenimiento web — <strong>$77/mes</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
