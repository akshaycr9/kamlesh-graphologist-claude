"use client";

import { CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  price: string;
  priceDetail?: string;
  forWho: string;
  includes: string[];
  recommended?: boolean;
  cta: string;
}

const tiers: PricingTier[] = [
  {
    name: "Essential",
    price: "₹2,999",
    priceDetail: "One-time",
    forWho: "Ideal for a first-time glimpse into what graphology can reveal",
    includes: [
      "Written analysis report",
      "Core personality overview",
      "3 key trait deep-dives",
      "Communication style profile",
      "Delivered within 5 business days",
    ],
    cta: "Get Started",
  },
  {
    name: "Deep Dive",
    price: "₹4,999",
    priceDetail: "One-time",
    forWho: "For those ready for a full, transformative self-portrait",
    includes: [
      "Comprehensive analysis",
      "Full personality profile",
      "Emotional patterns & stress markers",
      "Relationship & communication style",
      "Career alignment insights",
      "45-minute video consultation",
      "Delivered within 7 business days",
    ],
    recommended: true,
    cta: "Get Deep Dive",
  },
  {
    name: "Premium",
    price: "₹9,999",
    priceDetail: "One-time",
    forWho: "For ongoing support and the deepest possible transformation",
    includes: [
      "Everything in Deep Dive",
      "Priority delivery (48 hours)",
      "2 online 15 minutes call per week × 1 month",
      "Daily handwriting check-in × 1 month",
      "Personalised growth roadmap",
      "Direct WhatsApp access to Kamlesh",
    ],
    cta: "Go Premium",
  },
  {
    name: "Transformation Mastery",
    price: "₹19,999",
    priceDetail: "One-time",
    forWho:
      "For those committed to deep, lasting change with structured guidance over 120 days",
    includes: [
      "Everything in Premium",
      "120 Days Holistic Coaching",
      "Advanced Practice Materials",
      "Progress Tracking Logs",
      "Weekly accountability check-ins",
      "Personalised transformation roadmap",
      "Priority support throughout the journey",
    ],
    cta: "Begin Transformation",
  },
];

interface PricingProps {
  onOpenFreeAnalysis: () => void;
}

export default function Pricing({ onOpenFreeAnalysis }: PricingProps) {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();
  const noteRef = useScrollReveal<HTMLParagraphElement>();

  return (
    <section
      id="pricing"
      className="bg-parchment-50 py-24 md:py-32"
      aria-labelledby="pricing-heading"
    >
      <div className="container">
        {/* Section header */}
        <div ref={headingRef} className="reveal max-w-2xl mb-16">
          <p className="section-label mb-4">Investment in Yourself</p>
          <h2
            id="pricing-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5"
          >
            Clear, Transparent Pricing
          </h2>
          <p className="text-ink-light text-lg leading-relaxed">
            Every tier represents a complete, personally crafted analysis — not
            an automated report. Choose the depth that matches where you are in
            your journey.
          </p>
        </div>

        {/* Pricing cards */}
        <div
          ref={gridRef}
          className="reveal-stagger grid sm:grid-cols-2 gap-6 md:gap-5"
        >
          {tiers.map((tier) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              onOpenFreeAnalysis={onOpenFreeAnalysis}
            />
          ))}
        </div>

        {/* Free analysis nudge */}
        <p
          ref={noteRef}
          className="reveal text-center mt-12 text-sm text-ink-muted"
        >
          Not sure which tier is right for you?{" "}
          <button
            onClick={onOpenFreeAnalysis}
            className="text-gold-dark underline underline-offset-2 hover:text-gold font-medium transition-colors"
          >
            Start with a free analysis
          </button>{" "}
          and Kamlesh will recommend the most suitable option.
        </p>
      </div>
    </section>
  );
}

function PricingCard({
  tier,
  onOpenFreeAnalysis,
}: {
  tier: PricingTier;
  onOpenFreeAnalysis: () => void;
}) {
  return (
    <div
      className={cn(
        "relative rounded-xl p-7 flex flex-col gap-6 transition-shadow",
        tier.recommended
          ? "bg-ink-blue border-2 border-ink-blue shadow-xl shadow-ink-blue/20"
          : "bg-parchment-100 border border-parchment-300 shadow-sm"
      )}
    >
      {/* Recommended badge */}
      {tier.recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className="bg-gold text-ink border-0 px-4 py-1 shadow-sm font-semibold gap-1">
            <Star className="w-3 h-3" aria-hidden="true" />
            Recommended
          </Badge>
        </div>
      )}

      {/* Tier name */}
      <div>
        <h3
          className={cn(
            "font-display text-xl font-semibold mb-1",
            tier.recommended ? "text-parchment-100" : "text-ink"
          )}
        >
          {tier.name}
        </h3>
        <p
          className={cn(
            "font-body text-xs leading-relaxed",
            tier.recommended ? "text-parchment-300" : "text-ink-muted"
          )}
        >
          {tier.forWho}
        </p>
      </div>

      {/* Price */}
      <div>
        <div className="flex items-baseline gap-1.5">
          <span
            className={cn(
              "font-display text-4xl font-bold",
              tier.recommended ? "text-gold-light" : "text-ink"
            )}
          >
            {tier.price}
          </span>
        </div>
        {tier.priceDetail && (
          <p
            className={cn(
              "text-xs mt-0.5",
              tier.recommended ? "text-parchment-300" : "text-ink-muted"
            )}
          >
            {tier.priceDetail}
          </p>
        )}
      </div>

      {/* Divider */}
      <div className="gold-rule opacity-30" />

      {/* Includes list */}
      <ul className="space-y-2.5 flex-1" role="list">
        {tier.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm">
            <CheckCircle2
              className={cn(
                "w-4 h-4 mt-0.5 shrink-0",
                tier.recommended ? "text-gold" : "text-gold-dark"
              )}
              aria-hidden="true"
            />
            <span
              className={
                tier.recommended ? "text-parchment-200" : "text-ink-light"
              }
            >
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        onClick={onOpenFreeAnalysis}
        variant={tier.recommended ? "default" : "outline-ink"}
        className={cn(
          "w-full mt-2",
          tier.recommended && "shadow-md shadow-black/20"
        )}
        size="lg"
      >
        {tier.cta}
      </Button>
    </div>
  );
}
