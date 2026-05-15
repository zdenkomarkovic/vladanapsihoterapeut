"use client";

import { useState } from "react";

const EMAIL = "psihoterapijavladana@gmail.com";
const INSTAGRAM = "https://www.instagram.com/unutrasnjiglasmame";
const TIKTOK = "https://www.tiktok.com/@unutrasnji.glas.m6E";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    schedule: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Došlo je do greške. Pokušajte ponovo.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", schedule: "", message: "" });
    } catch {
      setErrorMsg("Greška u mreži. Proverite konekciju i pokušajte ponovo.");
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="bg-cream py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-start">
          {/* Leva strana - tekst */}
          <div>
            <p className="font-sans text-sage text-xs uppercase tracking-[0.2em] mb-4 md:mb-10">
              Kontakt
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-6 md:mb-16 leading-tight">
              Napravite prvi korak
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-sage"
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
                </div>
                <div>
                  <p className="font-sans text-xs text-muted uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-sans text-charcoal hover:text-sage transition-colors text-sm"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs text-muted uppercase tracking-wider mb-0.5">
                    Instagram
                  </p>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-charcoal hover:text-sage transition-colors text-sm"
                  >
                    @unutrasnjiglasmame
                  </a>
                </div>
              </div>

              {/* TikTok */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.76a4.85 4.85 0 01-1.02-.07z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs text-muted uppercase tracking-wider mb-0.5">
                    TikTok
                  </p>
                  <a
                    href={TIKTOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-charcoal hover:text-sage transition-colors text-sm"
                  >
                    @unutrasnji.glas.m6E
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desna strana - forma */}
          <div className="bg-white border border-sand-light rounded-3xl p-8 lg:p-10">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-sage"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-2">Upit je poslat!</h3>
                <p className="font-sans text-muted text-sm leading-relaxed mb-6">
                  Hvala vam. Odgovor sa dostupnim terminima stiže u najkraćem mogućem roku.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="font-sans text-sm text-sage hover:text-sage-dark transition-colors underline underline-offset-4"
                >
                  Pošalji novi upit
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="font-serif text-2xl text-charcoal mb-2">Pošaljite upit</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ime i prezime"
                      required
                      className="w-full border border-sand-light rounded-xl px-4 py-3 bg-cream/50 font-sans text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-sage transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Mejl adresa"
                      required
                      className="w-full border border-sand-light rounded-xl px-4 py-3 bg-cream/50 font-sans text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-sage transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Broj telefona"
                      required
                      className="w-full border border-sand-light rounded-xl px-4 py-3 bg-cream/50 font-sans text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-sage transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="schedule"
                      value={form.schedule}
                      onChange={handleChange}
                      placeholder="Okvirni termini (npr. radnim danima popodne)"
                      required
                      className="w-full border border-sand-light rounded-xl px-4 py-3 bg-cream/50 font-sans text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-sage transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Poruka (opciono)"
                      rows={3}
                      className="w-full border border-sand-light rounded-xl px-4 py-3 bg-cream/50 font-sans text-sm text-charcoal placeholder:text-muted focus:outline-none focus:border-sage transition-colors resize-none"
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p className="font-sans text-sm text-red-500 mb-4">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full font-sans text-sm bg-sage text-white px-8 py-4 rounded-full hover:bg-sage-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Slanje..." : "Pošalji upit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
