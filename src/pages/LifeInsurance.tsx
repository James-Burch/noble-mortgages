import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const LifeInsurance: React.FC = () => {
  return (
    <PageTemplate
      title="Life Insurance"
      subtitle="Financial protection for your family in the event of your death"
      backgroundImage="/images/lifeinsurance.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.text}>
              <p>
                Protect what matters most. Life insurance provides peace of mind
                that your loved ones will be financially secure if the
                unexpected happens. Whether you're looking to cover a mortgage,
                provide for your family, or leave a legacy, there's a policy to
                suit your needs.
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
                  £50,000 - £1,000,000+
                </p>
              </div>
            </div>

            <h2 className={styles.sectionTitle}>Who Needs This Cover?</h2>
            <div className={styles.text}>
              <p>Anyone with financial dependents or outstanding debts</p>
            </div>

            <h2 className={styles.sectionTitle}>Key Benefits</h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Tax-free lump sum to beneficiaries</h4>
                  <p>
                    Your beneficiaries receive the full payout without income
                    tax deductions.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Covers mortgage repayment</h4>
                  <p>
                    Ensure your family can stay in their home by covering
                    outstanding mortgage debt.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Family income replacement</h4>
                  <p>
                    Provide ongoing financial support for your family's living
                    expenses.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Flexible policy options</h4>
                  <p>
                    Choose from term life, whole life, or decreasing term
                    policies.
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
          <h3>Ready to Protect Your Family?</h3>
          <p>
            Get expert advice on life insurance and secure your family's
            financial future.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get Life Insurance Quote
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default LifeInsurance;
