'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Blobs */}
      <div className={styles.blobTeal} />
      <div className={styles.blobPurple} />

      <div className={styles.heroInner}>

        {/* ── LEFT CONTENT ── */}
        <div className={`${styles.heroLeft} ${visible ? styles.show : ''}`}>

          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for Work
          </div>

          <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.name}>John Doe</span>
          </h1>

          <div className={styles.roleRow}>
            <span className={styles.roleLine} />
            <span className={styles.roleText}>Full Stack Developer</span>
          </div>

          <p className={styles.heroDesc}>
            I create beautiful, functional web applications with modern
            technologies. Passionate about clean code, user experience,
            and continuous learning.
          </p>

          <div className={styles.btnGroup}>
            <Link href="#projects" className={styles.btnPrimary}>
              View Projects →
            </Link>
            <Link href="#contact" className={styles.btnSecondary}>
              Contact Me
            </Link>
          </div>

          {/* Stats */}
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statNum}>3<span>+</span></span>
              <span className={styles.statLabel}>Years Exp.</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>20<span>+</span></span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>15<span>+</span></span>
              <span className={styles.statLabel}>Clients</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT PHOTO ── */}
        <div className={`${styles.heroRight} ${visible ? styles.show : ''}`}>
          <div className={styles.photoWrapper}>
            <div className={styles.photoBg} />
            <div className={styles.photoCard}>

              {/* Apni photo lagao */}
              <Image
                src="/profile.jpg"       
                alt="John Doe"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />

            </div>
            <div className={styles.floatBadge1}>⚡ React & Next.js</div>
            <div className={styles.floatBadge2}>🎨 UI/UX Design</div>
          </div>
        </div>

      </div>
    </section>
  );
}