'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HomeClientEs() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/sunpicture.png')" }}
        role="img"
        aria-label="Fondo espiritual con sol"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transforma Tu Vida y Tu Negocio
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-white/90">
            Ofrezco coaching personalizado, diseño consciente y herramientas espirituales para ayudarte a alinear con tu verdadero potencial.
          </p>
          <Link
            href="/es/servicios"
            className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-lg font-semibold shadow-lg transition transform hover:scale-105"
          >
            Ver Servicios
          </Link>
        </div>
      </section>

      {/* Empowerment Section */}
      <section className="text-center py-20 bg-white px-6" aria-label="Opciones de empoderamiento">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">Cómo Puedo Ayudarte</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border border-transparent hover:border-orange-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Empodera Tu Vida</h3>
              <p className="text-base mb-6 text-gray-600">
                Obtén claridad, desbloquea tu potencial y logra la vida que siempre has deseado.
              </p>
              <Link
                href="/es/explora-empoderamiento-de-vida"
                className="inline-block bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 transition"
              >
                Más Información
              </Link>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border border-transparent hover:border-orange-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Empodera Tu Negocio</h3>
              <p className="text-base mb-6 text-gray-600">
                Desarrolla una marca auténtica y una estrategia digital alineada con tu propósito.
              </p>
              <Link
                href="/es/explora-empoderamiento-empresarial"
                className="inline-block bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 transition"
              >
                Más Información
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-16 px-6 text-center" aria-label="Suscripción al boletín">
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Suscríbete al Boletín</h2>
          <p className="text-gray-600 mb-6">
            Recibe consejos, actualizaciones y herramientas para tu camino consciente directamente en tu bandeja de entrada.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
            aria-label="Formulario de suscripción"
          >
            <input
              name="email"
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full md:w-auto px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
            />
            <button
              type="submit"
              disabled={subscribed}
              className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition disabled:opacity-60"
            >
              {subscribed ? '¡Suscrito!' : 'Suscribirme'}
            </button>
          </form>

          {subscribed && (
            <p className="mt-4 text-green-500 text-sm font-medium animate-fadeIn">
              ¡Gracias por suscribirte!
            </p>
          )}
        </div>
      </section>
    </>
  );
}
