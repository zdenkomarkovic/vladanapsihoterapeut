export default function Quote() {
  return (
    <section className="bg-sage-dark py-28 lg:py-36">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="font-serif text-8xl text-white/60 leading-none select-none">&ldquo;</span>
        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed -mt-6">
          Nekada je ljudima najpotrebnije upravo mesto na kome ne moraju odmah
          da budu &ldquo;dobro&rdquo;.
        </blockquote>
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="w-12 h-px bg-white/60" />
          <span className="font-sans text-white text-sm tracking-wider">Vladana Stanković</span>
          <div className="w-12 h-px bg-white/60" />
        </div>
      </div>
    </section>
  );
}
