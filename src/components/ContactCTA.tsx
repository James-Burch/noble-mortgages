import React from "react";
import { Link } from "react-router-dom";
import styles from "./ContactCTA.module.css";

const ContactCTA: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Ready to Get Started?</h2>
            <p className={styles.description}>
              Speak to one of our expert mortgage advisors today. We'll provide
              personalized advice and guide you through every step of your
              mortgage or insurance journey.
            </p>
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <span className={styles.checkmark}>✓</span>
                <span>Free initial consultation</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.checkmark}>✓</span>
                <span>Whole of market advice</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.checkmark}>✓</span>
                <span>Support from start to finish</span>
              </div>
            </div>
          </div>

          <div className={styles.ctaContent}>
            <div className={styles.contactMethods}>
              <div className={styles.phoneContact}>
                <h3 className={styles.contactTitle}>Call Us Today</h3>
                <a href="tel:+441234567890" className={styles.phoneNumber}>
                  01234 567 890
                </a>
                <p className={styles.contactHours}>
                  Mon-Fri: 9am-6pm
                  <br />
                  Sat: 9am-4pm
                </p>
              </div>

              <div className={styles.formContact}>
                <h3 className={styles.contactTitle}>Get Expert Advice</h3>
                <p className={styles.formDescription}>
                  Fill out our quick form and we'll get back to you within 24
                  hours
                </p>
                <Link to="/contact" className={styles.ctaButton}>
                  Contact Us Today
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
