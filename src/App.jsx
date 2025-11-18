import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Trust from './components/Trust'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-white font-bold tracking-tight">KMA Global</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:text-amber-400">Work</a>
            <a href="#process" className="hover:text-amber-400">Process</a>
            <a href="#contact" className="hover:text-amber-400">Contact</a>
            <a href="https://calendly.com/" target="_blank" className="rounded-full bg-amber-400 text-slate-900 font-semibold px-4 py-2 hover:bg-amber-300">Book a Call</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <div id="work"><Showcase /></div>
        <div id="process"><Process /></div>
        <Testimonials />
        <Trust />
        <Contact />
      </main>

      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-white font-bold">KMA Global</div>
            <p className="text-slate-400 mt-2 max-w-sm">There is a Solution for everyone. We combine design, engineering and AI to build sites that perform.</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Navigation</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-amber-400">Home</a></li>
              <li><a href="#work" className="hover:text-amber-400">Portfolio</a></li>
              <li><a href="#process" className="hover:text-amber-400">Our Process</a></li>
              <li><a href="#contact" className="hover:text-amber-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>Email: <a className="text-amber-400" href="mailto:contact@kmaglobal.co">contact@kmaglobal.co</a></li>
              <li>Phone: <a className="text-amber-400" href="tel:02080792870">0208 079 2870</a></li>
              <li className="text-slate-400">© KMA Global</li>
              <li className="flex gap-3 pt-2">
                <a href="#" aria-label="Twitter" className="hover:text-amber-400">Tw</a>
                <a href="#" aria-label="LinkedIn" className="hover:text-amber-400">In</a>
                <a href="#" aria-label="Instagram" className="hover:text-amber-400">Ig</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
