import { useState, useEffect } from 'react'
import { identity } from '../data'

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-ink-900/85 backdrop-blur-xl border-b border-violet/10 shadow-[0_2px_20px_rgba(0,0,0,0.5)]'
        : 'bg-transparent'
      }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet to-violet-dim flex items-center justify-center font-display font-black text-sm text-white shadow-glow-violet transition-shadow group-hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]">
            {identity.initials}
          </span>
          <span className="font-display font-bold text-base text-gradient-violet hidden sm:block">
            {identity.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map(n => (
            <a key={n.label} href={n.href}
              className="nav-item font-body text-sm text-ink-100/60 hover:text-ink-100 transition-colors">
              {n.label}
            </a>
          ))}
          <a href={identity.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm border border-violet/40 bg-violet/10 text-violet-light hover:bg-violet/25 hover:border-violet font-mono text-xs tracking-wider transition-all">
            résumé.pdf
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 text-ink-100/70 hover:text-violet-light transition-colors"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-72' : 'max-h-0'}`}>
        <nav className="bg-ink-800/95 backdrop-blur-xl border-b border-violet/10 px-6 py-5 flex flex-col gap-4">
          {NAV.map(n => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)}
              className="font-body text-sm text-ink-100/60 hover:text-violet-light transition-colors">
              {n.label}
            </a>
          ))}
          <a href={identity.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm border border-violet/40 bg-violet/10 text-violet-light font-mono text-xs w-fit">
            résumé.pdf
          </a>
        </nav>
      </div>
    </header>
  )
}
