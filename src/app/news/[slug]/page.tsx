'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import RelatedPostCard from '@/components/RelatedPostCard';
import { ArrowUp } from 'lucide-react';

const post = {
  id: 1,
  title: 'The Future of IBM Infrastructure in 2025',
  content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  `,
  image: '/images/post_img.webp',
  date: 'March 10, 2025',
  author: 'Lameck Mbewe',
};

const relatedPosts = [
  {
    id: 2,
    title: 'Top 5 Cybersecurity Trends to Watch',
    excerpt: 'Stay ahead of the curve with these emerging cybersecurity trends.',
    image: '/images/post_img.webp',
    date: 'March 5, 2025',
    author: 'Jane Smith',
    slug: '/news/cybersecurity-trends-2025',
  },
  {
    id: 3,
    title: 'Optimizing Your Data Center for Efficiency',
    excerpt: 'Tips and tricks to boost performance and reduce costs.',
    image: '/images/post_img.webp',
    date: 'February 28, 2025',
    author: 'Alex Brown',
    slug: '/news/data-center-optimization',
  },
  {
    id: 4,
    title: 'Business Intelligence: Turning Data into Decisions',
    excerpt: 'How BI tools can transform your business strategy.',
    image: '/images/post_img.webp',
    date: 'February 20, 2025',
    author: 'Emily White',
    slug: '/news/business-intelligence-decisions',
  },
];

const NewsPostPage = () => {
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
      <Head>
        <link rel="preload" href={post.image} as="image" />
      </Head>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Post Content (Left Panel) */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 mb-8 lg:mb-0"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-48 md:h-64 lg:h-96 object-cover rounded-lg mb-6 md:mb-8"
              priority={true}
              quality={75}
            />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              {post.title}
            </h1>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-6">
              {post.date} | By {post.author}
            </p>
            <div
              className="prose dark:prose-invert prose-sm md:prose-base lg:prose-lg text-gray-700 dark:text-gray-300 mb-8 md:mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.section>

          {/* Related Posts (Right Panel) */}
          <aside className="lg:col-span-1">
            <h2 className="text-xl md:text-2xl font-semibold text-gold-600 dark:text-gold-400 mb-4 md:mb-6">
              Related Posts
            </h2>
            <div className="space-y-4 md:space-y-6">
              {relatedPosts.map((relatedPost, index) => (
                <RelatedPostCard key={relatedPost.id} post={relatedPost} index={index} />
              ))}
            </div>
          </aside>
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

export default NewsPostPage;