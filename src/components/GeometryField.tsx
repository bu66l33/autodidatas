"use client";

import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2.6, delay: 0.25 + i * 0.16, ease: [0.16, 1, 0.3, 1] as const },
      opacity: { duration: 0.6, delay: 0.25 + i * 0.16 },
    },
  }),
};

export default function GeometryField() {
  const ticks = Array.from({ length: 48 }, (_, i) => i);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[130vmin] w-[130vmin] -translate-x-1/2 -translate-y-1/2 opacity-40">
        <motion.svg
          viewBox="0 0 600 600"
          className="h-full w-full"
          fill="none"
          stroke="var(--gold)"
          initial="hidden"
          animate="show"
        >
          <g className="slow-spin" style={{ transformOrigin: "300px 300px" }}>
            {ticks.map((i) => {
              const a = (i / ticks.length) * Math.PI * 2;
              const r1 = i % 4 === 0 ? 246 : 254;
              const r2 = 260;
              return (
                <line
                  key={i}
                  x1={(300 + Math.cos(a) * r1).toFixed(2)}
                  y1={(300 + Math.sin(a) * r1).toFixed(2)}
                  x2={(300 + Math.cos(a) * r2).toFixed(2)}
                  y2={(300 + Math.sin(a) * r2).toFixed(2)}
                  strokeWidth="0.6"
                  opacity="0.28"
                />
              );
            })}
            <motion.circle
              cx="300"
              cy="300"
              r="260"
              strokeWidth="0.6"
              opacity="0.3"
              variants={draw}
              custom={0}
            />
          </g>

          <g className="slow-spin-rev" style={{ transformOrigin: "300px 300px" }}>
            <motion.circle
              cx="300"
              cy="300"
              r="196"
              strokeWidth="0.6"
              opacity="0.22"
              strokeDasharray="2 9"
              variants={draw}
              custom={1}
            />
            <motion.polygon
              points="300,104 470,398 130,398"
              strokeWidth="0.6"
              opacity="0.16"
              variants={draw}
              custom={2}
            />
            <motion.polygon
              points="300,496 130,202 470,202"
              strokeWidth="0.6"
              opacity="0.1"
              variants={draw}
              custom={3}
            />
          </g>

          <motion.circle
            cx="300"
            cy="300"
            r="132"
            strokeWidth="0.6"
            opacity="0.2"
            variants={draw}
            custom={4}
          />
          <motion.path
            d="M300 168a132 132 0 0 1 0 264"
            strokeWidth="0.6"
            opacity="0.25"
            variants={draw}
            custom={5}
          />
          <motion.path
            d="M168 300h264M300 168v264"
            strokeWidth="0.5"
            opacity="0.12"
            variants={draw}
            custom={6}
          />
        </motion.svg>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_44%_40%_at_50%_52%,rgba(8,7,10,0.9),rgba(8,7,10,0.55)_55%,transparent_78%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_58%_46%_at_50%_44%,rgba(201,162,77,0.1),transparent_72%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
}
