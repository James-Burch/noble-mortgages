import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const NewBuild: React.FC = () => {
  return (
    <PageTemplate
      title="New Build Mortgages"
      subtitle="Specialist mortgages for new build properties with expert guidance throughout"
      backgroundImage="/images/image4.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <div className={styles.text}>
              <p>
                Buying a new build property comes with unique considerations and
                opportunities that require specialist mortgage advice.
              </p>
              <p>
                New build mortgages often have different criteria compared to
                existing properties, with some lenders offering preferential
                rates for energy-efficient homes. We understand the complexities
                of new build purchases and work with lenders who are experienced
                in this market.
              </p>
              <p>
                From reservation to completion, new build purchases can take
                several months. We'll help you secure a mortgage offer that
                protects you throughout this extended timeline, ensuring your
                rate is locked in even if market conditions change.
              </p>
              <p>
                We also understand the Help to Buy schemes available for new
                builds and can guide you through the eligibility requirements
                and application process to maximize your purchasing power.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.highlight}>
              <h3>New Build Advantages</h3>
              <p>
                ✓ <strong>Extended mortgage offers</strong> - 6-month offers for
                build delays
                <br />✓ <strong>Energy efficiency incentives</strong> - Better
                rates for green homes
                <br />✓ <strong>Help to Buy compatible</strong> - Government
                scheme access
                <br />✓ <strong>Part Exchange options</strong> - Developer
                assistance programs
                <br />✓ <strong>Warranty protection</strong> - NHBC 10-year
                warranties
              </p>
            </div>
          </div>
        </div>

        <div className={styles.processSteps}>
          <h2 className={styles.sectionTitle}>New Build Mortgage Process</h2>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h4>Reservation Stage</h4>
              <p>
                Get your mortgage agreed in principle before reserving to
                strengthen your position.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h4>Extended Mortgage Offer</h4>
              <p>
                Secure a 6-month mortgage offer to account for potential build
                delays.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h4>Incentive Schemes</h4>
              <p>
                Explore Help to Buy, shared ownership, and developer assistance
                programs.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h4>Build Progress Monitoring</h4>
              <p>
                We'll track your build progress and keep your lender updated on
                completion dates.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h4>Completion Support</h4>
              <p>
                Final mortgage arrangements and completion coordination with all
                parties.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Buying a New Build Property?</h3>
          <p>
            Get specialist advice for new build mortgages and government
            schemes.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get New Build Advice
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default NewBuild;
