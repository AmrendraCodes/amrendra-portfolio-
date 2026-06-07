'use client';

import { useEffect, useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
      }
    }, { threshold: 0.12 });

    const el = document.getElementById('contact');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.contact} ${visible ? styles.visible : ''}`} id="contact">
      <div className="container">
        
        <div className={styles.contactInner}>
          {/* ===== LEFT INFO ===== */}
          <div className={styles.contactInfo}>
            <span className={styles.sectionTag}>HAVE A QUESTION?</span>
            <h2 className={styles.sectionTitle}>Contact Me Now</h2>
            
            <p className={styles.desc}>
              Have a project in mind or just want to say hello? Feel free to reach out — I'd love to hear from you and discuss how we can work together.
            </p>
            
            <div className={styles.contactDetail}>
              <div className={styles.contactDetailIcon}>📧</div>
              <div className={styles.contactDetailText}>
                <strong>Email</strong>
                amrendra@example.com
              </div>
            </div>
            
            <div className={styles.contactDetail}>
              <div className={styles.contactDetailIcon}>📱</div>
              <div className={styles.contactDetailText}>
                <strong>Phone</strong>
                +91 98765 43210
              </div>
            </div>
            
            <div className={styles.contactDetail}>
              <div className={styles.contactDetailIcon}>📍</div>
              <div className={styles.contactDetailText}>
                <strong>Location</strong>
                Ahmedabad, Gujarat, India
              </div>
            </div>
          </div>

          {/* ===== RIGHT FORM ===== */}
          <div className={styles.contactFormWrap}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Your Email" />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <input type="tel" placeholder="Phone Number" />
            </div>
            
            <div className={styles.formGroup}>
              <textarea placeholder="Your Message"></textarea>
            </div>
            
            <button className={styles.btnSend} type="button">
              Send Message
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
