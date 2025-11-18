import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Aster & Co',
    desc: 'Luxury skincare eCommerce with bespoke checkout',
    img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600&auto=format&fit=crop',
    tag: 'eCommerce'
  },
  {
    title: 'Northlane',
    desc: 'B2B SaaS marketing site with gated content',
    img: 'https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1600&auto=format&fit=crop',
    tag: 'SaaS'
  },
  {
    title: 'Vantage Motors',
    desc: 'High-velocity lead-gen microsites at scale',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
    tag: 'Automotive'
  },
  {
    title: 'Oakwell Finance',
    desc: 'Secure client portal and brand site',
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
    tag: 'Finance'
  }
]

export default function Showcase() {
  return (
    <section className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <a href="#portfolio" className="text-amber-400 hover:text-amber-300">View All</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40"
            >
              <img src={p.img} alt={p.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-5">
                <div className="inline-flex items-center text-[11px] uppercase tracking-wider text-slate-300 bg-slate-800/70 rounded px-2 py-1 mb-2">{p.tag}</div>
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="text-slate-300 text-sm">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
