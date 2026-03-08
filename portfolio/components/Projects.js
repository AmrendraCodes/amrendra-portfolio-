// Projects Section Component
import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack online shopping platform with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location tracking, forecasts, and beautiful data visualizations.',
      technologies: ['JavaScript', 'API', 'CSS', 'Charts.js'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Productivity app for organizing daily tasks and projects with drag-and-drop functionality.',
      technologies: ['React', 'Firebase', 'Tailwind', 'Redux'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Projects</h2>
        <div className={styles.grid}>
          {projects.map(project => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
              </div>
              
              <div className={styles.cardBody}>
                <p className={styles.description}>{project.description}</p>
                
                <div className={styles.technologies}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={styles.links}>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.githubLink}
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.liveLink}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
