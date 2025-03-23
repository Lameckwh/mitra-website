'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Removed AnimatePresence
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { cardItems } from '@/utils/services';
import { Network, Server, ShieldCheck, BarChart2, Code2, ArrowUp } from 'lucide-react';
import Link from 'next/link';

// Map titles to Lucide icons and sample content
const iconMap: Record<string, { icon: React.ReactNode; image: string; content: string }> = {
  "Network Solutions": {
    icon: <Network className="w-12 h-12 md:w-16 md:h-16 text-blue-500" />,
    image: '/images/services-bg.jpg',
    content: `
      <p>Our Network Solutions provide comprehensive infrastructure planning, deployment, and management services. We ensure seamless connectivity and optimal performance for your business operations.</p>
      <ul class="list-disc pl-5 mt-4">
        <li>Network design and architecture</li>
        <li>High-speed connectivity solutions</li>
        <li>Network security implementation</li>
        <li>24/7 monitoring and support</li>
      </ul>
    `,
  },
  "Data Center Solutions": {
    icon: <Server className="w-12 h-12 md:w-16 md:h-16 text-green-500" />,
    image: '/images/services-bg.jpg',
    content: `
      <p>Transform your data management with our state-of-the-art Data Center Services. We offer end-to-end solutions for your storage and computing needs.</p>
      <ul class="list-disc pl-5 mt-4">
        <li>Data center design and deployment</li>
        <li>Server virtualization</li>
        <li>Disaster recovery planning</li>
        <li>Energy-efficient infrastructure</li>
      </ul>
    `,
  },
  "Cyber Security Solutions": {
    icon: <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-red-500" />,
    image: '/images/services-bg.jpg',
    content: `
      <p>Protect your business with our advanced Cyber Security Solutions. We provide robust defense against modern threats.</p>
      <ul class="list-disc pl-5 mt-4">
        <li>Threat detection and prevention</li>
        <li>Security audits and assessments</li>
        <li>Incident response services</li>
        <li>Employee security training</li>
      </ul>
    `,
  },
  "Business Intelligence and Analytics": {
    icon: <BarChart2 className="w-12 h-12 md:w-16 md:h-16 text-yellow-500" />,
    image: '/images/services-bg.jpg',
    content: `
      <p>Leverage data-driven insights with our Business Intelligence and Analytics services to make informed decisions.</p>
      <ul class="list-disc pl-5 mt-4">
        <li>Data visualization and reporting</li>
        <li>Predictive analytics</li>
        <li>Business performance metrics</li>
        <li>Data warehouse solutions</li>
      </ul>
    `,
  },
  "Software Development and Database Solutions": {
    icon: <Code2 className="w-12 h-12 md:w-16 md:h-16 text-purple-500" />,
    image: '/images/services-bg.jpg',
    content: `
      <p>Build custom solutions with our Software Development and Database Services tailored to your business needs.</p>
      <ul class="list-disc pl-5 mt-4">
        <li>Custom software development</li>
        <li>Database design and optimization</li>
        <li>API integration</li>
        <li>Maintenance and support</li>
      </ul>
    `,
  },
};

const ServiceDetailPage = () => {
  const [mounted, setMounted] = useState(false);
  const params = useParams();
  const slug = params?.slug as string;
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

  // Find the service based on the slug
  const service = cardItems.find(item => item.link === `/services/${slug}`);
  const serviceDetails = service ? iconMap[service.title] : null;

  if (!service || !serviceDetails) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <p className="text-gray-700 dark:text-gray-300 text-lg">Service not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {mounted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={serviceDetails.image}
              alt={service.title}
              fill
              className="object-cover"
              priority // Optimize LCP as it's above the fold
            />
          </motion.div>
        ) : (
          <Image
            src={serviceDetails.image}
            alt={service.title}
            fill
            className="object-cover absolute inset-0 z-0"
            priority // Ensure consistent LCP optimization
          />
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/30 z-10" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center text-white px-4 md:px-8"
        >
          <div className="flex justify-center mb-4 md:mb-6">{serviceDetails.icon}</div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{service.title}</h1>
          <p className="mt-2 md:mt-4 text-sm md:text-lg text-gray-200 max-w-2xl mx-auto">
            {service.description}
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700"
        >
          {/* <h2 className="text-xl md:text-2xl font-semibold text-gold-600 dark:text-gold-400 mb-4 md:mb-6">
            Service Details
          </h2> */}
          <div
            className="prose dark:prose-invert prose-sm md:prose-base text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: serviceDetails.content }}
          />
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 md:mt-12 text-center"
        >
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6">
            Contact us today to learn how {service.title} can benefit your business.
          </p>
          <Link
    href="/contact"
    className="inline-block px-6 md:px-8 py-2 md:py-3 border-2 border-primary text-gold-600 font-semibold rounded-lg hover:bg-gold-600 hover:text-gray-600 dark:hover:bg-gold-500 dark:hover:text-white transition-colors text-sm md:text-base"
  >
    Contact Us
  </Link>
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

export default ServiceDetailPage;