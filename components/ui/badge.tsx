import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 font-body text-xs font-semibold tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:    "bg-gold/15  text-gold-dark  border border-gold/30",
        secondary:  "bg-ink-blue/10 text-ink-blue border border-ink-blue/20",
        outline:    "text-ink-light border border-border bg-transparent",
        burgundy:   "bg-burgundy/10 text-burgundy border border-burgundy/25",
        parchment:  "bg-parchment-200 text-ink-light border border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
