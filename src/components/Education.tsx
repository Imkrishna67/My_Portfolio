import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'Moradabad Institute of Technology, Moradabad, Uttar Pradesh',
      period: 'Sept 2022 - Jun 2026',
    },
  ]

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10 5 10-5M2 10v6l10 5 10-5V10M12 22V12"></path>
                </svg>
              </div>
              <div className="education-content">
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-institution">{edu.institution}</h4>
                <span className="edu-period">{edu.period}</span>
                <p className="edu-description">
                  Gained strong foundational and practical knowledge in web development, including front-end and back-end technologies, object-oriented programming (OOP), databases, and software engineering principles. Focused on building responsive, scalable, and performance-oriented web applications while following clean code practices and modern development standards.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education