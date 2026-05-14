const steps = [
  {
    n: "01",
    title: "Šalješ upit",
    text: "Pošalješ mejl sa imenom, brojem telefona i okvirnim terminima koji ti odgovaraju. Nema formulara, nema komplikacija.",
  },
  {
    n: "02",
    title: "Dogovaramo termin",
    text: "Dobijate odgovor sa dostupnim terminima i svim informacijama koje su vam potrebne pre prve seanse.",
  },
  {
    n: "03",
    title: "Prva seansa",
    text: "Upoznajemo se, razgovaramo o razlozima dolaska i zajednički definišemo šta biste voleli da promenite ili razumete bolje.",
  },
  {
    n: "04",
    title: "Terapijski rad",
    text: "Nastavljamo u ritmu koji odgovara vama — korak po korak, prilagođeno vašim potrebama i kapacitetima.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream-dark py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">
            Proces
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal">
            Kako funkcioniše
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.n} className="relative">
              {/* Linija između koraka */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(100%_-_12px)] w-full h-px bg-sand-light z-0" />
              )}

              <div className="relative bg-white border border-sand-light rounded-3xl p-7 flex flex-col gap-4 h-full">
                <span className="font-serif text-5xl text-sage/20 font-semibold leading-none">
                  {step.n}
                </span>
                <h3 className="font-serif text-xl text-charcoal">{step.title}</h3>
                <p className="font-sans text-muted text-sm leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
