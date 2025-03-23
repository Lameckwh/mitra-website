'use client';
import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [mounted, setMounted] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ name: '', email: '', message: '' });
    setSuccessMessage('');

    let hasErrors = false;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      hasErrors = true;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      hasErrors = true;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      hasErrors = true;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    
    setFormData({ name: '', email: '', message: '' });
    setSuccessMessage('Thank you for your message! We’ll get back to you soon.');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[60vh] flex items-center justify-center bg-[url('/images/services-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/30 z-0" />
        <div className="relative z-10 text-center text-white px-4 md:px-6 max-w-xl md:max-w-3xl mx-auto">
          {mounted && (
            <motion.h1
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            >
              Get in Touch
            </motion.h1>
          )}
          <p className="text-base md:text-xl text-gray-200">
            Let’s connect! Reach out for expert IBM infrastructure solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
        >
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 dark:bg-gray-800 p-6 md:p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gold-600 dark:text-gold-400 mb-4 md:mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <AnimatePresence>
                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg border border-green-300 dark:border-green-700 text-sm md:text-base"
                  >
                    {successMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 md:mt-2 w-full p-2 md:p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all text-sm md:text-base ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200 dark:border-gray-700 focus:ring-gold-500'
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs md:text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 md:mt-2 w-full p-2 md:p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all text-sm md:text-base ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200 dark:border-gray-700 focus:ring-gold-500'
                  }`}
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="mt-1 text-xs md:text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm md:text-base font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`mt-1 md:mt-2 w-full p-2 md:p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all text-sm md:text-base ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-200 dark:border-gray-700 focus:ring-gold-500'
                  }`}
                  placeholder="How can we assist you?"
                />
                {errors.message && (
                  <p className="mt-1 text-xs md:text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-primary w-full py-2 md:py-3 bg-gold-600 text-white font-semibold rounded-lg hover:bg-gold-700 dark:hover:bg-gold-500 transition-colors duration-300 text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Office Contact Details */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gold-600 dark:text-gold-400 mb-4 md:mb-6">
              Our Locations
            </h2>
            {[
              {
                country: 'Malawi',
                address: '2nd Floor, Pamodzi Park, Unit 19\nP.O Box 762\nBlantyre',
                phone: '+265 88 775 0000',
                email: 'sales@mitra.mw',
              },
              {
                country: 'Zimbabwe',
                address: '4 Elsworth\nBelgravia\nHarare',
                phone: '+263 772591154',
                email: 'sales@mitra.co.zw',
              },
              {
                country: 'Zambia',
                address: '9, Thorn Park\nMungulube Road Off Makishi Road\nLusaka',
                phone: '+260 97 7977165',
                email: 'sales@mitra.co.zm',
              },
            ].map((office, index) => (
              <motion.div
                key={office.country}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white border border-gray-200 dark:bg-gray-800 p-6 rounded-xl"
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">
                  {office.country}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 whitespace-pre-line">
                  {office.address}
                </p>
                <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                  <strong>Phone:</strong> {office.phone}
                  <br />
                  <strong>Email:</strong>{' '}
                  <a
                    href={`mailto:${office.email}`}
                    className="text-gold-600 dark:text-gold-400 hover:underline"
                  >
                    {office.email}
                  </a>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
      {isScrolled && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary transition-all duration-300 z-50"
          aria-label="Go to top"
          title="Go to top"
        >
          <ArrowUp size={24} />
        </button>

      )}
    </div>
  );
};

export default Page;