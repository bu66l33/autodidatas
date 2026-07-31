import { site } from "@/lib/site";

function DiscordMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 18" fill="currentColor" className={className} aria-hidden>
      <path d="M20.3 1.6A19 19 0 0 0 15.6.2l-.2.5c-1.9-.3-3.8-.3-5.7 0L9.4.2A19 19 0 0 0 4.7 1.6C1.7 6-.1 10.4 0 14.7a19 19 0 0 0 5.8 2.9l1.2-1.9c-.7-.2-1.3-.5-1.9-.9l.5-.3c3.6 1.7 7.5 1.7 11 0l.5.3c-.6.4-1.2.7-1.9.9l1.2 1.9a19 19 0 0 0 5.8-2.9c.2-5-1.7-9.4-3.9-13.1ZM8.3 12c-1.1 0-2-1-2-2.3S7.1 7.4 8.3 7.4s2 1 2 2.3-.9 2.3-2 2.3Zm7.4 0c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3Z" />
    </svg>
  );
}

export default function DiscordButton({
  label = "Entrar no Discord",
  size = "lg",
}: {
  label?: string;
  size?: "lg" | "md";
}) {
  const dims =
    size === "lg"
      ? "px-9 py-4 text-[0.78rem] tracking-[0.22em]"
      : "px-7 py-3.5 text-[0.7rem] tracking-[0.2em]";

  return (
    <a
      href={site.discordUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-gold group inline-flex items-center gap-3 rounded-sm font-mono font-semibold uppercase ${dims}`}
    >
      <DiscordMark className="h-4 w-[1.35rem] transition-transform duration-300 group-hover:scale-110" />
      {label}
    </a>
  );
}
