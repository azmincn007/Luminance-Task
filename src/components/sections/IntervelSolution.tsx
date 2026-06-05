import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { solutions } from "../../data/solutions";
import SolutionCard from "../cards/SolutionCard";

const marbleBg = "/assets/bg-scroll.webp";
const interiorBg = "/assets/solutionbg.webp";
const solutionHeading = "/assets/solutiion-heading.png";

// Total reveal height in vh — single source of truth
const SECTION_VH = 780;

// Convert a vh scroll position into 0–1 progress
const vh = (value: number) => value / SECTION_VH;

function useBreakpoint() {
  const [bp, setBp] = useState<"mobile" | "tablet" | "desktop">("desktop");
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setBp("mobile");
      else if (w < 1024) setBp("tablet");
      else setBp("desktop");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
}

export default function InteriorSolutionsReveal() {
  const sectionRef = useRef(null);
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // ───────────── Animations (keyframes in vh) ─────────────
  // Phase 1 (0–360vh):   Text zooms and fades completely
  // Phase 2 (360–470vh): Interior background reveals (text is gone)
  // Phase 3 (490–650vh): "Our Solutions" text slides to center, dark bg fades in

  // Mobile uses smaller scale range — SVG text already appears large on narrow portrait viewports
  const textScale = useTransform(
    scrollYProgress,
    [vh(0), vh(200), vh(380)],
    [1, isMobile ? 2 : isTablet ? 2.5 : 3, isMobile ? 5 : isTablet ? 6 : 8],
  );

  const textY = useTransform(scrollYProgress, [vh(0), vh(380)], ["0%", "-8%"]);

  // Marble → interior swap inside the text mask
  const maskedMarbleOpacity = useTransform(scrollYProgress, [vh(0), vh(150)], [1, 0]);

  // Interior through-text fades back to 0 before "Our Solutions" appears
  const maskedInteriorOpacity = useTransform(
    scrollYProgress,
    [vh(0), vh(150), vh(340), vh(380)],
    [0, 1, 1, 0],
  );

  // Text (mask layer) fades out — fully gone by 360vh
  const textRevealOpacity = useTransform(scrollYProgress, [vh(180), vh(360)], [1, 0]);

  // Hard-remove the mask layer from paint once it's invisible
  const textRevealVisibility = useTransform(scrollYProgress, (p) =>
    p > vh(370) ? "hidden" : "visible",
  );

  // Stroke outline fades with the text
  const strokeOpacity = useTransform(scrollYProgress, [vh(180), vh(360)], [1, 0]);

  // Interior BG only reveals AFTER text is gone
  const interiorOpacity = useTransform(
    scrollYProgress,
    [vh(200), vh(300), vh(300), vh(780)],
    [0, 1, 1, 1],
  );

  // Heading slides in from below to center (420–470), settles to natural position (470–490)
  const headingOpacity = useTransform(
    scrollYProgress,
    [vh(370), vh(410), vh(460), vh(470), vh(540), vh(780)],
    [0, 1, 1, 0.5, 1, 1],
  );

  // Reduce initial Y offset on mobile so the slide-in is proportional to viewport height
  const headingY = useTransform(
    scrollYProgress,
    [vh(420), vh(470), vh(490)],
    [isMobile ? 80 : isTablet ? 110 : 200, isMobile ? 78 : isTablet ? 108 : 198, 0],
  );

  // Cards fade in 550–570, hold till 700
  const cardsOpacity = useTransform(scrollYProgress, [vh(550), vh(600), vh(780)], [0, 1, 1]);

  // Dark background reveal in final phase
  const darkBgOpacity = useTransform(scrollYProgress, [vh(500), vh(580)], [0, 1]);

  // Black backdrop overlay fades in (398–445vh), holds at 0.5 till end
  const backdropOpacity = useTransform(scrollYProgress, [vh(398), vh(445), vh(780)], [0, 0.5, 0.5]);

  const interiorBlur = useTransform(
    scrollYProgress,
    [vh(398), vh(445), vh(780)],
    ["blur(0px)", "blur(8px)", "blur(8px)"],
  );

  useEffect(() => {
    return scrollYProgress.on("change", (p) =>
      console.log("scroll vh:", Math.round(p * SECTION_VH)),
    );
  }, [scrollYProgress]);

  // On mobile portrait the SVG slice-scales by ~0.78×, so 170 SVG units ≈ 133px actual.
  // 55 SVG units ≈ 43px actual — a proportionate starting size that still zooms dramatically.
  const svgFontSize = isMobile ? 70 : isTablet ? 78 : 100;
  const svgStrokeWidth = isMobile || isTablet ? "2" : "3";
  const y1 = isMobile ? "45%" : "15%";
  const y2 = isMobile ? "55%" : "25%";
  const y3 = isMobile ? "65%" : "35%";

  return (
    <>
      {/* ───────── Sticky reveal: text only ───────── */}
      <section ref={sectionRef} className="relative" style={{ height: `${SECTION_VH}vh` }}>
        {/* overflow-hidden prevents mobile horizontal scroll from scaled SVG text */}
        <div className="sticky top-0 min-h-screen overflow-hidden">
          {/* Marble Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${marbleBg})` }}
          />

          {/* Dark Background */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "#231F20", opacity: darkBgOpacity }}
          />

          {/* Interior Background */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${interiorBg})`,
              opacity: interiorOpacity,
              filter: interiorBlur,
            }}
          />

          {/* Black Backdrop Overlay (398–780vh) */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "black", opacity: backdropOpacity }}
          />

          {/* Solutions Content */}
          <div className="relative z-20 w-full px-4 md:px-12 pt-10 md:pt-16 pb-10 md:pb-20">
            {/* Heading */}
            <motion.div className="text-center" style={{ opacity: headingOpacity, y: headingY }}>
              <Image
                src={solutionHeading}
                alt="Solution Heading"
                width={160}
                height={80}
                className="mx-auto mb-3 md:mb-4 w-20 md:w-40 object-contain"
              />

              <h2 className="font-lexend text-2xl md:text-4xl font-bold text-white">
                Our Solutions
              </h2>

              <p className="font-inter text-xs md:text-lg text-white/80 mt-2 md:mt-3">
                We provide all types of integrated
              </p>

              <p className="font-lexend text-xs md:text-xl font-semibold text-white mt-1 md:mt-2">
                KITCHEN, CLOSET, DOOR Services
              </p>
            </motion.div>

            {/* Gradient Cards — 2-col on mobile to keep all 4 cards within viewport */}
            <motion.div
              className="max-w-7xl mx-auto mt-6 md:mt-14"
              style={{ opacity: cardsOpacity }}
            >
              <div className="grid grid-cols-2 gap-3 md:gap-8">
                {solutions.map((solution) => (
                  <SolutionCard key={solution.title} solution={solution} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Text Mask Reveal Animation */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              opacity: textRevealOpacity,
              visibility: textRevealVisibility,
            }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 1920 1080"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <mask id="text-mask">
                  <rect width="100%" height="100%" fill="black" />

                  <motion.g
                    style={{
                      scale: textScale,
                      y: textY,
                      transformOrigin: "center center",
                    }}
                  >
                    <text
                      x="50%"
                      y={y1}
                      textAnchor="middle"
                      fill="white"
                      fontSize={svgFontSize}
                      fontWeight="900"
                      fontFamily="Arial"
                    >
                      OUR
                    </text>
                    <text
                      x="50%"
                      y={y2}
                      textAnchor="middle"
                      fill="white"
                      fontSize={svgFontSize}
                      fontWeight="900"
                      fontFamily="Arial"
                    >
                      INTERIOR
                    </text>
                    <text
                      x="50%"
                      y={y3}
                      textAnchor="middle"
                      fill="white"
                      fontSize={svgFontSize}
                      fontWeight="900"
                      fontFamily="Arial"
                    >
                      SOLUTIONS
                    </text>
                  </motion.g>
                </mask>
              </defs>

              {/* Marble Through Text */}
              <motion.g style={{ opacity: maskedMarbleOpacity }}>
                <image
                  href={marbleBg}
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  mask="url(#text-mask)"
                />
              </motion.g>

              {/* Interior Through Text */}
              <motion.g style={{ opacity: maskedInteriorOpacity }}>
                <image
                  href={interiorBg}
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  mask="url(#text-mask)"
                />
              </motion.g>

              {/* Outline */}
              <motion.g
                style={{
                  scale: textScale,
                  y: textY,
                  opacity: strokeOpacity,
                  transformOrigin: "center center",
                }}
              >
                <text
                  x="50%"
                  y={y1}
                  textAnchor="middle"
                  fill="none"
                  stroke="white"
                  strokeWidth={svgStrokeWidth}
                  fontSize={svgFontSize}
                  fontWeight="900"
                  fontFamily="Arial"
                >
                  OUR
                </text>
                <text
                  x="50%"
                  y={y2}
                  textAnchor="middle"
                  fill="none"
                  stroke="white"
                  strokeWidth={svgStrokeWidth}
                  fontSize={svgFontSize}
                  fontWeight="900"
                  fontFamily="Arial"
                >
                  INTERIOR
                </text>
                <text
                  x="50%"
                  y={y3}
                  textAnchor="middle"
                  fill="none"
                  stroke="white"
                  strokeWidth={svgStrokeWidth}
                  fontSize={svgFontSize}
                  fontWeight="900"
                  fontFamily="Arial"
                >
                  SOLUTIONS
                </text>
              </motion.g>
            </svg>
          </motion.div>
        </div>
      </section>
    </>
  );
}
