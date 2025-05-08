'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const routeMap: Record<string, string> = {
  '/': '/es',
  '/about': '/es/sobre-mi',
  '/services': '/es/servicios',
  '/contact': '/es/contacto',
  '/explore-life-empowerment': '/es/explora-empoderamiento-de-vida',
  '/explore-business-empowerment': '/es/explora-empoderamiento-empresarial',
  '/es': '/',
  '/es/sobre-mi': '/about',
  '/es/servicios': '/services',
  '/es/contacto': '/contact',
  '/es/explora-empoderamiento-de-vida': '/explore-life-empowerment',
  '/es/explora-empoderamiento-empresarial': '/explore-business-empowerment',
};

export default function Header(): JSX.Element {
  const pathname = usePathname();
  const isSpanish = pathname.startsWith('/es');
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (): void => setMenuOpen(!menuOpen);

  const languageLink = routeMap[pathname] || (isSpanish ? '/' : '/es');

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Nelson Dario Logo"
            className="h-10 w-auto"
            loading="lazy"
          />
          <span className="ml-3 text-2xl font-bold">Nelson Dario</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href={isSpanish ? '/es' : '/'} className="hover:text-orange-500">
            {isSpanish ? 'Inicio' : 'Home'}
          </Link>
          <Link href={isSpanish ? '/es/sobre-mi' : '/about'} className="hover:text-orange-500">
            {isSpanish ? 'Sobre Mí' : 'About'}
          </Link>
          <Link href={isSpanish ? '/es/servicios' : '/services'} className="hover:text-orange-500">
            {isSpanish ? 'Servicios' : 'Services'}
          </Link>
          <Link href={isSpanish ? '/es/contacto' : '/contact'} className="hover:text-orange-500">
            {isSpanish ? 'Contacto' : 'Contact'}
          </Link>
          <Link
            href={languageLink}
            className="bg-orange-500 hover:bg-orange-400 text-white px-3 py-1 rounded"
          >
            {isSpanish ? 'EN' : 'ES'}
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-6 space-y-4 text-center">
          <Link href={isSpanish ? '/es' : '/'} className="block hover:text-orange-500" onClick={toggleMenu}>
            {isSpanish ? 'Inicio' : 'Home'}
          </Link>
          <Link href={isSpanish ? '/es/sobre-mi' : '/about'} className="block hover:text-orange-500" onClick={toggleMenu}>
            {isSpanish ? 'Sobre Mí' : 'About'}
          </Link>
          <Link href={isSpanish ? '/es/servicios' : '/services'} className="block hover:text-orange-500" onClick={toggleMenu}>
            {isSpanish ? 'Servicios' : 'Services'}
          </Link>
          <Link href={isSpanish ? '/es/contacto' : '/contact'} className="block hover:text-orange-500" onClick={toggleMenu}>
            {isSpanish ? 'Contacto' : 'Contact'}
          </Link>
          <Link
            href={languageLink}
            onClick={toggleMenu}
            className="bg-orange-500 hover:bg-orange-400 text-white px-3 py-1 rounded inline-block mt-2"
          >
            {isSpanish ? 'EN' : 'ES'}
          </Link>
        </div>
      )}
    </header>
  );
}
