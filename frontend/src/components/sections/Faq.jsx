import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { FAQS } from "@/lib/data";

export const Faq = () => (
  <section className="py-20 md:py-32" data-testid="faq-section">
    <div className="max-w-[1000px] mx-auto px-6 md:px-12">
      <SectionHeader
        eyebrow="Preguntas frecuentes"
        title="Resolvemos tus dudas"
        subtitle="Todo lo que necesitas saber antes de dar el paso hacia la energía solar."
        align="center"
      />
      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="mt-12 w-full" data-testid="faq-accordion">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200">
              <AccordionTrigger data-testid={`faq-trigger-${i}`} className="text-left font-display text-lg md:text-xl font-bold text-slate-900 hover:text-brand-flare hover:no-underline py-6">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
