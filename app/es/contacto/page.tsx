import { Suspense } from 'react';
import ContactoClient from './contacto-client';

export const metadata = {
  title: 'Contacto',
  description: 'Contáctate con Nelson Dario para servicios de coaching, diseño o empoderamiento espiritual.',
};

export default function ContactoPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-500">Cargando...</div>}>
      <ContactoClient />
    </Suspense>
  );
}
