import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const FirstTimeBuyers: React.FC = () => {
  return (
    <PageTemplate
      title="First Time Buyers"
      subtitle="Get on the property ladder with expert guidance and access to exclusive schemes"
      backgroundImage="/images/firsttimebuyerimage.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <div className={styles.text}>
              <p>
                Buying your first home can feel daunting — but it doesn't have
                to be.
              </p>
              <p>
                The idea of becoming a first-time buyer can be overwhelming,
                especially when you're faced with so many lenders, mortgage
                products, and industry jargon. Sure, you could spend hours
                researching online, calling banks, and trying to compare offers
                — but why not let us take the stress off your shoulders?
              </p>
              <p>
                We'll take the time to sit down with you, understand what's
                important to you, and guide you through the entire process. We
                search the whole market to find a mortgage that suits your
                needs, and once we've found the right deal, we'll arrange an
                Agreement in Principle — something most estate agents or sellers
                will expect before accepting your offer.
              </p>
              <p>
                We also explore a full range of options, including Guarantor
                Mortgages and Shared Ownership or Shared Equity schemes, to make
                sure you're fully aware of what's available. And when you've
                found the perfect property, we'll continue to support you —
                liaising with estate agents, solicitors, and surveyors to help
                everything go smoothly from start to finish.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.highlight}>
              <h3>First-Time Buyer Benefits</h3>
              <p>
                ✓ <strong>Low deposit mortgages</strong> - From as little as 5%
                deposit
                <br />✓ <strong>Government schemes</strong> - Help to Buy,
                Shared Ownership
                <br />✓ <strong>95% mortgages</strong> - Higher loan-to-value
                options
                <br />✓ <strong>Stamp duty relief</strong> - Potential savings
                on property taxes
                <br />✓ <strong>Specialist lenders</strong> - Access to
                first-time buyer exclusive rates
              </p>
            </div>
          </div>
        </div>

        <div className={styles.processSteps}>
          <h2 className={styles.sectionTitle}>The First-Time Buyer Process</h2>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h4>Initial Consultation</h4>
              <p>
                We'll discuss your circumstances, budget, and goals to
                understand exactly what you need.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h4>Mortgage Search</h4>
              <p>
                We'll search our panel of 90+ lenders to find the best deals for
                your situation.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h4>Agreement in Principle</h4>
              <p>
                We'll secure you an AIP to strengthen your position when making
                offers.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h4>Property Search Support</h4>
              <p>
                We'll be on hand to advise as you search for your perfect home.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h4>Application & Completion</h4>
              <p>
                We'll handle your mortgage application and liaise with all
                parties to ensure a smooth completion.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Ready to Take Your First Step?</h3>
          <p>
            Book your free consultation today and let us guide you onto the
            property ladder.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Book Free Consultation
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default FirstTimeBuyers;
