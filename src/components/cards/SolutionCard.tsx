import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Solution } from "../../data/solutions";

export default function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <article className="group rounded-xl md:rounded-2xl bg-dark-panel/90 overflow-hidden flex flex-col">
      <div className="relative h-28 md:h-80">
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 600px"
        />
        <div className="absolute top-2 left-2 md:top-3 md:left-3 h-7 w-7 md:h-10 md:w-10 rounded-md md:rounded-lg bg-white flex items-center justify-center overflow-hidden p-1 md:p-1.5 z-10">
          <Image
            src={solution.icon}
            alt=""
            width={32}
            height={32}
            className="h-5 w-5 md:h-8 md:w-8 object-contain"
          />
        </div>
      </div>

      <div className="px-3 md:px-6 pb-3 md:pb-6 pt-2 md:pt-4 flex-1 flex flex-col">
        <h3 className="font-lexend text-sm md:text-3xl font-bold text-white leading-tight">
          {solution.title}
        </h3>
        <p className="font-inter text-xs md:text-base text-white/75 mt-1 md:mt-2 line-clamp-3">
          {solution.description}
        </p>
        <div className="mt-2 md:mt-6 flex justify-end">
          <button
            aria-label={`Explore ${solution.title}`}
            className="h-7 w-7 md:h-10 md:w-10 rounded-md bg-brand text-brand-foreground flex items-center justify-center hover:opacity-90 transition"
          >
            <ArrowRight className="h-3.5 w-3.5 md:h-5 md:w-5" />
          </button>
        </div>
      </div>
    </article>
  );
}
