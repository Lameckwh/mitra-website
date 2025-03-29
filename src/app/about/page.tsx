import type { Metadata } from 'next';
import AboutClient from './AboutClient';

// Define metadata for the About page
export const metadata: Metadata = {
  title: 'About - Mitra Systems Ltd',
  description: 'Learn more about our mission, vision, and team at Mitra Systems Ltd.',
  openGraph: {
    title: 'About - Mitra Systems Ltd',
    description: 'Learn more about our mission, vision, and team at Mitra Systems Ltd.',
    url: 'https://www.mitrasystems.com/about',
    siteName: 'Mitra Systems Ltd',
    images: [
      {
        url: '/images/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Mitra Systems Ltd',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Mitra Systems Ltd',
    description: 'Learn more about our mission, vision, and team at Mitra Systems Ltd.',
    images: ['/images/about-og-image.jpg'],
  },
};

export default function Page() {
  return <AboutClient />;
}