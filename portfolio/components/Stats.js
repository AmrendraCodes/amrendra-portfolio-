'use client';

import { useEffect, useState } from 'react';
import styles from './Stats.module.css';

export default function Stats() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.12 });

    const el = document.getElementById('stats');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.stats} ${visible ? styles.visible : ''}`} id="stats">
      <div className="container">
        <div className={styles.statsInner}>
          
          <div className={styles.statItem}>
            <div className={styles.statNum}>50+</div>
            <div className={styles.statLabel}>Projects Completed</div>
          </div>
          
          <div className={styles.statItem}>
            <div className={styles.statNum}>30+</div>
            <div className={styles.statLabel}>Happy Clients</div>
          </div>
          
          <div className={styles.statItem}>
            <div className={styles.statNum}>5+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          
          <div className={styles.statItem}>
            <div className={styles.statNum}>12+</div>
            <div className={styles.statLabel}>Design Awards</div>
          </div>

        </div>
      </div>
    </section>
  );
}
