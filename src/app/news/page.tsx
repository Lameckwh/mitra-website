'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import RelatedPostCard from '@/components/RelatedPostCard';
import { ArrowUp } from 'lucide-react';

const featuredPost = {
  id: 1,
  title: 'The Future of IBM Infrastructure in 2025',
  excerpt: 'Explore how IBM’s latest innovations are shaping the future of enterprise infrastructure.',
  image: '/images/post_img.webp', // Updated to WebP
  date: 'March 10, 2025',
  author: 'John Doe',
  slug: '/news/future-of-ibm-infrastructure-2025',
};

const relatedPosts = [
  {
    id: 2,
    title: 'Top 5 Cybersecurity Trends to Watch',
    excerpt: 'Stay ahead of the curve with these emerging cybersecurity trends.',
    image: '/images/post_img.webp', // Updated to WebP
    date: 'March 5, 2025',
    author: 'Jane Smith',
    slug: '/news/cybersecurity-trends-2025',
  },
  {
    id: 3,
    title: 'Optimizing Your Data Center for Efficiency',
    excerpt: 'Tips and tricks to boost performance and reduce costs.',
    image: '/images/post_img.webp', // Updated to WebP
    date: 'February 28, 2025',
    author: 'Alex Brown',
    slug: '/news/data-center-optimization',
  },
  {
    id: 4,
    title: 'Business Intelligence: Turning Data into Decisions',
    excerpt: 'How BI tools can transform your business strategy.',
    image: '/images/post_img.webp', // Updated to WebP
    date: 'February 20, 2025',
    author: 'Emily White',
    slug: '/news/business-intelligence-decisions',
  },
];

const NewsPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      {/* Hero Section with Featured Post */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <Image
          src={featuredPost.image}
          alt="Featured Post Background"
          fill={true}
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/20" />
        <div className="relative z-10 flex items-end justify-end h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 md:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-right text-white w-full md:w-auto"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-md mb-2 md:mb-4">
              {featuredPost.title}
            </h1>
            <p className="text-xs md:text-sm lg:text-base text-gray-300 drop-shadow-md">
              {featuredPost.date}
            </p>
            <Link
              href={featuredPost.slug}
              className="mt-3 md:mt-4 inline-block px-4 md:px-6 py-1.5 md:py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition-colors drop-shadow-md text-sm md:text-base"
            >
              Read More
            </Link>
          </motion.div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 p-2">
          <p className="text-xs md:text-sm drop-shadow-md max-w-6xl">
            News and Features | Mitra news
          </p>
        </div>
      </section>

      {/* Related Posts Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gold-600 dark:text-gold-400 mb-6 md:mb-8">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {relatedPosts.map((post, index) => (
            <RelatedPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
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

export default NewsPage;