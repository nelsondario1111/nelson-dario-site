'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactoClient() {
  const [message, setMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const paramSubject = searchParams?.get('subject');
    if (paramSubject) {
      const decoded = decodeURIComponent(paramSubject);
      setMessage(`Interesado en el paquete: ${decoded}\n\n`);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  return (
    <section
      className="flex items-center justify-center px-6 py-20 md:py-32 bg-white text-center"
      aria-label="Sección de contacto"
    >
      <div className="max-w-xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctame</h1>

        <p className="text-lg text-gray-700 mb-10">
          Estoy aquí para ayudarte. Completa el formulario y me pondré en contacto contigo pronto.
        </p>

        <form
          onSubmit={handleSubmit}
          aria-label="Formulario de contacto"
          className="space-y-6 text-left"
        >
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            disabled={showConfirmation}
            className={`w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-semibold transition ${
              showConfirmation ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          >
            Enviar Mensaje
          </button>

          {showConfirmation && (
            <p className="text-green-500 text-sm mt-4">
              ¡Gracias por tu mensaje! Te responderé pronto.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
