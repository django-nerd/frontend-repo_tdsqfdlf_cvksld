import { useEffect, useState } from 'react'

const DATA = [
  {
    quote: 'The build quality and pace were exceptional. We shipped in weeks, not months.',
    name: 'James R.',
    role: 'Founder, Northlane'
  },
  {
    quote: 'A true partner. They solved problems other agencies couldn\'t.',
    name: 'Sophia K.',
    role: 'COO, Aster & Co'
  },
  {
    quote: 'Our new site converts 2.3x better and maintenance is a breeze.',
    name: 'Hannah M.',
    role: 'Marketing Lead, Vantage Motors'
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % DATA.length), 4000)
    return () => clearInterval(id)
  }, [])

  const t = DATA[index]

  return (
    <section className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="text-amber-400 text-sm uppercase tracking-widest mb-4">Testimonials</div>
        <blockquote className="text-white text-2xl leading-relaxed">“{t.quote}”</blockquote>
        <div className="text-slate-300 mt-4">{t.name} — {t.role}</div>
        <div className="flex justify-center gap-2 mt-6">
          {DATA.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`h-2 w-2 rounded-full ${index===i? 'bg-amber-400':'bg-slate-700'}`} aria-label={`Go to slide ${i+1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
