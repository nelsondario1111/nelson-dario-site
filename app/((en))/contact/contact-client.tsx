'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactClient() {
  const searchParams = useSearchParams();

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    const success = searchParams.get('success');

    if (subjectParam) {
      const decoded = decodeURIComponent(subjectParam);
      setMessage(`Package of interest: ${decoded}\n\n`);
    }

    if (success === 'true') {
      setSubmittedMessage('Thank you! Your message has been sent.');
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
    <section
      className="flex items-center justify-center px-6 py-20 md:py-32 bg-white text-center"
      aria-label="Contact section"
    >
      <div className="max-w-xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>

        <p className="text-lg text-gray-700 mb-10">
          I&apos;m here to support your transformation. Send me a message and I&apos;ll respond as soon as possible.
        </p>

        {submittedMessage && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded shadow text-sm font-medium">
            {submittedMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          aria-label="Contact form"
          className="space-y-6 text-left bg-gray-50 p-6 rounded shadow"
        >
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              aria-describedby="email-description"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your email address"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              aria-describedby="message-description"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded transition disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
