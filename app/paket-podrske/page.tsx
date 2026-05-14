import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Paket podrške | Vladana Stanković",
  description:
    "Paket namenjen mamama i trudnicama — 4 individualne online sesije mesečno uz mogućnost kraćih konsultacija. Kontinuitet i podrška tokom prilagođavanja novoj životnoj ulozi.",
};

const EMAIL = "psihoterapijavladana@gmail.com";
const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Upit za Paket podrške"
)}&body=${encodeURIComponent(
  "Poštovana Vladana,\n\nZanima me Paket podrške.\n\nIme i prezime: \nMejl: \nTelefon: \nUzrast deteta (opciono): \nTermini koji mi okvirno odgovaraju: \n\nHvala,"
)}`;

const included = [
  {
    title: "4 individualne online sesije",
    detail: "50 minuta svaka · u toku jednog meseca",
  },
  {
    title: "Kraće konsultacije između seansi",
    detail: "Po dogovoru · za pitanja koja ne mogu da čekaju",
  },
  {
    title: "Individualni pristup",
    detail: "Prilagođeno vašoj priči, tempu i potrebama",
  },
  {
    title: "Kontinuitet rada",
    detail: "Mesečna struktura koja omogućava dublji i stabilniji napredak",
  },
];

const forWhom = [
  "Mame novorođenčadi i beba koje se prilagođavaju novoj ulozi",
  "Trudnice koje se pripremaju za dolazak deteta",
  "Mame koje osećaju emocionalno opterećenje, umor ili krivicu",
  "Mame koje prolaze kroz promene u partnerskim ili porodičnim odnosima",
  "Svaka mama kojoj je potreban kontinuiran prostor za sebe",
];

export default function PaketPodrskePage() {
  return (
    <>
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
              Za mame i trudnice
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              Paket podrške
            </h1>
            <p className="font-sans text-muted text-lg leading-relaxed max-w-2xl mb-10">
              Paket namenjen mamama i trudnicama koje žele kontinuitet, podršku i prostor
              za razgovor tokom prilagođavanja novoj životnoj ulozi i promenama koje
              majčinstvo nosi.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={mailtoHref}
                className="font-sans bg-sage text-white px-8 py-3.5 rounded-full hover:bg-sage-dark transition-colors text-sm tracking-wide"
              >
                Pošalji upit
              </a>
              <div className="flex items-center gap-2 font-sans text-muted text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-sage inline-block" />
                4 sesije mesečno · Online
              </div>
            </div>
          </div>
        </section>

        {/* Šta je uključeno */}
        <section className="bg-cream-dark py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">Sadržaj paketa</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-12">
              Šta je uključeno
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {included.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-sand-light rounded-3xl p-7 flex gap-5 items-start"
                >
                  <div className="w-9 h-9 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal mb-1">{item.title}</h3>
                    <p className="font-sans text-muted text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Za koga je */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">Namena</p>
                <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6 leading-tight">
                  Za koga je Paket podrške
                </h2>
                <p className="font-sans text-muted text-sm leading-relaxed">
                  Paket je osmišljen za mame i trudnice kojima je potreban kontinuiran
                  i strukturisan prostor za rad na sebi — ne samo jedna seansa s vremena
                  na vreme, već redovni susreti koji omogućavaju dublji proces i vidljiv napredak.
                </p>
              </div>

              <div className="space-y-3">
                {forWhom.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-cream-dark border border-sand-light rounded-2xl px-5 py-4"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" />
                    <span className="font-sans text-charcoal text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Zašto kontinuitet */}
        <section className="bg-sage/10 border-y border-sage/20 py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="font-serif text-5xl text-sage/25 leading-none select-none">&ldquo;</span>
            <p className="font-serif text-2xl md:text-3xl text-charcoal leading-relaxed -mt-3">
              Majčinstvo nosi ogromne promene — i zaslužuje pravu, kontinuiranu podršku.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-sage/40" />
              <span className="font-sans text-muted text-xs tracking-wider">Vladana Stanković</span>
              <div className="w-8 h-px bg-sage/40" />
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
