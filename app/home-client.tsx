'use client';

import Link from 'next/link';

export default function HomeClient() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/sunpicture.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Life and Business
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            I provide personalized coaching, conscious design, and spiritual tools to help you align with your true potential and create the life and business you&apos;ve always desired.
          </p>
          <Link
            href="/services"
            className="bg-white text-black py-3 px-8 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Go
          </Link>
        </div>
      </section>

      {/* Empowerment Section */}
      <section className="text-center py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">How I Can Help You</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Empower Your Life</h3>
              <p className="text-base mb-6">
                Get clarity, unlock potential, and achieve the life you&apos;ve always desired.
              </p>
              <Link
                href="/explore-life-empowerment"
                className="inline-block bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Empower Your Business</h3>
              <p className="text-base mb-6">
                Develop an authentic brand and digital strategy for lasting success.
              </p>
              <Link
                href="/explore-business-empowerment"
                className="inline-block bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
          <p className="text-gray-700 mb-6">
            Get updates, tips, and tools to support your conscious journey – directly to your inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing!');
            }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="w-full md:w-auto px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
