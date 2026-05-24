import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Project-Based Experiential Learning Program (Remote)',
      company: 'IBM',
      period: 'Jun 2025 – Jul 2025',
      description: `Completed IBM Project-Based Experiential Learning Program in Generative AI and Deep Learning. Gained hands-on experience in neural networks and model training through a Text-to-Image Generator capstone project, and earned IBM certification upon completion.`,
    },
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
<div key={index} className="timeline-item">
                <div className="timeline-content">
                  <h3 className="exp-title">{exp.title}</h3>
                  <h4 className="exp-company">{exp.company}</h4>
                  <span className="exp-period">{exp.period}</span>
                  <p className="exp-description">{exp.description}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience