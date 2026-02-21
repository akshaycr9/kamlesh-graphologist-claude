"use client";

import Image from "next/image";
import { Award, Globe, Users, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const credentials = [
  { icon: Award,       text: "Member of International Council of Graphologists" },
  { icon: Globe,       text: "Grapho Therapy Practitioner"                      },
  { icon: Users,       text: "Individual & Corporate Handwriting Analyses"      },
  { icon: ShieldCheck, text: "Strict Confidentiality & Ethical Practice"        },
];

export default function About() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const textRef    = useScrollReveal<HTMLDivElement>();
  const photoRef   = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="reveal bg-parchment-50 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Photo side ── */}
          <div
            ref={photoRef}
            className="reveal flex justify-center md:justify-start"
          >
            {/* Layered portrait frame — paper + ink border aesthetic */}
            <div className="relative w-64 sm:w-72 md:w-80">
              {/* Offset decorative shadow block */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-xl bg-gold/20 border border-gold/30"
                aria-hidden="true"
              />
              {/* Photo */}
              <div className="relative rounded-xl overflow-hidden border-2 border-parchment-300 shadow-xl aspect-[4/5]">
                <Image
                  src="/kamlesh-profile.png"
                  alt="Kamlesh Gidwani, Certified Graphologist"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                  priority
                />
                {/* Parchment overlay grain */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-parchment-100/10 via-transparent to-ink-blue/10 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Floating credential badge */}
              <div
                className="absolute -bottom-6 -left-6 bg-parchment-50 border border-border rounded-xl shadow-md px-4 py-3 text-center"
                aria-hidden="true"
              >
                <p className="font-display text-2xl font-bold text-ink">ICG</p>
                <p className="font-body text-xs text-ink-muted leading-tight">
                  Certified<br />Member
                </p>
              </div>
            </div>
          </div>

          {/* ── Text side ── */}
          <div ref={textRef} className="reveal space-y-6">
            <p className="section-label">About</p>
            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight"
            >
              Kamlesh Gidwani,
              <br />
              <span className="text-gold-gradient">Certified Graphologist</span>
            </h2>

            <div className="space-y-4 text-ink-light text-base leading-relaxed">
              <p>
                This wonderful science of Handwriting Analysis and Grapho Therapy
                has helped me understand my own strengths, weaknesses, and core
                beliefs — and has driven major, lasting changes in my life through
                daily practice.
              </p>
              <p>
                I am on a mission to help <strong className="text-ink">one hundred
                thousand people</strong> better their lives by empowering them with
                the knowledge of the power of handwriting. Because when you put pen
                to paper, your handwriting speaks.
              </p>
              <p>
                As a Professional Handwriting Analyst, I support you in
                re-discovering yourself through your script — decoding personality,
                character, thinking patterns, relationships, fears, strengths, and
                areas for growth.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {credentials.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-start gap-3 bg-parchment-100 rounded-lg p-3.5 border border-parchment-300"
                >
                  <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-md bg-gold/10 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-gold-dark" aria-hidden="true" />
                  </span>
                  <span className="font-body text-sm text-ink-light leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-4 border-l-2 border-gold pl-5 italic text-ink-muted text-sm leading-relaxed">
              "Your handwriting speaks — and through it, you can acknowledge,
              influence, and transform the life you are reaching for."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
