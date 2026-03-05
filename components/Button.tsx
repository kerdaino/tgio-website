import Link from "next/link";

type Variant = "gold" | "outline" | "primary";

export default function Button({
  href,
  children,
  variant = "gold",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition active:scale-[0.99]";

  const styles: Record<Variant, string> = {
    gold: "bg-gold text-black hover:opacity-90",
    primary: "bg-primary text-white hover:opacity-90",
    outline: "border border-white/80 text-white hover:bg-white/10",
  };

  const cls = `${base} ${styles[variant]}`;

  if (href) return <Link className={cls} href={href}>{children}</Link>;
  return <button className={cls}>{children}</button>;
}