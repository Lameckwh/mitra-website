'use client';

import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer bg-base-200 dark:bg-gray-800 text-base-content p-10">
        <aside className="flex flex-col justify-center w-1/2" >
          <Image src="/images/logo.png" alt="mitra Logo" width={80} height={30} />
          <h3 className="font-semibold text-lg">
            Mitra Systems Ltd.
            <br />
          </h3>
          <p>
            Innovative technology for generations.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link href="/services/network-solutions" className="link link-hover">Network Solutions</Link>
          <Link href="/services/data-center-solutions" className="link link-hover">Data Center Solutions</Link>
          <Link href="/services/cyber-security-solutions" className="link link-hover">Cyber Security Solutions</Link>
          <Link href="/services/business-intelligence-analytics" className="link link-hover">Business Intelligence</Link>
          <Link href="/services/software-development-and-database-solutions" className="link link-hover">Systems Development</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>

          <Link href="/" className="link link-hover">Home</Link>
          <Link href="/about" className="link link-hover">About us</Link>
          <Link href="/services" className="link link-hover">Services</Link>
          <Link href="/contact" className="link link-hover">Contact Us</Link>
          <Link href="/news" className="link link-hover">News</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link href="#" className="link link-hover">Terms of use</Link>
          <Link href="#" className="link link-hover">Privacy policy</Link>
          <Link href="#" className="link link-hover">Cookie policy</Link>
        </nav>
      </footer>
      <footer className="footer bg-neutral text-neutral-content items-center px-3 py-2">
        <aside className="grid-flow-col items-center">

          <p>Mitra Systems Ltd © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link href="#" >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
              <path fill="white" d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
          </Link>
          <Link href="#" >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg>
          </Link>
          <Link href="#" >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
            </svg>
          </Link>
        </nav>
      </footer>
    </>

  );
};

export default Footer;
