import { useParams, useNavigate, useLocation } from 'react-router-dom'
import cloudSathiMockup from '../Images/image.png'
import auraMockup from '../Images/Screenshot 2026-05-15 161609.png'
import atithiMockup from '../Images/Screenshot 2026-05-15 162136.png'
import roseMockup from '../Images/socialS_rosegarden_mockup.png'
import heroMockup from '../assets/hero.png'
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
            href={project.link || 'https://www.behance.net/gallery/249327613/Social-Media-Designs-For-Rose-Garden-Party-Palace'}
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
