const paths: Record<string, React.ReactNode> = {
  target: (
    <>
      <circle cx="24" cy="24" r="17" />
      <circle cx="24" cy="24" r="9" />
      <circle cx="24" cy="24" r="2" />
      <path d="M24 2v8M24 38v8M2 24h8M38 24h8" />
    </>
  ),
  cart: (
    <>
      <path d="M5 7h6l5 22h20" />
      <path d="M13 13h30l-4 12H15" />
      <circle cx="19" cy="38" r="3" />
      <circle cx="35" cy="38" r="3" />
    </>
  ),
  network: (
    <>
      <circle cx="24" cy="9" r="4" />
      <circle cx="9" cy="34" r="4" />
      <circle cx="39" cy="34" r="4" />
      <circle cx="24" cy="26" r="4" />
      <path d="M24 13v9M21 29l-9 3M27 29l9 3M12 32 21 12M36 32 27 12" />
    </>
  ),
  column: (
    <>
      <path d="M12 12h24M10 42h28" />
      <path d="M15 12v26M24 12v26M33 12v26" />
      <path d="M13 8h22" />
    </>
  ),
};

export default function Glyph({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
