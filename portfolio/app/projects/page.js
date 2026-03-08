// Projects Page - Display all portfolio projects
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  // Sample project data - replace with your actual projects
  const projects = [
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
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Productivity app for organizing daily tasks and projects',
      technologies: ['React', 'Firebase', 'Tailwind'],
      link: '#'
    }
  ];

  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <div className="container">
          <h1>My Projects</h1>
          <div className="projects-grid">
            {projects.map(project => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
