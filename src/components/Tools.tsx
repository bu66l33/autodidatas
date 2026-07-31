import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { topics } from "@/lib/site";

export default function Tools() {
  return (
    <section id="ferramentas" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-28 sm:py-36">
      <SectionHeading
        eyebrow="Na mesa"
        title={
          <>
            Assuntos que a gente
            <span className="gold-text italic"> trata e discute</span>.
          </>
        }
        subtitle="Ferramenta, canal, tática ou teoria: o que aparece aqui é o que realmente circula nas conversas."
      />

      <div className="mt-14 flex flex-wrap justify-center gap-3">
        {topics.map((t, i) => (
          <Reveal key={t} delay={(i % 6) * 0.05}>
            <span className="card corner block rounded-sm px-5 py-3 font-mono text-[0.74rem] uppercase tracking-[0.16em] text-muted">
              {t}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
