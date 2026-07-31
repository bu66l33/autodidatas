import Glyph from "./Glyph";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { areas } from "@/lib/site";

export default function Areas() {
  return (
    <section
      id="areas"
      className="relative scroll-mt-24 border-y border-line-soft bg-ink-2/60 py-28 sm:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,162,77,0.06),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="As quatro áreas"
          title={
            <>
              Assuntos que ninguém junta.
              <br />
              <span className="gold-text italic">A gente junta.</span>
            </>
          }
          subtitle="Cada área tem os seus canais, e todas se cruzam. Não é um servidor de temas soltos — é um raciocínio só, visto de quatro ângulos."
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-line-soft bg-line-soft md:grid-cols-2">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 0.08}>
              <article className="card corner flex h-full flex-col border-0 bg-ink p-8 sm:p-10">
                <div className="flex items-start justify-between">
                  <Glyph name={a.glyph} className="h-10 w-10 text-gold-dim" />
                  <span className="font-mono text-[0.7rem] tracking-[0.2em] text-faint">
                    {a.numeral}
                  </span>
                </div>

                <h3 className="font-display mt-7 text-[1.75rem] font-semibold leading-tight text-ivory">
                  {a.title}
                </h3>
                <p className="font-display mt-2 text-[1.05rem] italic text-gold/85">{a.line}</p>
                <p className="mt-4 text-[1rem] leading-[1.75] text-muted">{a.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
