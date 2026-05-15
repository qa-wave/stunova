export default function BlogLoading() {
  return (
    <div className="max-w-4xl mx-auto pt-8 animate-pulse">
      <div className="h-4 w-24 bg-[var(--sand)] rounded-full mb-3" />
      <div className="h-10 w-48 bg-[var(--sand)] rounded-2xl mb-4" />
      <div className="h-4 w-80 bg-[var(--sand)] rounded-full mb-12" />

      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-[var(--card-bg)] border border-[var(--ring-gold)] rounded-[1.25rem] p-8">
            <div className="flex gap-4 mb-3">
              <div className="h-3 w-24 bg-[var(--sand)] rounded-full" />
              <div className="h-3 w-16 bg-[var(--sand)] rounded-full" />
            </div>
            <div className="h-6 w-3/4 bg-[var(--sand)] rounded-xl mb-3" />
            <div className="h-4 w-full bg-[var(--sand)] rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
