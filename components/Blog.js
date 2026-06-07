'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Blog.module.css';

const blogs = [
  {
    id: 1,
    date: 'Nov 15, 2025',
    title: 'Design Systems: Building for Scale',
    excerpt: 'How to create a flexible design system that grows with your product and keeps your team aligned.',
    emoji: '✏️',
  },
  {
    id: 2,
    date: 'Oct 28, 2025',
    title: 'The Psychology Behind Great UX',
    excerpt: 'Understanding cognitive biases and mental models to create more intuitive user experiences.',
    emoji: '🧪',
  },
  {
    id: 3,
    date: 'Oct 10, 2025',
    title: 'Figma Tips for Faster Workflows',
    excerpt: 'Pro tips and shortcuts that will dramatically speed up your design workflow in Figma.',
    emoji: '🎯',
  },
];

export default function Blog() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.12 });

    const el = document.getElementById('blog');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.blog} ${visible ? styles.visible : ''}`} id="blog">
      <div className="container">
        
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionTag}>RECENT ARTICLES</span>
            <h2 className={styles.sectionTitle}>From the Blog</h2>
          </div>
          <Link href="#" className={styles.link}>All Articles →</Link>
        </div>

        <div className={styles.blogGrid}>
          {blogs.map((blog) => (
            <Link href="#" key={blog.id} className={styles.blogCard}>
              <div className={styles.blogThumb}>
                <span className={styles.blogThumbEmoji}>{blog.emoji}</span>
              </div>
              <div className={styles.blogBody}>
                <div className={styles.blogDate}>{blog.date}</div>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <span className={styles.blogMore}>Read More →</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
