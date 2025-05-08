import ContactoClient from './contacto-client';

export const metadata = {
  title: 'Contacto',
  description: 'Contáctate con Nelson Dario para servicios de coaching, diseño o empoderamiento espiritual.',
};

export default function ContactoPage(): JSX.Element {
  return <ContactoClient />;
}
