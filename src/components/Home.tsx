import './Home.css'

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-name">HARI KRISHNA AGARWAL</h1>
          <h2 className="home-title">Full Stack Web Developer</h2>
          <p className="home-description">
            Building modern full-stack web applications using React, Next.js & Node.js
          </p>
           <div className="home-buttons">
             <a href="#projects" className="btn btn-primary">
               <img src="/right-arrow.png" alt="Arrow" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
               View Projects
             </a>
             <a href="/Resume.pdf" className="btn btn-secondary" download>
               <img src="/downloads.png" alt="Download" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
               Download Resume
             </a>
           </div>
        </div>
<div className="home-image">
           <img src="/image.jpg" alt="Hari Krishna Agarwal" className="profile-image" />
         </div>
      </div>
    </section>
  )
}

export default Home
