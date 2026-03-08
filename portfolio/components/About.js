// About Section Component
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={styles.description}>
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love turning ideas into reality through clean, efficient code and intuitive user interfaces.
            </p>
            <p className={styles.description}>
              With a strong foundation in both frontend and backend development, I enjoy tackling 
              complex problems and creating solutions that make a difference.
            </p>
            
            <div className={styles.skills}>
              <h3 className={styles.skillsTitle}>Skills & Technologies</h3>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4>Frontend</h4>
                  <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>Next.js</li>
                  </ul>
                </div>
                <div className={styles.skillCategory}>
                  <h4>Backend</h4>
                  <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
                <div className={styles.skillCategory}>
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
          
          <div className={styles.highlights}>
            <div className={styles.highlightItem}>
              <h3>2+ Years</h3>
              <p>Experience</p>
            </div>
            <div className={styles.highlightItem}>
              <h3>10+ Projects</h3>
              <p>Completed</p>
            </div>
            <div className={styles.highlightItem}>
              <h3>5+ Technologies</h3>
              <p>Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
