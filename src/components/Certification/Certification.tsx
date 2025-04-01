import React from 'react';
import styles from "./certification.module.css";
import CertificationCard from '../../utiles/card/Card';
import certifications from './certification.json'; // Import your JSON data

const Certification: React.FC = () => {
  return (
    <div className={styles.container}>
        <div className={styles.intro}>Professional <span>Certfication</span></div>      
    <div className={styles.certificationsContainer}>
      {certifications.map((certification) => (
        <CertificationCard 
          key={certification.id} 
          certification={certification} 
        />
      ))}
    </div>
    </div>
  );
};

export default Certification;