import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-number">26</div>
      <div className="hero-content">
        <div className="hero-eyebrow">Graphic Designer · Kathmandu, Nepal</div>
        <h1 className="hero-title">
          <span className="t1">SANDHYA</span>
          <span className="t2">SHRESTHA</span>
        </h1>
        <div className="hero-sub">
          <p className="hero-desc">Turning ideas into visual stories — branding, illustration, editorial & everything in between.</p>
          <div className="hero-scroll">
            <div className="scroll-line"></div>
            Scroll
          </div>
        </div>
      </div>
    </section>
  )
}
