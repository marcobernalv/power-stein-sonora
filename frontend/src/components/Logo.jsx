import { LOGO } from "@/lib/data";

export const Logo = ({ light = false }) => (
  <img
    src={LOGO}
    alt="Power Stein Paneles Solares"
    data-testid="brand-logo"
    className={`h-14 md:h-16 w-auto object-contain ${light ? "" : ""}`}
  />
);
