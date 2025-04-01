import { Link } from "react-scroll";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
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
  )
}
