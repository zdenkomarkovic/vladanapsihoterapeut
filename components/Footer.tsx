import Image from "next/image";
import Link from "next/link";

const INSTAGRAM = "https://www.instagram.com/unutrasnjiglasmame";
const TIKTOK = "https://www.tiktok.com/@unutrasnji.glas.m6E";
const EMAIL = "psihoterapijavladana@gmail.com";

const navLinks = [
  { href: "/o-meni", label: "O meni" },
  { href: "/individualne-seanse", label: "Individualne seanse" },
  { href: "/zajednica-mama", label: "Zajednica mama" },
  { href: "/paket-podrske", label: "Paket podrške" },
  { href: "/radionice", label: "Radionice" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-sage">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo + opis */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Vladana Stanković"
                width={160}
                height={160}
                className=""
              />
            </Link>
            <p className="font-sans text-white/70 text-sm leading-relaxed">
              Psihološka podrška — prostor za razumevanje sebe, emocija i odnosa.
            </p>
            <p className="font-sans text-white/70 text-sm">
              KBT psihoterapeut pod supervizijom · SRABCT
            </p>
          </div>

          {/* Navigacija */}
          <div>
            <p className="font-sans text-white/70 text-xs uppercase tracking-widest mb-5">
              Stranice
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <p className="font-sans text-white/70 text-xs uppercase tracking-widest mb-5">
              Kontakt
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 font-sans text-white/70 hover:text-white text-sm transition-colors"
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                {EMAIL}
              </a>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-sans text-white/70 hover:text-white text-sm transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @unutrasnjiglasmame
              </a>

              <a
                href={TIKTOK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-sans text-white/70 hover:text-white text-sm transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.76a4.85 4.85 0 01-1.02-.07z" />
                </svg>
                @unutrasnji.glas.m6E
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-white/70 text-sm">
            © {new Date().getFullYear()} Vladana Stanković. Sva prava zadržana.
          </p>
          <a
            href="https://manikamwebsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-white/70 hover:text-white/60 text-sm transition-colors"
          >
            Izrada sajta: Manikam Web Solutions
          </a>
        </div>
      </div>
    </footer>
  );
}
