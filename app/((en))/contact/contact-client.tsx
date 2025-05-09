'use client';

export default function ContactClient() {
  return (
    <section className="flex items-center justify-center px-6 py-20 md:py-32 bg-white text-center">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg text-gray-700">
          You can email me directly by clicking the link below:
        </p>
        <a
          href="mailto:info@nelsondario.com"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
