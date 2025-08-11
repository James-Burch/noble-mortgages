import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Company Info */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>Noble Mortgages</h3>
            <p className={styles.footerText}>
              Professional mortgage and insurance advice across the UK. 
              Helping you make confident financial decisions for your future.
            </p>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <span className={styles.contactLabel}>Phone:</span>
                <a href="tel:+441234567890" className={styles.contactLink}>
                  01234 567 890
                </a>
              </p>
              <p className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <a href="mailto:info@noblemortgages.co.uk" className={styles.contactLink}>
                  info@noblemortgages.co.uk
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Quick Links</h4>
            <ul className={styles.footerList}>
              <li><Link to="/" className={styles.footerLink}>Home</Link></li>
              <li><Link to="/about" className={styles.footerLink}>About</Link></li>
              <li><Link to="/mortgages" className={styles.footerLink}>Mortgages</Link></li>
              <li><Link to="/insurance" className={styles.footerLink}>Insurance</Link></li>
              <li><Link to="/calculators" className={styles.footerLink}>Calculators</Link></li>
              <li><Link to="/faqs" className={styles.footerLink}>FAQs</Link></li>
              <li><Link to="/contact" className={styles.footerLink}>Contact</Link></li>
            </ul>
          </div>

          {/* Mortgage Services */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Mortgage Services</h4>
            <ul className={styles.footerList}>
              <li><Link to="/mortgages/first-time-buyers" className={styles.footerLink}>First Time Buyers</Link></li>
              <li><Link to="/mortgages/home-mover" className={styles.footerLink}>Home Mover</Link></li>
              <li><Link to="/mortgages/remortgage" className={styles.footerLink}>Remortgage</Link></li>
              <li><Link to="/mortgages/buy-to-let" className={styles.footerLink}>Buy to Let</Link></li>
              <li><Link to="/mortgages/help-to-buy" className={styles.footerLink}>Help to Buy</Link></li>
              <li><Link to="/mortgages/bridging-loans" className={styles.footerLink}>Bridging Loans</Link></li>
            </ul>
          </div>

          {/* Insurance Services */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerHeading}>Insurance Services</h4>
            <ul className={styles.footerList}>
              <li><Link to="/insurance/life-insurance" className={styles.footerLink}>Life Insurance</Link></li>
              <li><Link to="/insurance/income-protection" className={styles.footerLink}>Income Protection</Link></li>
              <li><Link to="/insurance/critical-illness" className={styles.footerLink}>Critical Illness</Link></li>
              <li><Link to="/insurance/accident-sickness-unemployment" className={styles.footerLink}>ASU Cover</Link></li>
              <li><Link to="/insurance/home-buildings-contents" className={styles.footerLink}>Home, Buildings & Contents</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            {/* Compliance Links */}
            <div className={styles.complianceLinks}>
              <a 
                href="/documents/privacy-policy.pdf" 
                className={styles.complianceLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a 
                href="/documents/terms-conditions.pdf" 
                className={styles.complianceLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
              <a 
                href="/documents/cookies-policy.pdf" 
                className={styles.complianceLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookies Policy
              </a>
              <a 
                href="https://register.fca.org.uk/" 
                className={styles.complianceLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                FCA Register
              </a>
            </div>

            {/* Copyright */}
            <p className={styles.copyright}>
              © {currentYear} Noble Mortgages. All rights reserved.
            </p>
          </div>

          {/* FCA Disclaimer */}
          <div className={styles.fcaDisclaimer}>
            <p className={styles.disclaimerText}>
              <strong>Important:</strong> Noble Mortgages is authorised and regulated by the Financial Conduct Authority (FCA). 
              FCA Number: [FCA_NUMBER]. Your home may be repossessed if you do not keep up repayments on your mortgage. 
              Some mortgages are not regulated by the FCA.
            </p>
            <p className={styles.disclaimerText}>
              We may receive commission from some providers, but this does not affect our recommendations. 
              We will always act in your best interests and provide clear information about any fees or charges.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;