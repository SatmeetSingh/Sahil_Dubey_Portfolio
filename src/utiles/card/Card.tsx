import React from 'react';
import styles from './card.module.css';
import { SlBadge } from "react-icons/sl";


interface Certification {
  id: number;
  title: string;
  name: string;
  description: string;
  certifiedDate: string;
  validUntilDate: string;
  issuer: string;
}

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className={styles.card} key={certification.id}>
      <SlBadge size={60} color="#E72929"/>
      <h1 className={styles.title}>{certification.title}</h1>
      <h2 className={styles.name}>{certification.name}</h2>
      <p className={styles.description}>{certification.description}</p>
      <div className={styles.dates}>
        Certified: {certification.certifiedDate} – Valid until: {certification.validUntilDate}
      </div>
      <div className={styles.issuer}>{certification.issuer}</div>
    </div>
  );
};

export default CertificationCard;