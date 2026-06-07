// AboutSection Component - Personal information section
export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love turning ideas into reality through clean, efficient code and intuitive user interfaces.
          </p>
          <p>
            With a strong foundation in both frontend and backend development, I enjoy tackling 
            complex problems and creating solutions that make a difference.
          </p>
          
          <div className="skills-section">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Tools</h4>
                <ul>
                  <li>Git</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                  <li>npm/yarn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-highlights">
          <div className="highlight-item">
            <h3>2+ Years</h3>
            <p>Experience</p>
          </div>
          <div className="highlight-item">
            <h3>10+ Projects</h3>
            <p>Completed</p>
          </div>
          <div className="highlight-item">
            <h3>5+ Technologies</h3>
            <p>Mastered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
