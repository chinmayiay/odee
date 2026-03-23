import Link from "next/link";

type ButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function Button({ href, label, variant = "primary" }: ButtonProps) {
  const className =
    variant === "primary"
      ? "rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-800"
      : "rounded-full border border-blue-900 bg-white px-6 py-3 text-sm font-semibold text-blue-900 transition hover:-translate-y-0.5 hover:bg-blue-50";

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
