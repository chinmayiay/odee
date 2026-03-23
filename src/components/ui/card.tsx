import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <article className={`surface-card p-5 shadow-sm ${className}`}>{children}</article>;
}
