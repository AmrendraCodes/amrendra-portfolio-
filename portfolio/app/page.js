// Home Page - Landing page with all sections
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
