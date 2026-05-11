export default function PortalLoading() {
  return (
    <div className="max-w-5xl animate-pulse">
      <div className="h-4 w-32 bg-[var(--sand)] rounded-full mb-3" />
      <div className="h-10 w-64 bg-[var(--sand)] rounded-2xl mb-10" />

      <div className="bg-[var(--card-bg)] rounded-[2rem] p-8 mb-6">
        <div className="h-4 w-24 bg-[var(--sand)] rounded-full mb-3" />
        <div className="h-8 w-80 bg-[var(--sand)] rounded-xl mb-4" />
        <div className="h-3 w-96 bg-[var(--sand)] rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-[var(--card-bg)] rounded-2xl p-6">
            <div className="h-3 w-20 bg-[var(--sand)] rounded-full mb-3" />
            <div className="h-8 w-16 bg-[var(--sand)] rounded-xl mb-2" />
            <div className="h-3 w-24 bg-[var(--sand)] rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
