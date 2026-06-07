'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden bg-bg" id="home">
      <div className="absolute -top-20 -right-24 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 w-full">

          {/* LEFT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 max-w-2xl flex-shrink-0"
          >
            <h1 className="font-heading text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-[1.1] tracking-tight text-text mb-6">
              Hi, I'm <span className="text-accent">Amrendra Kumar</span><br />
            </h1>

            <p className="text-base md:text-lg text-muted leading-relaxed max-w-lg mb-8">
              I build responsive, user-friendly frontend applications using modern web technologies. Passionate about clean UI, smooth user experiences, and continuously improving my frontend development skills.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button href="#projects" variant="primary">
                View Projects
              </Button>
              <Button href="/contact" variant="outline">
                Let's Talk
              </Button>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-medium text-muted uppercase tracking-widest whitespace-nowrap">FIND ME ON</span>
              <a href="#" className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-muted hover:text-accent hover:border-accent hover:bg-accent/5 transition-all" aria-label="Dribbble">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.6 5.8c1.1 1.4 1.8 3.1 1.8 5 -.3-.1-3.3-.7-6.3-.3-.1-.2-.1-.4-.2-.6-.1-.3-.3-.6-.4-.9 3.3-1.3 4.8-3.2 5.1-3.6zM12 3.6c2.1 0 4 .8 5.5 2-0.3.4-1.6 2.1-4.8 3.3C11 6 9.1 4.2 8.8 3.9c1-.2 2.1-.3 3.2-.3zM7.2 4.6c.3.3 2.1 2.1 3.9 4.9-5 1.3-9.4 1.3-9.8 1.3.7-2.7 2.8-4.9 5.5-6.1l.4-.1zM3.6 12v-.4c.4 0 5.5.1 10.8-1.5.3.6.6 1.2.8 1.8l-.4.1c-5.7 1.6-8.7 6.1-9 6.5-1.4-1.6-2.2-3.6-2.2-5.8v-.7zM12 20.4c-1.8 0-3.5-.6-4.9-1.6.2-.4 2.4-4.2 8.7-6.1 0 0 .1 0 .1-.1 1.6 4.1 2.2 7.5 2.4 8.3-2 .9-4.2 1.4-6.3.5v-1zM18.7 19.6c-.1-.5-.7-3.8-2.2-7.8 2.8-.5 5.3.3 5.6.4-.4 2.3-1.6 4.3-3.4 5.8v1.6z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-muted hover:text-accent hover:border-accent hover:bg-accent/5 transition-all" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c2.7 0 3 0 4.1.1 1 0 1.5.2 1.9.3.5.2.8.4 1.1.7.3.3.5.7.7 1.1.1.4.3.9.3 1.9 0 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1-.2 1.5-.3 1.9-.2.5-.4.8-.7 1.1-.3.3-.7.5-1.1.7-.4.1-.9.3-1.9.3-1.1 0-1.4.1-4.1.1s-3 0-4.1-.1c-1 0-1.5-.2-1.9-.3-.5-.2-.8-.4-1.1-.7-.3-.3-.5-.7-.7-1.1-.1-.4-.3-.9-.3-1.9 0-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c0-1 .2-1.5.3-1.9.2-.5.4-.8.7-1.1.3-.3.7-.5 1.1-.7.4-.1.9-.3 1.9-.3 1.1 0 1.4-.1 4.1-.1M12 0C9.3 0 8.9 0 7.8.1 6.7.1 5.9.3 5.2.6c-.7.3-1.3.6-1.9 1.2C2.7 2.4 2.3 3 2 3.7 1.7 4.4 1.5 5.2 1.5 6.3 1.4 7.4 1.4 7.8 1.4 10.5v3c0 2.7 0 3.1.1 4.2.1 1.1.3 1.9.6 2.6.3.7.6 1.3 1.2 1.9.6.6 1.2 1 1.9 1.2.7.3 1.5.5 2.6.6 1.1.1 1.5.1 4.2.1s3.1 0 4.2-.1c1.1-.1 1.9-.3 2.6-.6.7-.3 1.3-.6 1.9-1.2.6-.6 1-1.2 1.2-1.9.3-.7.5-1.5.6-2.6.1-1.1.1-1.5.1-4.2s0-3.1-.1-4.2c-.1-1.1-.3-1.9-.6-2.6-.3-.7-.6-1.3-1.2-1.9C21.2 1.8 20.6 1.4 19.9 1.1 19.2.8 18.4.6 17.3.5 16.1.1 15.7 0 12 0zm0 5.8a6.2 6.2 0 100 12.4A6.2 6.2 0 0012 5.8zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-10.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-muted hover:text-accent hover:border-accent hover:bg-accent/5 transition-all" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 2H3.6A1.6 1.6 0 002 3.6v16.8A1.6 1.6 0 003.6 22h16.8a1.6 1.6 0 001.6-1.6V3.6A1.6 1.6 0 0020.4 2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11.3 9.7h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.7h2.5v1.2h0a2.8 2.8 0 012.5-1.4c2.7 0 3.2 1.8 3.2 4.1v4.7z" /></svg>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-muted uppercase tracking-widest mr-2">BEST SKILLS ON</span>
              {['HTML & CSS', 'JavaScript', 'React', 'Next.js'].map((skill, i) => (
                <span key={skill} className={`px-4 py-1 border rounded-full text-xs font-medium transition-colors ${i < 2 ? 'border-accent text-accent bg-accent/10' : 'border-border text-muted hover:border-accent hover:text-accent'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT PHOTO */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5 flex justify-center items-center lg:justify-end relative hidden md:flex"
          >
            <div className="relative w-80 h-[420px] bg-surface-2 rounded-2xl border border-border overflow-hidden flex items-center justify-center">
              <Image src="/Profile photo.jpeg" alt="Amrendra Kumar" fill style={{ objectFit: 'cover' }} priority />
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute top-4 -left-3 bg-accent text-white px-4 py-2 rounded-lg text-xs font-heading font-semibold shadow-[0_4px_16px_rgba(232,39,75,0.3)] whitespace-nowrap z-20"
            >
              UI/UX Expert
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 1.5 }}
              className="absolute bottom-5 -right-4 bg-surface text-text border border-border px-4 py-2 rounded-lg text-xs font-heading font-semibold shadow-lg whitespace-nowrap flex items-center gap-2 z-20"
            >
              <span className="text-xl font-extrabold text-accent">5+</span> Years Experience
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}