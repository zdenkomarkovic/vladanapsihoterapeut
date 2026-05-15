import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "O meni | Vladana Stanković",
  description:
    "Upoznajte Vladanu Stanković — KBT psihoterapeuta pod supervizijom. Diplomirana psiholog, instruktor asertivne komunikacije, sa fokusom na razumevanje sebe i životnih promena.",
};

const credentials = [
  {
    year: "2016",
    title: "Diploma iz psihologije",
    detail: "Filozofski fakultet, Niš",
  },
  {
    year: "2016",
    title: "Instruktor asertivne komunikacije",
    detail: "U okviru SRABCT-a",
  },
  {
    year: "2025",
    title: "Master iz psihologije",
    detail: "Filozofski fakultet, Niš",
  },
  {
    year: "2022",
    title: "KBT psihoterapeut pod supervizijom",
    detail: "U okviru SRABCT-a",
  },
];

const values = [
  {
    title: "Individualni pristup",
    text: "Rad se prilagođava osobi, njenim potrebama i trenutnim kapacitetima. Ne postoji univerzalan recept — svaka osoba donosi svoju priču.",
  },
  {
    title: "Saradnički odnos",
    text: "Terapija nije nešto što se radi nekome, već zajedno sa njim. Zajednički definišemo ciljeve i teme na kojima radimo.",
  },
  {
    title: "Postepen proces",
    text: "Verujem u male, sigurne korake. Promena ne mora biti dramatična da bi bila stvarna i trajna.",
  },
  {
    title: "Prostor bez osude",
    text: "Svaka osoba zaslužuje mesto gde može da bude iskrena — bez straha od toga kako će biti primljena ili protumačena.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-cream pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
              {/* Tekst */}
              <div>
                <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">
                  O meni
                </p>
                <h1 className="font-serif text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
                  Vladana Stanković
                </h1>
                <p className="font-sans text-copper text-sm tracking-wide mb-8">
                  KBT psihoterapeut pod supervizijom · SRABCT
                </p>
                <p className="font-sans text-muted text-lg leading-relaxed">
                  Diplomirala psihologiju 2016. i masterirala 2025. godine na Filozofskom fakultetu
                  u Nišu. Od početka karijere radi na tome da svaka osoba dobije prostor da razume
                  sebe, svoje emocije i obrasce ponašanja.
                </p>
              </div>

              {/* Fotografija */}
              <div className="relative order-first md:order-last">
                <div className="absolute inset-0 bg-sage/15 rounded-3xl translate-x-5 translate-y-5 -z-10" />
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                  <Image
                    src="/vladana-2.jpg"
                    alt="Vladana Stanković, KBT psihoterapeut"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pristup radu */}
        <section className="bg-cream-dark py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">Pristup</p>
            <h2 className="font-serif text-4xl text-charcoal mb-10">Kako radim</h2>

            <div className="space-y-6 font-sans text-muted leading-relaxed">
              <p>
                U radu mi je važno da osoba dobije prostor da razume sebe, svoje emocije, obrasce
                ponašanja, bazična uverenja i načine na koje se nosi sa stresom, odnosima i životnim
                promenama.
              </p>
              <p>
                Kroz kognitivno-bihejvioralni terapijski pristup zajedno istražujemo povezanost
                između misli, emocija i ponašanja, kao i načine razmišljanja i reagovanja koji mogu
                doprinositi održavanju teškoća u svakodnevnom funkcionisanju.
              </p>
              <p>
                Rad se prilagođava osobi, njenim potrebama i trenutnim kapacitetima, uz zajedničko
                definisanje ciljeva i tema na kojima radimo. Cilj terapijskog rada nije samo
                ublažavanje simptoma, već i razvoj boljeg razumevanja sebe, fleksibilnijih načina
                razmišljanja i efikasnijih načina prevladavanja problema i životnih izazova.
              </p>
            </div>
          </div>
        </section>

        {/* Vrednosti */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">
                Principi
              </p>
              <h2 className="font-serif text-4xl text-charcoal">Šta je meni važno u radu</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-white border border-sand-light rounded-3xl p-8">
                  <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center mb-5">
                    <span className="font-serif text-sage font-semibold text-sm">{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal mb-3">{v.title}</h3>
                  <p className="font-sans text-muted text-sm leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Obrazovanje */}
        <section className="bg-cream-dark py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">
              Obrazovanje i zvanja
            </p>
            <h2 className="font-serif text-4xl text-charcoal mb-12">Stručno usavršavanje</h2>

            <div className="relative">
              {/* Vertikalna linija */}
              <div className="absolute left-[22px] top-0 bottom-0 w-px bg-sand-light" />

              <div className="space-y-10">
                {credentials.map((c, i) => (
                  <div key={i} className="flex gap-8 items-start relative">
                    {/* Tačka na liniji */}
                    <div className="w-11 h-11 rounded-full bg-white border-2 border-sage flex items-center justify-center flex-shrink-0 z-10">
                      <span className="font-sans text-sage text-xs font-bold">
                        {c.year === "Sada" ? "→" : c.year.slice(2)}
                      </span>
                    </div>
                    <div className="pb-2">
                      <p className="font-sans text-xs text-muted uppercase tracking-wider mb-1">
                        {c.year}
                      </p>
                      <h3 className="font-serif text-xl text-charcoal mb-1">{c.title}</h3>
                      <p className="font-sans text-muted text-sm">{c.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fotografija + citat */}
        <section className="bg-sage py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg w-full md:w-60 flex-shrink-0">
                <Image
                  src="/vladana-3.jpg"
                  alt="Vladana Stanković"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <span className="font-serif text-6xl text-white/20 leading-none select-none">
                  &ldquo;
                </span>
                <blockquote className="font-serif text-2xl lg:text-3xl text-white leading-relaxed -mt-4 mb-8">
                  Nekada je ljudima najpotrebnije upravo mesto na kome ne moraju odmah da budu
                  &ldquo;dobro&rdquo;.
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-px bg-white/40" />
                  <span className="font-sans text-white/70 text-sm tracking-wider">
                    Vladana Stanković
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl text-charcoal mb-4">Napravite prvi korak</h2>
            <p className="font-sans text-muted leading-relaxed mb-10">
              Ako prepoznajete sebe u onome što sam opisala, slobodno pošaljite upit. Odgovor stiže
              sa dostupnim terminima i svim potrebnim informacijama.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#kontakt"
                className="font-sans bg-sage text-white px-8 py-3.5 rounded-full hover:bg-sage-dark transition-colors text-sm tracking-wide"
              >
                Zakaži sesiju
              </Link>
              <Link
                href="/#usluge"
                className="font-sans border border-sage text-sage px-8 py-3.5 rounded-full hover:bg-sage/10 transition-colors text-sm tracking-wide"
              >
                Pogledaj usluge
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
