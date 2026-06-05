import Image from "next/image";
import { Check, Play } from "lucide-react";

const points = [
  "One factory for kitchens, wardrobes, doors, and premium window systems",
  "Fast 3D design & faultless production",
  "Precision manufacturing with European machinery",
  "Solutions priced for 180+ villas",
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-16 md:py-28">
      <div className="container mx-auto px-4 max-w-6xl">
        <div
          className="relative rounded-lg text-white p-6 md:p-12 overflow-visible"
          style={{
            background: "linear-gradient(0.26deg, #57B7C0 -38.47%, #000000 96.33%)",
          }}
        >
          {/* Image positioned absolutely to left edge of gradient box */}
          <div className="absolute left-0 bottom-0 w-[45%] hidden md:block translate-y-[7%]">
            <Image
              src="/assets/home-mockup.png"
              alt="3D kitchen rendering"
              width={600}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Mobile image - shown first on mobile */}
          <div className="md:hidden mb-8">
            <Image
              src="/assets/home-mockup.png"
              alt="3D kitchen rendering"
              width={600}
              height={500}
              className="w-2/3 mx-auto object-contain"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative">
            {/* Left column - empty space for image */}
            <div className="hidden md:block"></div>

            {/* Content */}
            <div>
              <h2 className="font-lexend text-2xl md:text-4xl font-bold leading-tight mb-6 text-center md:text-left">
                Why Villa Owners Choose
                <br />
                Ideal Factory
              </h2>
              <ul className="space-y-3 mb-8">
                {points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 font-inter text-sm md:text-base text-white/85"
                  >
                    <Check className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center md:justify-start">
                <button className="inline-flex items-center gap-2 font-inter text-sm bg-white text-brand px-5 py-2.5 rounded-full hover:opacity-90 transition">
                  <Play className="w-4 h-4" fill="currentColor" />
                  Start Your Free 3D Design
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
