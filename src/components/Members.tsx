import Glyph from "./Glyph";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { members } from "@/lib/site";

export default function Members() {
  return (
    <section
      id="membros"
      className="relative scroll-mt-24 border-y border-line-soft bg-ink-2/60 py-28 sm:py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,162,77,0.06),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Área de membros"
          title={
            <>
              Tudo liberado
              <span className="gold-text italic"> por dentro</span>.
            </>
          }
          subtitle="Quem entra na comunidade recebe acesso à área de membros. Vídeos, ferramentas e livros gratuitos, sem custo nenhum."
        />

        <div className="mt-16 grid gap-px overflow-hidden border border-line-soft bg-line-soft md:grid-cols-3">
          {members.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <article className="card corner flex h-full flex-col border-0 bg-ink p-8 sm:p-10">
                <Glyph name={m.glyph} className="h-10 w-10 text-gold-dim" />
                <h3 className="font-display mt-7 text-[1.6rem] font-semibold leading-tight text-ivory">
                  {m.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-muted">{m.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
