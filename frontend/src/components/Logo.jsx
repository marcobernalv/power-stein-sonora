import { Sun } from "lucide-react";

export const Logo = ({ light = false }) => (
  <div className="flex items-center gap-2.5" data-testid="brand-logo">
    <div className="relative w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center overflow-hidden">
      <Sun className="w-5 h-5 text-white" strokeWidth={2.5} />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-brand-flare" />
    </div>
    <div className="leading-none">
      <span className={`font-display font-extrabold text-lg tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
        POWER STEIN
      </span>
      <span className="block text-[10px] font-bold tracking-[0.3em] text-brand-flare">SONORA</span>
    </div>
  </div>
);
