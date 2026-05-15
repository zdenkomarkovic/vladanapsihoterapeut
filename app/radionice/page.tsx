import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, SITE_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Radionice asertivne komunikacije",
  description:
    "Grupne i individualne radionice asertivne komunikacije — postavljanje granica, izražavanje potreba i samopouzdanija komunikacija u privatnom i poslovnom okruženju.",
  alternates: {
    canonical: `${SITE_URL}/radionice`,
  },
};

const EMAIL = "psihoterapijavladana@gmail.com";
const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Upit za Radionice asertivne komunikacije"
)}&body=${encodeURIComponent(
  "Poštovana Vladana,\n\nZanima me radionica asertivne komunikacije.\n\nIme i prezime: \nKontakt telefon/mejl: \nBroj osoba: \n\nHvala,"
)}`;

const topics = [
  {
    title: "Postavljanje granica bez osećaja krivice",
    text: "Kako reći ne bez osećaja krivice, prepoznati lične granice i održavati ih u svakodnevnim situacijama.",
  },
  {
    title: "Izražavanje mišljenja i potreba na jasan način",
    text: "Kako jasno i direktno komunicirati ono što mislite i trebate, bez agresivnosti i pasivnosti.",
  },
  {
    title: "Razvijanje samopouzdanije komunikacije",
    text: "Razvijanje sigurnijeg nastupa u razgovorima — na poslu, u porodici i u prijateljskim odnosima.",
  },
  {
    title: "Smanjivanje pasivne ili impulsivne komunikacije",
    text: "Prepoznavanje obrazaca koji vas koče i zamena zdravijim, asertivnim načinima reagovanja.",
  },
  {
    title: "Bolje snalaženje u konfliktima",
    text: "Kako mirno i konstruktivno rešavati neslaganja bez eskalacije, bez povlačenja i bez agresije.",
  },
  {
    title: "Unapređivanje komunikacije u privatnom i poslovnom okruženju",
    text: "Primena asertivnih veština u svakodnevnom životu — od bliskih odnosa do poslovnog okruženja.",
  },
];

const formats = [
  {
    title: "Grupne radionice",
    text: "Rad u maloj grupi učesnika koji žele da razviju veštine komunikacije. Format omogućava praksu kroz interakciju sa drugima.",
    icon: "G",
  },
  {
    title: "Individualne radionice",
    text: "Prilagođen program za jednu osobu, sa fokusom na specifične izazove i situacije iz vašeg svakodnevnog života.",
    icon: "I",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Radionice asertivne komunikacije",
  description:
    "Grupne i individualne radionice za razvoj veština asertivne komunikacije — postavljanje granica, izražavanje potreba i zdraviji načini reagovanja u svakodnevnim odnosima.",
  url: `${SITE_URL}/radionice`,
  provider: {
    "@type": "Person",
    name: "Vladana Stanković",
    email: SITE_EMAIL,
  },
  serviceType: "Edukativna radionica",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceType: "Grupno ili individualno",
    availableLanguage: "Serbian",
  },
};

export default function RadionicePage() {
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
              Edukativni program
            </p>
            <h1 className="font-serif text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              Radionice asertivne komunikacije
            </h1>
            <p className="font-sans text-muted text-lg leading-relaxed max-w-2xl mb-10">
              Radionice namenjene osobama koje žele da razviju jasniji, sigurniji i zdraviji
              način komunikacije u svakodnevnim odnosima — grupno ili individualno,
              prilagođeno potrebama grupe.
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
                Grupno ili individualno
              </div>
            </div>
          </div>
        </section>

        {/* Formati */}
        <section className="bg-cream-dark py-16">
          <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-2 gap-5">
            {formats.map((f) => (
              <div key={f.title} className="bg-white border border-sand-light rounded-3xl p-7 flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-sage font-semibold">{f.icon}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal mb-2">{f.title}</h3>
                  <p className="font-sans text-muted text-sm leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Teme */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">Program</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-4 leading-tight">
              Teme koje obrađujemo
            </h2>
            <p className="font-sans text-muted text-sm leading-relaxed mb-12 max-w-xl">
              Teme i format prilagođavaju se potrebama grupe i praktičnoj primeni
              u svakodnevnim situacijama.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {topics.map((topic, i) => (
                <div key={i} className="bg-cream-dark border border-sand-light rounded-3xl p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif text-3xl text-sage/20 font-semibold leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-lg text-charcoal">{topic.title}</h3>
                  </div>
                  <p className="font-sans text-muted text-sm leading-relaxed">{topic.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Za koga */}
        <section className="bg-sage py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-sans text-white/60 text-xs uppercase tracking-[0.2em] mb-4">Za koga</p>
                <h2 className="font-serif text-3xl lg:text-4xl text-white mb-6 leading-tight">
                  Kome su radionice namenjene
                </h2>
                <p className="font-sans text-white/80 leading-relaxed text-sm">
                  Radionice su otvorene za svakoga ko želi da unapredi način na koji
                  komunicira — bez obzira na to da li se bori sa postavljanjem granica,
                  izražavanjem potreba ili snalaženjem u konfliktima.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Osobe koje teško postavljaju granice u odnosima",
                  "Oni koji osećaju da ne znaju kako da iskažu ono što misle ili trebaju",
                  "Osobe koje žele sigurniji nastup u poslovnoj komunikaciji",
                  "Oni koji se bore sa pasivnom ili impulsivnom komunikacijom",
                  "Svako ko želi zdravije odnose kroz bolju komunikaciju",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-white/10 rounded-2xl px-5 py-4"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                    <span className="font-sans text-white/90 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
