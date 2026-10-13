import Link from "next/link";
import { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-navy text-white hover:bg-navy-soft",
  secondary: "bg-transparent text-navy border border-gold hover:bg-gold hover:text-navy",
  outline: "border border-gold text-navy hover:bg-gold hover:text-navy",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-3.5 text-[17px]",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps & Omit<ComponentProps<"button">, keyof ButtonProps>) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-colors";
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
