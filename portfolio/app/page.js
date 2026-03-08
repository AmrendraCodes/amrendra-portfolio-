// Home Page - Landing page with hero and projects preview
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import styles from "./page.module.css";

export default function Home() {
  // Sample featured projects - replace with your actual projects
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack online shopping platform with payment integration',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location tracking',
      technologies: ['JavaScript', 'API', 'CSS'],
      link: '#'
    }
  ];

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        
        <section className={styles.featuredProjects}>
          <div className={styles.container}>
            <h2>Featured Projects</h2>
            <div className={styles.projectsGrid}>
              {featuredProjects.map(project => (
                <ProjectCard 
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                />
              ))}
            </div>
            <div className={styles.viewAllProjects}>
              <a href="/projects" className={styles.btnSecondary}>View All Projects</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
