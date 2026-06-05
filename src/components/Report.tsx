const Report = () => {
  const previewUrl = "https://example.com";
  const githubUrl = "https://github.com/example/repo";

  return (
    <div className="min-h-screen bg-background">
      <main id="report-root" className="max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        {/* Header */}
        <header className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-4">
            Interview Task Submission
          </p>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-report-heading leading-tight tracking-tight">
            Muhamed Azmin CN
          </h1>

          {/* Links as plain text */}
          <div className="mt-6 space-y-2 text-sm">
            <p className="text-foreground">
              <span className="font-semibold text-report-heading">Live Preview:</span>{" "}
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline break-all"
              >
                {previewUrl}
              </a>
            </p>
            <p className="text-foreground">
              <span className="font-semibold text-report-heading">GitHub:</span>{" "}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline break-all"
              >
                {githubUrl}
              </a>
            </p>
          </div>
        </header>

        {/* Project Overview */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <div className="rounded-lg border border-report-divider bg-card p-5">
            <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">
              Project Timeline
            </p>
            <p className="font-heading text-xl font-bold text-report-heading">7 Days</p>
          </div>

          <div className="rounded-lg border border-report-divider bg-card p-5">
            <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">
              Completed In
            </p>
            <p className="font-heading text-xl font-bold text-report-heading">4 Days</p>
          </div>

          <div className="rounded-lg border border-report-divider bg-card p-5">
            <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">
              Technology Used
            </p>
            <p className="font-heading text-base font-semibold text-report-heading">Next.js</p>
          </div>

          <div className="rounded-lg border border-report-divider bg-card p-5">
            <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">
              AI Tools Used
            </p>
            <p className="font-heading text-base font-semibold text-report-heading">
              Claude Code / ChatGPT
              <span className="block text-xs font-normal text-muted-foreground mt-1">
                (for some reference)
              </span>
            </p>
          </div>
        </section>

        {/* Q&A Sections */}
        <section className="space-y-10">
          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-report-heading mb-3">
              My Overall Approach
            </h2>
            <div className="text-foreground/85 leading-relaxed space-y-4 text-[15px]">
              <p>
                I kept the folder structure simple and purpose-driven. Components are split by
                responsibility. There is a <code className="px-1 py-0.5 rounded bg-muted text-xs">sections/</code> folder
                for each page section, a <code className="px-1 py-0.5 rounded bg-muted text-xs">cards/</code> folder for
                reusable card components, <code className="px-1 py-0.5 rounded bg-muted text-xs">layout/</code> for the
                Header and Footer, <code className="px-1 py-0.5 rounded bg-muted text-xs">data/</code> for static content
                like solutions and testimonials, and <code className="px-1 py-0.5 rounded bg-muted text-xs">hooks/</code> for
                any custom hooks. All the shadcn UI primitives stay in their own{" "}
                <code className="px-1 py-0.5 rounded bg-muted text-xs">ui/</code> folder so they don't mix with business
                components.
              </p>
              <p>
                For the page itself, it's a single-page layout where each section is its own self-contained
                component. This makes it easy to work on one section without touching others.
              </p>
              <p>
                Assets live in <code className="px-1 py-0.5 rounded bg-muted text-xs">public/assets/</code> so they're
                referenced as simple string paths throughout the codebase with no import complexity.
              </p>
              <p>
                The styling approach uses Tailwind CSS v4 with a custom theme defined in a single CSS file, so
                all brand colors, fonts, and spacing tokens are in one place and applied consistently across
                sections using utility classes.
              </p>
              <p>
                Overall the philosophy was to keep things flat and readable so anyone opening the project can
                immediately understand where everything lives without needing to trace imports or read
                documentation.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-report-heading mb-3">
              Challenges Faced During This Task
            </h2>
            <div className="text-foreground/85 leading-relaxed space-y-4 text-[15px]">
              <p>
                One of the main challenges was building the second section with the parallax scroll
                animation where the text zooms in and reveals the background through it. Getting the scroll
                timing right across all the different phases took some iteration. There are multiple things
                happening at once: the text scaling, the background swapping from marble to interior, the fade
                transitions, and then the solutions cards appearing. Defining the exact scroll progress
                keyframes for each phase and making sure they didn't overlap awkwardly required a bit of back
                and forth to feel smooth.
              </p>
              <p>
                The other challenge was making that same section work on mobile and tablet. The SVG text that
                zooms in is based on a fixed viewBox, so on a narrow portrait screen the scale behavior felt
                too aggressive and the text would overflow and cause horizontal scroll. I had to dial back the
                scale range specifically for mobile and adjust the text positions within the SVG so the zoom
                effect still looked dramatic but stayed proportional to the smaller screen. The sticky height
                also had to account for the fact that the animation phases are defined in viewport height
                units, so what looks right on desktop needs to feel right on a phone too.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-report-heading mb-3">
              How I Overcame These Challenges
            </h2>
            <div className="text-foreground/85 leading-relaxed space-y-4 text-[15px]">
              <p>
                For the scroll timing issue, I approached it by first logging the scroll progress values in the
                console while scrolling through the section, so I could see exactly what values corresponded to
                each visual phase. That gave me a clear picture of where each animation needed to start and
                end. I adjusted the keyframe values based on what I observed, and also referenced some
                documentation and used AI assistance to cross-check the Framer Motion{" "}
                <code className="px-1 py-0.5 rounded bg-muted text-xs">useTransform</code> ranges and make sure the
                input/output arrays were mapping correctly. Once I could see the numbers in real time it became
                much easier to fine-tune each phase without guessing.
              </p>
              <p>
                For the mobile issue, I used AI to help think through why the SVG text was overflowing on
                narrow screens. It came down to the{" "}
                <code className="px-1 py-0.5 rounded bg-muted text-xs">preserveAspectRatio</code> behavior and the fact
                that the scale multiplier I had set for desktop was too large for a portrait viewport. I
                reduced the scale range for mobile and shifted the SVG text y positions so they sit more
                centered in the viewBox on smaller screens. I also tested across different viewport widths
                while watching the console logs to make sure the scroll phases still felt right at every
                breakpoint. It was a combination of trial and error with real device testing and using AI to
                quickly reason through the geometry when something wasn't behaving as expected.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-report-heading mb-3">
              How I Would Improve If Given This Task Again
            </h2>
            <div className="text-foreground/85 leading-relaxed space-y-4 text-[15px]">
              <p>
                If I were doing this again, I would design with mobile in mind from the start rather than
                adapting at the end. Most of the responsive fixes could have been avoided that way.
              </p>
              <p>
                I would also put all the scroll animation timing values in one config object at the top of the
                component instead of having them spread throughout, making them much easier to adjust.
              </p>
              <p>
                And I would set up the scroll progress console logging from day one since that turned out to be
                the most useful debugging tool and having it early would have saved time during the initial
                keyframe setup.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-report-heading mb-3">
              Assumptions or Technical Decisions Made During Development
            </h2>
            <div className="text-foreground/85 leading-relaxed space-y-4 text-[15px]">
              <p>
                I used shadcn/ui for interactive UI elements like buttons and cards rather than building
                everything from scratch. It integrates directly with Tailwind and Radix UI, which means the
                components are accessible by default and easy to restyle using the existing CSS variables with
                no theming conflicts.
              </p>
              <p>
                For the scroll animation section, I kept the entire reveal sequence inside a single component
                (IntervelSolution.tsx) rather than breaking it into smaller pieces. Every animation phase, the
                sticky pinning, the image transitions, the text reveals, all derive from the same scrollYProgress
                value. Splitting that into multiple components would have required passing the scroll progress as
                a prop through several layers, which adds complexity without any real benefit. Keeping it
                together made the motion logic easier to read and debug in one place.
              </p>
              <p>
                I also assumed a single-page layout with no routing beyond the home route, so I structured the
                app as one page with anchor-based navigation rather than setting up a full router.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-report-heading mb-3">
              Technologies, Libraries, Frameworks, or Tools Used
            </h2>
            <div className="text-foreground/85 leading-relaxed space-y-4 text-[15px]">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Next.js 15</strong> with the App Router as the main framework. Handles routing,
                  static generation, and the overall project structure.
                </li>
                <li>
                  <strong>React 18</strong> for the component model and client-side interactivity.
                </li>
                <li>
                  <strong>TypeScript</strong> throughout. All components and data files are typed, which caught
                  a few prop mismatches during development.
                </li>
                <li>
                  <strong>Tailwind CSS v4</strong> for styling, using the @theme inline config approach with
                  CSS custom properties for brand colors and font tokens.
                </li>
                <li>
                  <strong>shadcn/ui</strong> for prebuilt accessible components, built on top of Radix UI
                  primitives.
                </li>
                <li>
                  <strong>Framer Motion</strong> for the scroll-driven animation in the interior solutions
                  section, specifically useScroll and useTransform to tie animation values directly to scroll
                  progress.
                </li>
                <li>
                  <strong>Lucide React</strong> for icons.
                </li>
                <li>
                  <strong>ESLint</strong> with next/core-web-vitals and Prettier for code quality and
                  consistent formatting.
                </li>
                <li>
                  <strong>npm</strong> for package management and running the dev/build scripts.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-report-heading mb-3">
              Responsive Design Considerations and Implementation Approach
            </h2>
            <div className="text-foreground/85 leading-relaxed space-y-4 text-[15px]">
              <p>
                The layout uses Tailwind's mobile-first breakpoint system throughout. Base styles target mobile
                and md: prefixes layer in the desktop variants. No custom breakpoints were needed since the
                standard 768px cutoff covered all the layout shifts in this design.
              </p>
              <p>
                For the scroll animation section, the mobile experience is fundamentally different from
                desktop. Desktop has a sticky multi-phase reveal with parallax, while mobile shows a simpler
                stacked layout. I handled this with a useIsMobile hook inside the component that listens to
                window.innerWidth on resize, so the correct layout renders immediately on mount and updates if
                the viewport changes.
              </p>
              <p>
                Grid layouts switch between single column on mobile and multi-column on desktop using
                grid-cols-1 md:grid-cols-2 or md:grid-cols-3 patterns. The Solutions, Gallery, and
                Testimonials sections all follow this approach.
              </p>
              <p>
                Typography and spacing scale with responsive prefixes like text-3xl md:text-5xl and py-16
                md:py-24, so the visual weight adjusts proportionally rather than just reflowing.
              </p>
              <p>
                Images use the sizes prop on the Next.js Image component to tell the browser the approximate
                rendered width at each breakpoint, so it only downloads the appropriate resolution instead of
                always fetching the largest version.
              </p>
              <p>
                For the Header, the mobile nav collapses into a hamburger menu using a boolean state toggle,
                keeping the full nav hidden on small screens.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-report-heading mb-3">
              Project Structure and Component Organization Approach
            </h2>
            <div className="text-foreground/85 leading-relaxed space-y-4 text-[15px]">
              <p>The project follows a clear separation between the Next.js app shell and the actual UI code:</p>
              <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto font-mono leading-relaxed">
{`app/           → Next.js App Router (layout, page, global CSS)
src/
  components/
    sections/  → Full-width page sections (Hero, Gallery, etc.)
    cards/     → Reusable card components used inside sections
  layout/      → Header and Footer (persistent across the page)
  data/        → Static data arrays (solutions, testimonials)
public/
  assets/      → All images and icons referenced as string paths`}
              </pre>
              <p>
                Sections are the main building blocks. Each one maps to a visible band on the page and owns
                its own layout, styling, and data. They are composed together in a single app/page.tsx file in
                order, which makes the page structure easy to read at a glance.
              </p>
              <p>
                Cards are extracted only when a section renders a list of repeated items, like SolutionCard
                inside SolutionsSection. Anything used once stays inside the section itself rather than being
                abstracted prematurely.
              </p>
              <p>
                Layout components like Header and Footer are kept outside components/ intentionally. They are
                structural, not content, so separating them makes it clear they wrap the page rather than
                belong to any section.
              </p>
              <p>
                Data is kept in plain TypeScript files under src/data/ as typed arrays. This keeps the
                components clean and makes content updates straightforward without touching any JSX.
              </p>
              <p>
                The app/ folder stays minimal, just the shell. All the actual UI lives under src/, which keeps
                the Next.js-specific files isolated from the component logic.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-report-heading mb-3">
              Performance Optimization Considerations
            </h2>
            <div className="text-foreground/85 leading-relaxed space-y-6 text-[15px]">
              {/* Table */}
              <div className="overflow-x-auto rounded-lg border border-report-divider">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted text-left">
                      <th className="px-4 py-3 font-semibold text-report-heading w-1/3">Area</th>
                      <th className="px-4 py-3 font-semibold text-report-heading">What was done</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-report-divider">
                    <tr>
                      <td className="px-4 py-3 font-medium text-report-heading">Images</td>
                      <td className="px-4 py-3 text-foreground/80">
                        Used <code className="px-1 py-0.5 rounded bg-muted text-xs">next/image</code>. Auto
                        converts to WebP, lazy loads off-screen images, serves right size per device
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-report-heading">Hero image</td>
                      <td className="px-4 py-3 text-foreground/80">
                        Added <code className="px-1 py-0.5 rounded bg-muted text-xs">priority</code> flag.
                        Loads first and directly improves LCP score
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-report-heading">Fonts</td>
                      <td className="px-4 py-3 text-foreground/80">
                        <code className="px-1 py-0.5 rounded bg-muted text-xs">display=swap</code> shows
                        fallback font instantly while the custom font loads in background
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-report-heading">Scroll animation</td>
                      <td className="px-4 py-3 text-foreground/80">
                        Framer Motion uses CSS transforms. Runs on compositor thread with no repaints, stays
                        smooth
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-report-heading">Page load</td>
                      <td className="px-4 py-3 text-foreground/80">
                        Static generation. Next.js prebuilds the HTML at build time with no server wait on
                        each request
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-report-heading">Bundle</td>
                      <td className="px-4 py-3 text-foreground/80">
                        Next.js auto code-splits and only loads JS needed for the current route
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Image compression */}
              <div className="space-y-3">
                <p className="font-semibold text-report-heading">
                  What can be improved: Image compression
                </p>
                <p className="text-[15px]">
                  Current raw assets total{" "}
                  <span className="font-semibold text-red-500">~129 MB</span>, all unoptimized PNG/JPG exports.
                  After running through <span className="font-semibold text-report-heading">Squoosh</span>{" "}
                  (WebP, ~80% quality) the estimated total drops to{" "}
                  <span className="font-semibold text-green-500">~25–30 MB</span> with no visible quality
                  loss. Serving via CDN delivers from the nearest edge server to each user.
                </p>

                <div className="overflow-x-auto rounded-lg border border-report-divider">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted text-left">
                        <th className="px-4 py-2 font-semibold text-report-heading">File</th>
                        <th className="px-4 py-2 font-semibold text-report-heading">Current</th>
                        <th className="px-4 py-2 font-semibold text-report-heading">After Squoosh</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-report-divider">
                      {[
                        ["d4.png", "17 MB", "~3–5 MB"],
                        ["solution1.png", "16 MB", "~3–4 MB"],
                        ["solution3.png", "15 MB", "~3–4 MB"],
                        ["video-placeholder.png", "12 MB", "~2–3 MB"],
                        ["d1.png", "12 MB", "~2–3 MB"],
                        ["d6.png", "11 MB", "~2–3 MB"],
                      ].map(([file, current, after]) => (
                        <tr key={file}>
                          <td className="px-4 py-2 font-mono text-xs text-foreground/70">{file}</td>
                          <td className="px-4 py-2 font-medium text-red-500">{current}</td>
                          <td className="px-4 py-2 font-medium text-green-500">{after}</td>
                        </tr>
                      ))}
                      <tr className="bg-muted/50">
                        <td className="px-4 py-2 font-semibold text-report-heading">Total</td>
                        <td className="px-4 py-2 font-bold text-red-500">~129 MB</td>
                        <td className="px-4 py-2 font-bold text-green-500">~25–30 MB</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-report-heading mb-3">
              Additional Notes
            </h2>
            <div className="text-foreground/85 leading-relaxed space-y-4 text-[15px]">
              <p>
                I focused on keeping the codebase clean and easy to hand off. Each section is self-contained,
                data is separated from UI, and there are no unnecessary abstractions. Anyone picking this up
                should be able to understand the structure without needing explanation.
              </p>
              <p>
                I also used AI tools during the process, not to write code blindly but to reason through
                specific problems faster, like debugging the scroll animation timing and understanding why the
                SVG was overflowing on mobile. Knowing when and how to use AI effectively is part of modern
                development and I was transparent about that.
              </p>
              <p>
                If given more time, the areas I would invest in are image compression, a proper CMS so
                non-developers can update solutions and testimonials, and splitting the scroll animation config
                into a data-driven structure so the timing values are easy to tweak without touching the
                animation logic.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Report;
