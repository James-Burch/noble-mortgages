import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const LimitedCompanies: React.FC = () => {
  return (
    <PageTemplate
      title="Limited Company Mortgages"
      subtitle="Buy-to-let mortgages through limited companies for tax efficiency and portfolio growth"
      backgroundImage="/images/apartmentblock.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <div className={styles.text}>
              <p>
                Many property investors are now choosing to purchase buy-to-let
                properties through limited companies due to the tax advantages
                and professional structure this approach can provide.
              </p>
              <p>
                Since changes to mortgage interest tax relief for individual
                landlords, limited company ownership has become increasingly
                attractive. Companies can offset mortgage interest as a business
                expense and benefit from corporation tax rates rather than
                higher-rate income tax.
              </p>
              <p>
                We work with specialist lenders who understand limited company
                structures and can provide competitive mortgage rates for
                corporate borrowers. Whether you're starting a new property
                business or transferring existing properties, we'll guide you
                through the process.
              </p>
              <p>
                Our advisors work closely with accountants and solicitors to
                ensure your corporate structure is optimized for both mortgage
                lending and tax efficiency, helping you build a sustainable
                property investment business.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.highlight}>
              <h3>Limited Company Benefits</h3>
              <p>
                ✓ <strong>Tax efficiency</strong> - Corporation tax rates vs
                income tax
                <br />✓ <strong>Interest relief</strong> - Full mortgage
                interest deduction
                <br />✓ <strong>Portfolio growth</strong> - Easier expansion and
                refinancing
                <br />✓ <strong>Professional structure</strong> - Clear business
                separation
                <br />✓ <strong>Succession planning</strong> - Easier to
                transfer ownership
              </p>
            </div>
          </div>
        </div>

        <div className={styles.processSteps}>
          <h2 className={styles.sectionTitle}>
            Limited Company Considerations
          </h2>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h4>Corporate Structure Setup</h4>
              <p>
                Establish your limited company with appropriate structure for
                property investment.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h4>Tax Planning</h4>
              <p>
                Understand corporation tax implications and optimize your tax
                position.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h4>Lender Selection</h4>
              <p>
                Access specialist lenders who understand corporate buy-to-let
                lending.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h4>Corporate Lending Criteria</h4>
              <p>
                Meet enhanced lending requirements for limited company
                mortgages.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h4>Portfolio Management</h4>
              <p>
                Ongoing support for portfolio expansion and refinancing
                opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Considering Limited Company Investment?</h3>
          <p>
            Speak to our specialists about the benefits and requirements of
            limited company mortgages.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get Limited Company Advice
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default LimitedCompanies;
