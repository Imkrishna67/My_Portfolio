import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Lead development of web applications, mentor junior developers, and collaborate with cross-functional teams to deliver high-quality products.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2021 - 2023',
      description: 'Developed and maintained web applications using React, Node.js, and MongoDB. Implemented responsive UI designs and RESTful APIs.',
    },
    {
      title: 'Frontend Developer',
      company: 'WebCraft Studios',
      period: '2020 - 2021',
      description: 'Created interactive user interfaces and optimized web applications for maximum performance and user experience.',
    },
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
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