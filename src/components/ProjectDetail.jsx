import '../styles/ProjectDetail.css'

export default function ProjectDetail({ project, onClose }) {
  return (
    <div className="detail-panel visible">
      <button type="button" className="floating-close detail-close" onClick={onClose} aria-label="Close project detail">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
        Close
      </button>
      <div className="detail-header">
        <span style={{ fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          Project Detail
        </span>
        <button type="button" className="close-btn" onClick={onClose}>
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
    </div>
  )
}
