import { Link } from 'react-scroll';
import styles from "./navbar.module.css";
import {  useRef, useState } from 'react';
import gsap from 'gsap';
import Sidebar from './Sidebar/Sidebar';

export default function Navbar() {
  const line1Ref = useRef<HTMLDivElement | null>(null);
  const line2Ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false); 
    
  const handleClick = () => {
    if (!line1Ref.current || !line2Ref.current) return;
  
      // Toggle animation state
    setIsOpen((prev) => !prev); // Toggle state
  
    gsap.to(line1Ref.current, {
        rotate: isOpen ? 0 : 45,
        y : !isOpen ? -7 : 0,
        transformOrigin:"left",
        duration: 0.5,
        ease: "power2.out"
    });
  
    gsap.to(line2Ref.current, {
        rotate: isOpen ? 0 :-45 ,
        y : !isOpen ? 7 : 0,
        transformOrigin:"left",
        duration: 0.5,
        ease: "power2.out"
    });
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
        <p>  
          <Link to='home' 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500}><span>S</span> DUBEY
          </Link>
          </p>
        <div className={styles.page}>
          <Link to='home' 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500}  
                className={styles.link}>Home</Link>
          <Link to='about' 
                spy={true} 
                offset={-50} 
                smooth={true} 
                duration={500}  
                className={styles.link}>About</Link>
          <Link to='experience'
                spy={true}
                offset={-80} 
                smooth={true} 
                duration={500} 
                className={styles.link}>Experience</Link>
          <Link to='certificate' 
                spy={true}
                offset={-50} 
                smooth={true} 
                duration={500} 
                className={styles.link}>Certificate</Link>
          <Link to='contact' 
                spy={true}
                offset={-90}  
                smooth={true} 
                duration={500} 
                className={`${styles.link} ${styles.contact}`}>Contact</Link>
        </div>
        <div ref={containerRef} className={styles.burgur} onClick={handleClick}>
          <div ref={line1Ref} className={styles.lineone}></div>   
          <div ref={line2Ref} className={styles.linetwo}></div>   
        </div>
      </div>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}><Sidebar /></div>
    </div>
  )
}

