export function Logo({
  variant = "default",
}: {
  variant?: "default" | "light";
}) {
  const text = variant === "light" ? "text-white" : "text-foreground";
  return (
    <span className="flex items-center gap-2">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-hero shadow-glow">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 7h12l-1 13H7L6 7z" />
          <path d="M9 7a3 3 0 0 1 6 0" />
          <circle cx="10.5" cy="13" r="1.2" />
          <circle cx="13.5" cy="13" r="1.2" />
          <path d="M10.5 13.6c.6.6 1.8.6 2.4 0" />
        </svg>
      </span>
      <span className={`font-display text-xl font-bold tracking-tight ${text}`}>
        Shop<span className="text-primary">Link</span>
      </span>
    </span>
  );
}
