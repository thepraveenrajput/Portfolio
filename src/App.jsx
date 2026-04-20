import Navbar   from './components/Navbar'
import Footer   from './components/Footer'
import Hero     from './sections/Hero'
import About    from './sections/About'
import Skills   from './sections/Skills'
import Projects from './sections/Projects'
import Contact  from './sections/Contact'

export default function App() {
  return (
    <div className="grain min-h-screen bg-base-100 text-base-content">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
