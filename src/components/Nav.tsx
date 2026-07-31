"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";

const links = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#areas", label: "Áreas" },
  { href: "#ferramentas", label: "Ferramentas" },
  { href: "#duvidas", label: "Dúvidas" },
];

export default function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -70, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 top-0 z-50 border-b border-line-soft bg-ink/80 backdrop-blur-xl"
        >
          <nav className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-3 md:h-20 md:flex-row md:justify-between md:gap-0 md:py-0">
            <a href="#topo" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Autodidatas"
                width={168}
                height={168}
                className="h-[68px] w-[68px] opacity-95"
              />
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="eyebrow text-faint transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <a
              href={site.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full rounded-sm px-5 py-3 text-center font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] md:w-auto md:py-2.5"
            >
              Juntar-se à comunidade
            </a>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
