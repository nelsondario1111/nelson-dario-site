'use client';

import Link from 'next/link';

export default function AboutClient() {
  return (
    <section
      className="flex items-center justify-center bg-white px-6 py-20 md:py-32 text-center"
      aria-label="About Nelson Dario"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nelson Dario</h1>
        <p className="text-lg text-gray-700 mb-6">
          I&apos;m Nelson Dario — a conscious designer, coach, and spiritual guide dedicated to helping you awaken your highest potential.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Combining practical design, energy work, and modern transformation tools, I empower individuals and entrepreneurs to heal, evolve, and thrive.
        </p>
        <Link
          href="/services"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
        >
          Explore My Services
        </Link>
      </div>
    </section>
  );
}
