'use client';

import { motion } from 'framer-motion';
import Button from './Button';

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-surface-2 rounded-2xl p-6 border border-border flex flex-col h-full overflow-hidden relative group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center text-2xl border border-border shadow-inner">
          {project.emoji}
        </div>
        <div>
          <span className="text-accent text-xs font-semibold uppercase tracking-wider block mb-1">
            {project.category}
          </span>
          <h3 className="font-heading font-bold text-xl text-text leading-tight group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
        </div>
      </div>
      
      <p className="text-muted mb-6 flex-grow">
        {project.description}
      </p>
      
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span key={tech} className="bg-white/5 border border-border text-muted text-xs px-2 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-3 pt-4 border-t border-border">
        <Button href={project.liveUrl} variant="primary" size="sm" className="flex-1">
          Live Demo
        </Button>
        <Button href={project.githubUrl} variant="outline" size="sm" className="flex-1">
          GitHub
        </Button>
      </div>
    </motion.div>
  );
}
