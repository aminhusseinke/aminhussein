import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_12px_35px_-20px_color-mix(in_oklab,var(--primary)_70%,transparent)] hover:-translate-y-1 hover:shadow-[0_18px_45px_-18px_color-mix(in_oklab,var(--primary)_75%,transparent)] hover:brightness-95 active:translate-y-0",
        destructive: "bg-destructive text-destructive-foreground hover:brightness-95",
        outline: "border border-input bg-background hover:-translate-y-0.5 hover:border-emerald hover:shadow-[0_14px_40px_-28px_color-mix(in_oklab,var(--emerald)_65%,transparent)]",
        secondary: "bg-secondary text-secondary-foreground hover:brightness-95",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        inverse: "bg-background text-foreground hover:-translate-y-0.5 hover:bg-secondary",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
