"use client";

type StatusBadgeProps = {
  status?: "available" | "open" | "busy";
  text?: string;
};

export default function StatusBadge({
  status = "open",
  text = "Open to Opportunities",
}: StatusBadgeProps) {
  const statusColors = {
    available: "bg-emerald-500",
    open: "bg-emerald-500",
    busy: "bg-amber-500",
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-300">
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${statusColors[status]} opacity-75`}
        />
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${statusColors[status]}`}
        />
      </span>
      {text}
    </div>
  );
}
