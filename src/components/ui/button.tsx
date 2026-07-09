import * as React from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "default" | "secondary";
type ButtonSize = "default" | "sm";

type ButtonTag = "button" | "a";

export function buttonVariants({
  variant = "default",
  size = "default",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
} = {}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const variantClasses: Record<ButtonVariant, string> = {
    default: "bg-slate-950 text-white hover:bg-slate-800",
    secondary:
      "bg-white text-slate-950 border border-slate-200 hover:bg-slate-50",
  };
  const sizeClasses: Record<ButtonSize, string> = {
    default: "h-10 px-4 text-sm",
    sm: "h-9 px-3 text-xs",
  };

  return cn(base, variantClasses[variant], sizeClasses[size]);
}

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: ButtonTag;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ as = "button", className, variant, size, href, ...props }, ref) => {
    const Component = as;

    return (
      <Component
        ref={ref as any}
        className={cn(buttonVariants({ variant, size }), className)}
        href={as === "a" ? href : undefined}
        {...(props as any)}
      />
    );
  }
);

Button.displayName = "Button";
