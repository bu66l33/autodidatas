"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { faq } from "@/lib/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-32 sm:py-40">
      <SectionHeading
        eyebrow="Antes de entrar"
        title={
          <>
            Perguntas
            <span className="gold-text italic"> honestas</span>.
          </>
        }
      />

      <div className="mt-16 border-t border-line-soft">
        {faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={i * 0.04}>
              <div className="border-b border-line-soft">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-7 text-left"
                >
                  <span
                    className={`font-display text-[1.25rem] font-medium leading-snug transition-colors duration-300 sm:text-[1.4rem] ${
                      isOpen ? "text-gold" : "text-ivory"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`mt-1 shrink-0 font-mono text-lg text-gold-dim transition-transform duration-400 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-8 text-[1rem] leading-[1.75] text-muted">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
