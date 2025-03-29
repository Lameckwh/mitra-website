import "./globals.css"; // Import global styles
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Metadata } from "next";
import Providers from "./providers";
 

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: 'Mitra Systems Ltd',
    template: '%s | Mitra Systems Ltd',
  },
  description: 'Enterprise-level server, virtualization, storage, and security solutions.',
  keywords: ['enterprise solutions', 'server', 'virtualization', 'storage', 'security'],
  openGraph: {
    title: 'Mitra Systems Ltd',
    description: 'We specialize in enterprise-level server, virtualization, storage, and security solutions.',
    url: 'https://www.mitrasystems.com',
    siteName: 'Mitra Systems Ltd',
    images: [
      {
        url: '/images/og-image.jpg', // Updated to local path (ensure this exists in public/images/)
        width: 1200,
        height: 630,
        alt: 'Mitra Systems Ltd',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mitra Systems Ltd',
    description: 'Enterprise-level server, virtualization, storage, and security solutions.',
    images: ['/images/og-image.jpg'], // Updated to local path
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preload" href="/videos/bi.webm" as="video" type="video/webm" />
        <link rel="preload" href="/videos/data_center1_opt.mp4" as="video" type="video/mp4" />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <Providers>
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}