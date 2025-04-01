import styles from './contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.textContent}>
        <h2 className={styles.sectionTitle}>Lorem ipsum dolor sit amet, consectetur</h2>
        
        <div className={styles.textColumns}>
          <div className={styles.column}>
            <p>Suspendisse ipsum mauris,</p>
            <p>vulputate vel ante eu</p>
            <p>Proin non nibh non leo auctor isculis vitae vel est. Donec eget erat in</p>
            <p>enim mattis gravida. Suspendisse lacinia eleifend mauris eget posuere.</p>
          </div>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.infoBlock}>
            <h3>Postal Address</h3>
            <p>1870 sed consequat risus, at vestibulum lacus.</p>
          </div>
          <div className={styles.infoBlock}>
            <h3>General Enquiries</h3>
            <p>no-reply@yourdomain.com / sales@yourdomain.com</p>
          </div>
          <div className={styles.infoBlock}>
            <h3>Business Phone</h3>
            <p>773-222-4444 / 7722-545-8888</p>
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
            <textarea placeholder="Your Message" rows={5} required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;