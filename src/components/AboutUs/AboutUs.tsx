import { FaStar } from "react-icons/fa6";
import styles from "./aboutus.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";

export default function AboutUs() {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  const numRef = useRef<HTMLDivElement | null>(null);
  const numbersRef = useRef<HTMLSpanElement[]>([]);

  const textRef = useRef<HTMLDivElement | null>(null);
  const starRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!numRef.current) return;
    const ctx = gsap.context(() => {
      numbersRef.current.forEach((num) => {
        if (!num) return;
        const targetValue = parseInt(num.getAttribute("data-value") || "0", 10);
        console.log("Animating number:", num.innerText, "Target:", targetValue);

        if (isNaN(targetValue) || targetValue === 0) {
          console.error("Invalid number found:", num, num.innerText, num.getAttribute("data-value"));
          return; // Prevent NaN issue
        }

        const counter = { value: 0 };
        
        gsap.fromTo(
          counter,
          { value: 0 },
          {
            value: targetValue,
            duration: 1.5,
            ease: "power1.inOut",
            snap: { value: 1 }, // Ensure it rounds to whole numbers
            onUpdate: function () {
              num.innerText = `${Math.floor(counter.value)}+`;
            },
            scrollTrigger: {
              trigger: num,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.fromTo(
        numRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: numRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, numRef);

    gsap.fromTo(
      textRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    
    gsap.fromTo(
      starRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: starRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );


     gsap.fromTo(
      aboutRef.current,
      { opacity: 0, x: -50, y: -50, scale: 0.9 }, 
      {
        opacity: 1, x: 0, y: 0, scale: 1, duration: 1.2,ease: "power4.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%", 
          toggleActions: "play none none reverse",
          scrub: true, 
        }
      }
    );

    return () => ctx.revert();

  }, []);

  return (
    <div className={styles.aboutus}>
      {/* <div  className={styles.heading}>AWS EXPERT
        <div className={styles.aurora}>
        <div className={styles.auroraItem}></div>
        <div className={styles.auroraItem}></div>
        <div className={styles.auroraItem}></div>
        <div className={styles.auroraItem}></div>
    </div>
      </div> */}
      <div className={styles.lowersection}>
        <div ref={aboutRef} className={styles.card}>
          <div className={styles.box}></div>
        </div>
        <div  className={styles.about}>
          <h2>About <span>US</span></h2>
          <p ref={textRef}>As a successful Strategic Leadership, Information Security, Compliance, DevOps, Cloud Advancement, Datacenter Management with more than a decade's experience, I bring a passion for technology, innovation, and global business to Techtweek Infotech, the globally recognized DevOps solutions Company, Tecktweek also, a full-fledged digital marketing company.ṅ</p>
          <div ref={numRef} className={styles.achive}>
          {[
        { value: 150, text: "Project Completed" },
        { value: 450, text: "Project Contribution" },
        { value: 550, text: "Global Search" },
          ].map((item, index) => (
             <div key={index} className={styles.proj}>
               <span ref={(el) => {
              if (el) numbersRef.current[index] = el; // ✅ Properly stores ref
               }} data-value={item.value}
              >
              0
              </span>
              <p>{item.text}</p>
          </div>
          ))}
          </div>
          <div className={styles.skill}>
            <h2>Top Skills</h2>
            <div ref={starRef} className={styles.services}>
              <div className={styles.service}>
                <p>Cloud Computing</p>
                <Star />
              </div>
              <div className={styles.service}>
                <p>Amazon Web Services(AWS)</p>
                <Star />
              </div>
              <div className={styles.service}>
                <p>Linux & Jenkins</p>
                <Star />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Star(){
  return (
     <div>
        <FaStar size={22} color="#F7B706"/>
        <FaStar size={22} color="#F7B706"/>
        <FaStar size={22} color="#F7B706"/>
        <FaStar size={22} color="#F7B706"/>
        <FaStar size={22} color="#F7B706"/>
     </div>
  )
}