import VideoIntro from "@/components/VideoIntro/VideoIntro";
import About from "@/components/About/About";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import Footer from "@/components/Footer/Footer";
import Skills from "@/components/Skills/Skills";
import Education from "@/components/Education/Education";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";


export default function Page() {
  return (
    <main>
      <Navbar />
      <VideoIntro
        videoSrc="/videos/talkingvideo.mp4"
        firstName="Bhavani"
        lastName="Konga"
        tagline="Software Developer"
        role="Software Developer | Cyber Security Engineer | AI/ML Enthusiast | Full Stack Developer"
      />

      <About />
      <Services />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      
      <Footer />
      


    </main>
  );
}