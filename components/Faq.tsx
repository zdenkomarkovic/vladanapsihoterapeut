"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Kako izgleda online seansa?",
    a: "Seanse se odvijaju putem video poziva, u terminu koji zajedno dogovorimo. Sve što vam je potrebno je miran prostor, internet veza i uređaj sa kamerom. Format je isti kao i u direktnom radu — razlika je samo u tome što ste u svom prostoru.",
  },
  {
    q: "Šta je KBT (kognitivno-bihejvioralna terapija)?",
    a: "KBT je naučno potvrđen psihoterapijski pristup koji se bavi vezom između misli, emocija i ponašanja. Zajedno istražujemo obrasce razmišljanja koji održavaju teškoće i radimo na razvijanju zdravijih načina reagovanja na svakodnevne situacije.",
  },
  {
    q: "Koliko dugo traje terapija?",
    a: "Trajanje terapije zavisi od razloga dolaska, ciljeva i tempa svakog pojedinca. Neke teškoće se rešavaju za nekoliko seansi, dok drugi procesi traju duže. O tome razgovaramo na prvoj seansi i usklađujemo se prema vašim potrebama.",
  },
  {
    q: "Da li je sve što pričamo poverljivo?",
    a: "Da — poverljivost je jedan od osnovnih principa terapijskog rada. Sve što razgovaramo ostaje između nas, osim u zakonom propisanim slučajevima (npr. neposredna opasnost po život).",
  },
  {
    q: "Kako da znam da li mi treba terapija?",
    a: "Ako osećate da vam nešto teži, da se ne snalazite onako kako biste voleli, ili jednostavno želite bolje da razumete sebe — to je dovoljan razlog. Nije potrebno čekati krizu. Terapija je prostor za svakoga ko želi da radi na sebi.",
  },
  {
    q: "Šta da očekujem od prve seanse?",
    a: "Prva seansa je uvodna — upoznajemo se, razgovaramo o razlozima dolaska i o tome šta biste voleli da promenite ili razumete. Nema pritiska ni ispitivanja. Vaš tempo je uvek na prvom mestu.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">
            Pitanja
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal">
            Često postavljena pitanja
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-sand-light rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
              >
                <span className="font-serif text-lg text-charcoal">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-sage flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {open === i && (
                <div className="px-7 pb-6">
                  <div className="w-full h-px bg-sand-light mb-5" />
                  <p className="font-sans text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
