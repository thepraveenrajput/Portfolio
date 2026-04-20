import { identity, techCloud, certifications } from '../data'

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-eyebrow">01 — About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-violet/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* LEFT — bio */}
          <div className="md:col-span-3 space-y-6">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-ink-100 leading-snug">
              I write systems that run close to the metal
              <span className="text-gradient-violet"> — and ML that runs on the edge.</span>
            </h2>

            <div className="space-y-4 font-body text-[0.93rem] text-ink-100/55 leading-relaxed">
              <p>
                I'm a third-year CSE undergraduate at SRM IST with a 9.22 CGPA and an obsession
                with performance-critical systems. I've built a packet-level
                <strong className="text-violet-light"> DPI engine in C++17</strong>, trained
                edge-deployed <strong className="text-emerald"> computer vision models</strong> on
                Raspberry Pi, and delivered full-stack web products with Go backends.
              </p>
              <p>
                My toolkit spans from raw TCP/IP sockets to Kubernetes Helm charts — I'm
                comfortable at every layer of the stack. On the cloud side I hold two AWS
                certifications and actively prototype AI-augmented APIs with FastAPI and Python.
              </p>
              <p>
                I believe the best code is invisible: it just works, at scale, under load,
                without drama.
              </p>
            </div>

            {/* Education */}
            <div className="glass-card rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-violet/15 border border-violet/25 flex items-center justify-center text-xl flex-shrink-0">🎓</div>
              <div>
                <p className="font-display font-bold text-ink-100 text-sm">{identity.education.institution}</p>
                <p className="font-body text-ink-100/50 text-xs mt-0.5">{identity.education.degree}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="font-mono text-xs text-violet-light bg-violet/10 border border-violet/20 px-2 py-0.5 rounded-full">{identity.education.year}</span>
                  <span className="font-mono text-xs text-emerald-light bg-emerald/10 border border-emerald/20 px-2 py-0.5 rounded-full">CGPA {identity.education.cgpa}</span>
                </div>
              </div>
            </div>

            {/* Certs */}
            <div className="grid gap-3">
              {certifications.map(c => (
                <div key={c.title} className="glass-card rounded-xl p-4 flex items-center gap-3">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="font-display font-semibold text-sm text-ink-100">{c.title}</p>
                    <p className="font-mono text-xs text-ink-100/35">{c.issuer} · {c.year}</p>
                  </div>
                  <span className="ml-auto badge badge-xs font-mono" style={{ background: c.accent + '22', color: c.accent, border: `1px solid ${c.accent}40` }}>Verified</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — tech + social */}
          <div className="md:col-span-2 space-y-6">

            <div>
              <p className="section-eyebrow mb-4">Tech cloud</p>
              <div className="flex flex-wrap gap-2">
                {techCloud.map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-2">
              {[
                { label: 'GitHub', href: identity.links.github, icon: '🐙', desc: 'thepraveenrajput' },
                { label: 'LinkedIn', href: identity.links.linkedin, icon: '💼', desc: 'praveen-singh-dev' },
                { label: 'Email', href: identity.links.email, icon: '✉️', desc: 'Send a message' },
              ].map(l => (
                <a key={l.label} href={l.href}
                  target={l.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl px-4 py-3 flex items-center gap-3 group">
                  <span className="text-lg">{l.icon}</span>
                  <span className="font-mono text-xs text-ink-100/55 group-hover:text-violet-light transition-colors">{l.label}</span>
                  <span className="ml-auto font-mono text-[10px] text-ink-100/25 group-hover:text-ink-100/40 transition-colors">{l.desc} ↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
