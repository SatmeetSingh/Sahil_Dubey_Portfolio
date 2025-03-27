import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.nav}>
            <Link to='/' className={styles.link}>Home</Link>
            <Link to='/' className={styles.link}>About</Link>
            <Link to='/' className={styles.link}>Experience</Link>
            <p> <span>S</span> Dubey</p>
            <Link to='/' className={styles.link}>project</Link>
            <Link to='/' className={styles.link}>Certificate</Link>
            <Link to='/' className={styles.link}>Contact</Link>
        </div>
    </div>
  )
}
