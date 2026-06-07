'use client';

import { useEffect, useState } from 'react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.12 });

    const el = document.getElementById('testimonials');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.testimonials} ${visible ? styles.visible : ''}`} id="testimonials">
      <div className="container">
        
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionTag}>TESTIMONIALS</span>
            <h2 className={styles.sectionTitle}>What They Say</h2>
            <p className={styles.sectionSub}>Trusted by clients and teams around the globe.</p>
          </div>
        </div>

        <div className={styles.testiGrid}>
          
          <div className={styles.testiCard}>
            <div className={styles.testiStars}>★★★★★</div>
            <p className={styles.testiQuote}>"Amrendra delivered an exceptional design that exceeded all expectations. His attention to detail and understanding of user needs is remarkable. Highly recommend!"</p>
            <div className={styles.testiAuthor}>
              <div className={styles.testiAvatar}>RK</div>
              <div>
                <div className={styles.testiName}>Rajesh Kumar</div>
                <div className={styles.testiRole}>CEO, TechStart India</div>
              </div>
            </div>
          </div>
          
          <div className={styles.testiCard}>
            <div className={styles.testiStars}>★★★★★</div>
            <p className={styles.testiQuote}>"Working with Amrendra was a fantastic experience. He transformed our complex requirements into a clean, intuitive interface that our users love."</p>
            <div className={styles.testiAuthor}>
              <div className={styles.testiAvatar}>SP</div>
              <div>
                <div className={styles.testiName}>Sarah Patel</div>
                <div className={styles.testiRole}>Product Manager, InnovateCo</div>
              </div>
            </div>
          </div>
          
          <div className={styles.testiCard}>
            <div className={styles.testiStars}>★★★★★</div>
            <p className={styles.testiQuote}>"The design system Amrendra created for us has been a game-changer. Consistent, scalable, and beautifully crafted. Our development team loves it."</p>
            <div className={styles.testiAuthor}>
              <div className={styles.testiAvatar}>MR</div>
              <div>
                <div className={styles.testiName}>Michael Roberts</div>
                <div className={styles.testiRole}>CTO, DesignFlow</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
