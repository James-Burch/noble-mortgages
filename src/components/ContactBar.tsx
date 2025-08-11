import React from "react";
import styles from "./ContactBar.module.css";

const ContactBar: React.FC = () => {
  return (
    <div className={styles.contactBar}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <span className={styles.contactText}>
              Got a question? Contact us today!
            </span>
            <a
              href="mailto:admin@noblemortgages.co.uk"
              className={styles.email}
            >
              admin@noblemortgages.co.uk
            </a>
          </div>

          <div className={styles.rightSection}>
            <a
              href="https://wa.me/447956758625"
              className={styles.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.whatsappIcon}>
                <span className={styles.phoneIcon}>📱</span>
              </div>
              <div className={styles.whatsappText}>
                <span className={styles.whatsappLabel}>WhatsApp:</span>
                <span className={styles.whatsappNumber}>07956 758625</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
