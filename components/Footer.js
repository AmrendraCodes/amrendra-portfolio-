import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          
          <div className={styles.footerCopy}>
            © 2025 <span className={styles.accent}>Amrendra Projects</span> — Crafted with ♥ in India
          </div>
          
          <div className={styles.footerLinks}>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
