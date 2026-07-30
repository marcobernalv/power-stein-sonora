import { LOGO } from "@/lib/data";

export const Logo = ({ className = "h-14 w-52" }) => (
  <img
    src={LOGO}
    alt="Power Stein Paneles Solares"
    data-testid="brand-logo"
    className={`${className} object-cover object-center`}
  />
);
