import Image from "next/image";
import { CircleArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/assets/section1-img1.png"
        alt="Villa interior"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 pt-40 md:pt-44 pb-20 flex flex-col items-center lg:items-start">
        <div className="max-w-2xl w-full text-center lg:text-left lg:rounded-2xl lg:bg-[#0E0B0B75] lg:p-10 lg:backdrop-blur-sm">
          <h1 className="font-lexend text-3xl md:text-5xl font-semibold leading-tight text-white">
            Design &amp; Delivery of
            <br />
            Your Villa Interiors
          </h1>
          <h2 className="font-lexend text-3xl md:text-5xl font-semibold text-brand mt-2">
            Made Simple
          </h2>

          <p className="font-inter text-sm md:text-base text-white/80 mt-5 max-w-md leading-relaxed">
            Kitchens, closets, doors, and premium uPVC windows designed, manufactured, and installed
            by one trusted Emirati factory.
          </p>

          <button className="mt-7 inline-flex items-center gap-3 rounded-md bg-white text-black pl-5 pr-2 py-2 font-inter text-sm font-semibold hover:bg-white/90 transition">
            Get Your FREE 3D Design Now
            <CircleArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Floating support bubble */}
      <button
        aria-label="Support"
        className="absolute bottom-6 right-6 z-20 flex items-center justify-center hover:scale-110 transition-all duration-300 animate-float-bot"
      >
        <span className="absolute w-14 h-14 rounded-full bg-brand/30 animate-spread-ring" />
        <span className="absolute w-14 h-14 rounded-full bg-brand/20 animate-spread-ring-delay" />
        <Image src="/assets/bot.png" alt="" width={88} height={70} className="relative z-10" />
      </button>
    </section>
  );
}
