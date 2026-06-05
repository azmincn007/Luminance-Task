import Image from "next/image";
import {
  CircleArrowRight,
  LayoutGrid,
  Palette as PaletteIcon,
  ImageIcon,
  ArrowRight,
} from "lucide-react";

const painPoints = [
  "Quality Problems",
  "Delays during execution",
  "Poor value for money",
  "Weak after-sales support",
];

const approach = [
  {
    img: "/assets/why1.png",
    title: "Multiple Interior Systems",
    desc: "Our Factory: Kitchens, wardrobes, doors, and premium window systems—manufactured together in one facility for coordinated villa interiors.",
  },
  {
    img: "/assets/why2.png",
    title: "Coordinated Design",
    desc: "Our designers ensure that kitchens, closets, doors, and windows complement each other in style and proportion.",
  },
  {
    img: "/assets/why3.png",
    title: "After-Sales Support & Maintenance",
    desc: "Our team installs every product with precision to ensure the final result reflects the original design.",
  },
  {
    img: "/assets/why4.png",
    title: "Premium Manufacturing & Installation",
    desc: "Manufactured in-house, installed with precision—zero coordination loss.",
  },
];

export default function WhySection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-[#231F20] text-white rounded-3xl p-8 md:p-12 lg:p-16">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="font-lexend text-2xl md:text-4xl font-bold mb-3">
              Why Villa Interior Projects Often Become Difficult?
            </h2>
            <p className="font-inter text-sm md:text-base text-white/70 max-w-3xl">
              When interior systems are sourced from multiple suppliers, the process becomes
              fragmented, making it difficult to coordinate a consistent final result. The lack of
              commitment leads to:
            </p>
          </div>

          {/* Pain points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-3xl">
            {painPoints.map((p) => (
              <div key={p} className="flex items-center gap-2 font-inter text-sm md:text-base">
                <CircleArrowRight className="w-5 h-5 text-white shrink-0" />
                <span>{p}</span>
              </div>
            ))}
          </div>

          {/* Video placeholder */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16">
            <Image
              src="/assets/video-placeholder.png"
              alt="Video placeholder"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Ideal Factory Approach */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-lexend text-2xl md:text-3xl font-bold leading-tight">
                The Ideal Factory
                <br />
                Approach
              </h3>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {approach.map(({ img, title, desc }) => (
                <div key={title}>
                  <Image src={img} alt={title} width={32} height={32} className="w-8 h-8 mb-3" />
                  <h4 className="font-lexend font-semibold mb-1.5">{title}</h4>
                  <p className="font-inter text-xs md:text-sm text-white/65 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Design Your Villa Interiors Section */}
        <div
          className="relative bg-cover bg-center text-white rounded-3xl p-8 md:p-12 lg:p-16 mt-8 overflow-hidden"
          style={{ backgroundImage: `url(/assets/design-bg.jpg)` }}
        >
          {/* Black overlay with 71% opacity (to make bg 29% visible) */}
          <div className="absolute inset-0 bg-black opacity-71 rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="font-lexend text-3xl md:text-4xl font-bold mb-3">
                Design Your Villa Interiors
              </h2>
              <p className="text-brand text-2xl md:text-3xl font-bold mb-6">
                Before Spending a Dirham
              </p>
              <p className="font-inter text-sm md:text-base mb-6 max-w-md">
                Upload your villa floor plan and collaborate live with our designers to create a
                full 3D interior concept within an hour.
              </p>

              {/* Benefits */}
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2">
                  <CircleArrowRight className="w-5 h-5 text-white shrink-0" />
                  <span className="font-inter text-sm md:text-base">No guessing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleArrowRight className="w-5 h-5 text-white shrink-0" />
                  <span className="font-inter text-sm md:text-base">No Expensive Redesigns</span>
                </div>
                <div className="flex items-center gap-2">
                  <CircleArrowRight className="w-5 h-5 text-white shrink-0" />
                  <span className="font-inter text-sm md:text-base">No Delays</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="bg-brand hover:bg-brand/90 text-dark-panel font-lexend font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition">
                Start Your 3D Interior Design
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right side - Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                className="rounded-2xl p-6 text-center"
                style={{
                  border: "1px solid #57B7C0",
                  background: "#4D4A4A12",
                  backdropFilter: "blur(9px)",
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-brand rounded-full flex items-center justify-center">
                  <LayoutGrid className="w-8 h-8 text-dark-panel" />
                </div>
                <p className="font-inter text-sm font-medium">
                  Upload Floor
                  <br />
                  Plan
                </p>
              </div>

              <div
                className="rounded-2xl p-6 text-center"
                style={{
                  border: "1px solid #57B7C0",
                  background: "#4D4A4A12",
                  backdropFilter: "blur(9px)",
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-brand rounded-full flex items-center justify-center">
                  <PaletteIcon className="w-8 h-8 text-dark-panel" />
                </div>
                <p className="font-inter text-sm font-medium">Get 3D Design</p>
              </div>

              <div
                className="rounded-2xl p-6 text-center"
                style={{
                  border: "1px solid #57B7C0",
                  background: "#4D4A4A12",
                  backdropFilter: "blur(9px)",
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-brand rounded-full flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-dark-panel" />
                </div>
                <p className="font-inter text-sm font-medium">Live Design Edit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
