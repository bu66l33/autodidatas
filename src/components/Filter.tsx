import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { forYou, notFor } from "@/lib/site";

export default function Filter() {
  return (
    <section className="relative border-y border-line-soft bg-ink-2/60 py-32 sm:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="A porta é estreita"
          title={
            <>
              Isto não é para
              <span className="gold-text italic"> todo mundo</span>.
            </>
          }
          subtitle="E não deveria mesmo ser. Uma comunidade vale exatamente o que ela recusa. Leia as duas colunas antes de clicar em qualquer botão."
        />

        <div className="mt-20 grid gap-px overflow-hidden border border-line-soft bg-line-soft md:grid-cols-2">
          <Reveal>
            <div className="h-full bg-ink p-9 sm:p-11">
              <p className="eyebrow text-wine">Não entre se</p>
              <ul className="mt-8 space-y-6">
                {notFor.map((t) => (
                  <li key={t} className="flex gap-4 text-[1rem] leading-[1.75] text-faint">
                    <span className="mt-1 shrink-0 font-mono text-wine">✕</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full bg-ink p-9 sm:p-11">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(201,162,77,0.07),transparent)]" />
              <div className="relative">
                <p className="eyebrow text-gold">Entre se</p>
                <ul className="mt-8 space-y-6">
                  {forYou.map((t) => (
                    <li key={t} className="flex gap-4 text-[1rem] leading-[1.75] text-ivory">
                      <span className="mt-1 shrink-0 font-mono text-gold">✦</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
