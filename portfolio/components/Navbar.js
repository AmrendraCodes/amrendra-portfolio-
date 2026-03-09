'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Project', href: '/project' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Route change pe menu band karo
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Body scroll lock jab menu open ho
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>

        {/* Logo */}
        <Link href="/" className={styles.navBrand}>
          My Portfolio
        </Link>

        {/* Desktop Links */}
        <ul className={styles.navMenu}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

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

      {/* Mobile Dropdown Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}