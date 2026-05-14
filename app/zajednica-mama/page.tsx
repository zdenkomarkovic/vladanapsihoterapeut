import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zajednica mama | Vladana Stanković",
  description:
    "Stručno vođena mala grupa namenjena mamama i trudnicama. Susreti tri puta mesečno u trajanju od 90 minuta — prostor za podršku, razmenu iskustava i razgovor bez osude.",
};

const EMAIL = "psihoterapijavladana@gmail.com";
const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Upit za Zajednicu mama"
)}&body=${encodeURIComponent(
  "Poštovana Vladana,\n\nZanima me Zajednica mama.\n\nIme i prezime: \nMejl: \nTelefon: \nUzrast deteta (opciono): \nTermini koji mi okvirno odgovaraju: \n\nHvala,"
)}`;

const topics = [
  "Majčinstvo i nova životna uloga",
  "Odnosi sa partnerom i porodicom",
  "Emocionalno opterećenje i umor",
  "Krivica i perfekcionizam u roditeljstvu",
  "Granice i komunikacija sa okolinom",
  "Svakodnevni izazovi roditeljstva",
  "Identitet i lične potrebe van uloge majke",
  "Podrška i razmena iskustava",
];

const whyGroup = [
  {
    title: "Prepoznajete sebe u drugima",
    text: "Deljenje iskustava sa mamama koje prolaze kroz slično donosi olakšanje i osećaj da niste same.",
  },
  {
    title: "Stručno vođena grupna dinamika",
    text: "Sesije vode psihoterapeut koji obezbeđuje siguran prostor, fokus i zdravu grupnu dinamiku.",
  },
  {
    title: "Pristupačan format",
    text: "Tri puta mesečno, u terminima koji odgovaraju grupi — uz fleksibilnost i uvažavanje rasporeda.",
  },
  {
    title: "Prostor bez osude",
    text: "Sve što se kaže u grupi ostaje u grupi. Svaka mama donosi svoju priču i biva primljena onakva kakva jeste.",
  },
];

export default function ZajednicaMamaPage() {
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
              Grupni program
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              Zajednica mama
            </h1>
            <p className="font-sans text-muted text-lg leading-relaxed max-w-2xl mb-10">
              Stručno vođena mala grupa namenjena mamama i trudnicama koje žele podršku,
              razmenu iskustava i prostor bez osude. Razgovaramo o temama koje su bliske
              majčinstvu, odnosima i emocionalnom opterećenju.
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
                3× mesečno · 90 minuta
              </div>
            </div>
          </div>
        </section>

        {/* Info kartice */}
        <section className="bg-cream-dark py-16">
          <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-3 gap-4">
            {[
              { label: "Format", value: "Mala grupa (online)" },
              { label: "Učestalost", value: "3× mesečno" },
              { label: "Trajanje", value: "90 minuta" },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-sand-light rounded-2xl px-6 py-5">
                <p className="font-sans text-xs text-muted uppercase tracking-wider mb-1">{item.label}</p>
                <p className="font-serif text-xl text-charcoal">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Opis */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">O programu</p>
                <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6 leading-tight">
                  Šta je Zajednica mama
                </h2>
                <div className="space-y-4 font-sans text-muted leading-relaxed text-sm">
                  <p>
                    Zajednica mama je stručno vođena mala grupa namenjena mamama i
                    trudnicama koje žele podršku, razmenu iskustava i prostor bez osude.
                  </p>
                  <p>
                    U Zajednici razgovaramo o temama koje su bliske majčinstvu, odnosima,
                    emocionalnom opterećenju i svakodnevnim izazovima roditeljstva.
                  </p>
                  <p>
                    Susreti se održavaju tri puta mesečno u trajanju od 90 minuta,
                    u terminima koji odgovaraju grupi.
                  </p>
                </div>
              </div>

              <div className="bg-cream-dark border border-sand-light rounded-3xl p-8">
                <h3 className="font-serif text-xl text-charcoal mb-6">Teme koje obrađujemo</h3>
                <ul className="space-y-3">
                  {topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" />
                      <span className="font-sans text-muted text-sm leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Zašto grupni rad */}
        <section className="bg-cream-dark py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">Prednosti</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-12">
              Zašto grupni rad
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {whyGroup.map((item, i) => (
                <div key={i} className="bg-white border border-sand-light rounded-3xl p-7">
                  <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center mb-5">
                    <span className="font-serif text-sage font-semibold text-sm">{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-lg text-charcoal mb-3">{item.title}</h3>
                  <p className="font-sans text-muted text-sm leading-relaxed">{item.text}</p>
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
