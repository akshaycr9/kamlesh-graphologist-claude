"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenFreeAnalysis: () => void;
}

const navLinks = [
  { label: "About",          href: "#about"           },
  { label: "Why It Matters", href: "#why-it-matters"  },
  { label: "Services",       href: "#services"        },
  { label: "Process",        href: "#process"         },
  { label: "Pricing",        href: "#pricing"         },
];

export default function Navbar({ onOpenFreeAnalysis }: NavbarProps) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Add subtle background on scroll.
  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Smooth-scroll helper — closes mobile menu before scrolling.
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-parchment-50/95 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent",
      )}
      role="banner"
    >
      <nav
        className="container flex items-center justify-between h-16 md:h-18"
        aria-label="Main navigation"
      >
        {/* ── Logo / Wordmark ── */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex flex-col leading-none group"
          aria-label="Kamlesh Gidwani, Graphologist — return to top"
        >
          <span
            className={cn(
              "font-display font-bold tracking-tight transition-colors",
              scrolled ? "text-ink text-lg" : "text-parchment-100 text-lg",
            )}
          >
            Kamlesh Gidwani
          </span>
          <span
            className={cn(
              "font-body text-xs tracking-widest uppercase transition-colors",
              scrolled ? "text-gold-dark" : "text-gold-light",
            )}
          >
            Graphologist
          </span>
        </a>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex items-center gap-7" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "font-body text-sm font-medium transition-colors hover:text-gold",
                  scrolled ? "text-ink-light" : "text-parchment-200",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <Button
          onClick={onOpenFreeAnalysis}
          className="hidden md:inline-flex"
          size="sm"
        >
          Get Free Analysis
        </Button>

        {/* ── Mobile hamburger + Sheet ── */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden",
                scrolled ? "text-ink" : "text-parchment-100 hover:bg-white/10",
              )}
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[280px] bg-parchment-50 flex flex-col">
            <SheetHeader>
              <SheetTitle className="text-left">
                <span className="font-display text-xl font-bold text-ink block">
                  Kamlesh Gidwani
                </span>
                <span className="font-body text-xs tracking-widest uppercase text-gold-dark block mt-0.5">
                  Graphologist
                </span>
              </SheetTitle>
            </SheetHeader>

            {/* Divider */}
            <div className="gold-rule my-4" />

            {/* Mobile nav links */}
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-body text-base font-medium text-ink-light hover:text-gold hover:bg-parchment-200 px-3 py-2.5 rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>

            <div className="mt-auto pt-6">
              <div className="gold-rule mb-6" />
              <Button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenFreeAnalysis();
                }}
                className="w-full"
                size="lg"
              >
                Get Free Analysis
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
