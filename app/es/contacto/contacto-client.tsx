'use client';

export default function ContactoClient() {
  return (
    <section className="flex items-center justify-center px-6 py-20 md:py-32 bg-white text-center">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctame</h1>
        <p className="text-lg text-gray-700">
          Puedes escribirme directamente haciendo clic en el botón:
        </p>
        <a
          href="mailto:info@nelsondario.com"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded transition"
        >
          Enviar Correo
        </a>
      </div>
    </section>
  );
}
