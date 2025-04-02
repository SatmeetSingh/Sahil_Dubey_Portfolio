import React from 'react';
import styles from './card.module.css';
import { GoLinkExternal } from "react-icons/go";

interface Certification {
  id: number;
  img: string;
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

const CertificationCard =  React.forwardRef<HTMLDivElement, CertificationCardProps>(
  ({ certification }, ref)=> {
  return (
    <div className={styles.card} key={certification.id}  
         ref={ref}>
      <div className={styles.cardImage}>
      <img src={certification.img} alt={certification.title}/>
      </div>
      <h1 className={styles.title}>{certification.title}</h1>
    
      <p className={styles.description}>{certification.description}</p>
      <div className={styles.dates}>
        Certified: {certification.certifiedDate} - Valid until: {certification.validUntilDate}
      </div>
      <div className={styles.issuer}>{certification.issuer}
      <button><GoLinkExternal size={20}/></button>
      </div>
    </div>
  );
});

export default CertificationCard;