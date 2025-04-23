import { Link } from "react-scroll";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
      <div className={styles.sidebar}>
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
        <div className={styles.footerBottom}>
        <p className={styles.footerCopyright}>Copyright© 2023 Sahil Dubey. All Rights Reserved.</p>
        <div className={styles.footerLegal}>
          <a href="/terms">User Terms & Conditions</a>
          <span> | </span>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
      </div>
  )
}
