'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer(): JSX.Element {
  const pathname = usePathname();
  const isSpanish = pathname.startsWith('/es');

  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-10 text-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">NELSON DARIO</div>

        {/* Navigation Links */}
        <div className="flex justify-center flex-wrap gap-6 text-gray-400 text-sm">
          <Link href={isSpanish ? '/es' : '/'} className="hover:text-yellow-500">
            {isSpanish ? 'Inicio' : 'Home'}
          </Link>
          <Link href={isSpanish ? '/es/sobre-mi' : '/about'} className="hover:text-yellow-500">
            {isSpanish ? 'Sobre Mí' : 'About'}
          </Link>
          <Link href={isSpanish ? '/es/servicios' : '/services'} className="hover:text-yellow-500">
            {isSpanish ? 'Servicios' : 'Services'}
          </Link>
          <Link href={isSpanish ? '/es/contacto' : '/contact'} className="hover:text-yellow-500">
            {isSpanish ? 'Contacto' : 'Contact'}
          </Link>
        </div>

        {/* Newsletter */}
        <div className="max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-2">
            {isSpanish ? 'Suscríbete al boletín' : 'Subscribe to the newsletter'}
          </h3>
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              alert(isSpanish ? '¡Gracias por suscribirte!' : 'Thank you for subscribing!');
            }}
            className="flex flex-col md:flex-row items-center gap-3 justify-center"
          >
            <input
              id="newsletter"
              name="newsletter"
              type="email"
              aria-label="Email"
              placeholder={isSpanish ? 'Tu correo electrónico' : 'Your email address'}
              className="w-full px-4 py-2 rounded-md text-black border border-gray-300"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-400 transition"
            >
              {isSpanish ? 'Enviar' : 'Subscribe'}
            </button>
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-2xl text-gray-400">
          <a href="https://www.instagram.com/nelsondario" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/nelsondario" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/nelsondario" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/@nelsondario" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
            <FaYoutube />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} Nelson Dario. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
