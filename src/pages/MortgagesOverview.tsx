import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import ProductCards from "../components/ProductCards";
import { mortgageProducts } from "../data/products";
import styles from "../components/PageTemplate.module.css";

const MortgagesOverview: React.FC = () => {
  return (
    <PageTemplate
      title="Mortgage Solutions"
      subtitle="Expert mortgage advice to help you find the right deal"
      backgroundImage="/images/image3.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <div className={styles.text}>
              <p>
                Finding the right mortgage can be overwhelming with thousands of
                products available from hundreds of lenders. That's where we
                come in. As experienced mortgage advisors, we search the whole
                market to find you the best deal that suits your specific
                circumstances.
              </p>
              <p>
                Whether you're a first-time buyer taking your first step onto
                the property ladder, looking to move house, or considering
                remortgaging your current property, we provide clear, honest
                advice every step of the way.
              </p>
              <p>
                Our team has access to exclusive deals that aren't available to
                the general public, and we'll work tirelessly to secure you the
                most competitive rates and terms. From initial consultation to
                completion, we're with you every step of the way.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.highlight}>
              <h3>Why Choose Noble Mortgages?</h3>
              <p>
                ✓ <strong>Whole of market access</strong> - We search from our
                panel of 90+ lenders
                <br />✓ <strong>Expert guidance</strong> - Professional advice
                tailored to your needs
                <br />✓ <strong>End-to-end support</strong> - From initial
                consultation to completion
                <br />✓ <strong>Free initial consultation</strong> - No
                obligation, expert advice
                <br />✓ <strong>Regulated by the FCA</strong> - Your protection
                is our priority
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Ready to Find Your Perfect Mortgage?</h3>
          <p>
            Speak to one of our mortgage experts today for free, no-obligation
            advice.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get Expert Mortgage Advice
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* All Mortgage Products */}
      <ProductCards
        title="All Mortgage Products"
        products={mortgageProducts}
        type="mortgage"
      />
    </PageTemplate>
  );
};

export default MortgagesOverview;
