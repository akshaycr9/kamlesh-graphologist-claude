"use client";

import { Button } from "@/components/ui/button";

interface HeroProps {
  onOpenFreeAnalysis: () => void;
}

// Decorative SVG of abstract handwriting-inspired strokes.
// Uses multiple overlapping paths with low opacity to suggest cursive text
// in the background — evocative without being literal stock imagery.
function HandwritingStrokes() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Sweeping baseline — like a ruled line on letter paper */}
      <path
        d="M -80 520 Q 200 490 480 530 T 960 510 T 1520 525"
        stroke="rgba(184,150,90,0.18)"
        strokeWidth="1.5"
      />
      <path
        d="M -80 540 Q 200 510 480 550 T 960 530 T 1520 545"
        stroke="rgba(245,240,232,0.06)"
        strokeWidth="1"
      />

      {/* Large looping ascender — like an uppercase L or H */}
      <path
        d="M 80 580 Q 100 280 130 580 Q 200 620 280 570 Q 360 490 420 570 Q 490 640 600 590"
        stroke="rgba(245,240,232,0.08)"
        strokeWidth="2.5"
      />

      {/* Connecting mid-word loops */}
      <path
        d="M 600 540 Q 660 470 720 540 Q 750 580 800 550 Q 860 490 930 545"
        stroke="rgba(184,150,90,0.14)"
        strokeWidth="2"
      />

      {/* Descender loop — like a g, y, or p */}
      <path
        d="M 980 480 Q 1030 410 1080 480 Q 1120 560 1080 620 Q 1050 660 1010 640"
        stroke="rgba(245,240,232,0.07)"
        strokeWidth="2"
      />

      {/* Long right-side flourish / signature underline */}
      <path
        d="M 260 660 Q 440 630 680 655 Q 820 668 900 650"
        stroke="rgba(184,150,90,0.22)"
        strokeWidth="1.2"
      />
      <path
        d="M 280 672 Q 460 646 680 667"
        stroke="rgba(184,150,90,0.12)"
        strokeWidth="0.8"
      />

      {/* Ink dots — like the end of a pen stroke */}
      <circle cx="905" cy="649" r="3" fill="rgba(184,150,90,0.30)" />
      <circle cx="126" cy="580" r="2" fill="rgba(245,240,232,0.20)" />
      <circle cx="601" cy="590" r="2.5" fill="rgba(184,150,90,0.20)" />

      {/* Faint upper loops */}
      <path
        d="M 750 200 Q 800 140 860 200 T 1020 195"
        stroke="rgba(245,240,232,0.05)"
        strokeWidth="1.5"
      />
      <path
        d="M 1100 250 Q 1160 180 1220 250 Q 1270 310 1240 360"
        stroke="rgba(184,150,90,0.08)"
        strokeWidth="1.5"
      />

      {/* Ink bleed — soft radial glow bottom-left */}
      <radialGradient id="inkBleed" cx="15%" cy="90%" r="40%">
        <stop offset="0%" stopColor="rgba(184,150,90,0.12)" />
        <stop offset="100%" stopColor="rgba(184,150,90,0)" />
      </radialGradient>
      <rect width="100%" height="100%" fill="url(#inkBleed)" />
    </svg>
  );
}

export default function Hero({ onOpenFreeAnalysis }: HeroProps) {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink-texture"
      aria-label="Hero"
    >
      {/* Decorative handwriting strokes in the background */}
      <HandwritingStrokes />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Pre-heading label */}
          <p className="section-label text-gold-light mb-6">
            Certified Graphology · Est. 2012
          </p>

          {/* Main headline */}
          <h1 className="font-display text-parchment-100 text-4xl sm:text-5xl md:text-6xl lg:text-display-xl font-bold leading-[1.08] tracking-tight mb-6">
            Your Handwriting
            <br />
            <em className="not-italic text-gold-gradient">
              Holds the Map
            </em>
            <br />
            to Your Soul
          </h1>

          {/* Sub-heading */}
          <p className="font-body text-parchment-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Trained graphological analysis that reveals your personality,
            thinking patterns, emotional depth, and hidden potential — all from
            a few lines of your own handwriting.
          </p>

          {/* CTA group */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={onOpenFreeAnalysis}
              className="text-base px-8 shadow-lg shadow-black/20"
            >
              Get Free Analysis
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToServices}
              className="text-base px-8"
            >
              Explore Services
            </Button>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-parchment-300">
            <TrustPill value="12+" label="Years of Practice" />
            <TrustPill value="600+" label="Analyses Completed" />
            <TrustPill value="ICG" label="Certified Member" />
          </div>
        </div>
      </div>

      {/* Bottom fade — transitions into the next section */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-parchment to-transparent pointer-events-none" />
    </section>
  );
}

function TrustPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="font-display text-xl font-bold text-gold">{value}</span>
      <span className="font-body text-sm text-parchment-300/80">{label}</span>
    </div>
  );
}
