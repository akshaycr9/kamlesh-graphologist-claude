"use client";

import { CheckCircle2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface Service {
  title:        string;
  description:  string;
  deliverables: string[];
  badge?:       string;
  popular?:     boolean;
}

const services: Service[] = [
  {
    title:       "Signature Enhancement",
    description:
      "Transform your signature to reflect your true potential and the life you want to create. A powerful tool for building authority, presence, and personal branding.",
    deliverables: [
      "Signature analysis & redesign",
      "3 custom signature options",
      "Step-by-step writing guide",
      "Follow-up review session",
    ],
    popular: true,
    badge: "Most Popular",
  },
  {
    title:       "Personal Handwriting Analysis",
    description:
      "A comprehensive deep-dive into your unique script, revealing personality traits, emotional responses, thinking style, and areas of hidden strength.",
    deliverables: [
      "Written analysis report",
      "Personality strengths & growth areas",
      "Emotional patterns & stress indicators",
      "15-minute follow-up call",
    ],
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
  },
  {
    title:       "Health Analysis",
    description:
      "Uncover the connection between your handwriting patterns and your wellbeing to support holistic healing and emotional resilience.",
    deliverables: [
      "Manage stress levels effectively",
      "Achieve anxiety reduction",
      "Find emotional balance",
      "Personalised wellbeing recommendations",
    ],
  },
  {
    title:       "Money Analysis",
    description:
      "Discover and shift the subconscious patterns in your handwriting that influence your relationship with money and abundance.",
    deliverables: [
      "Build confidence in all areas of life",
      "Remove psychological blocks holding you back",
      "Cultivate an abundance mindset",
      "Money script & belief pattern analysis",
    ],
  },
];

export default function Services() {
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
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
    </Card>
  );
}
