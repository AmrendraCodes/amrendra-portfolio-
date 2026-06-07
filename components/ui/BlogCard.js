'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blog/${blog.id}`} className="block h-full">
      <motion.div 
        whileHover={{ y: -8 }}
        className="bg-surface-2 rounded-2xl p-6 border border-border h-full flex flex-col group transition-all duration-300 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(232,39,75,0.08)]"
      >
        <div className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center text-2xl border border-border mb-6">
          {blog.emoji}
        </div>
        
        <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted uppercase tracking-wider mb-4">
          <span className="text-accent">{blog.category}</span>
          <span className="w-1 h-1 bg-border rounded-full"></span>
          <span>{blog.date}</span>
          <span className="w-1 h-1 bg-border rounded-full"></span>
          <span>{blog.readTime}</span>
        </div>
        
        <h3 className="font-heading font-bold text-xl text-text mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
          {blog.title}
        </h3>
        
        <p className="text-muted flex-grow mb-6">
          {blog.excerpt}
        </p>
        
        <div className="text-sm font-semibold text-text group-hover:text-accent transition-colors inline-flex items-center gap-2 mt-auto">
          Read Article <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
        </div>
      </motion.div>
    </Link>
  );
}
