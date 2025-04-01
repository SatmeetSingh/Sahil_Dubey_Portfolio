import { Link } from 'react-scroll';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerSection}>
          <h2 className={styles.footerHeading}>Lets Connect there</h2>
          <h3 className={styles.footerSubheading}>DUBEY</h3>
          <p className={styles.footerText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerSubheading}>Navigation</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link to='home' 
                  spy={true} 
                  smooth={true} 
                  offset={-50} 
                  duration={500}  
                  >Home</Link>
            </li>
            <li>
              <Link to='about' 
                  spy={true} 
                  offset={-50} 
                  smooth={true} 
                  duration={500}  
                  >About</Link>
            </li>
            <li>
              <Link to='experience'
                  spy={true}
                  offset={-80} 
                  smooth={true} 
                  duration={500} 
                  >Experience</Link>
            </li>
            <li>
              <Link to='certificate' 
                  spy={true}
                  offset={-50} 
                  smooth={true} 
                  duration={500} 
                  >Certificate</Link>
            </li>
            <li>
              <Link to='contact' 
                  spy={true}
                  offset={-90}  
                  smooth={true} 
                  duration={500} 
                  >Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerSubheading}>Contact</h3>
          <ul className={styles.footerContact}>
            <li>+91 7738443636</li>
            <li>Jaycrea36@gmail.com</li>
            <li>Portfolio-jerea.com</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerSubheading}>Get the latest information</h3>
          <div className={styles.footerNewsletter}>
            <input type="email" placeholder="Email Address" className={styles.footerInput} />
          </div>
        </div>
      </div>

      <div className={styles.footerDivider}></div>

      <div className={styles.footerBottom}>
        <p className={styles.footerCopyright}>Copyright© 2023 Sahil Dubey. All Rights Reserved.</p>
        <div className={styles.footerLegal}>
          <a href="/terms">User Terms & Conditions</a>
          <span> | </span>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;