import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const IncomeProtection: React.FC = () => {
  return (
    <PageTemplate
      title="Income Protection"
      subtitle="Replace up to 70% of your income if you cannot work due to illness or injury"
      backgroundImage="/images/incomeprotectionimage.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.text}>
              <p>
                If you couldn't work due to illness or injury, how would you
                cover your monthly bills? Income protection pays you a regular
                income if you're unable to work, helping you stay on top of your
                finances while you recover. It's peace of mind that your
                lifestyle and commitments are covered—no matter what life throws
                your way.
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
                    color: "var(--color-secondary)",
                    fontSize: "var(--font-size-xl)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  Up to 70% of your income
                </p>
              </div>
            </div>

            <h2 className={styles.sectionTitle}>Who Needs This Cover?</h2>
            <div className={styles.text}>
              <p>
                Anyone who relies on their income to maintain their lifestyle
                and meet financial commitments
              </p>
            </div>

            <h2 className={styles.sectionTitle}>Key Benefits</h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Regular monthly payments</h4>
                  <p>
                    Receive a percentage of your income until you can return to
                    work.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Cover until retirement</h4>
                  <p>
                    Long-term protection that can pay out until your selected
                    retirement age.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Tax-free benefits</h4>
                  <p>
                    Income protection payments are typically tax-free if you pay
                    premiums personally.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Rehabilitation support</h4>
                  <p>
                    Many policies include support to help you return to work.
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
          <h3>Protect Your Income Today</h3>
          <p>
            Don't let illness or injury put your financial security at risk.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get Income Protection Quote
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default IncomeProtection;
