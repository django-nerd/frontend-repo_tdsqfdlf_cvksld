import { motion } from 'framer-motion'

const steps = [
  { n: 1, t: 'Sign Up' },
  { n: 2, t: 'Book a Call' },
  { n: 3, t: 'Sign Contract' },
  { n: 4, t: 'Make Payment' },
  { n: 5, t: 'Your Site Is on Its Way' },
]

export default function Process() {
  return (
    <section className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-8">Our 5-Step Process</h2>
        <div className="grid sm:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <div className="text-amber-400 font-bold">{String(s.n).padStart(2, '0')}</div>
              <div className="text-white font-semibold mt-1">{s.t}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
