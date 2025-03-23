// components/RelatedPostCard.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type Post = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  slug: string;
};

const RelatedPostCard = ({ post, index }: { post: Post; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 overflow-hidden"
    >
      <Image
        src={post.image}
        alt={post.title}
        width={300}
        height={200}
        className="w-full h-32 md:h-32 object-cover"
        priority={index === 0} // Add priority only to the first card (likely above the fold)
      />
      <div className="p-3 md:p-4">
        <h3 className="text-base md:text-lg font-medium text-gray-900 dark:text-white mb-1 md:mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-1 md:mb-2">
          {post.date}
        </p>
        <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mb-2 md:mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <Link
          href={post.slug}
          className="text-gold-600 dark:text-gold-400 hover:underline font-semibold text-sm md:text-base"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default RelatedPostCard;