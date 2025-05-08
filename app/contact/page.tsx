import ContactClient from './contact-client';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Nelson Dario for coaching, design, or spiritual guidance.',
};

export default function ContactPage(): JSX.Element {
  return <ContactClient />;
}
