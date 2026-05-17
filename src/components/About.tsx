import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
          <p>
            I am a dedicated Full Stack Web Developer with a strong passion for designing and building modern, scalable, and high-performance web applications. I specialize in the MERN stack, leveraging MongoDB, Express.js, React, and Node.js to develop seamless, responsive, and efficient digital solutions with well-structured architectures.
          </p>
          <p>
            With a solid foundation in both frontend and backend development, I focus on creating clean, maintainable, and scalable codebases that translate complex requirements into intuitive and user-centric applications. I take pride in delivering solutions that balance functionality, performance, and design precision, ensuring an optimal user experience across all devices.
          </p>
          <p>
            My approach to development is driven by continuous learning, problem-solving, and attention to detail. I actively explore emerging technologies and best practices to enhance my technical expertise and stay aligned with industry standards. Beyond development, I engage with the tech community, contribute to open-source initiatives, and continuously work on improving my skills to build impactful and production-ready software solutions.
          </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">Fresher</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About