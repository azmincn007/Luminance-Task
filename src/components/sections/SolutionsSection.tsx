import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { solutions } from "../../data/solutions";
import SolutionCard from "../cards/SolutionCard";

export default function SolutionsSection() {
  return (
    <section
      id="services"
      className="relative w-full py-20 md:py-28 px-4 md:px-8"
      style={{ backgroundColor: "#231F20" }}
    >
      {/* Background */}
      <Image src="/assets/solutionbg.jpg" alt="" fill className="object-cover opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-lexend text-3xl md:text-5xl font-bold text-white">Our Solutions</h2>
          <p className="font-inter text-lg md:text-xl text-white/80 mt-3">
            We provide all type of modular
          </p>
          <p className="font-lexend text-lg md:text-xl font-semibold text-brand tracking-wide mt-1">
            KITCHEN, CLOSET, DOOR Services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="inline-flex items-center gap-3 rounded-full bg-brand text-brand-foreground pl-6 pr-2 py-2.5 font-inter font-medium hover:opacity-90 transition">
            Explore Our Projects
            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
