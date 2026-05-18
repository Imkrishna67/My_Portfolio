import './Projects.css'

const Projects = () => {
  const projects = [
     {
        title: 'Next‑Hire',
        description: 'A recruitment platform that streamlines hiring workflows with role-based dashboards, structured evaluations, and clear candidate pipelines — built for speed and clarity.',
       tech: ['Next.js', 'TypeScript', 'Prisma', 'Clerk'],
       github: 'https://github.com/Imkrishna67',
       live: '#',
     },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/Imkrishna67',
      live: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects and skills, built with modern web technologies and responsive design.',
      tech: ['React', 'CSS', 'Vite'],
      github: 'https://github.com/Imkrishna67',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects