import { projects } from '../data'

function ProjectCard({ p, featured }) {
  return (
    <div className={`glass-card glow-border rounded-2xl overflow-hidden flex flex-col ${featured ? 'md:col-span-2' : ''}`}>
      {/* Accent bar */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${p.accent}, ${p.accent}30)` }} />

      <div className={`p-7 flex flex-col flex-1 ${featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''}`}>
        {/* Left / Top */}
        <div className="flex flex-col">
          {/* Icon + badge */}
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                 style={{ background: p.accent + '15', border: `1px solid ${p.accent}30` }}>
              {p.icon}
            </div>
            <span className="font-mono text-xs px-2.5 py-1 rounded-full border"
                  style={{ color: p.accent, background: p.accent + '12', borderColor: p.accent + '35' }}>
              {p.badge}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display font-black text-xl text-ink-100 mb-1">{p.title}</h3>
          <p className="font-mono text-xs mb-3" style={{ color: p.accent + 'cc' }}>// {p.alias}</p>
          <p className="font-body text-sm text-ink-100/50 mb-5 leading-relaxed">{p.tagline}</p>

          {/* Bullets */}
          <ul className="space-y-2.5 mb-6 flex-1">
            {p.bullets.map((b, i) => (
              <li key={i} className="flex gap-2.5 font-body text-xs text-ink-100/50 leading-relaxed">
                <span className="flex-shrink-0 mt-0.5 font-mono" style={{ color: p.accent }}>▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right / Bottom */}
        <div className="flex flex-col justify-end gap-4">
          {/* Tech pills */}
          <div className="flex flex-wrap gap-2">
            {p.tech.map(t => (
              <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-full border"
                    style={{ color: p.accent, background: p.accent + '08', borderColor: p.accent + '28' }}>
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <a href={p.github} target="_blank" rel="noopener noreferrer"
               className="btn btn-sm flex-1 border border-ink-300/15 bg-transparent hover:border-ink-300/35 text-ink-100/50 hover:text-ink-100 font-mono text-xs transition-all gap-2">
              🐙 GitHub
            </a>
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer"
                 className="btn btn-sm flex-1 font-mono text-xs text-white border-none"
                 style={{ background: `linear-gradient(135deg, ${p.accent}, ${p.accent}90)` }}>
                Live ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-eyebrow">03 — Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-violet/30 to-transparent" />
        </div>

        <div className="mb-10">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink-100 leading-snug">
            Systems built, models trained,{' '}
            <span className="text-gradient-warm">problems solved.</span>
          </h2>
          <p className="mt-3 font-body text-sm text-ink-100/40 max-w-lg">
            Real-world projects spanning systems programming, edge AI, and full-stack web — each one shipping something meaningful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} featured={p.featured} />
          ))}
        </div>

        <p className="mt-10 text-center font-mono text-sm text-ink-100/25">
          <a href="https://github.com/thepraveenrajput" target="_blank" rel="noopener noreferrer"
             className="hover:text-violet-light transition-colors group">
            More on GitHub <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
          </a>
        </p>
      </div>
    </section>
  )
}
