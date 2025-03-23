'use client';
import React, { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import RelatedPostCard from '@/components/RelatedPostCard';
import { ArrowUp } from 'lucide-react';

// Sample post data (replace with dynamic data from your source)
const post = {
  id: 1,
  title: 'The Future of IBM Infrastructure in 2025',
  content: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  `,
  image: '/images/post_img.jpg',
  date: 'March 10, 2025',
  author: 'Lameck Mbewe',
};

const relatedPosts = [
  {
    id: 2,
    title: 'Top 5 Cybersecurity Trends to Watch',
    excerpt: 'Stay ahead of the curve with these emerging cybersecurity trends.',
    image: '/images/post_img.jpg',
    date: 'March 5, 2025',
    author: 'Jane Smith',
    slug: '/news/cybersecurity-trends-2025',
  },
  {
    id: 3,
    title: 'Optimizing Your Data Center for Efficiency',
    excerpt: 'Tips and tricks to boost performance and reduce costs.',
    image: '/images/post_img.jpg',
    date: 'February 28, 2025',
    author: 'Alex Brown',
    slug: '/news/data-center-optimization',
  },
  {
    id: 4,
    title: 'Business Intelligence: Turning Data into Decisions',
    excerpt: 'How BI tools can transform your business strategy.',
    image: '/images/post_img.jpg',
    date: 'February 20, 2025',
    author: 'Emily White',
    slug: '/news/business-intelligence-decisions',
  },
];

// Sample initial comments (replace with API fetch in production)
const initialComments = [
  {
    id: 1,
    name: 'Alice Johnson',
    date: 'March 12, 2025',
    content: 'Great article! The insights on IBM infrastructure are spot on.',
  },
  {
    id: 2,
    name: 'Bob Carter',
    date: 'March 11, 2025',
    content: 'Looking forward to more posts like this. Thanks for sharing!',
  },
];

const NewsPostPage = () => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState({ name: '', content: '' });
  const [errors, setErrors] = useState({ name: '', content: '' });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ name: '', content: '' });
    setSuccessMessage('');

    let hasErrors = false;
    const newErrors = { name: '', content: '' };

    if (!newComment.name.trim()) {
      newErrors.name = 'Name is required';
      hasErrors = true;
    }
    if (!newComment.content.trim()) {
      newErrors.content = 'Comment is required';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    const comment = {
      id: comments.length + 1,
      name: newComment.name,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      content: newComment.content,
    };

    setComments([...comments, comment]);
    setNewComment({ name: '', content: '' });
    setSuccessMessage('Comment submitted successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
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
              priority // Added for LCP optimization
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

            {/* Comment Section */}
            <div className="mt-8 md:mt-12">
              <h2 className="text-xl md:text-2xl font-semibold text-gold-600 dark:text-gold-400 mb-4 md:mb-6">
                Comments ({comments.length})
              </h2>

              {/* Comment Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg border border-gray-200 mb-6 md:mb-8"
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-white mb-3 md:mb-4">
                  Leave a Comment
                </h3>

                <AnimatePresence>
                  {successMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mb-3 md:mb-4 p-2 md:p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg border border-green-300 dark:border-green-700 text-xs md:text-sm"
                    >
                      {successMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={newComment.name}
                      onChange={handleChange}
                      className={`mt-1 w-full p-2 md:p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all text-sm md:text-base ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-200 dark:border-primary focus:ring-gold-500'
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs md:text-sm text-red-600 dark:text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="content"
                      className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Comment
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      value={newComment.content}
                      onChange={handleChange}
                      rows={3}
                      className={`mt-1 w-full p-2 md:p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all text-sm md:text-base ${
                        errors.content
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-200 dark:border-primary focus:ring-gold-500'
                      }`}
                      placeholder="Share your thoughts..."
                    />
                    {errors.content && (
                      <p className="mt-1 text-xs md:text-sm text-red-600 dark:text-red-400">
                        {errors.content}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-primary w-full md:w-3/4 py-2 md:py-3 px-4 bg-gold-600 text-white font-semibold rounded-lg hover:bg-gold-700 dark:hover:bg-gold-500 transition-colors text-sm md:text-base"
                    >
                      Submit Comment
                    </button>
                  </div>
                </div>
              </motion.form>

              {/* Existing Comments */}
              <div className="space-y-4">
                {comments.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                    No comments yet. Be the first to comment!
                  </p>
                ) : (
                  comments.map((comment, index) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="bg-white dark:bg-gray-800 p-3 md:p-4 rounded-lg border border-gray-200"
                    >
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                        <h4 className="text-base md:text-lg font-medium text-gray-900 dark:text-white">
                          {comment.name}
                        </h4>
                        <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
                          {comment.date}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                        {comment.content}
                      </p>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
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