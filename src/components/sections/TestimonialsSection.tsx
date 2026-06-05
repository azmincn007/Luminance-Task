import Image from "next/image";
import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const avatarMap: Record<string, string> = {
  "/images/avatar1.png": "/assets/avatar1.jpg",
  "/images/avatar2.png": "/assets/avatar2.jpg",
};

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const visibleTestimonials = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
  ];

  const handlePrev = () => {
    setDirection("left");
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection("right");
    setIndex((i) => (i + 1) % testimonials.length);
  };

  return (
    <section className="relative bg-[#231F20] py-16 md:py-24 text-white overflow-hidden">
      {/* Gallery overlay image - left side */}
      <div
        className="hidden md:block pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 z-0"
        aria-hidden
      >
        <Image
          src="/assets/gallery-overlay.png"
          alt=""
          width={200}
          height={400}
          className="w-auto h-auto"
        />
      </div>

      {/* Gallery overlay image 2 - right side */}
      <div
        className="hidden md:block pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-0"
        aria-hidden
      >
        <Image
          src="/assets/gallery-overlay2.png"
          alt=""
          width={200}
          height={400}
          className="w-auto h-auto"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Heading */}
          <div>
            <p className="font-inter text-sm text-brand mb-3">Testimonials</p>
            <h2 className="font-lexend text-2xl md:text-3xl font-bold leading-tight mb-8">
              What They&apos;re Talking About
              <br />
              Company ?
            </h2>
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center transition"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center transition"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cards with smooth transition */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            <div
              key={index}
              className={`contents animate-in fade-in slide-in-from-${direction === "right" ? "right" : "left"}-4 duration-500`}
            >
              {visibleTestimonials.map((t, i) => (
                <div
                  key={`${index}-${i}`}
                  className="bg-white/5 border border-white/20 rounded-2xl p-6 transition-all duration-500 py-12"
                  style={{ boxShadow: "0px 0px 12px 0px rgba(255, 255, 255, 0.2)" }}
                >
                  <Quote className="w-6 h-6 text-brand mb-3" />
                  <p
                    className="min-h-[90px] font-inter text-sm leading-relaxed mb-6"
                    style={{ color: "#797777" }}
                  >
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden"
                      style={{ backgroundColor: "#57B7C0" }}
                    >
                      <Image
                        src={avatarMap[t.avatar] || t.avatar}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-lexend text-sm font-semibold text-[#57B7C0]">{t.name}</p>
                      <p className="font-inter text-xs text-white/50">Customer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
