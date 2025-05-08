'use client';

/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactClient() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  useEffect(() => {
    const success = searchParams.get('success');
    if (success === 'true') {
      setSubmittedMessage('Thank you! Your message has been sent.');
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
      setStatus('submitted');
      setEmail('');
      setMessage('');
      setSubmittedMessage('Thank you! Your message has been sent.');
    } catch (err) {
      console.error('Submission failed', err);
      setStatus('idle');
    }
  };

  return (
    <section className="min-h-screen py-20 bg-white text-center px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg text-gray-700 mb-10">
          I&apos;m here if you&apos;re ready to begin your journey. Send a message and I&apos;ll get back to you shortly.
        </p>

        {submittedMessage && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
            {submittedMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded shadow space-y-6 max-w-xl mx-auto"
        >
          <div>
            <label htmlFor="email" className="block text-left font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your email address"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-left font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-2 rounded transition disabled:opacity-50"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
