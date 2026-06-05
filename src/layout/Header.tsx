import { Menu, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 px-4 md:px-8 pt-4 md:pt-6">
      <div
        className="mx-auto max-w-7xl rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between"
        style={{ background: "#00000069", backdropFilter: "blur(4px)" }}
      >
        <div className="flex items-center gap-6 md:gap-8">
          <button
            aria-label="Open menu"
            className="text-white p-1.5 rounded hover:bg-white/10 transition"
          >
            <Menu className="h-6 w-6" />
          </button>
          <nav className="hidden md:flex items-center gap-6 font-inter text-sm text-white/90">
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
          <img src="/assets/logo.svg" alt="Ideal Factory" className="w-auto h-[32px] md:h-[45px]" />
        </a>

        <button className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-4 md:px-5 py-3 text-sm font-inter font-medium hover:opacity-90 transition">
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Start Your Project</span>
        </button>
      </div>
    </header>
  );
}
