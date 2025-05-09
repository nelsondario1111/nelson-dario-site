'use client';

import Link from 'next/link';

export default function ServicesClient() {
  return (
    <section
      className="min-h-screen py-20 bg-white text-center px-6 md:px-12"
      aria-label="Service Packages"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Services</h1>
        <p className="text-lg text-gray-700 mb-10">
          Conscious designs, coaching, and spiritual tools to transform your life and business.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Life Empowerment */}
          <div className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-4">Empower Your Life</h2>
            <p className="text-gray-700 mb-6">
              Coaching and awakening services tailored for your personal growth, healing, and transformation.
            </p>
            <Link
              href="/explore-life-empowerment"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
            >
              Explore
            </Link>
          </div>

          {/* Business Empowerment */}
          <div className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-4">Empower Your Business</h2>
            <p className="text-gray-700 mb-6">
              Digital branding and tech support designed to elevate your conscious business and online presence.
            </p>
            <Link
              href="/explore-business-empowerment"
              className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
