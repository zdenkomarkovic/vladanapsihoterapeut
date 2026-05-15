import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-cream flex items-center pt-18">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Tekst */}
        <div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1] mb-5">
            <span className="block font-sans text-sage text-xs uppercase tracking-[0.2em] mb-3">
              KBT Psihoterapeut · Vladana Stanković
            </span>
            <span className="block font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">
              Online psihoterapija
            </span>
            Prostor za razumevanje sebe, emocija i odnosa
          </h1>
          <p className="font-sans text-muted text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Zajedno istražujemo misli, emocije i obrasce ponašanja koji oblikuju vaš svakodnevni
            život — korak po korak, u vašem ritmu.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="font-sans bg-sage text-white px-8 py-3.5 rounded-full hover:bg-sage-dark transition-colors text-sm tracking-wide"
            >
              Zakaži sesiju
            </a>
            <a
              href="#o-meni"
              className="font-sans border border-sage text-sage px-8 py-3.5 rounded-full hover:bg-sage/10 transition-colors text-sm tracking-wide"
            >
              Saznaj više
            </a>
          </div>
        </div>

        {/* Fotografija */}
        <div className="relative md:order-last">
          <div className="absolute inset-0 bg-sage/15 rounded-3xl translate-x-5 translate-y-5 -z-10" />
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
            <Image
              src="/vladana-1.jpg"
              alt="Vladana Stanković, KBT psihoterapeut"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          {/* Dekorativni citat ispod slike */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-md px-5 py-4 max-w-[220px] hidden md:block">
            <p className="font-serif text-sm text-charcoal italic leading-relaxed">
              &ldquo;Verovanje u postepen proces rada i individualni pristup.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
