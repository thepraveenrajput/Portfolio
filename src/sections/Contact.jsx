import { identity } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 bg-ink-800/20">
      <div className="max-w-3xl mx-auto text-center">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-violet/30" />
          <span className="section-eyebrow">04 — Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-violet/30 to-transparent" />
        </div>

        {/* Headline */}
        <h2 className="font-display font-black text-4xl sm:text-5xl text-ink-100 mb-4 leading-tight">
          Let's build the next{' '}
          <span className="text-gradient-violet">hard thing.</span>
        </h2>

        <p className="font-body text-base text-ink-100/45 max-w-md mx-auto mb-10 leading-relaxed">
          I'm actively seeking internships and full-time roles in backend, systems, or ML engineering.
          Whether it's a quick chat or a serious opportunity — reach out.
        </p>

        {/* Terminal prompt style CTA */}
        <div className="glass-card rounded-2xl p-6 mb-8 text-left max-w-md mx-auto font-mono text-sm">
          <div className="flex gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-rose-400/70" />
            <span className="w-3 h-3 rounded-full bg-amber-400/70" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
          </div>
          <p className="text-ink-100/30 text-xs mb-1">~/praveen $</p>
          <p className="text-violet-light">send_email <span className="text-emerald">"Hello, Praveen!"</span></p>
          <p className="text-ink-100/40 text-xs mt-2">{'>'} Connecting to inbox...</p>
          <p className="text-emerald text-xs">{'>'} Ready. <span className="cursor" /></p>
        </div>

        <a href={identity.links.email}
          className="btn btn-lg px-12 font-display font-bold tracking-wide text-white border-none bg-gradient-to-r from-violet to-violet-dim shadow-glow-violet hover:shadow-[0_0_55px_rgba(124,58,237,0.6)] hover:-translate-y-1 transition-all mb-12">
          Send a Message ✉️
        </a>

        {/* Social row */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { label: 'GitHub', href: identity.links.github, icon: '🐙' },
            { label: 'LinkedIn', href: identity.links.linkedin, icon: '💼' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-ink-100/35 hover:text-violet-light transition-colors group">
              <span>{l.icon}</span>
              <span className="group-hover:underline underline-offset-4">{l.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
