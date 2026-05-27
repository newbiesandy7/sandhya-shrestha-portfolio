import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cloudSathiMockup from '../Images/image.png'
import auraMockup from '../Images/Screenshot 2026-05-15 161609.png'
import atithiMockup from '../Images/Screenshot 2026-05-15 162136.png'
import roseMockup from '../Images/socialS_rosegarden_mockup.png'
import heroMockup from '../assets/hero.png'
import '../styles/WorksPage.css'

export default function WorksPage() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      name: 'Nuñez FC',
      category: 'Social Media',
      bg: `url(${roseMockup}) center/cover no-repeat`,
      accent: '#1b6fc8',
      desc: 'Complete visual identity system for a football club — crest, typography, kit design, and brand guidelines.',
      tags: ['Logo', 'Typography', 'Design', 'Social Media']
    },
    {
      id: 2,
      name: 'Cloud Sathi',
      category: 'Social Media',
      bg: `url(${cloudSathiMockup}) center/cover no-repeat`,
      accent: '#1ea1f2',
      link: 'https://www.behance.net/gallery/249329905/Social-Media-Marketing-For-IT-Company-CloudSathi',
      desc: 'Social media marketing design for an IT company focused on brand growth, digital presence, and business communication.',
      tags: ['Social Media', 'Marketing', 'Branding', 'IT Company']
    },
    {
      id: 3,
      name: 'Aura',
      category: 'Brand Identity',
      bg: `url(${auraMockup}) center/cover no-repeat`,
      accent: '#5a3214',
      link: 'https://www.behance.net/gallery/249329457/Branding-of-Coffee-Brand-Aura',
      desc: 'Branding concept for a coffee brand with a warm visual identity and artisanal positioning.',
      tags: ['Coffee', 'Branding', 'Packaging', 'Identity']
    },
    {
      id: 4,
      name: 'Atithi Party Palace',
      category: 'Social Media',
      bg: `url(${atithiMockup}) center/cover no-repeat`,
      accent: '#c4912d',
      link: 'https://www.behance.net/gallery/249329397/Social-Media-Post-design-for-Atithi-Party-Palace',
      desc: 'Social media post design for Atithi Party Palace, featuring event-focused hospitality visuals and premium celebration layouts.',
      tags: ['Social Media', 'Hospitality', 'Event', 'Promotion']
    },
    {
      id: 5,
      name: 'Pulse Brand',
      category: 'Brand Identity',
      bg: `url(${roseMockup}) center/cover no-repeat`,
      accent: '#4444ff',
      desc: 'Lifestyle brand identity for a streetwear label — logomark, color system, and packaging design.',
      tags: ['Streetwear', 'Packaging', 'Color System']
    },
    {
      id: 6,
      name: 'City Run 2026',
      category: 'Sport',
      bg: `url(${cloudSathiMockup}) center/cover no-repeat`,
      accent: '#9945ff',
      desc: 'Visual identity and promotional materials for a major urban marathon event.',
      tags: ['Marathon', 'Event', 'Wayfinding', 'Motion']
    },
    {
      id: 7,
      name: 'Eclipse Series',
      category: 'Poster',
      bg: `url(${auraMockup}) center/cover no-repeat`,
      accent: '#ffffff',
      desc: 'Minimalist poster series exploring light, shadow, and celestial phenomena as visual metaphors.',
      tags: ['Minimalist', 'Fine Art', 'Limited Edition']
    },
    {
      id: 8,
      name: 'Vibra Social Kit',
      category: 'Social Media',
      bg: `url(${heroMockup}) center/cover no-repeat`,
      accent: '#ff6b35',
      desc: 'Content design system for a music festival brand — 80+ templates across all major platforms.',
      tags: ['Festival', 'Templates', 'Multi-platform']
    }
  ]

  const categories = ['all', 'Brand Identity', 'Social Media', 'Sport', 'Poster']
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <div className="works-page">
      <div className="works-header">
        <h1>All Works</h1>
        <p>Explore a curated selection of recent projects</p>
      </div>

      <div className="filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat === 'all' ? 'All' : cat}
          </button>
        ))}
      </div>

      <div className="works-grid">
        {filtered.map(project => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => navigate(`/project/${project.id}`, { state: { project } })}
            data-cat={project.category}
          >
            <div className="bg" style={{ background: project.bg }}></div>
            <div className="info">
              <div className="cat">{project.category}</div>
              <div className="name">{project.name}</div>
              <div className="view-btn">
                View Project{' '}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
