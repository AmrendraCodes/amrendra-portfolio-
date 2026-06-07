import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Amrendra Kumar — UI/UX Designer Portfolio",
  description: "Portfolio of Amrendra Kumar, a professional UI/UX Designer based in Ahmedabad, Gujarat, India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable}`} suppressHydrationWarning={true}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}