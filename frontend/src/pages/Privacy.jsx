import { PageHero } from "@/components/PageHero";
import { CONTACT } from "@/lib/data";

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Aviso de Privacidad" />
      <section className="py-16 md:py-24" data-testid="privacy-section">
        <div className="max-w-[820px] mx-auto px-6 md:px-12 prose prose-slate">
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p><strong className="text-slate-900">Power Stein Sonora</strong>, con domicilio en {CONTACT.address}, es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p>
            <h3 className="font-display text-2xl font-bold text-slate-900">Datos que recabamos</h3>
            <p>Nombre, teléfono, correo electrónico, ciudad y monto aproximado de su recibo de luz, con la finalidad de elaborar y enviarle una cotización de sistemas de energía solar.</p>
            <h3 className="font-display text-2xl font-bold text-slate-900">Finalidad</h3>
            <p>Sus datos serán utilizados únicamente para contactarle, brindarle información comercial sobre nuestros productos y servicios, y dar seguimiento a su solicitud de cotización.</p>
            <h3 className="font-display text-2xl font-bold text-slate-900">Derechos ARCO</h3>
            <p>Usted puede ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición al tratamiento de sus datos enviando un correo a <a href={`mailto:${CONTACT.email}`} className="text-brand-blue font-semibold">{CONTACT.email}</a>.</p>
            <p>No compartimos su información con terceros con fines de mercadotecnia. Al enviar el formulario usted otorga su consentimiento para el tratamiento de sus datos conforme a este aviso.</p>
          </div>
        </div>
      </section>
    </>
  );
}
