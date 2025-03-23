"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getMobileLinkClass = (path: string) => {
    const safePathname = pathname ?? "/";
    const isActive =
      path === "/news"
        ? safePathname === "/news" || safePathname.startsWith("/news/")
        : path === "/services"
        ? safePathname === "/services" || safePathname.startsWith("/services/") // Highlight for /services and subpaths
        : safePathname === path;

    return `relative px-3 py-2 rounded-md transition-all duration-300 
      ${isActive 
        ? "text-primary bg-gray-100 dark:bg-gray-800 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-6 after:bg-primary" 
        : "hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 hover:after:content-[''] hover:after:absolute hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-0 hover:after:h-[2px] hover:after:w-6 hover:after:bg-primary"
      }`;
  };

  const getDesktopLinkClass = (path: string) => {
    const safePathname = pathname ?? "/";
    const isActive =
      path === "/news"
        ? safePathname === "/news" || safePathname.startsWith("/news/")
        : path === "/services"
        ? safePathname === "/services" || safePathname.startsWith("/services/") // Highlight for /services and subpaths
        : safePathname === path;

    return `relative px-3 py-2 rounded-md transition-all duration-300 
      ${isActive 
        ? "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-6 after:bg-primary" 
        : "hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 hover:after:content-[''] hover:after:absolute hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-0 hover:after:h-[2px] hover:after:w-6 hover:after:bg-primary"
      }`;
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <div className="navbar fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-slate-600 dark:text-white font-semibold text-lg shadow-md z-50">
      <div className="navbar-start">
        <div className="dropdown" ref={dropdownRef}>
          <div
            tabIndex={0}
            role="button"
            title="Open menu"
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            className={`menu menu-sm bg-gray-200 dark:bg-gray-800 opacity-95 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link href="/" className={getMobileLinkClass("/")} onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={getMobileLinkClass("/about")} onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <details>
                <summary className={getMobileLinkClass("/services")}>
                  Services
                </summary>
                <ul className="p-2 bg-gray-100 dark:bg-gray-700 rounded-box">
                  <li>
                    <Link href="/services/cybersecurity" onClick={handleLinkClick}>
                      Cybersecurity
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/business-intelligence" onClick={handleLinkClick}>
                      Business Intelligence
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/contact" className={getMobileLinkClass("/contact")} onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/news" className={getMobileLinkClass("/news")} onClick={handleLinkClick}>
                News
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative w-20 h-8">
          <Image
            src="/images/logo.png"
            alt="Mitra Logo"
            width={60}
            height={50}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-1">
          <li>
            <Link href="/" className={getDesktopLinkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={getDesktopLinkClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className={getDesktopLinkClass("/services")}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className={getDesktopLinkClass("/contact")}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/news" className={getDesktopLinkClass("/news")}>
              News
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end pr-4">
        {mounted && (
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-primary text-white dark:bg-gray-700 hover:bg-primary/90 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;