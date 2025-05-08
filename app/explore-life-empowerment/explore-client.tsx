'use client';

import Link from 'next/link';

export default function ExploreLifeEmpowermentClient() {
  return (
    <section className="text-center px-6 py-20 md:py-32 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Life Empowerment Packages</h1>
        <p className="text-lg text-gray-700 mb-10">
          Choose the right package for your transformation journey. Each package is designed to guide you through meaningful life changes.
        </p>

        {/* 🌱 Awakening Session */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">🌱 Awakening Session</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            • 1 x 90-min Deep Session (Clarity in life & spirituality)<br />
            • Mini Human Design Reading<br />
            • Personalized Action Plan<br />
            • 4 x Weekly 60-min Coaching Calls
          </p>
          <p className="font-bold text-xl mb-2">$197 CAD</p>
          <p className="text-md text-gray-500 mb-4">
            Ideal for those beginning their journey toward life and spiritual alignment.
          </p>
          <Link
            href="/contact?subject=Awakening%20Session"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
          >
            Book Now
          </Link>
        </div>

        {/* 🔥 Empowerment Journey */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">🔥 Empowerment Journey</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            • Full Human Design Reading<br />
            • Personal Life Map (finances, health, relationships)<br />
            • 8 x Bi-weekly 75-min Calls over 4 months
          </p>
          <p className="font-bold text-xl mb-2">$697 CAD</p>
          <p className="text-md text-gray-500 mb-4">
            Ideal for those ready to make real changes in their life.
          </p>
          <Link
            href="/contact?subject=Empowerment%20Journey"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
          >
            Book Now
          </Link>
        </div>

        {/* 🌟 Life Mastery Path */}
        <div className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">🌟 Life Mastery Path</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            • Human Design + Purpose Integration<br />
            • QHHT Hypnosis Session (optional)<br />
            • 8 x Bi-weekly 75-min Calls over 4 months
          </p>
          <p className="font-bold text-xl mb-2">$1,797 CAD</p>
          <p className="text-md text-gray-500 mb-4">
            Ideal for deep seekers ready to transform every aspect of their life.
          </p>
          <Link
            href="/contact?subject=Life%20Mastery%20Path"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition"
          >
            Book Now
          </Link>
        </div>

        {/* ✨ Add-Ons */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg text-left">
          <h3 className="text-2xl font-semibold mb-4 text-center">✨ Add-Ons</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Extra QHHT Hypnosis Session — <strong>$333</strong></li>
            <li>Additional Life Coaching Session — <strong>$150</strong></li>
            <li>Human Design Deep-Dive — <strong>$197</strong></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
