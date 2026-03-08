// Contact Page - Contact form and information
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <div className="container">
          <h1>Contact Me</h1>
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>I'm always interested in hearing about new projects and opportunities.</p>
              <div className="contact-details">
                <p><strong>Email:</strong> your.email@example.com</p>
                <p><strong>Phone:</strong> +123 456 7890</p>
                <p><strong>Location:</strong> Your City, Country</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
