"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const lastScrollY = useRef(0);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white shadow-lg fixed w-full top-0 z-50 transition-transform duration-300 ${
        roboto.className
      } ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary py-2">
              <Link href={`/`}>
                <img
                  src={`${
                    process.env.PAGES_BASE_PATH || ""
                  }/sce-supplies-logo-horiz.png`}
                  alt="SCE Services & Supplies Logo"
                  width={150}
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href={`/#services`}>
                <div className="relative group text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors duration-300">
                  Servicios
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </div>
              </Link>
              <Link href={`/about`}>
                <div className="relative group text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors duration-300">
                  Sobre Nosotros
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </div>
              </Link>
              <Link href={`/#contact`}>
                <div className="relative group text-gray-700 hover:text-blue-600 px-3 py-2 transition-colors duration-300">
                  Contacto
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </div>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-gray-700 hover:text-primary"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/*<!-- Mobile menu --> */}
      <div
        id="mobile-menu"
        className={`md:hidden ${
          showMobileMenu ? "h-[150px]" : "h-0"
        } bg-white border-t border-b border-gray-200 shadow-lg/30 transition-all duration-150 ease-out overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href={`/#services`}
            className="relative group block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Servicios
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a
            href={`/about`}
            className="relative group block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Sobre Nosotros
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
          <a
            href={`/#contact`}
            className="relative group block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            Contacto
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>
        </div>
      </div>
    </nav>
  );
};
