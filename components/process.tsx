"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Upload Your Sample",
    description:
      "Write sample as per passage provided on an unlined A4 size sheet. A photo or scan is all you need — no special tools or preparation required.",
    detail: "Photograph in good lighting or scan at 300 dpi",
  },
  {
    number: "02",
    title: "Share Your Context",
    description:
      "Complete a short questionnaire about your goals, current challenges, and what you'd most like to understand about yourself. Context deepens the analysis.",
    detail: "Takes 5–10 minutes",
  },
  {
    number: "03",
    title: "In-Depth Analysis",
    description:
      "Kamlesh studies your writing for over 40 indicators — stroke direction, pressure, spacing, letter zones, connections, margins, and more — in meticulous detail.",
    detail: "Thorough review of 40+ graphological indicators",
  },
  {
    number: "04",
    title: "Receive Your Report",
    description:
      "Within the agreed timeframe, you'll receive a beautifully written, personally crafted report. Higher tiers include a live consultation to discuss findings and questions.",
    detail: "Written report + optional consultation call",
  },
];

export default function Process() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const stepsRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="process"
      className="bg-paper-texture py-24 md:py-32"
      aria-labelledby="process-heading"
    >
      <div className="container">
        {/* Section header */}
        <div ref={headingRef} className="reveal max-w-2xl mb-16">
          <p className="section-label mb-4">How It Works</p>
          <h2
            id="process-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5"
          >
            Simple, Private, and Thorough
          </h2>
          <p className="text-ink-light text-lg leading-relaxed">
            The entire process is designed to be effortless for you. From
            uploading your sample to receiving a beautifully written report,
            every step is handled with care and strict confidentiality.
          </p>
        </div>

        {/* Steps — horizontal stepper on desktop, vertical timeline on mobile */}
        <div ref={stepsRef} className="reveal">
          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block">
            {/* Connecting line */}
            <div className="relative">
              <div
                className="absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
                aria-hidden="true"
              />
              <div className="grid grid-cols-4 gap-6 relative">
                {steps.map((step, i) => (
                  <DesktopStep
                    key={step.number}
                    step={step}
                    isLast={i === steps.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden space-y-0">
            {steps.map((step, i) => (
              <MobileStep
                key={step.number}
                step={step}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Desktop step card ─────────────────────────────────────────────────────────
function DesktopStep({
  step,
  isLast,
}: {
  step: (typeof steps)[0];
  isLast: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Number bubble */}
      <div
        className={cn(
          "relative z-10 w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center mb-6",
          "bg-parchment-50 border-2 border-gold/50 shadow-sm",
          "group-hover:border-gold group-hover:bg-gold/5 transition-colors"
        )}
      >
        <span className="font-display text-2xl font-bold text-gold-dark">
          {step.number}
        </span>
      </div>

      {/* Content */}
      <h3 className="font-display text-base font-semibold text-ink mb-2 leading-snug">
        {step.title}
      </h3>
      <p className="font-body text-sm text-ink-muted leading-relaxed mb-3">
        {step.description}
      </p>
      <span className="inline-block px-2.5 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-medium">
        {step.detail}
      </span>
    </div>
  );
}

// ── Mobile step card ──────────────────────────────────────────────────────────
function MobileStep({
  step,
  isLast,
}: {
  step: (typeof steps)[0];
  isLast: boolean;
}) {
  return (
    <div className="flex gap-5">
      {/* Left column: number + connector */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
            "bg-parchment-50 border-2 border-gold/50 shadow-sm"
          )}
        >
          <span className="font-display text-base font-bold text-gold-dark">
            {step.number}
          </span>
        </div>
        {/* Connector line */}
        {!isLast && (
          <div
            className="w-px flex-1 mt-2 mb-0 min-h-[40px] bg-gradient-to-b from-gold/40 to-gold/10"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Right column: content */}
      <div className={cn("pb-10 flex-1", isLast && "pb-0")}>
        <h3 className="font-display text-lg font-semibold text-ink mb-1.5">
          {step.title}
        </h3>
        <p className="font-body text-sm text-ink-muted leading-relaxed mb-3">
          {step.description}
        </p>
        <span className="inline-block px-2.5 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-medium">
          {step.detail}
        </span>
      </div>
    </div>
  );
}
