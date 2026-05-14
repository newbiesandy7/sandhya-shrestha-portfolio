import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import roseMockup from '../Images/socialS_rosegarden_mockup.png'
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
      name: 'Laderame Campaign',
      category: 'Social Media',
      bg: 'var(--project-2)',
      accent: '#c43030',
      desc: 'Multi-platform social media campaign for a music release — feed posts, stories, and motion loops.',
      tags: ['Instagram', 'Motion', 'Campaign', 'Music']
    },
    {
      id: 3,
      name: 'Maton XII',
      category: 'Sport',
      bg: 'var(--project-3)',
      accent: '#2d9e2d',
      desc: 'Sport event branding and graphic package for a martial arts tournament series.',
      tags: ['Event', 'Branding', 'MMA', 'Print']
    },
    {
      id: 4,
      name: 'Idul Fitro Poster',
      category: 'Poster',
      bg: 'var(--project-4)',
      accent: '#c4912d',
      desc: 'Festive poster series celebrating Eid — combining traditional motifs with modern geometric layouts.',
      tags: ['Holiday', 'Print', 'Geometric', 'Series']
    },
    {
      id: 5,
      name: 'Pulse Brand',
      category: 'Brand Identity',
      bg: 'var(--project-5)',
      accent: '#4444ff',
      desc: 'Lifestyle brand identity for a streetwear label — logomark, color system, and packaging design.',
      tags: ['Streetwear', 'Packaging', 'Color System']
    },
    {
      id: 6,
      name: 'City Run 2026',
      category: 'Sport',
      bg: 'var(--project-6)',
      accent: '#9945ff',
      desc: 'Visual identity and promotional materials for a major urban marathon event.',
      tags: ['Marathon', 'Event', 'Wayfinding', 'Motion']
    },
    {
      id: 7,
      name: 'Eclipse Series',
      category: 'Poster',
      bg: 'var(--project-7)',
      accent: '#ffffff',
      desc: 'Minimalist poster series exploring light, shadow, and celestial phenomena as visual metaphors.',
      tags: ['Minimalist', 'Fine Art', 'Limited Edition']
    },
    {
      id: 8,
      name: 'Vibra Social Kit',
      category: 'Social Media',
      bg: 'var(--project-8)',
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
