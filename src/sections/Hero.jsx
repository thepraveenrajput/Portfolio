import { useState, useEffect } from 'react'
import { identity } from '../data'

/* ── Typewriter ────────────────────────────────────────── */
function Typewriter({ words, speed = 75, pause = 2000 }) {
  const [text, setText]       = useState('')
  const [wIdx, setWIdx]       = useState(0)
  const [cIdx, setCIdx]       = useState(0)
  const [erasing, setErasing] = useState(false)

  useEffect(() => {
    const word = words[wIdx]
    let t
    if (!erasing) {
      if (cIdx < word.length) {
        t = setTimeout(() => { setText(word.slice(0, cIdx + 1)); setCIdx(c => c + 1) }, speed)
      } else {
        t = setTimeout(() => setErasing(true), pause)
      }
    } else {
      if (cIdx > 0) {
        t = setTimeout(() => { setText(word.slice(0, cIdx - 1)); setCIdx(c => c - 1) }, speed / 2)
      } else {
        setErasing(false)
        setWIdx(i => (i + 1) % words.length)
      }
    }
    return () => clearTimeout(t)
  }, [text, erasing, cIdx, wIdx, words, speed, pause])

  return (
    <span className="text-gradient-violet font-display">
      {text}<span className="cursor" />
    </span>
  )
}

/* ── Terminal badge ────────────────────────────────────── */
function TerminalBadge({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet/25 bg-violet/8 font-mono text-xs text-violet-light tracking-wider">
      <span className="flex gap-1">
        <span className="w-2 h-2 rounded-full bg-rose-400/70" />
        <span className="w-2 h-2 rounded-full bg-amber-400/70" />
        <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
      </span>
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-hero-radial" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-[15%] w-80 h-80 rounded-full bg-violet/6 blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-[15%] w-64 h-64 rounded-full bg-emerald/6 blur-3xl animate-float-medium" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[60%] left-[60%] w-48 h-48 rounded-full bg-amber/5 blur-3xl animate-float-slow" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Terminal badge */}
        <div className="flex justify-center mb-8">
          <TerminalBadge>open to internships & full-time roles</TerminalBadge>
        </div>

        {/* Name */}
        <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink-100 mb-4 leading-none">
          {identity.name}
        </h1>

        {/* Typewriter */}
        <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center mb-6 overflow-hidden">
          <span className="font-display font-bold text-2xl sm:text-3xl md:text-4xl">
            <Typewriter words={identity.roles} />
          </span>
        </div>

        {/* Subheadline */}
        <p className="font-body text-sm sm:text-base text-ink-100/45 max-w-xl mx-auto mb-10 leading-relaxed">
          {identity.tagline}
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a href="#projects"
             className="btn btn-primary px-8 font-display font-bold tracking-wide text-white border-none bg-gradient-to-r from-violet to-violet-dim shadow-glow-violet hover:shadow-[0_0_50px_rgba(124,58,237,0.55)] hover:-translate-y-0.5 transition-all">
            View Projects →
          </a>
          <a href={identity.links.github} target="_blank" rel="noopener noreferrer"
             className="btn btn-outline border-ink-300/20 text-ink-100/60 hover:border-violet/50 hover:text-violet-light hover:bg-violet/5 px-8 font-display font-bold tracking-wide transition-all">
            GitHub ↗
          </a>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {identity.stats.map((s) => (
            <div key={s.label}
                 className="glass-card rounded-2xl p-4 flex flex-col items-center gap-1.5 glow-border">
              <span className="text-2xl">{s.icon}</span>
              <span className="font-display font-black text-2xl" style={{ color: s.color }}>
                {s.value}
              </span>
              <span className="font-mono text-[10px] text-ink-100/35 text-center leading-tight uppercase tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
        <span className="font-mono text-[10px] tracking-[0.3em] text-ink-100/50">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-violet to-transparent" />
      </div>
    </section>
  )
}
