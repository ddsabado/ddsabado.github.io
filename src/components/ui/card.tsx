import * as React from "react";
import { cn } from "../../lib/utils";

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "overflow-hidden rounded-3xl border border-slate-200/10 bg-white/90 shadow-[0_18px_40px_rgba(0,0,0,0.08)]",
      className
    )}
    {...props}
  />
));

Card.displayName = "Card";
