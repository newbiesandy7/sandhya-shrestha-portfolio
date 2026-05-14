import { useParams, useNavigate, useLocation } from 'react-router-dom'
import roseMockup from '../Images/socialS_rosegarden_mockup.png'
import '../styles/ProjectDetailPage.css'

export default function ProjectDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  // Get project from location state or reconstruct from projects array
  let project = location.state?.project

  if (!project) {
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
    project = projects.find(p => p.id === parseInt(id))
  }

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="detail-header">
          <button className="back-btn" onClick={() => navigate('/works')}>
            ← Back to Works
          </button>
        </div>
        <div className="detail-body">
          <p>Project not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail-page">
      <div className="detail-header">
        <span style={{ fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          Project Detail
        </span>
        <button className="back-btn" onClick={() => navigate('/works')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
          Back to Works
        </button>
      </div>

      <div className="detail-body">
        <div className="detail-image">
          <div className="bg" style={{ background: project.bg }}></div>
        </div>
        <div className="detail-meta">
          <div className="detail-cat">{project.category}</div>
          <div className="detail-name">{project.name}</div>
          <div className="detail-desc">{project.desc}</div>
          <div className="detail-tags">
            {project.tags.map(tag => (
              <span key={tag} className="detail-tag">
                {tag}
              </span>
            ))}
          </div>
          <a
            className="detail-link"
            href="https://www.behance.net/gallery/249327613/Social-Media-Designs-For-Rose-Garden-Party-Palace"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Project →
          </a>
        </div>
      </div>

      <footer className="detail-footer">
        <div>
          <span>© 2026 Sandhya Shrestha</span>
        </div>
        <div>
          <span>Graphic Designer · Kathmandu, Nepal</span>
        </div>
      </footer>
    </div>
  )
}
