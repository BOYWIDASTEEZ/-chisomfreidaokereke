import About from "@/components/About/page";
import Experience from "@/components/Experience/page";
import Hero from "@/components/Hero/page";
import Navbar from "@/components/Navbar/page";
import Project from "@/components/Project/page";
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
    </main>
  );
}