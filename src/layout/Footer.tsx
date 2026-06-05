import Image from "next/image";
import { Globe, Mail, Phone } from "lucide-react";

const quickLinks = ["About Us", "Our Team", "Testimonials", "Projects"];
const explore = ["Walk in Closet", "Wardrobe Closet", "U-Shape Kitchen", "Pantry Kitchen", "Doors"];

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background image */}
      <Image src="/assets/footerbg.jpg" alt="" fill className="object-cover" aria-hidden />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "#000000A8" }} aria-hidden />

      <div className="relative container mx-auto px-6 md:px-4 max-w-6xl py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Logo + about */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/assets/logo-ideal.png"
              alt="Ideal Factory"
              width={150}
              height={48}
              className="h-12 w-auto mb-4"
            />
            <p className="font-inter text-xs text-white/55 leading-relaxed max-w-xs">
              Our kitchens may not be able to whisk you away to sun kissed foreign shores, but our
              collection boasts all the quality craftsmanship and style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-lexend text-brand text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-inter text-sm text-white/80 hover:text-brand transition"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-lexend text-brand text-base mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {explore.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-inter text-sm text-white/80 hover:text-brand transition"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-lexend text-brand text-base mb-4">Contact</h4>
            <ul className="space-y-3 font-inter text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand shrink-0" />
                <a href="https://www.idealhome.ae" className="hover:text-brand">
                  www.idealhome.ae
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand shrink-0" />
                <a href="mailto:info@idealhome.com" className="hover:text-brand">
                  info@idealhome.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <div>
                  <p>+971-000-00-000</p>
                  <p>971 (0)50 312 2300</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-white/50">
            Copyright ©2025 lumicore all rights reserved
          </p>
          <div className="flex gap-6 font-inter text-xs text-white/70">
            <a href="#" className="hover:text-brand">
              Terms & Condition
            </a>
            <a href="#" className="hover:text-brand">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
