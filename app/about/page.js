import Image from 'next/image';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';
import ScrollReveal from '../../components/ui/ScrollReveal';
import { skills, experience, education } from '../../data/skills';

export const metadata = {
  title: 'About Me | Amrendra Kumar',
  description: 'Learn more about Amrendra Kumar, his skills, experience, and educational background.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-surface-2 border-b border-border">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="About Me" 
            subtitle="Get to know me, my background, and the technologies I work with."
            className="mb-0 max-w-3xl"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="order-2 lg:order-1 relative">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-border">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-surface-2 flex items-center justify-center text-9xl">
                  👨‍💻
                </div>
                <Image 
                  src="/Profile photo.jpeg" 
                  alt="Amrendra Kumar" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  className="relative z-10"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/20 rounded-full blur-[60px] pointer-events-none"></div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="order-1 lg:order-2">
              <h3 className="text-3xl font-heading font-bold text-text mb-6">
                I'm <span className="text-accent">Amrendra</span>, a UI/UX Designer and Frontend Developer.
              </h3>
              <div className="space-y-6 text-muted text-lg">
                <p>
                  Based in Ahmedabad, Gujarat, I have spent the last 5+ years crafting digital products that are not only visually appealing but also highly functional and user-centric.
                </p>
                <p>
                  My journey started with a fascination for how design impacts human behavior. Since then, I've transitioned from pure design into frontend development, giving me the unique ability to bridge the gap between design and engineering.
                </p>
                <p>
                  When I'm not coding or designing, you can find me exploring new technologies, writing articles about my learnings, or enjoying a good cup of coffee.
                </p>
              </div>
              <div className="mt-10">
                <Button href="#" variant="primary" size="lg">
                  Download Resume
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-surface-2">
        <div className="container mx-auto px-6">
          <SectionTitle tag="EXPERTISE" title="My Skills" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ScrollReveal>
              <h4 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
                <span className="text-accent">💻</span> Frontend Development
              </h4>
              <div className="space-y-6">
                {skills.frontend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>{skill.name}</span>
                      <span className="text-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-surface rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h4 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3">
                <span className="text-accent">🎨</span> UI/UX Design
              </h4>
              <div className="space-y-6">
                {skills.design.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>{skill.name}</span>
                      <span className="text-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-surface rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Experience */}
            <div>
              <SectionTitle tag="CAREER" title="Experience" className="mb-10" />
              <div className="border-l-2 border-border ml-4 space-y-12">
                {experience.map((exp, index) => (
                  <ScrollReveal key={exp.id} delay={0.1 * index} className="relative pl-10">
                    <div className="absolute w-5 h-5 bg-surface border-4 border-accent rounded-full -left-[11px] top-1"></div>
                    <div className="text-accent text-sm font-bold tracking-widest uppercase mb-2">{exp.period}</div>
                    <h4 className="text-2xl font-heading font-bold text-text mb-1">{exp.role}</h4>
                    <div className="text-text font-medium mb-4">{exp.company}</div>
                    <p className="text-muted">{exp.description}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <SectionTitle tag="ACADEMICS" title="Education" className="mb-10" />
              <div className="border-l-2 border-border ml-4 space-y-12">
                {education.map((edu, index) => (
                  <ScrollReveal key={edu.id} delay={0.1 * index} className="relative pl-10">
                    <div className="absolute w-5 h-5 bg-surface border-4 border-accent rounded-full -left-[11px] top-1"></div>
                    <div className="text-accent text-sm font-bold tracking-widest uppercase mb-2">{edu.period}</div>
                    <h4 className="text-2xl font-heading font-bold text-text mb-1">{edu.degree}</h4>
                    <div className="text-text font-medium mb-4">{edu.institution}</div>
                    <p className="text-muted">{edu.description}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
