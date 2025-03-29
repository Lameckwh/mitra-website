import "./globals.css"; // Import global styles
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";

interface RootLayoutProps {
  children: ReactNode;
}
export const metadata: Metadata = {
  title: 'Mitra Systems Ltd',
  description: 'Enterprise-level server, virtualization, storage, and security solutions.',
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
