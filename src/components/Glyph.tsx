const paths: Record<string, React.ReactNode> = {
  play: (
    <>
      <rect x="5" y="10" width="38" height="28" rx="2" />
      <path d="M20 19l10 5-10 5z" />
      <path d="M14 4l4 6M26 4l4 6" />
    </>
  ),
  tools: (
    <>
      <path d="M30 6a9 9 0 0 0 11 12L28 31 17 20 30 6z" />
      <path d="M17 20 6 31a4 4 0 0 0 0 6l4 4a4 4 0 0 0 6 0l11-11" />
      <circle cx="13" cy="35" r="1.5" />
    </>
  ),
  book: (
    <>
      <path d="M8 8h12a5 5 0 0 1 4 2 5 5 0 0 1 4-2h12v28H28a4 4 0 0 0-4 4 4 4 0 0 0-4-4H8z" />
      <path d="M24 12v28" />
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
