import { PageHero } from "@/components/PageHero";
import { LeadForm } from "@/components/LeadForm";
import { Faq } from "@/components/sections/Faq";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/lib/data";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Cotiza gratis hoy"
        subtitle="Déjanos tus datos y un asesor te contactará con una cotización personalizada en menos de 24 horas. Sin costo, sin compromiso."
      />

      <section className="py-16 md:py-24" data-testid="contact-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl font-black tracking-tight text-slate-900">Hablemos de tu ahorro</h2>
            <p className="text-slate-600 mt-4 leading-relaxed">Estamos en Hermosillo listos para atenderte. Escríbenos por el medio que prefieras.</p>

            <div className="mt-10 space-y-6">
              <a href={`tel:+52${CONTACT.whatsapp}`} data-testid="contact-phone" className="flex items-start gap-4 group">
                <span className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                  <Phone className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                </span>
                <span><span className="block text-sm text-slate-500">Teléfono</span><span className="font-bold text-slate-900">{CONTACT.phone}</span></span>
              </a>
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp" className="flex items-start gap-4 group">
                <span className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" />
                </span>
                <span><span className="block text-sm text-slate-500">WhatsApp</span><span className="font-bold text-slate-900">{CONTACT.whatsappDisplay}</span></span>
              </a>
              <a href={`mailto:${CONTACT.email}`} data-testid="contact-email" className="flex items-start gap-4 group">
                <span className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:bg-brand-flare transition-colors">
                  <Mail className="w-5 h-5 text-brand-flare group-hover:text-white transition-colors" />
                </span>
                <span><span className="block text-sm text-slate-500">Correo</span><span className="font-bold text-slate-900">{CONTACT.email}</span></span>
              </a>
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-slate-700" />
                </span>
                <span><span className="block text-sm text-slate-500">Dirección</span><span className="font-bold text-slate-900">{CONTACT.address}</span></span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Reveal>
              <LeadForm />
            </Reveal>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
