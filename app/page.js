import Hero from '../components/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import ProjectCard from '../components/ui/ProjectCard';
import BlogCard from '../components/ui/BlogCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import ScrollReveal from '../components/ui/ScrollReveal';

import { projects } from '../data/projects';
import { blogs } from '../data/blogs';
import { testimonials } from '../data/testimonials';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const latestBlogs = blogs.slice(0, 3);

  return (
    <>
      <Hero />

      {/* About Preview Section */}
      <section className="py-24 bg-surface-2 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal delay={0.2} className="order-2 lg:order-1">
              <div className="relative">
                <div className="text-9xl opacity-20 absolute -top-12 -left-8 select-none pointer-events-none">👨‍💻</div>
                <div className="bg-surface border border-border p-8 rounded-3xl relative z-10 shadow-2xl">
                  <div className="flex flex-wrap gap-3 mb-8">
                    {['UI/UX Design', 'React', 'Next.js', 'Tailwind CSS'].map(skill => (
                      <span key={skill} className="px-4 py-2 bg-surface-2 border border-border rounded-full text-sm font-medium text-text">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="p-6 bg-accent/10 border border-accent/20 rounded-2xl">
                    <p className="text-xl font-heading text-text italic leading-relaxed">
                      "I believe in creating digital experiences that are not just beautiful, but highly functional and accessible."
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <div className="order-1 lg:order-2">
              <SectionTitle 
                tag="WHO I AM?"
                title="Designing Digital Experiences People Love"
                subtitle="I'm a passionate UI/UX Designer and Frontend Developer based in Ahmedabad, Gujarat. I specialize in creating user-centered designs that drive engagement."
              />
              <ScrollReveal delay={0.4}>
                <Button href="/about" variant="primary" size="lg" className="mt-8">
                  Discover My Journey →
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <SectionTitle 
              tag="MY WORK"
              title="Featured Projects"
              className="mb-0"
            />
            <ScrollReveal delay={0.3}>
              <Button href="/projects" variant="outline">
                View All Work →
              </Button>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={0.1 * (index + 1)} className="h-full">
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-2">
        <div className="container mx-auto px-6">
          <SectionTitle 
            tag="TESTIMONIALS"
            title="What They Say"
            subtitle="Trusted by clients and teams around the globe."
            className="text-center mx-auto"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testi, index) => (
              <ScrollReveal key={testi.id} delay={0.1 * (index + 1)} className="h-full">
                <TestimonialCard testimonial={testi} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Preview */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <SectionTitle 
              tag="RECENT ARTICLES"
              title="From the Blog"
              className="mb-0"
            />
            <ScrollReveal delay={0.3}>
              <Button href="/blog" variant="outline">
                All Articles →
              </Button>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((blog, index) => (
              <ScrollReveal key={blog.id} delay={0.1 * (index + 1)} className="h-full">
                <BlogCard blog={blog} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <ScrollReveal>
            <span className="text-7xl mb-8 block select-none">👋</span>
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-text mb-8 leading-tight">
              Have a project in mind?<br />
              <span className="text-accent">Let's work together.</span>
            </h2>
            <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
              I'm currently available for freelance work and open to new opportunities. Let's build something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button href="/contact" variant="primary" size="lg">
                Get In Touch
              </Button>
              <Button href="mailto:amrendra@example.com" variant="outline" size="lg">
                amrendra@example.com
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
