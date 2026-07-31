import Reveal from "./Reveal";

export default function Quote() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(201,162,77,0.07),transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="font-display block text-[5rem] leading-none text-gold-dim/50">“</span>
          <blockquote className="font-display -mt-6 text-[clamp(1.7rem,3.8vw,3rem)] font-medium italic leading-[1.25] tracking-[-0.01em] text-ivory">
            A pessoa que não lê não tem nenhuma vantagem sobre a que não sabe ler.
          </blockquote>
          <div className="rule mx-auto mt-10 w-24" />
          <p className="eyebrow mt-6 text-faint">Mark Twain</p>
        </Reveal>
      </div>
    </section>
  );
}
