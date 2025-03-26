'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { partners } from '@/utils/partners';
import { ArrowUp } from 'lucide-react';

const Page = () => {
  // Split partners into two arrays for two rows
  const half = Math.ceil(partners.length / 2);
  const topRow = partners.slice(0, half);
  const bottomRow = partners.slice(half);
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

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
  <Image
    src="/images/about-bg.webp"
    alt="About Us Background"
    layout="fill"
    objectFit="cover"
    // quality={75}
    priority={true}
    className="z-0"
  />
  <div className="absolute inset-0 bg-gray-900 opacity-80 z-0" />
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="relative z-10 text-center text-white px-4 md:px-8"
  >
    <h1 className="text-2xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">About Us</h1>
    <p className="text-base md:text-lg max-w-lg md:max-w-2xl mx-auto drop-shadow-md">
      Your trusted partner for IBM hardware infrastructure solutions.
    </p>
  </motion.div>
</section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 -mt-10 md:-mt-16 relative z-10">
        {/* Company Description Card */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 mb-12"
        >
          <h2 className="text-xl md:text-3xl font-bold dark:text-white text-gray-800 mb-4 md:mb-6">
            Who We Are
          </h2>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Mitra Systems is well positioned to cater for all your client needs from planning,
            supply, installation, on-site support, and after-sales warranty support for all your
            IBM hardware infrastructure, allowing us to give our clients reliability,
            availability, and serviceability of 99.999%. Apart from this, we are recognised as
            having some of the best core skills and references for complex server and storage
            solutions in the region. We are also authorised by IBM to provide IBM Warranty
            Services and IBM Installation Services on behalf of IBM.
          </p>
        </motion.section>

        {/* Our Partners Section */}
        <motion.section
          className="p-6 md:p-10 pb-12 md:pb-16 bg-gray-200 rounded-lg overflow-hidden relative flex flex-col justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-8 dark:text-gray-900">Our Partners</h2>

          {/* Container for two rows */}
          <div className="overflow-hidden">
            {/* Mobile: Two rows, Desktop: Single row */}
            <div className="md:hidden space-y-4">
              {/* Top Row */}
              <motion.div
  className="flex space-x-3"
  animate={{ x: ["0%", "-50%"] }}
  transition={{
    x: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 15,
      ease: "linear",
    },
  }}
>
  {topRow.concat(topRow).map((partner, index) => (
    <div
      key={index}
      className="min-w-[100px] p-2 bg-white shadow rounded flex flex-col items-center justify-center flex-shrink-0"
    >
      <Image
        src={partner.img}
        alt={partner.name}
        width={40}
        height={40}
        className="w-10 h-10 object-contain mb-1"
      />
      <p className="text-[10px] font-semibold text-center dark:text-gray-900">{partner.name}</p>
    </div>
  ))}
</motion.div>

              {/* Bottom Row */}
              <motion.div
                className="flex space-x-3"
                animate={{ x: ["-50%", "0%"] }} // Opposite direction for visual interest
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                  },
                }}
              >
                {bottomRow.concat(bottomRow).map((partner, index) => (
                  <div
                    key={index}
                    className="min-w-[100px] p-2 bg-white shadow rounded flex flex-col items-center justify-center flex-shrink-0"
                  >
                    <Image
                      src={partner.img}
                      alt={partner.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain mb-1"
                      unoptimized
                    />
                    <p className="text-[10px] font-semibold text-center dark:text-gray-900">{partner.name}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Desktop: Single row */}
            <motion.div
              className="hidden md:flex space-x-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {partners.concat(partners).map((partner, index) => (
                <div
                  key={index}
                  className="min-w-[200px] p-4 bg-white shadow rounded flex flex-col items-center justify-center flex-shrink-0"
                >
                  <Image
                    src={partner.img}
                    alt={partner.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-contain mb-2"
                    unoptimized
                  />
                  <p className="text-sm font-semibold text-center">{partner.name}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Office Locations */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pb-12 md:pb-16"
        >
          <h2 className="text-xl md:text-3xl font-bold dark:text-white text-gray-800 mb-6 md:mb-8 text-center pt-8">
            Our Offices
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {/* Malawi Office */}
            <div className="bg-white border border-gray-200 dark:bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg md:text-xl font-semibold text-primary dark:text-primary mb-2">
                Malawi
              </h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                2nd Floor, Pamodzi Park, Unit 19<br />
                P.O Box 762<br />
                Blantyre
              </p>
              <p className="mt-4 text-xs md:text-sm">
                <strong>Phone:</strong> +265 88 775 0000<br />
                <strong>Email:</strong>{' '}
                <a href="mailto:sales@mitra.mw" className="text-primary dark:text-primary hover:underline">
                  sales@mitra.mw
                </a>
              </p>
            </div>

            {/* Zimbabwe Office */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg md:text-xl font-semibold text-primary dark:text-primary mb-2">
                Zimbabwe
              </h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                4 Elsworth<br />
                Belgravia<br />
                Harare
              </p>
              <p className="mt-4 text-xs md:text-sm">
                <strong>Phone:</strong> +263 772591154<br />
                <strong>Email:</strong>{' '}
                <a href="mailto:sales@mitra.co.zw" className="text-primary hover:underline">
                  sales@mitra.co.zw
                </a>
              </p>
            </div>

            {/* Zambia Office */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">Zambia</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                9, Thorn Park<br />
                Mungulube Road Off Makishi Road<br />
                Lusaka
              </p>
              <p className="mt-4 text-xs md:text-sm">
                <strong>Phone:</strong> +260 97 7977165<br />
                <strong>Email:</strong>{' '}
                <a href="mailto:sales@mitra.co.zm" className="text-primary hover:underline">
                  sales@mitra.co.zm
                </a>
              </p>
            </div>
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