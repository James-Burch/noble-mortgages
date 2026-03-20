import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const HomeMover: React.FC = () => {
  return (
    <PageTemplate
      title="Home Mover"
      subtitle="Moving up the property ladder? We'll find you the best deals for your next home"
      backgroundImage="/images/image3.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <div className={styles.text}>
              <p>
                Moving home can be stressful — but your mortgage doesn't have to
                be.
              </p>
              <p>
                Whether you're searching for a new deal or considering
                transferring (or "porting") your existing mortgage to your next
                home, we'll walk you through the options and help you choose
                what works best for your circumstances.
              </p>
              <p>
                From the early stages — working out the true cost of moving, how
                much you can borrow, and what your monthly repayments might look
                like — we'll make sure your finances are in order before you've
                even found your next place.
              </p>
              <p>
                We search the market to find a mortgage tailored to your needs,
                and we'll always offer clear, honest advice to help you make
                confident decisions. Our goal is to make your move as smooth and
                stress-free as possible.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.highlight}>
              <h3>Home Mover Benefits</h3>
              <p>
                ✓ <strong>Port your existing mortgage</strong> - Transfer your
                current deal to your new home
                <br />✓ <strong>Additional borrowing</strong> - Top up your
                mortgage for a larger property
                <br />✓ <strong>Chain-free support</strong> - Bridge the gap
                between buying and selling
                <br />✓ <strong>Market analysis</strong> - Find the best deals
                for your move
                <br />✓ <strong>Moving timeline advice</strong> - Plan your
                finances around your move
              </p>
            </div>
          </div>
        </div>

        <div className={styles.processSteps}>
          <h2 className={styles.sectionTitle}>The Home Moving Process</h2>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h4>Financial Assessment</h4>
              <p>
                We'll review your current mortgage and assess how much you can
                borrow for your next home.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h4>Porting vs New Deal</h4>
              <p>
                We'll compare porting your existing mortgage against finding a
                completely new deal.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h4>Market Search</h4>
              <p>
                If a new mortgage is better, we'll search our panel of 90+
                lenders for the best rates.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h4>Agreement in Principle</h4>
              <p>
                Secure your AIP to strengthen your position when making offers
                on properties.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h4>Moving Coordination</h4>
              <p>
                We'll coordinate with all parties to ensure your mortgage timing
                aligns with your move.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Ready to Make Your Move?</h3>
          <p>
            Get expert advice on your home move and secure the best mortgage
            deal for your next property.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get Home Mover Advice
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default HomeMover;
