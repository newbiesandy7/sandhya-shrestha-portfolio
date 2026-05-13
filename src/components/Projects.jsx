import { useState } from 'react'
import ProjectsOverlay from './ProjectsOverlay'
import ProjectDetail from './ProjectDetail'
import '../styles/Projects.css'

export default function Projects() {
  const [overlayOpen, setOverlayOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      name: 'Nuñez FC',
      category: 'Brand Identity',
      bg: 'var(--project-1)',
      accent: '#1b6fc8',
      desc: 'Complete visual identity system for a football club — crest, typography, kit design, and brand guidelines.',
      tags: ['Logo', 'Typography', 'Kit Design', 'Guidelines']
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

  const handleFolderClick = () => {
    setOverlayOpen(true)
  }

  const handleCloseOverlay = () => {
    setOverlayOpen(false)
  }

  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const handleCloseDetail = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <section id="work" className="hero-projects">
        <div className="title-wrap">
          <h1>Proj<em>ects</em></h1>
        </div>

        <div className="folder-scene" id="folder" onClick={handleFolderClick}>
          <div className="folder-tab"></div>
          <div className="card-stack">
            <div className="stacked-card sc1"><span className="label">Branding</span></div>
            <div className="stacked-card sc2"><span className="label">Social</span></div>
            <div className="stacked-card sc3"><span className="label">Sport</span></div>
            <div className="stacked-card sc4"><span className="label">Poster</span></div>
          </div>
          <div className="folder-body"></div>
          <div className="year-badge">
            <span className="year-num">20<br />26</span>
            <span className="year-label">Selected Works</span>
          </div>
        </div>

        <p className="hint"><span className="hint-dot"></span> Click folder to explore</p>
      </section>

      {overlayOpen && (
        <ProjectsOverlay
          projects={projects}
          onClose={handleCloseOverlay}
          onProjectClick={handleProjectClick}
        />
      )}

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
      )}
    </>
  )
}
