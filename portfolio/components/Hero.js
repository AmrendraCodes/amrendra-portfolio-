// Hero Component - Main landing section for home page
export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Your Name</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              I create beautiful, functional web applications with modern technologies.
              Passionate about clean code, user experience, and continuous learning.
            </p>
            <div className="hero-buttons">
              <a href="/projects" className="btn btn-primary">View Projects</a>
              <a href="/contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder">
              {/* Add your profile image here */}
              <p>Profile Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
