import '../styles/About.css'

export default function About() {
  return (
    <section id="about">
      <div className="about-left reveal-l">
        <div className="about-visual-bg"></div>
        <div className="about-monogram">SS</div>
        <div className="about-tag">Est. 2023 · Kathmandu</div>
      </div>
      <div className="about-right reveal-r">
        <div className="s-label">About Me</div>
        <h2>Design that lives<br />at the edge of <em>art & function</em></h2>
        <p>
          I am a Data Science student and Creative Technologist who operates at the intersection of data, code, and visual storytelling. My expertise spans from building intelligent systems with Python and Advanced Databases to developing interactive frontends using React.
        </p>
        <p>
          Parallel to my technical work, I am a Professional Graphic Designer specializing in Brand Identity and UI/UX. I help businesses translate complex ideas into compelling visual narratives—whether through a high-fidelity app interface in Figma or a cohesive brand system. My goal is to build digital products that are backed by data, powered by clean code, and defined by exceptional design.
        </p>
        <div className="about-skills">
          <span className="skill-tag">Brand Identity</span>
          <span className="skill-tag">Packaging</span>
          <span className="skill-tag">Illustration</span>
          <span className="skill-tag">Social Media</span>
          <span className="skill-tag">Print</span>
          <span className="skill-tag">Typography</span>
          <span className="skill-tag">Art Direction</span>
          <span className="skill-tag">Photoshop</span>
          <span className="skill-tag">Illustrator</span>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat reveal d1">
          <div className="stat-n">50+</div>
          <div className="stat-l">Projects Completed</div>
        </div>
        <div className="stat reveal d2">
          <div className="stat-n">3+</div>
          <div className="stat-l">Years Experience</div>
        </div>
        <div className="stat reveal d3">
          <div className="stat-n">30+</div>
          <div className="stat-l">Happy Clients</div>
        </div>
      </div>
    </section>
  )
}
