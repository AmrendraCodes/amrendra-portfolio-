'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';
import BlogCard from '../../components/ui/BlogCard';
import ScrollReveal from '../../components/ui/ScrollReveal';
import { blogs } from '../../data/blogs';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(blogs.map(b => b.category))];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filter === 'All' || blog.category === filter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="pt-32 pb-16 bg-surface-2 border-b border-border">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Blog & Articles" 
            subtitle="Thoughts, tutorials, and insights on frontend development and design."
            className="mb-0 max-w-3xl"
          />
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="container mx-auto px-6">
          
          <ScrollReveal className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center mb-16">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    filter === category 
                      ? 'bg-accent text-white' 
                      : 'bg-surface border border-border text-muted hover:text-text hover:border-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-96">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input 
                type="text" 
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface border border-border text-text text-sm rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>
          </ScrollReveal>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-heading font-bold text-text mb-2">No articles found</h3>
              <p className="text-muted">Try adjusting your search query or category filter.</p>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
