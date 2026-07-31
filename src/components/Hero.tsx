"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GeometryField from "./GeometryField";
import DiscordButton from "./DiscordButton";
import { site } from "@/lib/site";

const rise = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, delay: 0.35 + i * 0.13, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const tags = [
  "Direct Response",
  "E-commerce",
  "VSL & Criativos",
  "IA na prática",
  "Matemática",
  "Xadrez",
  "Filosofia",
];

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-24 text-center"
    >
      <GeometryField />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(14px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-7 w-[144px] sm:w-[232px]"
        >
          <Image
            src="/logo.png"
            alt="Autodidatas"
            width={392}
            height={392}
            priority
            className="h-auto w-full drop-shadow-[0_0_60px_rgba(201,162,77,0.22)]"
          />
        </motion.div>

        <motion.p
          variants={rise}
          custom={0}
          initial="hidden"
          animate="show"
          className="eyebrow text-gold/70"
        >
          Comunidade privada · {site.founded}
        </motion.p>

        <motion.h1
          variants={rise}
          custom={1}
          initial="hidden"
          animate="show"
          className="font-display mt-6 text-[clamp(2.15rem,7.2vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.02em] sm:leading-[0.98]"
        >
          A média é confortável.
          <br />
          <span className="gold-text italic">Por isso está lotada.</span>
        </motion.h1>

        <motion.p
          variants={rise}
          custom={2}
          initial="hidden"
          animate="show"
          className="mx-auto mt-7 max-w-xl text-[1rem] leading-[1.75] text-muted sm:text-[1.1rem]"
        >
          Onde se encontram os que aprenderam a estudar sem professor, sem permissão e sem
          plateia.
        </motion.p>

        <motion.div
          variants={rise}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <DiscordButton />
          <a
            href="#manifesto"
            className="btn-ghost rounded-sm px-8 py-4 font-mono text-[0.78rem] uppercase tracking-[0.22em]"
          >
            Ler o manifesto
          </a>
        </motion.div>

        <motion.div
          variants={rise}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
        >
          {tags.map((t, i) => (
            <span key={t} className="flex items-center gap-3">
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-faint">
                {t}
              </span>
              {i < tags.length - 1 && <span className="text-gold-dim/60">·</span>}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.2 }}
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="mx-auto h-10 w-px bg-gradient-to-b from-transparent via-gold-dim to-transparent" />
      </motion.div>
    </section>
  );
}
