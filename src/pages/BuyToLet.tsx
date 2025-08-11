import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const BuyToLet: React.FC = () => {
  return (
    <PageTemplate
      title="Buy to Let"
      subtitle="Build your property portfolio with competitive buy-to-let mortgage solutions"
      backgroundImage="/images/apartmentblock.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <div className={styles.text}>
              <p>
                The rental market remains highly active across the UK, making
                buy-to-let an appealing route for both new and experienced
                property investors.
              </p>
              <p>
                Whether you're looking to purchase your first rental property or
                expand an existing portfolio, we have access to competitive
                buy-to-let mortgage products from specialist lenders who
                understand the investment market.
              </p>
              <p>
                From understanding rental yield requirements to navigating tax
                implications, we'll guide you through every aspect of buy-to-let
                investing. Our expertise covers everything from standard
                residential lets to HMOs and commercial properties.
              </p>
              <p>
                We work with both individual investors and limited company
                structures, helping you choose the most tax-efficient approach
                for your circumstances and investment goals.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.highlight}>
              <h3>Buy to Let Features</h3>
              <p>
                ✓ <strong>Competitive rates</strong> - Access to specialist BTL
                lenders
                <br />✓ <strong>Portfolio lending</strong> - Finance multiple
                properties
                <br />✓ <strong>HMO mortgages</strong> - Houses in Multiple
                Occupation
                <br />✓ <strong>Limited company BTL</strong> - Tax-efficient
                structures
                <br />✓ <strong>Rental assessment</strong> - Stress-tested
                rental coverage
              </p>
            </div>
          </div>
        </div>

        <div className={styles.processSteps}>
          <h2 className={styles.sectionTitle}>Buy to Let Considerations</h2>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h4>Investment Strategy</h4>
              <p>
                We'll discuss your investment goals and help you develop a
                property strategy.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h4>Rental Yield Analysis</h4>
              <p>
                Most lenders require rental income to cover 125-145% of the
                mortgage payment.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h4>Tax Considerations</h4>
              <p>
                We'll explain the tax implications and benefits of different
                ownership structures.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h4>Lender Selection</h4>
              <p>
                Access specialist BTL lenders with competitive rates and
                flexible criteria.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h4>Portfolio Growth</h4>
              <p>
                Plan for future expansion with lenders who support portfolio
                landlords.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Ready to Start Investing?</h3>
          <p>
            Speak to our buy-to-let specialists about building your property
            portfolio.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get BTL Mortgage Advice
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default BuyToLet;
