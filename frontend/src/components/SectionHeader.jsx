import { Reveal } from "@/components/Reveal";

export const SectionHeader = ({ eyebrow, title, subtitle, dark = false, align = "left" }) => (
  <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <span className="text-sm uppercase tracking-[0.2em] font-bold text-brand-blue">{eyebrow}</span>
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
