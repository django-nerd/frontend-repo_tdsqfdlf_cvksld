export default function Trust() {
  return (
    <section className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            {label:'WIX Studio Certified'},
            {label:'UK-based'},
            {label:'Custom Code'},
            {label:'AI-first'}
          ].map((b) => (
            <div key={b.label} className="rounded-2xl border border-slate-800 bg-slate-900/40 py-6 text-slate-300">{b.label}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
