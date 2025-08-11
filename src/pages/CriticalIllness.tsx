import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const CriticalIllness: React.FC = () => {
  return (
    <PageTemplate
      title="Critical Illness Cover"
      subtitle="Lump sum payment following diagnosis of a serious illness"
      backgroundImage="/images/image6.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.text}>
              <p>
                A serious illness can impact more than just your health—it can
                affect your income, lifestyle, and family's future. Critical
                illness cover provides a tax-free lump sum if you're diagnosed
                with a major condition like cancer, heart attack, or stroke.
                It's designed to ease financial pressure so you can focus on
                recovery.
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
                  £25,000 - £500,000+
                </p>
              </div>
            </div>

            <h2 className={styles.sectionTitle}>Who Needs This Cover?</h2>
            <div className={styles.text}>
              <p>
                Anyone wanting financial protection against the impact of
                serious illness on their income and lifestyle
              </p>
            </div>

            <h2 className={styles.sectionTitle}>Key Benefits</h2>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Tax-free lump sum payment</h4>
                  <p>
                    Receive a lump sum payment upon diagnosis of a covered
                    critical illness.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Covers major conditions</h4>
                  <p>
                    Protection against cancer, heart attack, stroke, and many
                    other serious conditions.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Financial flexibility</h4>
                  <p>
                    Use the money however you need - medical treatment,
                    lifestyle adjustments, or debt repayment.
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>✓</div>
                <div className={styles.stepContent}>
                  <h4>Partial payments available</h4>
                  <p>
                    Some policies offer partial payments for less severe
                    conditions or early-stage illnesses.
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
          <h3>Protect Against Critical Illness</h3>
          <p>Get the financial support you need if the unexpected happens.</p>
          <Link to="/contact" className={styles.ctaButton}>
            Get Critical Illness Quote
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default CriticalIllness;
