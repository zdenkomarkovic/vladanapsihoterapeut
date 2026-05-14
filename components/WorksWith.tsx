import Link from "next/link";

const areas = [
  "Anksioznost",
  "Panični napadi",
  "Socijalna anksioznost",
  "Specifične fobije",
  "Opsesivne misli",
  "Agorafobija",
  "PTSP",
  "Depresivnost",
  "Preopterećenost i stres",
  "Prokrastinacija",
  "Partnerski i porodični odnosi",
  "Teškoće u komunikaciji",
];

export default function WorksWith() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-start">

          {/* Leva strana - tekst */}
          <div className="md:sticky md:top-32">
            <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4">
              Oblasti rada
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
              Sa čime radim
            </h2>
            <p className="font-sans text-muted leading-relaxed mb-8">
              Ako se prepoznajete u nekim od ovih tema — bilo da se radi o dugotrajnoj
              teškoći ili nečemu što je tek počelo da vas opterećuje — tu sam da zajedno
              pronađemo put napred.
            </p>
            <p className="font-sans text-muted leading-relaxed mb-10">
              Svaka osoba donosi svoju priču. Rad se uvek prilagođava vama — vašem tempu,
              vašim potrebama i onome što je u datom trenutku najvažnije.
            </p>
            <Link
              href="/individualne-seanse"
              className="inline-flex items-center gap-2 font-sans text-sm text-sage hover:text-sage-dark transition-colors group"
            >
              Saznaj više o individualnim sesijama
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Desna strana - lista */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 py-3.5 border-b border-sand-light last:border-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                <span className="font-sans text-charcoal text-sm">{area}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
