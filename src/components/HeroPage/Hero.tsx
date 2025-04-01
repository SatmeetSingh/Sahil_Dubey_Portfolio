import styles from "./hero.module.css";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.intro}>
        <p>Hello!</p>
        <h4>I’m <span>Sahil Dubey</span>,<br />DevOps And Cloud Security Expert </h4>
      </div>
      <div className={styles.next}>
        <div className={styles.info}>
          <FaQuoteLeft size={36}/>
        <p>Sahil Dubey, As a successful Strategic Leadership, Information Security, Compliance, DevOps, Cloud Advnt, Datacenter Management with more than a decade's experience</p>
        </div>
        <div className={styles.rating}>
          <div>
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
