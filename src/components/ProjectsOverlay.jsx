import { useState } from 'react'
import '../styles/ProjectsOverlay.css'

export default function ProjectsOverlay({ projects, onClose, onProjectClick }) {
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'Brand Identity', 'Social Media', 'Web Development', 'Poster']
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <div className="overlay visible">
      <button type="button" className="floating-close" onClick={onClose} aria-label="Close projects">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
        Close
      </button>

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

      <div className="projects-grid">
        {filtered.map(project => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => onProjectClick(project)}
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
