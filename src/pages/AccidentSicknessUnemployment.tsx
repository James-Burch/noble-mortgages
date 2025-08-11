import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const AccidentSicknessUnemployment: React.FC = () => {
  return (
    <PageTemplate
      title="Accident, Sickness & Unemployment"
      subtitle="Short-term cover for mortgage payments during illness, injury, or redundancy"
      backgroundImage="/images/unemploymentinsurance.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.text}>
              <p>
                Worried about losing your income due to unexpected illness,
                injury, or redundancy? ASU cover provides short-term monthly
                payments to help cover your mortgage or essential bills if
                you're unable to work. It's a flexible safety net designed to
                give you breathing room during life's tougher moments.
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
                  Up to £2,500 per month
                </p>
              </div>
            </div>

            <h2 className={styles.sectionTitle}>Who Needs This Cover?</h2>
            <div className={styles.text}>
              <p>
                Anyone with mortgage payments or essential bills who wants
                protection against short-term income loss
              </p>
            </div>

            <h2 className={styles.sectionTitle}>Key Benefits</h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Covers accident, sickness & unemployment</h4>
                  <p>
                    Triple protection against the most common causes of income
                    loss.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Monthly benefit payments</h4>
                  <p>
                    Regular payments to help with mortgage or essential bills
                    for up to 12-24 months.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Flexible coverage options</h4>
                  <p>
                    Choose individual components or combined cover based on your
                    needs.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Short waiting periods</h4>
                  <p>
                    Typically 30-90 days before benefits begin, making it ideal
                    for short-term protection.
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
          <h3>Secure Your Financial Safety Net</h3>
          <p>
            Protect your mortgage and essential bills against unexpected events.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get ASU Cover Quote
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default AccidentSicknessUnemployment;
