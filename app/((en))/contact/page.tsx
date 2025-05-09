import { Suspense } from 'react';
import ContactClient from './contact-client';

export const metadata = {
  title: 'Contact | Nelson Dario',
  description: 'Get in touch with Nelson Dario for coaching, design, or spiritual guidance.',
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading...</div>}>
      <ContactClient />
    </Suspense>
  );
}
