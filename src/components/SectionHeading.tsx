import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "text-center" : ""}>
      <p className="eyebrow text-gold/60">{eyebrow}</p>
      <h2 className="font-display mt-5 text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 max-w-2xl text-[0.98rem] leading-[1.75] text-muted sm:text-[1.06rem] ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
      <div className={`rule mt-9 w-40 ${centered ? "mx-auto" : ""}`} />
    </Reveal>
  );
}
