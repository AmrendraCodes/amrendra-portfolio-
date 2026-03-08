// About Page - Personal information and background
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AboutSection from '../../components/AboutSection';

export default function About() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <div className="container">
          <h1>About Me</h1>
          <AboutSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
