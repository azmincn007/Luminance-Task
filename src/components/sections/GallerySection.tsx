import Image from "next/image";
import { useState } from "react";

const filters = ["All", "Kitchen", "Door", "Closet", "UPVC Windows"];

const gallery = [
  { src: "/assets/d1.png", alt: "Modern wood kitchen" },
  { src: "/assets/d3.jpg", alt: "Window system" },
  { src: "/assets/d4.png", alt: "Grey kitchen" },
  { src: "/assets/d5.jpg", alt: "Bright living room" },
  { src: "/assets/d2.png", alt: "Glass wardrobe" },
  { src: "/assets/d6.png", alt: "Classic wooden door" },
  { src: "/assets/d7.jpg", alt: "Interior room" },
];

export default function GallerySection() {
  const [active, setActive] = useState("All");

  return (
    <section className="relative bg-[#231F20] py-16 md:py-24 text-white overflow-hidden">
      {/* Gallery overlay image */}
      <div className="pointer-events-none absolute left-0 top-[20%] z-0" aria-hidden>
        <Image
          src="/assets/gallery-overlay.png"
          alt=""
          width={200}
          height={400}
          className="w-auto h-auto invert"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <h2 className="font-lexend text-xl md:text-2xl font-semibold text-center mb-6">
          Designed. Built. Delivered
        </h2>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-inter text-xs md:text-sm px-4 py-1.5 rounded-md border transition ${
                active === f
                  ? "bg-brand text-brand-foreground border-brand"
                  : "border-white/20 text-white/80 hover:border-white/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-2 mb-10 md:max-h-[900px] relative z-20">
          {/* 1 - Big kitchen: full-width landscape on mobile, 2x2 on desktop */}
          <div className="col-span-2 md:row-span-2 relative overflow-hidden rounded-md bg-white/5 aspect-[4/3] md:aspect-auto">
            <Image
              src={gallery[0].src}
              alt={gallery[0].alt}
              fill
              className="object-cover hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* 2 - Window */}
          <div className="relative overflow-hidden rounded-md bg-white/5 aspect-square md:aspect-auto">
            <Image
              src={gallery[1].src}
              alt={gallery[1].alt}
              fill
              className="object-cover hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          {/* 3 - Grey kitchen */}
          <div className="relative overflow-hidden rounded-md bg-white/5 aspect-square md:aspect-auto">
            <Image
              src={gallery[2].src}
              alt={gallery[2].alt}
              fill
              className="object-cover hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          {/* 4 - Living room: full-width on mobile, 2x1 on desktop */}
          <div className="col-span-2 relative overflow-hidden rounded-md bg-white/5 aspect-video md:aspect-auto">
            <Image
              src={gallery[3].src}
              alt={gallery[3].alt}
              fill
              className="object-cover hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* 5 - Closet: full-width on mobile, 2x1 on desktop */}
          <div className="col-span-2 relative overflow-hidden rounded-md bg-white/5 aspect-video md:aspect-auto">
            <Image
              src={gallery[4].src}
              alt={gallery[4].alt}
              fill
              className="object-cover hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* 6 - Door */}
          <div className="relative overflow-hidden rounded-md bg-white/5 aspect-square md:aspect-auto">
            <Image
              src={gallery[5].src}
              alt={gallery[5].alt}
              fill
              className="object-cover hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          {/* 7 - Interior room */}
          <div className="relative overflow-hidden rounded-md bg-white/5 aspect-square md:aspect-auto">
            <Image
              src={gallery[6].src}
              alt={gallery[6].alt}
              fill
              className="object-cover hover:scale-105 transition duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="font-inter text-sm bg-brand text-brand-foreground px-6 py-2.5 rounded-md hover:opacity-90 transition">
            Explore Projects
          </button>
        </div>
      </div>
    </section>
  );
}
