'use client';

import { useState, useRef, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.contact-animate');
          elements.forEach((el, idx) => {
            setTimeout(() => {
              el.classList.add('animate-fade-in-up');
            }, idx * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all fields');
      return;
    }
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-50 to-white" ref={contactRef}>
      <div className="container-custom">
        <div className="contact-animate opacity-0 text-center mb-16">
          <h2 className="section-title inline-block">Let's Connect</h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            I'd love to hear from you! Feel free to reach out with any inquiries or collaboration opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="contact-animate opacity-0">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-blue-600">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:hello@harmanjeet.com" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                hello@harmanjeet.com
              </a>
            </div>
          </div>

          <div className="contact-animate opacity-0">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-cyan-600">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn</h3>
              <a href="https://linkedin.com/in/harmanjeetsingh" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Connect with me
              </a>
            </div>
          </div>

          <div className="contact-animate opacity-0">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-l-4 border-purple-600">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">GitHub</h3>
              <a href="https://github.com/Realcoder13" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                View my projects
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-animate opacity-0 max-w-2xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-300 flex items-start gap-3 animate-fade-in-up">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-bold">Message sent successfully!</p>
                  <p className="text-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg border border-red-300 flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <p className="font-medium">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-3">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-medium"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-medium"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-3">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  rows={6}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all font-medium resize-none"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-lg font-bold py-4 hover:shadow-2xl"
                aria-label="Send your message"
              >
                Send Message
              </button>
              <p className="text-xs text-gray-500 text-center">I'll respond to your message within 24 hours.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
