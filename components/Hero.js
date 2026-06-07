'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Add intersection observer for fade-in effect
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.12 });

    const heroEl = document.getElementById('home');
    if (heroEl) observer.observe(heroEl);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroGlow} />
      <div className="container">
        <div className={styles.heroInner}>

          {/* ── LEFT CONTENT ── */}
          <div className={`${styles.heroContent} ${visible ? styles.visible : ''}`}>


            <h1>
              Hi, I'm <span className={styles.name}>Amrendra Kumar</span><br />
            </h1>

            <p className={styles.heroDesc}>
              I build responsive, user-friendly frontend applications using modern web technologies. Passionate about clean UI, smooth user experiences, and continuously improving my frontend development skills.
            </p>

            <div className={styles.heroBtns}>
              <Link href="#projects" className={styles.btnPrimary}>
                View Projcts
              </Link>
              <Link href="#contact" className={styles.btnOutline}>
                Let's Talk
              </Link>
            </div>

            <div className={styles.heroSocial}>
              <span className={styles.label}>FIND ME ON</span>
              <a href="#" className={styles.socialIcon} aria-label="Dribbble">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.6 5.8c1.1 1.4 1.8 3.1 1.8 5 -.3-.1-3.3-.7-6.3-.3-.1-.2-.1-.4-.2-.6-.1-.3-.3-.6-.4-.9 3.3-1.3 4.8-3.2 5.1-3.6zM12 3.6c2.1 0 4 .8 5.5 2-0.3.4-1.6 2.1-4.8 3.3C11 6 9.1 4.2 8.8 3.9c1-.2 2.1-.3 3.2-.3zM7.2 4.6c.3.3 2.1 2.1 3.9 4.9-5 1.3-9.4 1.3-9.8 1.3.7-2.7 2.8-4.9 5.5-6.1l.4-.1zM3.6 12v-.4c.4 0 5.5.1 10.8-1.5.3.6.6 1.2.8 1.8l-.4.1c-5.7 1.6-8.7 6.1-9 6.5-1.4-1.6-2.2-3.6-2.2-5.8v-.7zM12 20.4c-1.8 0-3.5-.6-4.9-1.6.2-.4 2.4-4.2 8.7-6.1 0 0 .1 0 .1-.1 1.6 4.1 2.2 7.5 2.4 8.3-2 .9-4.2 1.4-6.3.5v-1zM18.7 19.6c-.1-.5-.7-3.8-2.2-7.8 2.8-.5 5.3.3 5.6.4-.4 2.3-1.6 4.3-3.4 5.8v1.6z" /></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.2c2.7 0 3 0 4.1.1 1 0 1.5.2 1.9.3.5.2.8.4 1.1.7.3.3.5.7.7 1.1.1.4.3.9.3 1.9 0 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.5-.3 1.9-.2.5-.4.8-.7 1.1-.3.3-.7.5-1.1.7-.4.1-.9.3-1.9.3-1.1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.5-.2-1.9-.3-.5-.2-.8-.4-1.1-.7-.3-.3-.5-.7-.7-1.1-.1-.4-.3-.9-.3-1.9 0-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c0-1 .2-1.5.3-1.9.2-.5.4-.8.7-1.1.3-.3.7-.5 1.1-.7.4-.1.9-.3 1.9-.3 1.1 0 1.4-.1 4.1-.1M12 0C9.3 0 8.9 0 7.8.1 6.7.1 5.9.3 5.2.6c-.7.3-1.3.6-1.9 1.2C2.7 2.4 2.3 3 2 3.7 1.7 4.4 1.5 5.2 1.5 6.3 1.4 7.4 1.4 7.8 1.4 10.5v3c0 2.7 0 3.1.1 4.2.1 1.1.3 1.9.6 2.6.3.7.6 1.3 1.2 1.9.6.6 1.2 1 1.9 1.2.7.3 1.5.5 2.6.6 1.1.1 1.5.1 4.2.1s3.1 0 4.2-.1c1.1-.1 1.9-.3 2.6-.6.7-.3 1.3-.6 1.9-1.2.6-.6 1-1.2 1.2-1.9.3-.7.5-1.5.6-2.6.1-1.1.1-1.5.1-4.2s0-3.1-.1-4.2c-.1-1.1-.3-1.9-.6-2.6-.3-.7-.6-1.3-1.2-1.9C21.2 1.8 20.6 1.4 19.9 1.1 19.2.8 18.4.6 17.3.5 16.1.1 15.7 0 12 0zm0 5.8a6.2 6.2 0 100 12.4A6.2 6.2 0 0012 5.8zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-10.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z" /></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M20.4 2H3.6A1.6 1.6 0 002 3.6v16.8A1.6 1.6 0 003.6 22h16.8a1.6 1.6 0 001.6-1.6V3.6A1.6 1.6 0 0020.4 2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11.3 9.7h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.7h2.5v1.2h0a2.8 2.8 0 012.5-1.4c2.7 0 3.2 1.8 3.2 4.1v4.7z" /></svg>
              </a>
            </div>

            <div className={styles.heroSkills}>
              <span className={styles.label}>BEST SKILLS ON</span>
              <span className={`${styles.skillBadge} ${styles.hot}`}>HTML & CSS </span>
              <span className={`${styles.skillBadge} ${styles.hot}`}>javascript </span>
              <span className={styles.skillBadge}>React</span>
              <span className={styles.skillBadge}>Next.js</span>
            </div>
          </div>

          {/* ── RIGHT PHOTO ── */}
          <div className={`${styles.heroImage} ${visible ? styles.visible : ''}`}>
            <div className={styles.heroCard}>
              <Image src="/Profile photo.jpeg" alt="Amrendra Kumar" fill style={{ objectFit: 'cover' }} priority />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}