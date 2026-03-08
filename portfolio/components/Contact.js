// Contact Section Component
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Let's Connect</h3>
            <p className={styles.infoDescription}>
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <h4>Email</h4>
                <a href="mailto:john.doe@example.com" className={styles.contactLink}>
                  john.doe@example.com
                </a>
              </div>
              
              <div className={styles.contactItem}>
                <h4>Phone</h4>
                <a href="tel:+1234567890" className={styles.contactLink}>
                  +123 456 7890
                </a>
              </div>
              
              <div className={styles.contactItem}>
                <h4>Location</h4>
                <p className={styles.location}>San Francisco, CA</p>
              </div>
            </div>
            
            <div className={styles.social}>
              <h4>Follow Me</h4>
              <div className={styles.socialLinks}>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                >
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink}
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          
          <div className={styles.form}>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className={styles.input}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className={styles.input}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className={styles.textarea}
                  rows="5"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
