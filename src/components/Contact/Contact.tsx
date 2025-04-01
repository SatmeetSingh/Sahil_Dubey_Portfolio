import styles from './contact.module.css';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.textContent}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        
        <div className={styles.textColumns}>
          <div className={styles.column}>
            <p>I'd love to hear from you! Whether you have a project in mind, a question, or just want to say hello, feel free to reach out. Your ideas and inquiries are always welcome.</p>
          </div>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.infoBlock}>
            <div className={styles.iconBox}>
          <MdEmail color='white' size={25}/>
            <h3>Email Address</h3>
            </div>
            <p>no-reply@yourdomain.com / sales@yourdomain.com</p>
          </div>
          <div className={styles.infoDivider}></div>

          <div className={styles.infoBlock}>
          <div className={styles.iconBox}>
          <FaPhoneAlt color='white' size={25}/>
            <h3>Businnes Phone</h3>
            </div>
            <p>773-222-4444 / 7722-545-8888</p>
          </div>
          <div className={styles.infoDivider}></div>

          <div className={styles.infoBlock}>
          <div className={styles.iconBox}>
          <FaLocationDot color='white' size={25}/>
            <h3>Address</h3>
            </div>
            <p>1870 sed consequat risus, at vestibulum lacus.</p>
          </div>
          
        </div>
      </div>

      <div className={styles.contactForm}>
        <h2 className={styles.formTitle}>Contact Us</h2>
        <form>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className={styles.formGroup}>
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className={styles.formGroup}>
            <input type="tel" placeholder="Phone Number" />
          </div>
          <div className={styles.formGroup}>
            <textarea placeholder="Your Message" rows={7} required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;