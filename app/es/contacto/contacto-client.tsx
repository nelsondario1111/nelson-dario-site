'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactoClient() {
  const searchParams = useSearchParams();

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [confirmacion, setConfirmacion] = useState('');

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      const decoded = decodeURIComponent(subjectParam);
      setMensaje(`Interesado en el paquete: ${decoded}\n\n`);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Simulated delay (replace with real backend logic later)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus('submitted');
      setNombre('');
      setEmail('');
      setMensaje('');
      setConfirmacion('¡Gracias! Tu mensaje ha sido enviado.');
    } catch (err) {
      console.error('Error al enviar', err);
      setStatus('idle');
    }
  };

  return (
    <section
      className="flex items-center justify-center px-6 py-20 md:py-32 bg-white text-center"
      aria-label="Sección de contacto"
    >
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctame</h1>
        <p className="text-lg text-gray-700">
          Estoy aquí para ayudarte. Completa el formulario y me pondré en contacto contigo pronto.
        </p>

        {confirmacion && (
          <div className="p-4 bg-green-100 text-green-700 rounded shadow text-sm font-medium">
            {confirmacion}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left bg-gray-50 p-6 rounded shadow">
          <div>
            <label htmlFor="nombre" className="block mb-1 font-medium text-gray-700">
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              placeholder="tu@correo.com"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block mb-1 font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              rows={5}
              required
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded transition disabled:opacity-60"
          >
            {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
}
