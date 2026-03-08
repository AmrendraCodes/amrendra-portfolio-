// ProjectCard Component - Individual project display card
export default function ProjectCard({ title, description, technologies, link }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <div className="image-placeholder">
          {/* Add project screenshot here */}
          <p>Project Image</p>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-links">
          <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <button className="btn btn-secondary">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
