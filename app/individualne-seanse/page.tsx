import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, SITE_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Online psihoterapija — individualne seanse",
  description:
    "Online individualne KBT psihoterapijske seanse za odrasle, trajanje 50 minuta. Radim sa anksioznošću, depresijom, paničnim napadima, PTSP-om, stresom i teškoćama u odnosima.",
  alternates: {
    canonical: `${SITE_URL}/individualne-seanse`,
  },
};

const EMAIL = "psihoterapijavladana@gmail.com";
const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Zakazivanje individualne seanse"
)}&body=${encodeURIComponent(
  "Poštovana Vladana,\n\nŽelim da zakažem individualnu seansu.\n\nIme i prezime: \nKontakt telefon: \nMejl: \nTermini koji mi okvirno odgovaraju: \n\nHvala,"
)}`;

const areas = [
  "Anksioznost",
  "Panični napadi",
  "Socijalna anksioznost",
  "Specifične fobije (životinje, zatvoreni prostori, grmljavina, letenje, visina, vožnja, krv, medicinske procedure)",
  "Opsesivne misli",
  "Agorafobija",
  "PTSP",
  "Depresivnost",
  "Preopterećenost i stres",
  "Prokrastinacija",
  "Problemi u partnerskim i porodičnim odnosima",
  "Teškoće u komunikaciji",
];

const steps = [
  {
    n: "01",
    title: "Slanje upita",
    text: "Pošaljite mejl sa imenom i prezimenom, kontakt brojem i okvirnim terminima koji vam odgovaraju.",
  },
  {
    n: "02",
    title: "Dogovor o terminu",
    text: "Dobijate odgovor sa dostupnim terminima i svim potrebnim informacijama o prvoj seansi.",
  },
  {
    n: "03",
    title: "Prva seansa",
    text: "Na prvoj seansi upoznajemo se, razgovaramo o razlozima dolaska i zajednički definišemo ciljeve rada.",
  },
  {
    n: "04",
    title: "Terapijski proces",
    text: "Nastavljamo u ritmu koji odgovara vama — korak po korak, prilagođeno vašim potrebama i kapacitetima.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Individualne psihoterapijske seanse",
  description:
    "Online individualne KBT psihoterapijske seanse za odrasle. Trajanje 50 minuta. Rad sa anksioznošću, depresijom, paničnim napadima, PTSP-om, stresom i teškoćama u odnosima.",
  url: `${SITE_URL}/individualne-seanse`,
  provider: {
    "@type": "Person",
    name: "Vladana Stanković",
    email: SITE_EMAIL,
  },
  serviceType: "Psihoterapija",
  audience: { "@type": "Audience", audienceType: "Odrasli" },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceType: "Online video poziv",
    availableLanguage: "Serbian",
  },
};

export default function IndividualneSeansePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-cream pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              href="/#usluge"
              className="inline-flex items-center gap-2 font-sans text-sm text-muted hover:text-sage transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Sve usluge
            </Link>

            <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">
              Usluga
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              Individualne seanse
            </h1>
            <p className="font-sans text-muted text-lg leading-relaxed max-w-2xl mb-10">
              Online individualne psihoterapijske seanse za odrasle, zasnovane na
              kognitivno-bihejvioralnom pristupu. Rad se prilagođava vašim potrebama,
              tempu i trenutnim kapacitetima.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={mailtoHref}
                className="font-sans bg-sage text-white px-8 py-3.5 rounded-full hover:bg-sage-dark transition-colors text-sm tracking-wide"
              >
                Zakaži sesiju
              </a>
              <div className="flex items-center gap-2 font-sans text-muted text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-sage inline-block" />
                Online · 50 minuta
              </div>
            </div>
          </div>
        </section>

        {/* Info kartice */}
        <section className="bg-cream-dark py-16">
          <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-3 gap-4">
            {[
              { label: "Format", value: "Online video poziv" },
              { label: "Trajanje", value: "50 minuta" },
              { label: "Za koga", value: "Odrasli" },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-sand-light rounded-2xl px-6 py-5">
                <p className="font-sans text-xs text-muted uppercase tracking-wider mb-1">{item.label}</p>
                <p className="font-serif text-xl text-charcoal">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pristup */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">Pristup</p>
                <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6 leading-tight">
                  Kako izgleda rad
                </h2>
                <div className="space-y-4 font-sans text-muted leading-relaxed text-sm">
                  <p>
                    Kroz terapijski pristup zajedno istražujemo povezanost između misli,
                    emocija i ponašanja, kao i načine razmišljanja i reagovanja koji mogu
                    doprinositi održavanju teškoća u svakodnevnom funkcionisanju.
                  </p>
                  <p>
                    Rad se prilagođava osobi, njenim potrebama i trenutnim kapacitetima,
                    uz zajedničko definisanje ciljeva i tema na kojima radimo.
                  </p>
                  <p>
                    Cilj terapijskog rada nije samo ublažavanje simptoma, već i razvoj
                    boljeg razumevanja sebe, fleksibilnijih načina razmišljanja i
                    efikasnijih načina prevladavanja problema i životnih izazova.
                  </p>
                </div>
              </div>

              {/* Citat */}
              <div className="bg-sage/10 border border-sage/20 rounded-3xl p-8">
                <span className="font-serif text-5xl text-sage/30 leading-none select-none">&ldquo;</span>
                <p className="font-serif text-xl text-charcoal leading-relaxed -mt-3">
                  Verujem u postepen proces rada, individualni pristup i saradnički odnos
                  u terapiji.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-px bg-sage/40" />
                  <span className="font-sans text-muted text-xs tracking-wider">Vladana Stanković</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Radim sa */}
        <section className="bg-cream-dark py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">Oblasti</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-10">Radim sa</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-start gap-3 bg-white border border-sand-light rounded-2xl px-5 py-4"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" />
                  <span className="font-sans text-charcoal text-sm leading-relaxed">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Koraci */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">Proces</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-12">
              Kako do prve seanse
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5">
                  <span className="font-serif text-4xl text-sage/25 font-semibold leading-none flex-shrink-0 mt-1">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal mb-2">{s.title}</h3>
                    <p className="font-sans text-muted text-sm leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
