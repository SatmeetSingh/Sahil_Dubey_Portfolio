import React, { useEffect, useRef } from 'react';
import styles from "./certification.module.css";
import CertificationCard from '../../utiles/card/Card';
import certifications from './certification.json'; // Import your JSON data
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Certification: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);
  
  return (
      <div className={styles.container}>
        <div className={styles.intro}>Professional <span>Certfication</span></div>    
        <div className={styles.cards}>
          <div className={styles.certificationsContainer}>
            {certifications.map((certification , index) => (
               <CertificationCard 
                   key={certification.id} 
                   certification={certification} 
                   ref={(el) => {cardsRef.current[index] = el}} 
               />
            ))}
          </div>  
        </div>
      </div>
  );
};

export default Certification;