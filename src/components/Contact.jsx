import { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    setStatus('Sending...')
    try {
      const res = await fetch(`${BACKEND}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.message || 'Failed')
      setStatus('Thanks — we\'ll be in touch shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">Start Your Project</h2>
          <p className="text-slate-300 mt-4 max-w-xl">Tell us about your goals and we\'ll propose the most effective route to results. There is a Solution for everyone.</p>
          <div className="mt-6 text-slate-300">
            <div>Email: <a className="text-amber-400" href="mailto:contact@kmaglobal.co">contact@kmaglobal.co</a></div>
            <div>Phone: <a className="text-amber-400" href="tel:02080792870">0208 079 2870</a></div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Name" className="bg-slate-950/60 border border-slate-700 rounded px-3 py-2 text-white placeholder-slate-500" />
            <input type="email" name="email" required placeholder="Email" className="bg-slate-950/60 border border-slate-700 rounded px-3 py-2 text-white placeholder-slate-500" />
            <input name="phone" placeholder="Phone" className="bg-slate-950/60 border border-slate-700 rounded px-3 py-2 text-white placeholder-slate-500" />
            <input name="business" placeholder="Business" className="bg-slate-950/60 border border-slate-700 rounded px-3 py-2 text-white placeholder-slate-500" />
            <select name="budget" className="bg-slate-950/60 border border-slate-700 rounded px-3 py-2 text-white placeholder-slate-500">
              <option value="" disabled selected>Budget</option>
              <option>£3,000–£6,000</option>
              <option>£7,000–£15,000+</option>
              <option>£10,000–£25,000+</option>
              <option>£25,000–£50,000+</option>
            </select>
            <div className="sm:col-span-2">
              <textarea name="description" required rows="5" placeholder="Project Description" className="w-full bg-slate-950/60 border border-slate-700 rounded px-3 py-2 text-white placeholder-slate-500" />
            </div>
          </div>
          <button className="mt-4 inline-flex items-center rounded bg-amber-400 text-slate-900 font-semibold px-6 py-3 hover:bg-amber-300">Send</button>
          {status && <div className="mt-3 text-slate-300">{status}</div>}
        </form>
      </div>
    </section>
  )
}
