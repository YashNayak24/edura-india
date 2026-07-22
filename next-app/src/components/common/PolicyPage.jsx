export default function PolicyPage({ title, updated = '22 July 2026', children }) {
  return (
    <main className="min-h-screen bg-[#F7F9FF] px-4 pb-20 pt-[150px] font-jakarta">
      <article className="mx-auto max-w-4xl rounded-2xl border border-[#DDE5F8] bg-white p-6 shadow-[0_12px_40px_rgba(9,78,147,.07)] sm:p-10">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#094E93]">Edura India</p>
        <h1 className="mb-2 text-3xl font-extrabold text-[#0D1E42] sm:text-4xl">{title}</h1>
        <p className="mb-8 text-sm text-[#5A6A8A]">Last updated: {updated}</p>
        <div className="space-y-6 text-[15px] leading-7 text-[#41516F]">{children}</div>
      </article>
    </main>
  );
}
