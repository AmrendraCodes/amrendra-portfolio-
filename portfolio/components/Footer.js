// Footer Component - Site footer with copyright and social links
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>My Portfolio</h3>
            <p>Full Stack Developer & Creative Problem Solver</p>
          </div>
          
          <div className={styles.social}>
            <h4>Connect</h4>
            <div className={styles.socialLinks}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
