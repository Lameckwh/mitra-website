"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cardItems } from "@/utils/services";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundLines } from "@/components/ui/background-lines";
import { partners } from "@/utils/partners";
import Image from "next/image";
import { ArrowUp } from "lucide-react"; // Import an icon from lucide-react
import { ServicesHome } from "@/components/ui/ServicesHome";


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const videos = [
    "/videos/data_center4.mp4",
    "/videos/data_center1.mp4",
    "/videos/data_center2.mov",
    "/videos/data_center3.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  // Split partners into two arrays for two rows
  const half = Math.ceil(partners.length / 2);
  const topRow = partners.slice(0, half);
  const bottomRow = partners.slice(half);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      setIsVideoLoaded(false);
    }, 10000);
    return () => clearInterval(interval);
  }, [videos.length]);

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

  const generateText =
    "We are a company specialising in the implementation and support of enterprise-level server, virtualisation, storage solutions, and security solutions.";

  return (
    <div>
      {/* Home Section with Video Background */}


      <section
        className={`relative w-full h-96 overflow-hidden ${!isVideoLoaded ? "bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse" : ""
          }`}
      >
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideoIndex}
            autoPlay
            loop
            muted
            playsInline
            onContextMenu={(e) => e.preventDefault()} // Disable right-click download
            controlsList="nodownload"
            onLoadedData={() => setIsVideoLoaded(true)}
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </AnimatePresence>

        <div className="absolute top-0 left-0 w-full h-96 bg-black bg-opacity-40 -z-10"></div>

        {/* Center Content on Mobile */}
        <div className="relative flex flex-col items-center sm:items-start justify-center sm:justify-start h-full text-center sm:text-left text-primary px-4 sm:mt-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-xl sm:text-3xl font-bold text-white my-4"
          >
            Welcome to Mitra Systems Ltd
          </motion.h1>
          <TextGenerateEffect words={generateText} duration={0.5} filter={true} />
        </div>
      </section>


      {/* About Section */}
      <motion.section
      className="min-h-[50vh] md:min-h-screen bg-gray-100 flex flex-col justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <BackgroundLines className="relative flex items-center justify-center h-[70vh] md:h-screen">
        <div className="relative z-10 w-full max-w-lg md:max-w-2xl px-4 md:px-0 text-center text-gray-900 dark:text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">About Us</h2>
          <p className="text-base md:text-lg">
            Lameck, At Mitra, we combine cutting-edge technology with expert support to
            deliver exceptional solutions to our clients. Our journey is defined
            by innovation, commitment, and a passion for excellence.
          </p>
        </div>
      </BackgroundLines>
    </motion.section>

      <div className="services-section">
        <div className="services-overlay"></div> {/* Dark overlay */}

        {/* Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 py-20"
        >
          <ServicesHome items={cardItems} />
        </motion.section>
      </div>


      {/* Our Partners Section */}
      <motion.section
      className="p-6 md:p-10 pb-12 md:pb-16 bg-gray-200 overflow-hidden relative flex flex-col justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8">Our Partners</h2>

      {/* Container for two rows */}
      <div className="overflow-hidden">
        {/* Mobile: Two rows, Desktop: Single row */}
        <div className="md:hidden space-y-4">
          {/* Top Row */}
          <motion.div
            className="flex space-x-4"
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
                className="min-w-[120px] p-2 bg-white shadow rounded flex flex-col items-center justify-center flex-shrink-0"
              >
                <Image
                  src={partner.img}
                  alt={partner.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain mb-1"
                  unoptimized
                />
                <p className="text-xs font-semibold text-center">{partner.name}</p>
              </div>
            ))}
          </motion.div>

          {/* Bottom Row */}
          <motion.div
            className="flex space-x-4"
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
                className="min-w-[120px] p-2 bg-white shadow rounded flex flex-col items-center justify-center flex-shrink-0"
              >
                <Image
                  src={partner.img}
                  alt={partner.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain mb-1"
                  unoptimized
                />
                <p className="text-xs font-semibold text-center">{partner.name}</p>
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
}
