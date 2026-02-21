import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

// ── Display / heading font ──────────────────────────────────────────────────
// Playfair Display: high-contrast editorial serif with strong personality.
// Weight 400–700 covers the full heading scale.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// ── Body / prose font ───────────────────────────────────────────────────────
// Lora: humanist text serif — warm, literary, excellent screen legibility.
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kamlesh Gidwani · Certified Graphologist",
  description:
    "Discover your personality, emotional patterns, and hidden potential through professional handwriting analysis. Certified graphologist with 12+ years of practice.",
  keywords: [
    "graphologist",
    "handwriting analysis",
    "personality insights",
    "graphology",
    "handwriting expert",
    "personality assessment",
  ],
  openGraph: {
    title: "Kamlesh Gidwani · Certified Graphologist",
    description:
      "Professional handwriting analysis for self-discovery, relationship insights, and career alignment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${lora.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
