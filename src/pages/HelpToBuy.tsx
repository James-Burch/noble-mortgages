import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const HelpToBuy: React.FC = () => {
  return (
    <PageTemplate
      title="Help to Buy"
      subtitle="Access government schemes and specialist advice for Help to Buy mortgages"
      backgroundImage="/images/image6.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <div className={styles.text}>
              <p>
                The Help to Buy scheme provides valuable support for first-time
                buyers and existing homeowners looking to purchase a new build
                property.
              </p>
              <p>
                With government equity loans available, you could purchase a new
                build home with as little as a 5% deposit. The government
                provides an equity loan of up to 20% (40% in London) of the
                property's value, interest-free for the first five years.
              </p>
              <p>
                We'll guide you through the Help to Buy process, from checking
                eligibility to finding the right mortgage to complement your
                government loan. Our expertise ensures you understand all the
                terms and future obligations.
              </p>
              <p>
                We work with lenders who are experienced in Help to Buy
                mortgages and can provide competitive rates on the remaining
                mortgage amount you need to borrow.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.highlight}>
              <h3>Help to Buy Benefits</h3>
              <p>
                ✓ <strong>Lower deposit required</strong> - From just 5% deposit
                <br />✓ <strong>Government equity loan</strong> - Up to 20% (40%
                London)
                <br />✓ <strong>Interest-free period</strong> - No interest for
                5 years
                <br />✓ <strong>New build only</strong> - Choose from latest
                developments
                <br />✓ <strong>Specialist lenders</strong> - Experience with
                scheme requirements
              </p>
            </div>
          </div>
        </div>

        <div className={styles.processSteps}>
          <h2 className={styles.sectionTitle}>Help to Buy Eligibility</h2>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h4>Property Requirements</h4>
              <p>
                Must be a new build property purchased directly from a
                registered developer.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h4>Price Limits</h4>
              <p>
                Property value must not exceed regional price caps (£600,000 in
                London, £420,000 elsewhere).
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h4>Buyer Status</h4>
              <p>
                Available to first-time buyers and existing homeowners (not for
                buy-to-let).
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h4>Income Assessment</h4>
              <p>
                Must be able to afford the mortgage on the remaining 75% (60% in
                London) of the property value.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h4>Future Obligations</h4>
              <p>
                Understand the equity loan repayment terms when selling or
                remortgaging.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Eligible for Help to Buy?</h3>
          <p>
            Let us check your eligibility and find the best mortgage to
            complement your government loan.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Check Help to Buy Eligibility
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default HelpToBuy;
