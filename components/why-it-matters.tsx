"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// Iconography: custom inline SVG "stroke" icons that evoke pen / handwriting
// movements rather than generic SaaS icons. Each shape references a
// calligraphic form (loop, curve, baseline, pressure mark).

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    title: "Know Yourself Deeply",
    description:
      "Uncover personality traits, emotional patterns, and thinking styles that might take years of self-reflection to discover otherwise. Graphology cuts through the noise.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="w-10 h-10">
        {/* Loop — introspection symbol */}
        <path d="M 8 28 Q 10 10 20 14 Q 30 18 20 26 Q 12 33 8 28 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <path d="M 20 26 Q 28 30 32 26" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="14" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Improve Relationships",
    description:
      "Understand how you connect — and clash — with others. Graphology compatibility analysis reveals communication styles, emotional needs, and natural friction points.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="w-10 h-10">
        {/* Two overlapping curves — connection */}
        <path d="M 6 24 Q 14 8 20 20 Q 26 32 34 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 10 28 Q 16 16 22 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Align Your Career",
    description:
      "Identify your natural aptitudes, preferred working style, and leadership qualities before making major career decisions. Your pen already knows the answer.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="w-10 h-10">
        {/* Ascending baseline line — progress */}
        <path d="M 6 30 Q 16 28 22 20 Q 28 12 34 10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 28 10 L 34 10 L 34 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Track Personal Growth",
    description:
      "Handwriting shifts as you evolve. Re-analysis over time becomes a mirror for measurable change — greater confidence, resilience, and emotional balance.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="w-10 h-10">
        {/* Spiral — growth / evolution */}
        <path d="M 20 20 Q 28 20 28 12 Q 28 4 20 4 Q 10 4 8 14 Q 6 24 14 30 Q 22 36 32 32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Build Emotional Intelligence",
    description:
      "Recognise stress patterns, defence mechanisms, and communication blocks encoded in your writing — and learn to navigate them with greater clarity.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="w-10 h-10">
        {/* Pressure mark / heavy stroke — emotional depth */}
        <path d="M 8 32 Q 10 24 16 18 Q 22 12 20 8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 20 8 Q 26 14 28 22 Q 30 30 24 34" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
        <path d="M 14 28 Q 20 36 28 32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Make Better Decisions",
    description:
      "From hiring to partnerships to life choices — graphological insight provides an objective, evidence-based layer to decisions that matter most.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className="w-10 h-10">
        {/* Pen nib — precision */}
        <path d="M 10 32 L 20 8 L 30 32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <path d="M 14 22 L 26 22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 20 8 L 20 32" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
  },
];

export default function WhyItMatters() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const gridRef    = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="why-it-matters"
      className="bg-paper-texture py-24 md:py-32"
      aria-labelledby="why-heading"
    >
      <div className="container">
        {/* Section header */}
        <div ref={headingRef} className="reveal max-w-2xl mb-16">
          <p className="section-label mb-4">The Science Behind the Pen</p>
          <h2
            id="why-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5"
          >
            Why Handwriting Analysis Works
          </h2>
          <p className="text-ink-light text-lg leading-relaxed">
            Graphology is based on a well-documented principle: the brain
            directs the hand. Every pressure point, spacing decision, and letter
            formation reflects the neural patterns of your personality — below
            the level of conscious control.
          </p>
          <div className="gold-rule mt-8" />
        </div>

        {/* Benefits grid */}
        <div
          ref={gridRef}
          className="reveal-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ title, description, icon }: Benefit) {
  return (
    <div className="card-hover group bg-parchment-50 border border-parchment-300 rounded-xl p-7 space-y-4 shadow-sm">
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-ink-blue/8 flex items-center justify-center text-ink-blue group-hover:bg-gold/10 group-hover:text-gold-dark transition-colors">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-semibold text-ink leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-ink-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
