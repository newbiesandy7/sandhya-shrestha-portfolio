import '../styles/Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-bg"></div>
      <div className="contact-inner reveal">
        <div className="contact-big">
          <div className="outline">LET'S</div>
          <div className="filled">CREATE</div>
        </div>
        <p className="contact-sub">Got a project in mind? I'd love to hear it. Let's make something beautiful together.</p>
        <div>
          <a href="mailto:sthasandhya610@gmail.com" className="contact-email">
            sthasandhya610@gmail.com
          </a>
        </div>
        <div className="contact-socials">
          <a href="#" className="social-pill">
            📸 Instagram
          </a>
          <a href="#" className="social-pill">
            💼 LinkedIn
          </a>
          <a href="#" className="social-pill">
            🎨 Behance
          </a>
        </div>
      </div>
    </section>
  )
}
