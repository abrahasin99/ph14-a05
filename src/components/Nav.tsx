import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <div className="sticky top-0 z-50 w-full bg-white">
      <nav className="grid grid-cols-[auto_1fr_auto] items-center border-b border-neutral-200 bg-white px-4 py-4 font-jakarta sm:px-6 md:flex md:justify-between md:px-12 lg:px-22">
        <button
          className="flex items-center justify-self-start md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6 text-[#334155]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <img
          src={Logo}
          alt="logo"
          className="h-8 w-auto justify-self-center sm:h-9 md:justify-self-start"
        />

        <ul className="hidden items-center gap-4 text-[#475569] md:flex lg:gap-6">
          {links.map((link) => (
            <li key={link} className="cursor-pointer hover:text-[#DB2777]">
              {link}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-self-end gap-2 sm:gap-4">
          <button className="text-sm text-[#334155] sm:text-base">
            Sign In
          </button>
          <button className="rounded-full bg-[#DB2777] px-3 py-1.5 text-sm text-white sm:px-4 sm:py-2 sm:text-base">
            Sign Up
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-4 border-b border-neutral-200 bg-white px-4 py-4 text-[#475569] md:hidden">
          {links.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-[#DB2777]"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nav;
