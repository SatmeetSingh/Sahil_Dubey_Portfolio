import styles from "./experience.module.css";
import experienceData from './Experience.json';

export default function Experience() {
  return (
    <div className={styles.experience}>
        <div className={styles.intro}>My <span>Work Experince</span></div>      
      <div className={styles.contentWrapper}>        
        <div className={styles.timeline}>
          {experienceData.experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
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
