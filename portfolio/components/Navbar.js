'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  // Scroll detect for active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('section[id]');

      sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock jab menu open ho
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Handle active link matching
  const isActive = (href) => {
    if (href === '/') return activeSection === 'home' || pathname === '/';
    return activeSection === href.replace('#', '');
  };

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navInner}>
          {/* Logo */}
          <Link href="/" className={styles.navBrand}>
            <span className={styles.accent}>A</span>mrendra<span className={styles.accent}>.</span>dev
          </Link>

          {/* Desktop Links */}
          <ul className={`${styles.navMenu} ${isOpen ? styles.menuOpen : ''}`}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.navRight}>
            <Link href="#contact" className={styles.btnHire}>
              Hire Me
            </Link>

            {/* Hamburger Button */}
            <button
              className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}