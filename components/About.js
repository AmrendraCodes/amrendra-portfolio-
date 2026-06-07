'use client';

import { useEffect, useState } from 'react';
import styles from './About.module.css';

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.12 });

    const el = document.getElementById('about');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.about} ${visible ? styles.visible : ''}`} id="about">
      <div className="container">
        <div className={styles.aboutInner}>
          <div className={styles.aboutImg}>
            <span className={styles.aboutImgEmoji}>👨‍💻</span>
          </div>
          
          <div className={styles.aboutContent}>
            <span className={styles.sectionTag}>WHO I AM?</span>
            <h2 className={styles.sectionTitle}>I Design Digital Experiences<br />People Love</h2>
            
            <p>
              I'm a passionate UI/UX Designer based in Ahmedabad, Gujarat, India with over 5 years of experience crafting intuitive and visually stunning digital products. I specialize in creating user-centered designs that drive engagement and business growth.
            </p>
            <p>
              From wireframes to high-fidelity prototypes, I bring ideas to life with a keen eye for detail and a deep understanding of user behavior. My approach combines aesthetics with functionality to deliver exceptional experiences.
            </p>
            
            <div className={styles.aboutChips}>
              <span className={styles.chip}>UI/UX Design</span>
              <span className={styles.chip}>User Research</span>
              <span className={styles.chip}>Prototyping</span>
              <span className={styles.chip}>Figma</span>
              <span className={styles.chip}>Adobe XD</span>
              <span className={styles.chip}>Web Design</span>
              <span className={styles.chip}>Design Systems</span>
              <span className={styles.chip}>Interaction Design</span>
            </div>
            
            <a href="#" className={styles.btnPrimary}>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
