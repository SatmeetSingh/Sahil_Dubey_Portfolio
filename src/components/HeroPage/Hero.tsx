import styles from "./hero.module.css";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const introRef = useRef<HTMLDivElement | null>(null);
  const text1ref = useRef<HTMLDivElement | null>(null);
  const text2ref = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    gsap.from(introRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.1
    });
    gsap.to(introRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1
    });

    gsap.from(text1ref.current, {
      opacity: 0,
      y: -80,
      x:-80,
      duration: 1,
      stagger: 0.1
    });
    gsap.to(text1ref.current, {
      opacity: 1,
      y: 0,
      x:0,
      duration: 1,
      stagger: 0.1
    });

    gsap.from(text2ref.current, {
      opacity: 0,
      y: -80,
      x: 80,
      duration: 1,
      stagger: 0.1
    });
    gsap.to(text2ref.current, {
      opacity: 1,
      y: 0,
      x:0,
      duration: 1,
      stagger: 0.3
    });
  },[])
  return (
    <div className={styles.hero}>
      <div  ref={introRef} className={styles.intro}>
        <p>Hello!</p>
        <h4>I’m <span>Sahil Dubey</span>,<br />DevOps And Cloud Security Expert</h4>
      </div>
      <div className={styles.next}>
        <div ref={text1ref} className={styles.info}>
          <FaQuoteLeft size={36}/>
        <p >Sahil Dubey, As a successful Strategic Leadership, Information Security, Compliance, DevOps, Cloud Advnt, Datacenter Management with more than a decade's experience</p>
        </div>
        <div ref={text2ref} className={styles.rating}>
          <div className={styles.star}>
            <FaStar size={32} color="#F7B706"/>
            <FaStar size={32} color="#F7B706"/>
            <FaStar size={32} color="#F7B706"/>
            <FaStar size={32} color="#F7B706"/>
            <FaStar size={32} color="#F7B706"/>
          </div>
          <span>15 Years</span>
          <p>Experince</p>
        </div>
      </div>
      <div className={styles.semicircle}>
        <img src="./images/SahilDUbey.png" alt="Sahil" />
        <div className={styles.btn}>
            <p>Portfolio 
              </p>
            <span>Hire me</span>
        </div>
      </div>
    </div>
  )
}
