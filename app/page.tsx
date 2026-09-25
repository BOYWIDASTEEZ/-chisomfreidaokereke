import About from "@/components/About/page";
import Contact from "@/components/Contact/page";
import Downloads from "@/components/Downloads/page";
import Experience from "@/components/Experience/page";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/page";
import MobileNav from "@/components/MobileNav/page";
import Navbar from "@/components/Navbar/page";
import Project from "@/components/Project/page";
import ScrollToTop from "@/components/ScrollToTop";
import Stack from "@/components/Stack/page";
import Stat from "@/components/Statistics/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <Stat />
      <About />
      <Experience />
      <Project />
      <Stack /> 
      <Downloads />
      <Contact />
      <Footer />
      <ScrollToTop />
      <MobileNav />
    </main>
  );
}