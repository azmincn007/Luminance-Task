"use client";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 px-4 md:px-8 pt-4 md:pt-6">
        <div
          className="mx-auto max-w-7xl rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between"
          style={{ background: "#00000069", backdropFilter: "blur(4px)" }}
        >
          <div className="flex items-center gap-6 md:gap-8">
            <button
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
              className="text-white p-1.5 rounded hover:bg-white/10 transition"
            >
              <Menu className="h-6 w-6" />
            </button>
            <nav className="hidden lg:flex items-center gap-6 font-inter text-sm text-white/90">
              <a href="#services" className="hover:text-brand transition">
                Our Service
              </a>
              <a href="#about" className="hover:text-brand transition">
                About Us
              </a>
              <a href="#contact" className="hover:text-brand transition">
                Contact Us
              </a>
            </nav>
          </div>

          <a href="#" className="flex items-center gap-2">
            <img
              src="/assets/logo.svg"
              alt="Ideal Factory"
              className="w-auto h-[32px] md:h-[45px]"
            />
          </a>

          <button className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-4 md:px-5 py-3 text-sm font-inter font-medium hover:opacity-90 transition">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Start Your Project</span>
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 z-50 bg-[#1a1717] flex flex-col transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <img src="/assets/logo.svg" alt="Ideal Factory" className="h-8 w-auto" />
          <button
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
            className="text-white p-1.5 rounded hover:bg-white/10 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 gap-6 font-inter text-base text-white/90">
          <a
            href="#services"
            onClick={() => setDrawerOpen(false)}
            className="hover:text-brand transition"
          >
            Our Service
          </a>
          <a
            href="#about"
            onClick={() => setDrawerOpen(false)}
            className="hover:text-brand transition"
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={() => setDrawerOpen(false)}
            className="hover:text-brand transition"
          >
            Contact Us
          </a>
        </nav>

        <div className="mt-auto px-6 pb-8">
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-3 text-sm font-inter font-medium hover:opacity-90 transition">
            <Phone className="h-4 w-4" />
            Start Your Project
          </button>
        </div>
      </div>
    </>
  );
}
