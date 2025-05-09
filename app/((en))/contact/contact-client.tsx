'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactClient() {
  const searchParams = useSearchParams();

  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      const decoded = decodeURIComponent(subjectParam);
      setMessage(`Package of interest: ${decoded}\n\n`);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Simulated delay (replace with real submission logic)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus('submitted');
      setName('');
      setEmail('');
      setMessage('');
      setSubmittedMessage('Thank you! Your message has been sent.');
    } catch (err) {
      console.error('Submission error', err);
      setStatus('idle');
    }
  };

  return (
    <section
      className="flex items-center justify-center px-6 py-20 md:py-32 bg-white text-center"
      aria-label="Contact section"
    >
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg text-gray-700">
          I&apos;m here to support your transformation. Send me a message and I&apos;ll get back to you soon.
        </p>

        {submittedMessage && (
          <div className="p-4 bg-green-100 text-green-700 rounded shadow text-sm font-medium">
            {submittedMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left bg-gray-50 p-6 rounded shadow">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
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
