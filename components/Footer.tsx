'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isSpanish = pathname.startsWith('/es');

  const currentYear = new Date().getFullYear();

  const links = isSpanish
    ? [
        { href: '/es', label: 'Inicio' },
        { href: '/es/sobre-mi', label: 'Sobre Mí' },
        { href: '/es/servicios', label: 'Servicios' },
        { href: '/es/contacto', label: 'Contacto' },
      ]
    : [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
      ];

  return (
    <footer className="bg-black text-white px-6 py-12 text-center">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Logo + Brand */}
        <Link
          href={isSpanish ? '/es' : '/'}
          className="flex items-center justify-center gap-2 text-2xl font-bold tracking-wide hover:text-yellow-500 transition"
        >
          <img src="/logob.png" alt="Nelson Dario Logo" className="h-8 w-auto" />
          Nelson Dario
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-orange-400 transition">
              {label}
            </Link>
          ))}
        </nav>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
            aria-label="YouTube"
          >
            YouTube
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>

        {/* Footer Bottom */}
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Nelson Dario. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
