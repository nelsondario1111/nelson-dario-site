'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const isSpanish = pathname.startsWith('/es');

  // 🔁 Bilingual route mapping
  const routeMap: Record<string, string> = {
    // English → Spanish
    '/': '/es',
    '/about': '/es/sobre-mi',
    '/services': '/es/servicios',
    '/contact': '/es/contacto',
    '/explore-life-empowerment': '/es/explora-empoderamiento-de-vida',
    '/explore-business-empowerment': '/es/explora-empoderamiento-empresarial',
    // Spanish → English
    '/es': '/',
    '/es/sobre-mi': '/about',
    '/es/servicios': '/services',
    '/es/contacto': '/contact',
    '/es/explora-empoderamiento-de-vida': '/explore-life-empowerment',
    '/es/explora-empoderamiento-empresarial': '/explore-business-empowerment',
  };

  const toggleLangHref = routeMap[pathname] || (isSpanish ? '/' : '/es');
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

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
    <header className="bg-white shadow">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto relative z-50">
        {/* ✅ Logo + Text */}
        <Link href={isSpanish ? '/es' : '/'} className="flex items-center gap-2">
          <img src="/logo.png" alt="Nelson Dario Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-black">Nelson Dario</span>
        </Link>

        {/* ✅ Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-700 hover:text-orange-500 transition"
            >
              {label}
            </Link>
          ))}
          <Link
            href={toggleLangHref}
            className="ml-4 text-sm bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            {isSpanish ? 'English' : 'Español'}
          </Link>
        </div>

        {/* ✅ Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="block py-2 text-gray-700 hover:text-orange-500 transition"
            >
              {label}
            </Link>
          ))}
          <Link
            href={toggleLangHref}
            onClick={closeMenu}
            className="block mt-2 text-sm bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            {isSpanish ? 'English' : 'Español'}
          </Link>
        </div>
      )}
    </header>
  );
}
