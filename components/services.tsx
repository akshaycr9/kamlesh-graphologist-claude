"use client";

import { CheckCircle2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface Service {
  title:       string;
  description: string;
  deliverables: string[];
  price:       string;
  priceNote?:  string;
  badge?:      string;
  popular?:    boolean;
}

const services: Service[] = [
  {
    title:       "Personal Handwriting Analysis",
    description:
      "A comprehensive deep-dive into your unique script, revealing personality traits, emotional responses, thinking style, and areas of hidden strength.",
    deliverables: [
      "15-page written analysis report",
      "Personality strengths & growth areas",
      "Emotional patterns & stress indicators",
      "30-minute follow-up call",
    ],
    price:    "From ₹2,999",
    priceNote: "Delivered within 5 business days",
  },
  {
    title:       "Relationship Compatibility",
    description:
      "Understand the natural dynamics between two people — communication styles, emotional needs, and compatibility — through side-by-side handwriting analysis.",
    deliverables: [
      "Comparative analysis of both scripts",
      "Communication & emotional compatibility",
      "Potential friction points & strengths",
      "Practical relationship guidance",
    ],
    price:    "From ₹4,499",
    priceNote: "Delivered within 7 business days",
    popular: true,
    badge: "Most Popular",
  },
  {
    title:       "Career & Talent Mapping",
    description:
      "Discover your natural aptitudes, preferred working environment, and leadership qualities to make confident, aligned career decisions.",
    deliverables: [
      "Career alignment & aptitude report",
      "Leadership style assessment",
      "Ideal working environment profile",
      "Industry & role recommendations",
    ],
    price:    "From ₹3,499",
    priceNote: "Delivered within 5 business days",
  },
  {
    title:       "Corporate Team Workshops",
    description:
      "Interactive sessions revealing individual communication styles, leadership traits, and team dynamics — helping organisations build stronger, more self-aware teams.",
    deliverables: [
      "Mini-report for each participant",
      "Team dynamics & communication overview",
      "2-hour facilitated workshop session",
      "Follow-up recommendations for managers",
    ],
    price:    "Custom Pricing",
    priceNote: "Enquire for group rates",
  },
];

interface ServicesProps {
  onOpenFreeAnalysis: () => void;
}

export default function Services({ onOpenFreeAnalysis }: ServicesProps) {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const gridRef    = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="services"
      className="bg-ink-texture py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      <div className="container">
        {/* Section header */}
        <div ref={headingRef} className="reveal max-w-2xl mb-16">
          <p className="section-label text-gold-light mb-4">What I Offer</p>
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-parchment-100 mb-5"
          >
            Services Tailored to Your Journey
          </h2>
          <p className="text-parchment-300 text-lg leading-relaxed">
            Whether you&apos;re seeking personal clarity, relationship insight, or
            professional development — each analysis is prepared individually
            and delivered with care.
          </p>
        </div>

        {/* Services grid */}
        <div
          ref={gridRef}
          className="reveal-stagger grid sm:grid-cols-2 gap-6 md:gap-7"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
              onOpenFreeAnalysis={onOpenFreeAnalysis}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  onOpenFreeAnalysis,
}: {
  service: Service;
  onOpenFreeAnalysis: () => void;
}) {
  return (
    <Card
      className={[
        "card-hover relative flex flex-col bg-parchment-50 border-border text-ink overflow-hidden",
        service.popular ? "ring-2 ring-gold shadow-lg shadow-gold/10" : "shadow-sm",
      ].join(" ")}
    >
      {/* Popular ribbon */}
      {service.badge && (
        <div className="absolute top-4 right-4">
          <Badge variant="default">{service.badge}</Badge>
        </div>
      )}

      <CardHeader className="pb-3">
        <CardTitle className="font-display text-xl text-ink pr-20">
          {service.title}
        </CardTitle>
        <CardDescription className="text-ink-muted text-sm leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        {/* Divider */}
        <div className="gold-rule mb-4 opacity-40" />

        {/* Deliverables */}
        <p className="section-label mb-3 text-gold-dark">What&apos;s Included</p>
        <ul className="space-y-2" role="list">
          {service.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink-light">
              <CheckCircle2
                className="w-4 h-4 text-gold mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex items-end justify-between pt-4 border-t border-parchment-300 flex-wrap gap-3">
        <div>
          <p className="font-display text-xl font-bold text-ink">{service.price}</p>
          {service.priceNote && (
            <p className="text-xs text-ink-muted mt-0.5">{service.priceNote}</p>
          )}
        </div>
        <Button size="sm" onClick={onOpenFreeAnalysis}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
