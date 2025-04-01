import { FaStar } from "react-icons/fa6";
import styles from "./aboutus.module.css";

export default function AboutUs() {
  return (
    <div className={styles.aboutus}>
      <div className={styles.heading}>AWS EXPERT
        <div className={styles.aurora}>
        <div className={styles.auroraItem}></div>
        <div className={styles.auroraItem}></div>
        <div className={styles.auroraItem}></div>
        <div className={styles.auroraItem}></div>
    </div>
      </div>
      <div className={styles.lowersection}>
        <div className={styles.card}>
          <div className={styles.box}></div>
        </div>
        <div className={styles.about}>
          <h2>About <span>US</span></h2>
          <p>As a successful Strategic Leadership, Information Security, Compliance, DevOps, Cloud Advancement, Datacenter Management with more than a decade's experience, I bring a passion for technology, innovation, and global business to Techtweek Infotech, the globally recognized DevOps solutions Company, Tecktweek also, a full-fledged digital marketing company.ṅ</p>
          <div className={styles.achive}>
            <div className={styles.proj}>
              <span>150+</span>
              <p>Project Completed</p>
            </div>
            <div className={styles.proj}>
              <span>450+</span>
              <p>Project Contribution</p>
            </div>
            <div className={styles.proj}>
              <span>550+</span>
              <p>Global Search</p>
            </div>
          </div>
          <div className={styles.skill}>
            <h2>Top Skills</h2>
            <div className={styles.services}>
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