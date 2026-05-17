import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Web Developer with expertise in building 
              modern web applications. I specialize in React, Next.js, and Node.js, 
              creating seamless user experiences with robust backend architectures.
            </p>
            <p>
              With a strong foundation in both frontend and backend technologies, 
              I enjoy turning complex problems into simple, beautiful, and intuitive 
              solutions. My goal is to build applications that are not only functional 
              but also provide exceptional user experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About