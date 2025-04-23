import AboutUs from "../AboutUs/AboutUs";
import Certification from "../Certification/Certification";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Footer from "../Footer/Footer";
import Hero from "../HeroPage/Hero";
import {  Element } from 'react-scroll';


export default function Home() {
  return (
    <div>
         <Element name="home">
           <Hero />
         </Element>
         <Element name="about">
        <AboutUs />
         </Element>
         <Element name="experience">
        <Experience />
         </Element>
         <Element name="certificate">
        <Certification/>
         </Element>
         <Element name="contact">
        <Contact/>
         </Element>
        <Footer/>
    </div>
  )
}
