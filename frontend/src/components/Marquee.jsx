export const Marquee = ({ items, dark = false }) => {
  const list = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-8 border-y border-slate-200/70" data-testid="marquee">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {list.map((it, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className={`font-display text-4xl md:text-6xl font-extrabold ${dark ? "text-stroke-white" : "text-stroke"}`}>
              {it}
            </span>
            <span className="text-brand-flare text-3xl md:text-5xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
