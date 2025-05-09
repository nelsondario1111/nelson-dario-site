'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

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
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Logo & Name */}
        <Link
          href={isSpanish ? '/es' : '/'}
          className="flex items-center justify-center gap-2 text-2xl font-bold tracking-wide hover:text-orange-400 transition"
        >
          <Image src="/logob.png" alt="Nelson Dario Logo" width={32} height={32} />
          <span className="text-white">Nelson Dario</span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-link text-gray-400 hover:text-orange-400"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mt-4 text-sm">
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
        <p className="text-sm text-gray-500">
          &copy; {currentYear} Nelson Dario. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
