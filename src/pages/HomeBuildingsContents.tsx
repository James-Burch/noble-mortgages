import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const HomeBuildingsContents: React.FC = () => {
  return (
    <PageTemplate
      title="Home, Buildings & Contents Insurance"
      subtitle="Comprehensive protection for your property and belongings"
      backgroundImage="/images/homeinsurance.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.text}>
              <p>
                Protect your home and everything in it. Buildings insurance
                covers the structure of your property, while contents insurance
                protects your belongings from risks like fire, theft, or damage.
                Whether you're a homeowner or landlord, having the right cover
                in place can save you thousands in the event of the unexpected.
              </p>

              <div
                className={styles.highlight}
                style={{
                  backgroundColor: "transparent",
                  border: "3px solid var(--color-primary)",
                  color: "var(--color-secondary)",
                  padding: "var(--spacing-lg)",
                }}
              >
                <h3>Typical Coverage</h3>
                <p
                  style={{
                    color: "var(--color-white)",
                    fontSize: "var(--font-size-xl)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  Buildings: £200,000+
                  <br />
                  Contents: £25,000+
                </p>
              </div>
            </div>

            <h2 className={styles.sectionTitle}>Who Needs This Cover?</h2>
            <div className={styles.text}>
              <p>
                Homeowners, landlords, and tenants who want to protect their
                property and possessions
              </p>
            </div>

            <h2 className={styles.sectionTitle}>Key Benefits</h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Contents insurance coverage</h4>
                  <p>
                    Protects your personal belongings, furniture, and valuables
                    from theft or damage.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Emergency accommodation</h4>
                  <p>
                    Alternative accommodation costs if your home becomes
                    uninhabitable.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Personal liability cover</h4>
                  <p>
                    Protection against claims if someone is injured on your
                    property.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.highlight}>
              <h3>Get Expert Advice</h3>
              <p>
                Speak to one of our qualified advisors about your insurance
                needs.
              </p>
              <Link
                to="/contact"
                className={styles.ctaButton}
                style={{
                  marginTop: "var(--spacing-lg)",
                  display: "inline-block",
                }}
              >
                Speak to an Advisor
              </Link>

              <div
                style={{
                  marginTop: "var(--spacing-xl)",
                  paddingTop: "var(--spacing-lg)",
                  borderTop: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <p
                  style={{
                    marginBottom: "var(--spacing-sm)",
                    fontSize: "var(--font-size-sm)",
                  }}
                >
                  <strong>Call:</strong>
                </p>
                <p
                  style={{
                    fontSize: "var(--font-size-lg)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  07956 758625
                </p>

                <p
                  style={{
                    marginTop: "var(--spacing-lg)",
                    marginBottom: "var(--spacing-sm)",
                    fontSize: "var(--font-size-sm)",
                  }}
                >
                  <strong>Email:</strong>
                </p>
                <p style={{ fontSize: "var(--font-size-base)" }}>
                  admin@noblemortgages.co.uk
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.processSteps}>
          <h2 className={styles.sectionTitle}>How It Works</h2>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h4>Get a Quote</h4>
              <p>
                Tell us about your circumstances and we'll find the best policy
                for you.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h4>Compare Options</h4>
              <p>
                We'll present you with suitable options from leading UK
                insurers.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h4>Get Covered</h4>
              <p>Complete your application and get the protection you need.</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Protect Your Home & Belongings</h3>
          <p>
            Get comprehensive insurance coverage for your property and contents.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get Home Insurance Quote
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default HomeBuildingsContents;
