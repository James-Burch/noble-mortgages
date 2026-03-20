import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const BridgingLoans: React.FC = () => {
  return (
    <PageTemplate
      title="Bridging Loans"
      subtitle="Fast, flexible financing to bridge the gap between buying and selling property"
      backgroundImage="/images/bridgingloanimage.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <div className={styles.text}>
              <p>
                When timing is critical in property transactions, bridging loans
                provide fast, flexible short-term financing to help you move
                quickly and secure opportunities.
              </p>
              <p>
                Bridging finance is typically used when you need to purchase a
                property before selling your existing one, or when you need to
                complete a purchase quickly at auction. These short-term loans
                can often be arranged within days rather than weeks.
              </p>
              <p>
                We work with specialist bridging lenders who understand the need
                for speed and flexibility. Whether it's a residential bridge,
                commercial opportunity, or development project, we can arrange
                finance from £25,000 to £25 million+.
              </p>
              <p>
                Our bridging specialists will assess your situation, explain the
                costs involved, and ensure you have a clear exit strategy before
                proceeding. We'll also help coordinate the legal and valuation
                process to ensure completion happens as quickly as possible.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.highlight}>
              <h3>Bridging Loan Benefits</h3>
              <p>
                ✓ <strong>Speed of completion</strong> - Finance within 7-14
                days
                <br />✓ <strong>Flexible lending</strong> - Up to 75% of
                property value
                <br />✓ <strong>No monthly payments</strong> - Interest can be
                rolled up
                <br />✓ <strong>Property auctions</strong> - Fast finance for
                auction purchases
                <br />✓ <strong>Chain breaking</strong> - Buy before you sell
              </p>
            </div>
          </div>
        </div>

        <div className={styles.processSteps}>
          <h2 className={styles.sectionTitle}>Common Bridging Scenarios</h2>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h4>Chain Breaking</h4>
              <p>
                Purchase your new home before your current property has sold to
                avoid losing your dream home.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h4>Property Auctions</h4>
              <p>
                Secure finance for auction purchases where completion is
                required within 28 days.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h4>Renovation Projects</h4>
              <p>
                Finance property purchases that require refurbishment before a
                mortgage is available.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h4>Commercial Opportunities</h4>
              <p>
                Quick finance for time-sensitive commercial property
                investments.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h4>Development Finance</h4>
              <p>
                Bridge to development finance for property development projects.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Need Fast Property Finance?</h3>
          <p>
            Contact our bridging specialists for rapid financing solutions
            tailored to your situation.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get Bridging Finance Quote
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default BridgingLoans;
