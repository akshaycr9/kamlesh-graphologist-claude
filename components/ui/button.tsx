"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Button variants are tuned for the graphology palette:
//   default   — muted gold fill; the primary action colour.
//   secondary — ink-blue fill; used for dark-section CTAs.
//   outline   — border + transparent; lightweight secondary action.
//   ghost     — no fill; nav links, utility actions.
//   link      — text-only underline.

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-body font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary CTA — gold background, ink text.
        default:
          "bg-gold text-ink hover:bg-gold-dark shadow-sm hover:shadow-md letter-spacing-wide",
        // Dark-section CTA — ink blue.
        secondary:
          "bg-ink-blue text-parchment hover:bg-ink-charcoal shadow-sm hover:shadow-md",
        // Destructive actions.
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        // Outline — border only, used in hero for secondary CTA.
        outline:
          "border border-current bg-transparent hover:bg-parchment/10 text-parchment",
        // Outline on light — for use on parchment backgrounds.
        "outline-ink":
          "border border-ink-light bg-transparent hover:bg-ink/5 text-ink-light",
        // Ghost — nav items, utility.
        ghost: "hover:bg-parchment-200 hover:text-ink",
        // Text link.
        link: "text-gold underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-6 py-2.5 rounded-md text-sm tracking-wide",
        sm:      "h-9  px-4 py-2   rounded-md text-xs tracking-wide",
        lg:      "h-13 px-8 py-3   rounded-md text-base tracking-wide",
        icon:    "h-10 w-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
