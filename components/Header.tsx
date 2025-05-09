'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const isSpanish = pathname?.startsWith('/es');
  const toggleLocale = () => {
    const target = isSpanish ? pathname.replace('/es', '') : `/es${pathname}`;
    router.push(target === '' ? '/' : target);
    setIsOpen(false);
  };

  const NavLinks = (
    <>
      <Link href={isSpanish ? '/es' : '/'} className="nav-link">
        {isSpanish ? 'Inicio' : 'Home'}
      </Link>
      <Link href={isSpanish ? '/es/about' : '/about'} className="nav-link">
        {isSpanish ? 'Sobre mí' : 'About'}
      </Link>
      <Link href={isSpanish ? '/es/services' : '/services'} className="nav-link">
        {isSpanish ? 'Servicios' : 'Services'}
      </Link>
      <Link href={isSpanish ? '/es/contacto' : '/contact'} className="nav-link">
        {isSpanish ? 'Contacto' : 'Contact'}
      </Link>
    </>
  );

  return (
    <header className="bg-white/80 backdrop-blur shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href={isSpanish ? '/es' : '/'} className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Nelson Dario logo"
            width={40}
            height={40}
            priority
          />
          <span className="font-semibold text-xl tracking-wide text-gray-800">Nelson Dario</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NavLinks}
          <button
            onClick={toggleLocale}
            className="text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded transition"
          >
            {isSpanish ? 'EN' : 'ES'}
          </button>
        </nav>

        {/* Mobile toggle button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg px-6 py-6 space-y-3">
          {NavLinks}
          <button
            onClick={toggleLocale}
            className="block w-full text-center text-sm bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            {isSpanish ? 'EN' : 'ES'}
          </button>
        </nav>
      )}
    </header>
  );
}
