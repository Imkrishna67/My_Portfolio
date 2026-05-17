import './Skills.css'
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiTypescript,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiGraphql, SiPostgresql,
  SiGithub, SiVercel, SiJsonwebtokens, SiPrisma, SiCss
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: <SiReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'HTML5', icon: <SiHtml5 /> },
        { name: 'CSS3', icon: <SiCss /> },
        { name: 'TypeScript', icon: <SiTypescript /> }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'GraphQL', icon: <SiGraphql /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', icon: <SiGithub /> },
        { name: 'JWT & Clerk', icon: <SiJsonwebtokens /> },
        { name: 'Vercel', icon: <SiVercel /> },
        { name: 'Prisma ORM', icon: <SiPrisma /> }
      ]
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills