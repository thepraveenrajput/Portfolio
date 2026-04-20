export default function Footer() {
  return (
    <footer className="border-t border-violet/8 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-ink-100/25">
        <div className="flex items-center gap-2.5">
          <span className="w-5 h-5 rounded bg-gradient-to-br from-violet to-violet-dim flex items-center justify-center font-display font-black text-[10px] text-white">P</span>
          <span className="font-mono text-xs">Praveen Singh</span>
        </div>
        {/* <p className="font-mono text-xs">
          React · Vite · Tailwind · DaisyUI · framer-motion
        </p> */}
        <p className="font-mono text-xs">© {new Date().getFullYear()} Praveen Singh</p>
      </div>
    </footer>
  )
}
