import { skillCategories } from '../data'

function Bar({ name, pct, accent }) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="font-mono text-sm text-ink-100/65 hover:text-ink-100 transition-colors">{name}</span>
        <span className="font-mono text-xs text-ink-100/30">{pct}%</span>
      </div>
      <div className="bar-track">
        <div
          className="bar-fill"
          style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${accent}55, ${accent})` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 bg-ink-800/20">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-eyebrow">02 — Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-violet/30 to-transparent" />
        </div>

        <div className="mb-10">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink-100 leading-snug">
            From packets to predictions —{' '}
            <span className="text-gradient-full">full-spectrum engineering.</span>
          </h2>
          <p className="mt-3 font-body text-sm text-ink-100/40 max-w-lg">
            Languages, frameworks, cloud tools, and ML platforms I've shipped real projects with.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {skillCategories.map(cat => (
            <div key={cat.label} className="glass-card rounded-2xl p-6">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                     style={{ background: cat.accent + '18', border: `1px solid ${cat.accent}30` }}>
                  {cat.icon}
                </div>
                <span className="font-display font-bold text-sm tracking-wide" style={{ color: cat.accent }}>
                  {cat.label}
                </span>
              </div>
              {/* Bars */}
              <div className="space-y-4">
                {cat.skills.map(s => <Bar key={s.name} {...s} accent={cat.accent} />)}
              </div>
            </div>
          ))}
        </div>

        {/* Summary row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { v: '5+',  l: 'Languages', i: '⌨️' },
            { v: '8+',  l: 'Frameworks', i: '🔧' },
            { v: '5+',  l: 'ML Models',  i: '🤖' },
            { v: '6+',  l: 'Cloud Tools', i: '☁️' },
          ].map(({ v, l, i }) => (
            <div key={l} className="glass-card rounded-2xl p-5 flex flex-col items-center gap-2 text-center">
              <span className="text-3xl">{i}</span>
              <span className="font-display font-black text-2xl text-gradient-violet">{v}</span>
              <span className="font-mono text-[10px] text-ink-100/35 uppercase tracking-wider">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
