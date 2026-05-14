import Link from "next/link";

const credentials = [
  { year: "2016", text: "Diplomirala psihologiju, Filozofski fakultet, Niš" },
  { year: "2016", text: "Instruktor asertivne komunikacije (SRABCT)" },
  { year: "2025", text: "Masterirala psihologiju, Filozofski fakultet, Niš" },
  { year: "Sada", text: "KBT psihoterapeut pod supervizijom u okviru SRABCT-a" },
];

export default function About() {
  return (
    <section id="o-meni" className="bg-cream-dark py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4 text-center">
          O meni
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-8 leading-tight text-center">
          Vladana Stanković
        </h2>

        <p className="font-sans text-muted leading-relaxed text-center max-w-2xl mx-auto mb-14">
          U radu mi je važno da osoba dobije prostor da razume sebe, svoje emocije, obrasce
          ponašanja i načine na koje se nosi sa stresom, odnosima i životnim promenama. Verujem
          u postepen proces rada, individualni pristup i saradnički odnos u terapiji.
        </p>

        {/* Obrazovanje i zvanja */}
        <div className="border-t border-sand-light pt-10 grid sm:grid-cols-2 gap-6 mb-12">
          {credentials.map((c, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="font-sans text-sage text-xs font-semibold uppercase tracking-wider min-w-[44px] pt-0.5">
                {c.year}
              </span>
              <span className="font-sans text-charcoal text-sm leading-relaxed">{c.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/o-meni"
            className="inline-flex items-center gap-2 font-sans text-sm text-sage hover:text-sage-dark transition-colors group"
          >
            Pročitaj više o meni
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
