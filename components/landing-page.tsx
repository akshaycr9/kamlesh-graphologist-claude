"use client";

// LandingPage — the top-level client component that:
//   1. Manages the global "Free Analysis" dialog open/close state.
//   2. Passes onOpenFreeAnalysis callbacks to Navbar, Hero, Services,
//      and Pricing so any of them can trigger the same dialog.
//   3. Assembles all sections in document order.

import React from "react";
import Navbar            from "@/components/navbar";
import Hero              from "@/components/hero";
import About             from "@/components/about";
import WhyItMatters      from "@/components/why-it-matters";
import Services          from "@/components/services";
import Process           from "@/components/process";
import Pricing           from "@/components/pricing";
import Testimonials      from "@/components/testimonials";
import Footer            from "@/components/footer";
import FreeAnalysisDialog from "@/components/free-analysis-dialog";

export default function LandingPage() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const openDialog  = React.useCallback(() => setDialogOpen(true),  []);
  const closeDialog = React.useCallback(() => setDialogOpen(false), []);

  return (
    <>
      {/* Persistent navigation — fixed to top via its own CSS */}
      <Navbar onOpenFreeAnalysis={openDialog} />

      <main id="main-content" tabIndex={-1}>
        {/* 1 · Hero ────────────────────────────────────────────── */}
        <Hero onOpenFreeAnalysis={openDialog} />

        {/* 2 · About ───────────────────────────────────────────── */}
        <About />

        {/* 3 · Why It Matters ──────────────────────────────────── */}
        <WhyItMatters />

        {/* 4 · Services ────────────────────────────────────────── */}
        <Services onOpenFreeAnalysis={openDialog} />

        {/* 5 · Process ─────────────────────────────────────────── */}
        <Process />

        {/* 6 · Pricing ─────────────────────────────────────────── */}
        <Pricing onOpenFreeAnalysis={openDialog} />

        {/* 7 · Testimonials ────────────────────────────────────── */}
        <Testimonials />
      </main>

      {/* Footer ────────────────────────────────────────────────── */}
      <Footer />

      {/* Global dialog — mounted once, opened from multiple triggers */}
      <FreeAnalysisDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
