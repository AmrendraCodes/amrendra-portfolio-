'use client';

import { useEffect, useState } from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'FinTrack Finance App',
    category: 'Finance',
    emoji: '💰',
    description: 'A comprehensive finance tracking app with intuitive dashboards and real-time analytics.',
  },
  {
    id: 2,
    title: 'ShopEase Store Redesign',
    category: 'E-Commerce',
    emoji: '🛍️',
    description: 'Complete e-commerce redesign focusing on conversion optimization and seamless checkout.',
  },
  {
    id: 3,
    title: 'MediCare Dashboard',
    category: 'Healthcare',
    emoji: '🏥',
    description: 'Healthcare management dashboard with patient tracking and appointment scheduling.',
  },
  {
    id: 4,
    title: 'LearnHub LMS',
    category: 'Education',
    emoji: '📚',
    description: 'Modern learning management system with interactive courses and progress tracking.',
  },
  {
    id: 5,
    title: 'LaunchPad SaaS',
    category: 'SaaS',
    emoji: '🚀',
    description: 'SaaS platform landing page and dashboard design with onboarding flow optimization.',
  },
  {
    id: 6,
    title: 'Rhythm Music App',
    category: 'Entertainment',
    emoji: '🎵',
    description: 'Music streaming app with personalized playlists and social sharing features.',
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.12 });

    const el = document.getElementById('portfolio');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.portfolio} ${visible ? styles.visible : ''}`} id="portfolio">
      <div className="container">
        
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionTag}>MY WORK</span>
            <h2 className={styles.sectionTitle}>Recent Projects</h2>
          </div>
          <a href="#" className={styles.link}>View All Work →</a>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectThumb}>
                <span className={styles.projectThumbEmoji}>{project.emoji}</span>
                <span className={styles.projectTag}>{project.category}</span>
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
