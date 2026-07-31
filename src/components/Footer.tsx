import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={30} height={30} className="opacity-70" />
          <span className="eyebrow text-faint">Autodidatas · {site.founded}</span>
        </div>

        <p className="font-mono text-[0.68rem] tracking-[0.14em] text-faint">
          Feito por quem aprendeu sozinho.
        </p>

        <div className="flex items-center gap-7">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow text-faint transition-colors hover:text-gold"
          >
            Instagram
          </a>
          <a
            href={site.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow text-faint transition-colors hover:text-gold"
          >
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}
