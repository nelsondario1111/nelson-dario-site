'use client';

import Link from 'next/link';

export default function ExploreBusinessEmpowermentClient() {
  return (
    <section className="text-center px-6 py-20 md:py-32 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Empowerment Packages</h1>
        <p className="text-lg text-gray-700 mb-10">
          Choose the package that fits your needs and watch your conscious business thrive.
        </p>

        {/* 🚀 Brand Launch Kit */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">🚀 Brand Launch Kit</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            • Logo & visual identity design<br />
            • Brand messaging & positioning<br />
            • Basic website setup (up to 5 pages)
          </p>
          <p className="font-bold text-xl mb-2">$997 CAD</p>
          <p className="text-md text-gray-500 mb-4">
            Ideal for new entrepreneurs ready to launch an aligned, impactful brand.
          </p>
          <Link
            href="/contact?subject=Brand%20Launch%20Kit"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
          >
            Book Now
          </Link>
        </div>

        {/* 🌍 Online Presence Builder */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">🌍 Online Presence Builder</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            • Full website design (up to 10 pages)<br />
            • SEO setup & analytics<br />
            • 2 hours AI integration for automation
          </p>
          <p className="font-bold text-xl mb-2">$1,497 CAD</p>
          <p className="text-md text-gray-500 mb-4">
            Ideal for established businesses seeking to elevate their online impact.
          </p>
          <Link
            href="/contact?subject=Online%20Presence%20Builder"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
          >
            Book Now
          </Link>
        </div>

        {/* 🧠 Digital Empowerment Suite */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">🧠 Digital Empowerment Suite</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            • Custom AI chatbot & workflows<br />
            • Membership portal setup<br />
            • Monthly strategy coaching (4 calls)
          </p>
          <p className="font-bold text-xl mb-2">$2,997 CAD</p>
          <p className="text-md text-gray-500 mb-4">
            Ideal for businesses ready to scale with AI and membership models.
          </p>
          <Link
            href="/contact?subject=Digital%20Empowerment%20Suite"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
          >
            Book Now
          </Link>
        </div>

        {/* ✨ Add-On */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">✨ Add-On</h3>
          <p className="text-lg text-gray-700">
            Website Maintenance Monthly Plan — <strong>$77/month</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
