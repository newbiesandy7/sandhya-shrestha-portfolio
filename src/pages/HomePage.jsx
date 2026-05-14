import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import About from '../components/About'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <div style={{ paddingTop: '6.5rem' }}>
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  )
}
