import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "gradient-primary text-white hover:shadow-premium-lg hover:scale-105 shadow-premium",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 hover:shadow-premium-lg shadow-premium focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-glass-border glass-card text-foreground hover:bg-primary/5 hover:border-primary/30 shadow-premium",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-premium",
        ghost:
          "hover:bg-primary/5 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-hover",
      },
      size: {
        default: "h-10 px-5 py-2.5 has-[>svg]:px-4",
        sm: "h-9 rounded-xl gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-12 rounded-xl px-7 has-[>svg]:px-5 text-base",
        icon: "size-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
