'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';
import ProjectCard from '../../components/ui/ProjectCard';
import ScrollReveal from '../../components/ui/ScrollReveal';
import { projects } from '../../data/projects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  // Extract unique categories
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  // Filter projects
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-surface-2 border-b border-border">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="My Projects" 
            subtitle="A collection of my recent work across frontend development and UI/UX design."
            className="mb-0 max-w-3xl"
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-6">
          
          {/* Filters */}
          <ScrollReveal className="flex flex-wrap gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category 
                    ? 'bg-accent text-white shadow-[0_4px_20px_rgba(232,39,75,0.3)]' 
                    : 'bg-surface border border-border text-muted hover:text-text hover:border-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </ScrollReveal>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-muted">
              No projects found in this category.
            </div>
          )}

        </div>
      </section>
    </>
  );
}
