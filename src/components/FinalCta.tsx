import Image from "next/image";
import DiscordButton from "./DiscordButton";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-line-soft py-32 sm:py-44">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_70%_at_50%_100%,rgba(201,162,77,0.13),transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-dim/10" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[54vmin] w-[54vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-dim/10" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <Image
            src="/logo.png"
            alt="Autodidatas"
            width={260}
            height={260}
            className="mx-auto w-[112px] opacity-90 drop-shadow-[0_0_50px_rgba(201,162,77,0.25)]"
          />
          <h2 className="font-display mt-10 text-[clamp(2.2rem,5.4vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.02em]">
            A porta está aberta.
            <br />
            <span className="gold-text italic">Atravessar é com você.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-[1.05rem] leading-[1.75] text-muted">
            Entrada gratuita, saída livre, e nenhuma tolerância com preguiça intelectual. Se
            você leu até aqui e continuou concordando, provavelmente já é um de nós.
          </p>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <DiscordButton label="Entrar no Discord" />
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost rounded-sm px-8 py-4 font-mono text-[0.78rem] uppercase tracking-[0.22em]"
            >
              Seguir no Instagram
            </a>
          </div>
          <p className="eyebrow mt-8 text-faint">
            Gratuito · Sem cadastro · Basta um clique
          </p>
        </Reveal>
      </div>
    </section>
  );
}
