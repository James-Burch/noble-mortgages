import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const SelfEmployed: React.FC = () => {
  return (
    <PageTemplate
      title="Self-Employed Mortgages"
      subtitle="Specialist mortgage solutions for self-employed and contractor borrowers"
      backgroundImage="/images/selfemployedimage.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <div className={styles.text}>
              <p>
                Being self-employed doesn't mean you can't access competitive
                mortgage rates. While the application process may require more
                documentation than employed borrowers, we specialize in helping
                self-employed individuals, freelancers, contractors, and
                business owners secure the right mortgage for their
                circumstances.
              </p>
              <p>
                We understand the unique challenges self-employed borrowers
                face, from proving income to dealing with fluctuating earnings.
                Our experienced advisors work with specialist lenders who
                understand your situation and can assess your application based
                on your actual earning potential, not just standard employed
                criteria.
              </p>
              <p>
                Whether you're a sole trader, company director, contractor, or
                freelancer, we'll guide you through the documentation required
                and help present your income in the best possible light to
                maximize your borrowing potential.
              </p>
              <p>
                From day rate contractors to business owners with complex income
                structures, we have access to lenders who specialize in
                self-employed mortgages and understand your unique financial
                circumstances.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.highlight}>
              <h3>Self-Employed Benefits</h3>
              <p>
                ✓ <strong>Specialist lender access</strong> - Lenders who
                understand self-employed income
                <br />✓ <strong>Income maximization</strong> - Present your
                earnings in the best light
                <br />✓ <strong>Documentation guidance</strong> - Help with
                required paperwork
                <br />✓ <strong>Flexible criteria</strong> - Lenders with
                understanding of irregular income
                <br />✓ <strong>Fast-track options</strong> - Some lenders offer
                expedited processes
              </p>
            </div>
          </div>
        </div>

        <div className={styles.processSteps}>
          <h2 className={styles.sectionTitle}>
            The Self-Employed Application Process
          </h2>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h4>Income Assessment</h4>
              <p>
                We'll review your income structure, whether you're a sole
                trader, limited company director, or contractor, to understand
                your earnings pattern.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h4>Documentation Preparation</h4>
              <p>
                Guidance on preparing SA302s, company accounts, bank statements,
                and other documents to support your application.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h4>Lender Matching</h4>
              <p>
                Access to specialist lenders who understand self-employed income
                and offer competitive rates for your situation.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h4>Application Support</h4>
              <p>
                Full support throughout the application process, liaising with
                lenders and handling any queries about your income.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h4>Completion</h4>
              <p>
                Ongoing support right through to completion, ensuring your
                self-employed mortgage progresses smoothly.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Types of Self-Employed Borrowers We Help
          </h2>
          <div className={styles.text}>
            <div className={styles.twoColumnSection}>
              <div className={styles.leftColumn}>
                <h3>Sole Traders & Partnerships</h3>
                <p>
                  If you're self-employed as a sole trader or in partnership,
                  we'll help you navigate the income verification process using
                  your SA302s and tax calculations.
                </p>

                <h3>Limited Company Directors</h3>
                <p>
                  Company directors with salary plus dividends can access
                  specialist lenders who understand this income structure and
                  can assess your total remuneration package.
                </p>
              </div>

              <div className={styles.rightColumn}>
                <h3>Contractors & Freelancers</h3>
                <p>
                  Day rate contractors and freelancers with regular contracts
                  can access lenders who understand the nature of contract work
                  and assess applications accordingly.
                </p>

                <h3>Business Owners</h3>
                <p>
                  Business owners with complex income structures, including
                  retained profits and business investments, can access
                  commercial-aware lenders.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Documentation You'll Need</h2>
          <div className={styles.text}>
            <p>
              The exact documentation required varies depending on your
              employment structure, but typically includes:
            </p>
            <ul style={{ marginLeft: "2rem", lineHeight: "1.8" }}>
              <li>
                <strong>SA302s or Tax Calculations</strong> - Usually 2-3 years
              </li>
              <li>
                <strong>Tax Year Overviews</strong> - From HMRC online
              </li>
              <li>
                <strong>Company Accounts</strong> - If you're a company director
              </li>
              <li>
                <strong>Bank Statements</strong> - Personal and business
                accounts
              </li>
              <li>
                <strong>Accountant's Reference</strong> - Professional
                verification
              </li>
              <li>
                <strong>Contract Evidence</strong> - For contractors and
                freelancers
              </li>
            </ul>
            <p>
              Don't worry if this seems overwhelming - we'll guide you through
              exactly what's needed for your specific situation and help you
              prepare everything efficiently.
            </p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Ready to Secure Your Self-Employed Mortgage?</h3>
          <p>
            Speak to our self-employed mortgage specialists who understand your
            unique circumstances and can access the right lenders for you.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get Self-Employed Mortgage Advice
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default SelfEmployed;
