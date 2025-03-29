import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

// Define metadata for the Services page
export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our wide range of services at Mitra Systems Ltd, including network solutions, data center services, cybersecurity, business intelligence, and software development.',
  openGraph: {
    title: 'Services - Mitra Systems Ltd',
    description: 'Explore our wide range of services at Mitra Systems Ltd, including network solutions, data center services, cybersecurity, business intelligence, and software development.',
    url: 'https://www.mitrasystems.com/services',
    siteName: 'Mitra Systems Ltd',
    images: [
      {
        url: '/images/services-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mitra Systems Ltd Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services - Mitra Systems Ltd',
    description: 'Explore our wide range of services at Mitra Systems Ltd.',
    images: ['/images/services-og-image.jpg'],
  },
};

export default function Page() {
  return <ServicesClient />;
}