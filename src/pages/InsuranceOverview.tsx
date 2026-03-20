import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import ProductCards from "../components/ProductCards";
import { insuranceProducts } from "../data/products";
import styles from "../components/PageTemplate.module.css";

const InsuranceOverview: React.FC = () => {
  return (
    <PageTemplate
      title="Insurance Protection"
      subtitle="Comprehensive protection for you, your family, and your property"
      backgroundImage="/images/homeinsurance.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <div className={styles.text}>
              <p>
                Life is unpredictable, but your financial security doesn't have
                to be. Our comprehensive range of insurance products provides
                protection for you, your family, and your property against
                life's unexpected events.
              </p>
              <p>
                From life insurance to protect your family's future, to income
                protection that safeguards your lifestyle, we help you choose
                the right coverage for your unique circumstances. Our
                experienced advisors work with leading UK insurers to find
                competitive rates and comprehensive coverage.
              </p>
              <p>
                Whether you're protecting your mortgage, replacing lost income,
                or securing your family's financial future, we provide clear,
                unbiased advice to help you make informed decisions about your
                insurance needs.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.highlight}>
              <h3>Why Choose Noble Mortgages?</h3>
              <p>
                ✓ <strong>Whole of market access</strong> - Compare leading UK
                insurers
                <br />✓ <strong>Expert guidance</strong> - Professional advice
                tailored to your needs
                <br />✓ <strong>No-obligation quotes</strong> - Free insurance
                reviews and quotes
                <br />✓ <strong>Ongoing support</strong> - Help with claims and
                policy reviews
                <br />✓ <strong>FCA regulated</strong> - Your protection is our
                priority
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Ready to Protect What Matters Most?</h3>
          <p>
            Speak to one of our insurance experts today for free, no-obligation
            advice.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get Expert Insurance Advice
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* All Insurance Products */}
      <ProductCards
        title="All Insurance Products"
        products={insuranceProducts}
        type="insurance"
      />
    </PageTemplate>
  );
};

export default InsuranceOverview;
