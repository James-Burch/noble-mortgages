import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const Remortgage: React.FC = () => {
  return (
    <PageTemplate
      title="Remortgage"
      subtitle="Save money or release equity with our comprehensive remortgage service.y"
      backgroundImage="/images/image2.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <div className={styles.text}>
              <p>
                Thinking about remortgaging? Whether it's about saving money or
                unlocking new opportunities, we're here to help you make the
                right move.
              </p>
              <p>
                You might be looking to reduce your monthly repayments,
                concerned about rising interest rates, or thinking about
                releasing equity — whether that's for home improvements,
                consolidating debts into one manageable payment, investing in a
                new venture, or helping a loved one onto the property ladder.
              </p>
              <p>
                Whatever your motivation, we'll provide clear, unbiased advice
                and search the market to find a mortgage deal that fits your
                unique situation.
              </p>
              <p>
                Even if you're not sure it's the right time, it can be worth
                reviewing your current mortgage. We'll carry out a full review
                and let you know if there's a better option available. A quick
                check could end up saving you thousands over the long term.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.highlight}>
              <h3>Why Remortgage?</h3>
              <p>
                ✓ <strong>Lower monthly payments</strong> - Secure a better
                interest rate
                <br />✓ <strong>Release equity</strong> - Access cash for
                improvements or investments
                <br />✓ <strong>Debt consolidation</strong> - Combine debts into
                one payment
                <br />✓ <strong>Rate protection</strong> - Switch before your
                current deal ends
                <br />✓ <strong>Change terms</strong> - Adjust your mortgage
                term or type
              </p>
            </div>
          </div>
        </div>

        <div className={styles.processSteps}>
          <h2 className={styles.sectionTitle}>When Should You Remortgage?</h2>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h4>Your fixed rate is ending</h4>
              <p>
                Don't let your mortgage revert to the lender's standard variable
                rate.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h4>Interest rates have fallen</h4>
              <p>You could save significantly with a lower rate.</p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h4>Your circumstances have changed</h4>
              <p>
                Better income, improved credit score, or reduced loan-to-value.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h4>You need to release equity</h4>
              <p>
                For home improvements, debt consolidation, or other investments.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h4>You're unhappy with your lender</h4>
              <p>Poor service or inflexible terms may warrant a switch.</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Could You Save Money by Remortgaging?</h3>
          <p>
            Get a free remortgage review and discover how much you could save.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get Free Remortgage Review
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Remortgage;
