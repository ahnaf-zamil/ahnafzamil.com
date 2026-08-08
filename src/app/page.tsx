import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import TechnicalAreas from "@/components/TechnicalAreas";
import TechStack from "@/components/TechStack";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-theme-bg">
      <Navbar />
      <main className="flex-grow">
        <Hero />
          <About />
          <Projects />
          <Testimonials />
          <TechnicalAreas />
          <TechStack />
          <Blog />
        </main>
      <Footer />
    </div>
  );
}