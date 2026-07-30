import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { PROCESS } from "@/lib/data";

export const Process = () => (
  <section className="py-20 md:py-32" data-testid="process-section">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <SectionHeader
        eyebrow="Cómo funciona"
        title={<>De tu recibo actual<br />al ahorro, en 4 pasos</>}
        subtitle="Un proceso claro y sin sorpresas. Nosotros nos encargamos de todo, incluido el trámite con CFE."
      />
      <div className="relative mt-16">
        <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-slate-200" />
        <motion.div
          className="hidden lg:block absolute top-8 left-0 h-px bg-brand-green origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          style={{ right: 0 }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.n}
              data-testid="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-blue text-brand-ink flex items-center justify-center font-display text-2xl font-black relative z-10 shadow-lg shadow-brand-blue/25">
                {p.n}
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mt-6">{p.title}</h3>
              <p className="text-slate-600 mt-3 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
