// Hero Section Component
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              Hi, I'm <span className={styles.highlight}>John Doe</span>
            </h1>
            <h2 className={styles.subtitle}>Full Stack Developer</h2>
            <p className={styles.description}>
              I create beautiful, functional web applications with modern technologies.
              Passionate about clean code, user experience, and continuous learning.
            </p>
            <div className={styles.buttons}>
              <a href="#projects" className={styles.btnPrimary}>View Projects</a>
              <a href="#contact" className={styles.btnSecondary}>Contact Me</a>
            </div>
          </div>
          <div className={styles.image}>
            <div className={styles.profilePlaceholder}>
              <span>Profile Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
