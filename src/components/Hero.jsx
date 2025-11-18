import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(234,179,8,0.15),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
        >
          We Design, Build and Scale Powerful Websites.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl"
        >
          Custom-coded. AI-enhanced. Built for growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#contact" className="inline-flex items-center rounded-full bg-amber-400 text-slate-900 font-semibold px-6 py-3 hover:bg-amber-300 transition">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a href="https://calendly.com/" target="_blank" className="inline-flex items-center rounded-full border border-slate-700 text-white px-6 py-3 hover:bg-slate-800 transition">
            Book a Call
          </a>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-80">
          {['HTML','CSS','JavaScript','React','Supabase','WIX Studio','AI Automation'].map(t => (
            <div key={t} className="text-slate-400 text-sm border border-slate-800 rounded-lg px-3 py-2 text-center bg-slate-900/40">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
