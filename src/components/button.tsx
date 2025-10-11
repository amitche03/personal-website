import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: Variant;
  size?: Size;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function baseClasses(variant: Variant = "primary", size: Size = "md") {
  const base =
    "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants: Record<Variant, string> = {
    primary: "bg-emerald-500 text-white hover:bg-emerald-400",
    outline: "border border-white/10 text-white hover:bg-white/10",
    ghost: "text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10",
  };
  const sizes: Record<Size, string> = {
    sm: "h-9 px-4",
    md: "h-11 px-6",
    lg: "h-12 px-6 text-base",
  };
  return cn(base, variants[variant], sizes[size]);
}

export function Button({ className, variant = "primary", size = "md", href, ...props }: ButtonProps) {
  const classes = cn(baseClasses(variant, size), className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }
  return <button className={classes} {...props} />;
}
