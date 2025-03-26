'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cardItems } from '@/utils/services';
import { ServicesCards } from '@/components/ui/ServicesCards';
import { ArrowUp } from 'lucide-react';
import Head from 'next/head';

const Page = () => {
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

  if (!cardItems || cardItems.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center text-gray-700 dark:text-gray-300">
        Loading services...
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Head>
        <link rel="preload" href="/videos/bi.webm" as="video" type="video/webm" />
      </Head>
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/bi-poster.webp"
          className="absolute inset-0 w-full h-full object-cover z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <source src="/videos/bi.webm" type="video/webm" />
          <source src="/videos/bi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        <motion.div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(50, 50, 150, 0.8) 100%)',
          }}
          initial={{ opacity: 0.9 }}
          animate={{ opacity: [0.9, 0.8, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-white px-4 sm:px-6 md:px-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            What do we offer?
          </h1>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our wide range of services designed to empower your business.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <div className="services-page">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 py-4 sm:py-8 md:py-12"
        >
          <ServicesCards items={cardItems} />
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