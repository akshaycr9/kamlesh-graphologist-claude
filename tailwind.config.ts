import type { Config } from "tailwindcss";

// Graphology-inspired design system.
// Palette rationale:
//   Parchment tones — evoke handwriting on paper, warm and grounded.
//   Ink blue (#1B3A5C) — deep, authoritative; used for hero and dark sections.
//   Muted gold (#B8965A) — primary CTA; conveys premium quality without being gaudy.
//   Burgundy (#7A2D3C) — secondary accent; warmth and depth.
//   All colours are defined as CSS variables for shadcn/ui interoperability.

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      // ---------- Colour system (maps to CSS variables) ----------
      colors: {
        // shadcn/ui required tokens (HSL values without hsl() wrapper)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Custom brand tokens (used directly in components)
        parchment: {
          DEFAULT: "#F5F0E8",
          50: "#FAF8F3",
          100: "#F5F0E8",
          200: "#EDE8DC",
          300: "#E0D8C8",
        },
        ink: {
          DEFAULT: "#1C1A14",
          blue: "#1B3A5C",
          charcoal: "#2C2A24",
          light: "#4A4540",
          muted: "#7A7268",
        },
        gold: {
          DEFAULT: "#B8965A",
          light: "#D4B483",
          dark: "#8B6E3A",
        },
        burgundy: {
          DEFAULT: "#7A2D3C",
          light: "#A34555",
          dark: "#561E29",
        },
      },

      // ---------- Typography ----------
      // Playfair Display: display/heading serif — literary, expressive.
      // Lora: body serif — humanist, readable at small sizes.
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-lora)", "Georgia", "serif"],
      },

      // ---------- Type scale ----------
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "display-xl":  ["3.75rem", { lineHeight: "1.1",  letterSpacing: "-0.025em" }],
        "display-lg":  ["3rem",    { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        "display-md":  ["2.25rem", { lineHeight: "1.18", letterSpacing: "-0.02em" }],
        "display-sm":  ["1.875rem",{ lineHeight: "1.22", letterSpacing: "-0.015em" }],
      },

      // ---------- Spacing additions ----------
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },

      // ---------- Border radius ----------
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // ---------- Animations ----------
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-from-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-out-to-right": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
