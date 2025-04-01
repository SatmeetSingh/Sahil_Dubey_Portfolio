import AboutUs from "../AboutUs/AboutUs";
import Certification from "../Certification/Certification";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Hero from "../HeroPage/Hero";

export default function Home() {
  return (
    <div>
        <Hero />
        <AboutUs />
        <Experience />
        <Certification/>
        <Contact/>
        <Footer/>
    </div>
  )
}
