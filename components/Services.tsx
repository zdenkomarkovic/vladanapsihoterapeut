import Link from "next/link";

const services = [
  {
    id: "individualne",
    tag: "Najpopularnije",
    title: "Individualne seanse",
    subtitle: "Online · 50 minuta",
    description:
      "Online individualne seanse za odrasle. Rad se prilagođava osobi, njenim potrebama i trenutnim kapacitetima, uz zajedničko definisanje ciljeva i tema.",
    cta: "Saznaj više",
    href: "/individualne-seanse",
    accent: true,
  },
  {
    id: "zajednica",
    tag: "Grupno",
    title: "Zajednica mama",
    subtitle: "3× mesečno · 90 minuta",
    description:
      "Stručno vođena mala grupa namenjena mamama i trudnicama koje žele podršku, razmenu iskustava i prostor bez osude. Razgovaramo o majčinstvu, odnosima i emocionalnom opterećenju.",
    cta: "Saznaj više",
    href: "/zajednica-mama",
    accent: false,
  },
  {
    id: "paket",
    tag: "Za mame",
    title: "Paket podrške",
    subtitle: "4 sesije mesečno + konsultacije",
    description:
      "Paket namenjen mamama i trudnicama koje žele kontinuitet i prostor za razgovor tokom prilagođavanja novoj životnoj ulozi. Uključuje 4 individualne online sesije i mogućnost kraćih konsultacija.",
    cta: "Saznaj više",
    href: "/paket-podrske",
    accent: false,
  },
  {
    id: "radionice",
    tag: "Grupno ili individualno",
    title: "Radionice asertivne komunikacije",
    subtitle: "Prilagodljiv format",
    description:
      "Radionice usmerene na postavljanje granica, izražavanje potreba na jasan način, razvoj samopouzdanije komunikacije i bolje snalaženje u konfliktima — u privatnom i poslovnom okruženju.",
    cta: "Saznaj više",
    href: "/radionice",
    accent: false,
  },
];

export default function Services() {
  return (
    <section id="usluge" className="bg-cream-dark py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">
            Načini rada
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal">Usluge</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              className={`rounded-3xl p-8 flex flex-col gap-5 group transition-transform hover:-translate-y-1 ${
                s.accent
                  ? "bg-sage text-white"
                  : "bg-white border border-sand-light hover:border-sage/40"
              }`}
            >
              <div>
                <span
                  className={`font-sans text-xs uppercase tracking-widest px-3 py-1 rounded-full ${
                    s.accent
                      ? "bg-white/20 text-white"
                      : "bg-sage/10 text-sage"
                  }`}
                >
                  {s.tag}
                </span>
              </div>

              <div>
                <h3
                  className={`font-serif text-2xl lg:text-3xl mb-1 ${
                    s.accent ? "text-white" : "text-charcoal"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`font-sans text-sm ${
                    s.accent ? "text-white/70" : "text-muted"
                  }`}
                >
                  {s.subtitle}
                </p>
              </div>

              <p
                className={`font-sans text-sm leading-relaxed flex-1 ${
                  s.accent ? "text-white/85" : "text-muted"
                }`}
              >
                {s.description}
              </p>

              <div
                className={`inline-flex items-center gap-2 font-sans text-sm w-fit ${
                  s.accent ? "text-white/90" : "text-sage"
                }`}
              >
                {s.cta}
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
