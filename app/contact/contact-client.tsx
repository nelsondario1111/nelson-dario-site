'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactClient() {
  const searchParams = useSearchParams();
  const subjectFromQuery = searchParams.get('subject') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (subjectFromQuery) {
      setFormData((prev) => ({ ...prev, subject: decodeURIComponent(subjectFromQuery) }));
    }
  }, [subjectFromQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowConfirmation(false), 6000);
  };

  return (
    <>
      <section className="py-20 bg-gray-50 text-center">
        <h1 className="text-4xl font-semibold mb-6">Contact Me</h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          I'm here to assist you on your transformation journey. Please fill out the form below, and I’ll get back to you as soon as possible.
        </p>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-semibold transition"
            >
              Send Message
            </button>
          </form>

          {showConfirmation && (
            <div className="mt-6 bg-green-100 text-green-800 px-6 py-4 rounded-md shadow-md transition duration-300">
              ✅ Thank you! Your message has been sent successfully.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
