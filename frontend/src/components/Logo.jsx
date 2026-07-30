import { LOGO } from "@/lib/data";

export const Logo = ({ className = "h-12 w-auto" }) => (
  <img
    src="/logo-header.png"
    alt="Power Stein Paneles Solares"
    data-testid="brand-logo"
    className={`${className} object-contain`}
  />
);
