'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header({ lang }: { lang: 'en' | 'es' }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const isSpanish = lang === 'es';

  const toggleLocale = () => {
    const pathMap: Record<string, string> = {
      '/': '/',
      '/about': '/sobre-mi',
      '/services': '/servicios',
      '/contact': '/contacto',
      '/sobre-mi': '/about',
      '/servicios': '/services',
      '/contacto': '/contact',
    };

    const currentPath = pathname || '/';
    const isCurrentlySpanish = currentPath.startsWith('/es');

    const cleanedPath = isCurrentlySpanish
      ? currentPath.replace(/^\/es/, '') || '/'
      : currentPath;

    const translatedPath = pathMap[cleanedPath] || '/';
    const target = isCurrentlySpanish ? translatedPath : `/es${translatedPath}`;

    router.push(target);
    setIsOpen(false);
  };

  const NavLinks = () => (
    <>
      <Link href={isSpanish ? '/es' : '/'} className="block py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">
        {isSpanish ? 'Inicio' : 'Home'}
      </Link>
      <Link href={isSpanish ? '/es/sobre-mi' : '/about'} className="block py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">
        {isSpanish ? 'Sobre mí' : 'About'}
      </Link>
      <Link href={isSpanish ? '/es/servicios' : '/services'} className="block py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">
        {isSpanish ? 'Servicios' : 'Services'}
      </Link>
      <Link href={isSpanish ? '/es/contacto' : '/contact'} className="block py-2 text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">
        {isSpanish ? 'Contacto' : 'Contact'}
      </Link>
    </>
  );

  return (
    <header className="bg-white/80 backdrop-blur-md shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href={isSpanish ? '/es' : '/'} className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Nelson Dario logo"
            width={40}
            height={40}
            priority
          />
          <span className="font-bold text-xl md:text-2xl tracking-wide text-gray-900 uppercase">
            Nelson Dario
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
          <button
            onClick={toggleLocale}
            className="text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full transition-all duration-200 shadow"
          >
            {isSpanish ? 'English' : 'Español'}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white px-6 py-6 space-y-4 shadow-md rounded-b-xl border-t border-gray-100">
          <NavLinks />
          <button
            onClick={toggleLocale}
            className="block w-full text-center text-sm bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all duration-200 shadow"
          >
            {isSpanish ? 'English' : 'Español'}
          </button>
        </nav>
      )}
    </header>
  );
}
