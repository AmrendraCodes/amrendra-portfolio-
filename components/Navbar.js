'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          <Link href="/" className="text-2xl font-heading font-extrabold text-text tracking-tight group">
            <span className="text-accent group-hover:text-accent-hover transition-colors">A</span>mrendra <span className="text-accent group-hover:text-accent-hover transition-colors">P</span>rojects
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`font-heading font-medium text-sm tracking-wide uppercase transition-colors duration-300 relative py-2 ${isActive(link.href) ? 'text-accent' : 'text-text hover:text-accent'}`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center">
            <Link href="/contact" className="bg-accent hover:bg-accent-hover text-white font-heading font-semibold text-sm px-6 py-2.5 rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(232,39,75,0.3)] hover:shadow-[0_8px_32px_rgba(232,39,75,0.4)] hover:-translate-y-0.5">
              Hire Me
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 border border-border rounded-md z-[60] bg-surface relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-text transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`} />
            <span className={`w-5 h-0.5 bg-text transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-5 h-0.5 bg-text transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} />
          </button>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-bg pt-24 px-6 md:hidden flex flex-col"
          >
            <ul className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-2xl font-heading font-bold ${isActive(link.href) ? 'text-accent' : 'text-text'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-12 flex justify-center">
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="w-full max-w-xs text-center bg-accent text-white font-heading font-semibold text-lg py-4 rounded-sm shadow-[0_4px_20px_rgba(232,39,75,0.3)]"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}