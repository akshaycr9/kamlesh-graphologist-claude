"use client";

import { Award, BookOpen, Users, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const credentials = [
  { icon: Award,       text: "AHAF Certified Graphologist"                },
  { icon: BookOpen,    text: "12+ Years of Practice"                      },
  { icon: Users,       text: "600+ Individual & Corporate Analyses"       },
  { icon: ShieldCheck, text: "Strict Confidentiality & Ethical Practice"  },
];

export default function About() {
  const sectionRef  = useScrollReveal<HTMLElement>();
  const textRef     = useScrollReveal<HTMLDivElement>();
  const photoRef    = useScrollReveal<HTMLDivElement>();

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
              {/* Photo placeholder */}
              <div className="relative rounded-xl overflow-hidden border-2 border-parchment-300 shadow-xl bg-parchment-200 aspect-[4/5] flex items-center justify-center">
                {/* Replace this div with <Image> when you have a real photo */}
                <div className="flex flex-col items-center gap-3 text-ink-muted px-8 text-center">
                  {/* Stylised pen-stroke silhouette */}
                  <svg
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none"
                    aria-hidden="true"
                    className="opacity-30"
                  >
                    <circle cx="36" cy="26" r="14" stroke="#4A4540" strokeWidth="2" />
                    <path d="M 14 64 Q 14 46 36 46 Q 58 46 58 64" stroke="#4A4540" strokeWidth="2" fill="none" />
                  </svg>
                  <p className="font-body text-xs leading-snug opacity-60">
                    Photo of Kamlesh Patel
                  </p>
                </div>

                {/* Parchment overlay grain */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-parchment-100/20 via-transparent to-ink-blue/10 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Floating credential badge */}
              <div
                className="absolute -bottom-6 -left-6 bg-parchment-50 border border-border rounded-xl shadow-md px-4 py-3 text-center"
                aria-hidden="true"
              >
                <p className="font-display text-2xl font-bold text-ink">12+</p>
                <p className="font-body text-xs text-ink-muted leading-tight">
                  Years of<br />Practice
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
              Kamlesh Patel,
              <br />
              <span className="text-gold-gradient">Certified Graphologist</span>
            </h2>

            <div className="space-y-4 text-ink-light text-base leading-relaxed">
              <p>
                I became fascinated by handwriting analysis in my early twenties
                after discovering how my own script mirrored patterns I'd never
                consciously recognised in myself. That fascination deepened into
                rigorous training, certification, and over a decade of dedicated
                practice.
              </p>
              <p>
                Today, I work with individuals seeking self-understanding,
                couples navigating compatibility, and organisations building
                stronger teams — all through the quiet, precise language of
                handwriting.
              </p>
              <p>
                My approach is grounded in classical graphology methodology
                while remaining sensitive to the whole person behind the pen:
                your story, your goals, and the growth you're reaching for.
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
              "Handwriting is the mirror of the mind and character of the
              writer. It reveals what words — both spoken and written — so
              often conceal."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
