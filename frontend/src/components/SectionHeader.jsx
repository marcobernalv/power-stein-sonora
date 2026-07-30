import { Reveal } from "@/components/Reveal";

export const SectionHeader = ({ eyebrow, title, subtitle, dark = false, align = "left" }) => (
  <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <span className={`inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-bold ${dark ? "text-brand-green" : "text-brand-flare"}`}>
        <span className="w-2.5 h-2.5 rounded-sm bg-brand-green inline-block" />
        {eyebrow}
      </span>
    )}
    <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mt-4 leading-[0.95] ${dark ? "text-white" : "text-slate-900"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-5 text-lg ${dark ? "text-slate-400" : "text-slate-600"} ${align === "center" ? "mx-auto" : ""} max-w-2xl`}>
        {subtitle}
      </p>
    )}
  </Reveal>
);
