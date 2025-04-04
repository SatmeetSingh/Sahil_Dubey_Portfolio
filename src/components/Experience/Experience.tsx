import styles from "./experience.module.css";
import experienceData from './Experience.json';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      timelineRef.current,
      { height: 0 },
      {
        height: "100%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    timelineItemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);


  return (
    <div ref={sectionRef} className={styles.experience}>
        <div className={styles.intro}>My <span>Work Experince</span></div>      
      <div className={styles.contentWrapper}>        
        <div ref={timelineRef} className={styles.timeline}>
          {experienceData.experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem} ref={(el) => {timelineItemsRef.current[index] = el}}>
              <div className={styles.timelineDot}>
                <div className={styles.circle}></div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.companyName}>{exp.company}</h3>
                  <p>
                  <span className={styles.location}>{exp.location}</span>
                  <span className={styles.period}>{exp.period}</span>
                  </p>
                </div> 
                <div className={styles.second}>
                <h4 className={styles.companyName}>{exp.position}</h4>
                <p className={styles.description}>{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
