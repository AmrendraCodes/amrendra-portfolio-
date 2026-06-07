'use client';

import { useState } from 'react';
import SectionTitle from '../../components/ui/SectionTitle';
import Button from '../../components/ui/Button';
import ScrollReveal from '../../components/ui/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-surface-2 border-b border-border">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Get In Touch" 
            subtitle="Have a project in mind or just want to say hello? I'd love to hear from you."
            className="mb-0 max-w-3xl"
          />
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Info (Left) */}
            <div className="lg:col-span-5 space-y-12">
              <ScrollReveal>
                <h3 className="text-3xl font-heading font-bold text-text mb-6">Contact Information</h3>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  Feel free to reach out to me through any of these channels. I typically respond within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-xl flex-shrink-0">📧</div>
                    <div>
                      <div className="text-sm font-semibold text-muted tracking-wider uppercase mb-1">Email</div>
                      <a href="mailto:amrendra@example.com" className="text-lg font-medium text-text hover:text-accent transition-colors">amrendra@example.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-xl flex-shrink-0">📱</div>
                    <div>
                      <div className="text-sm font-semibold text-muted tracking-wider uppercase mb-1">Phone</div>
                      <a href="tel:+919876543210" className="text-lg font-medium text-text hover:text-accent transition-colors">+91 98765 43210</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-xl flex-shrink-0">📍</div>
                    <div>
                      <div className="text-sm font-semibold text-muted tracking-wider uppercase mb-1">Location</div>
                      <div className="text-lg font-medium text-text">Ahmedabad, Gujarat, India</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h4 className="text-xl font-heading font-bold text-text mb-6">Connect on Socials</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-300">
                    <span className="sr-only">Twitter</span>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-300">
                    <span className="sr-only">GitHub</span>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form (Right) */}
            <ScrollReveal delay={0.4} className="lg:col-span-7">
              <div className="bg-surface-2 border border-border rounded-3xl p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-text">Your Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-text">Your Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-text">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-text">Your Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-y"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent-hover text-white font-heading font-semibold text-lg py-4 rounded-lg transition-all duration-300 shadow-[0_4px_20px_rgba(232,39,75,0.3)] hover:shadow-[0_8px_32px_rgba(232,39,75,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/10 border border-green-500/30 text-green-500 rounded-lg text-center font-medium">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                </form>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  );
}
