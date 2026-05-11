export default function AdminLoading() {
  return (
    <div className="max-w-6xl animate-pulse">
      <div className="h-4 w-40 bg-[var(--sand)] rounded-full mb-3" />
      <div className="h-10 w-72 bg-[var(--sand)] rounded-2xl mb-10" />

      <div className="grid md:grid-cols-4 gap-4 mb-10">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-[var(--card-bg)] rounded-2xl p-6">
            <div className="h-3 w-20 bg-[var(--sand)] rounded-full mb-3" />
            <div className="h-8 w-16 bg-[var(--sand)] rounded-xl mb-2" />
            <div className="h-3 w-24 bg-[var(--sand)] rounded-full" />
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-[var(--card-bg)] rounded-2xl p-8 h-64" />
        <div className="bg-[var(--card-bg)] rounded-2xl p-8 h-64" />
      </div>
    </div>
  );
}
