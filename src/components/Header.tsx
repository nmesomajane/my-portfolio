import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const navigation = [
  { label: "Home", href: "/home" },
  { label: "Overview", href: "/overview" },
  { label: "Info", href: "/info" },
  { label: "Contact Me", href: "#footer" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black w-full fixed top-0 left-0 z-50 shadow">
      <div className="flex justify-between items-center p-1 text-lg text-white w-full  ">
        <nav className="w-full flex justify-between items-center bg-black p-4 text-4xl ">
          {/* Desktop Nav */}
          <div className="hidden md:flex md:gap-[40px]">
            {navigation.map((nav, index) =>
              nav.href.startsWith("#") ? (
                <a
                  key={index}
                  href={nav.href}
                  className="text-white text-xl px-2 transition-colors hover:underline underline-offset-8 "
                >
                  {nav.label}
                </a>
              ) : (
                <NavLink
                  key={index}
                  to={nav.href}
                  className={({ isActive }) =>
                    `text-white text-xl px-2 transition-colors 
                  hover:underline underline-offset-8
                  ${
                    isActive
                      ? "underline underline-offset-8 text-indigo-400 font-bold"
                      : ""
                  }`
                  }
                >
                  {nav.label}
                </NavLink>
              )
            )}
          </div>
          {/* Download CV Button (always visible on desktop, below on mobile) */}
          <a
            href="/resume.pdf"
            download
            className="hidden md:inline-block ml-4 bg-indigo-500 text-white text-base px-4 py-2 shadow hover:bg-indigo-200 hover:text-black transition-colors text-center rounded md:mr-5"
          >
            Download CV
          </a>
          {/* Hamburger Icon */}
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-black z-50 flex flex-col items-center py-6 space-y-4 md:hidden shadow-lg "
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {navigation.map((nav, index) =>
              nav.href.startsWith("#") ? (
                <a
                  key={index}
                  href={nav.href}
                  className="text-white text-xl px-2 transition-colors hover:underline underline-offset-8"
                >
                  {nav.label}
                </a>
              ) : (
                <NavLink
                  key={index}
                  to={nav.href}
                  className={({ isActive }) =>
                    `text-white text-xl px-2 transition-colors 
                  hover:underline underline-offset-8
                  ${
                    isActive
                      ? "underline underline-offset-8 text-indigo-400 font-bold"
                      : ""
                  }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {nav.label}
                </NavLink>
              )
            )}
            <a
              href="/resume.pdf"
              download
              className="bg-indigo-500 text-white text-base px-4 py-2 shadow hover:bg-indigo-200 hover:text-black transition-colors text-center rounded"
              onClick={() => setMenuOpen(false)}
            >
              Download CV
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Header;
