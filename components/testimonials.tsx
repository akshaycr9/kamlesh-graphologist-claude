"use client";

import { Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    quote:
      "I'm highly grateful to you for the analysis of my handwriting. When I went through your analytical points it was really very close to my nature and behaviour. It's such an amazing experience and it has helped me for the betterment of my nature and behaviour towards other people. Thank you so much for such a wonderful analysis.",
    name: "Hemant Mittal",
    role: "School Owner",
  },
  {
    quote:
      "I would like to take a moment to thank you for providing me with a handwriting analysis. I found the results to be very interesting and insightful. Your analysis provided me with a unique perspective on my personality traits that I had not previously considered. I was impressed with the level of detail and attention you gave, and your ability to identify traits I had not previously recognised in myself. I would highly recommend your services to anyone interested in gaining a deeper understanding of themselves.",
    name: "Priyadarshan",
    role: "Associate at JP Morgan · Mumbai",
  },
  {
    quote:
      "The points given to me after analysis of my handwriting very closely match the type of person I am. Some of the points were very accurate. This gives me a deep understanding of myself and also shows me which areas I can work on to be better.",
    name: "Akshay Thadani",
    role: "Software Engineer · Indore",
    accuracy: "95%",
  },
];

export default function Testimonials() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const headRef    = useScrollReveal<HTMLDivElement>();
  const gridRef    = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="reveal bg-parchment-100 py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">

        {/* Section header */}
        <div ref={headRef} className="reveal text-center max-w-2xl mx-auto mb-16">
          <p className="section-label">Client Testimonials</p>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight mt-2"
          >
            What Clients Say
          </h2>
          <p className="mt-4 font-body text-ink-light text-base leading-relaxed">
            Every handwriting tells a story. Here is what people discovered about
            themselves through the science of graphology.
          </p>
        </div>

        {/* Testimonial cards */}
        <div ref={gridRef} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-parchment-50 border border-parchment-300 rounded-xl p-7 shadow-sm flex flex-col gap-4"
            >
              {/* Decorative quote icon */}
              <Quote
                className="w-7 h-7 text-gold/40 flex-shrink-0"
                aria-hidden="true"
              />

              {/* Quote text */}
              <blockquote className="font-body text-sm text-ink-light leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="border-t border-parchment-300" />

              {/* Author + accuracy badge */}
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="font-display font-semibold text-ink text-sm">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-ink-muted mt-0.5">
                    {t.role}
                  </p>
                </div>
                {t.accuracy && (
                  <span className="flex-shrink-0 inline-flex items-center gap-1 bg-gold/10 border border-gold/30 text-gold-dark text-xs font-semibold px-2.5 py-1 rounded-full">
                    {t.accuracy} accuracy
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
