import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      title: '2nd Place — Hi-Tech Projectathon 2026',
      description: 'Achieved 2nd position in the college-level Hi-Tech Projectathon as part of a team by developing an innovative solution that showcased creativity, collaboration, and strong problem-solving abilities.',
      tag: 'COMPETITIVE'
    },
    {
      title: '1st Runner-up — College Hackathon',
      description: 'Secured 1st Runner-up in a competitive college Hackathon, outperforming 50+ teams by demonstrating innovative thinking and rapid prototyping skills under tight constraints.',
      tag: 'COMPETITIVE'
    },
  ]

  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="achievements-list">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <div className="achievement-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
              {achievement.tag && <span className="achievement-tag">{achievement.tag}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements