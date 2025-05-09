'use client';

import { useState } from 'react';

export default function ContactClient() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setMessage('');
  };

  return (
    <section className="flex items-center justify-center px-6 py-20 md:py-32 bg-white text-center">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
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
              placeholder="Your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              placeholder="Your message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-500 mt-4">Thanks! Your message has been received.</p>
          )}
        </form>
      </div>
    </section>
  );
}
