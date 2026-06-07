import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import BackToTop from "../components/ui/BackToTop";

export const metadata = {
  title: "Amrendra Kumar — UI/UX Designer & Frontend Developer",
  description: "Portfolio of Amrendra Kumar, a professional UI/UX Designer and Frontend Developer based in Ahmedabad, Gujarat, India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-bg text-text antialiased selection:bg-accent/30 selection:text-white" suppressHydrationWarning={true}>
        <Navbar />
        <main>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}