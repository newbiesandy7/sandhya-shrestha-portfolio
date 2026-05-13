import '../styles/Services.css'

export default function Services() {
  const services = [
    {
      id: 1,
      num: '01',
      title: 'Data & Development',
      items: [
        'Intelligence: Python, Data Visualization, Advanced SQL/NoSQL.',
        'Web: React, PHP, Responsive Web Development.'
      ]
    },
    {
      id: 2,
      num: '02',
      title: 'Design & Branding',
      items: [
        'UI/UX: High-fidelity prototyping, User Journey Mapping (Figma).',
        'Graphic Design: Logo Design, Brand Identity, Typography, and Marketing Collateral.',
        'Tools: Adobe Illustrator, Photoshop.'
      ]
    }
  ]

  return (
    <section id="services">
      <div className="services-bg-text">DESIGN</div>
      <div className="services-inner">
        <div className="services-head">
          <div className="reveal-l">
            <div className="s-label">What I Do</div>
            <div className="services-title">
              MY<br />
              SERVICES<br />
              <span className="outline">2026</span>
            </div>
          </div>
          <div className="reveal-r">
            <p className="services-intro">
              From a single logo to a complete visual universe — I offer end-to-end design services
              tailored to brands that want to stand out and be remembered.
            </p>
          </div>
        </div>
        <div className="svc-list">
          {services.map((svc, idx) => (
            <div key={svc.id} className={`svc-item reveal d${idx + 1}`}>
              <div className="svc-num">{svc.num}</div>
              <div className="svc-body">
                <div className="svc-name">{svc.title}</div>
                <ul className="svc-bullets">
                  {svc.items.map((it, i) => (
                    <li key={i} className="svc-desc">{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
