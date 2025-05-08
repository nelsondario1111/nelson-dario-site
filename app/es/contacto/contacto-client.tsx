'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactoClient() {
  const searchParams = useSearchParams();
  const subjectFromQuery = searchParams.get('subject') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (subjectFromQuery) {
      setFormData((prev) => ({ ...prev, subject: decodeURIComponent(subjectFromQuery) }));
    }
  }, [subjectFromQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowConfirmation(false), 6000);
  };

  return (
    <>
      <section className="py-20 bg-gray-50 text-center">
        <h1 className="text-4xl font-semibold mb-6">Contáctame</h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Estoy aquí para apoyarte en tu camino de transformación. Completa el siguiente formulario y te responderé lo antes posible.
        </p>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="subject">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-semibold transition"
            >
              Enviar Mensaje
            </button>
          </form>

          {showConfirmation && (
            <div className="mt-6 bg-green-100 text-green-800 px-6 py-4 rounded-md shadow-md transition duration-300">
              ✅ ¡Gracias! Tu mensaje ha sido enviado con éxito.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
