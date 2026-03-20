import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const About: React.FC = () => {
  return (
    <PageTemplate
      title="About Noble Mortgages"
      subtitle="Your trusted mortgage and insurance advisors"
      backgroundImage="/images/apartmentblock.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <div className={styles.text}>
              <h2 className={styles.sectionTitle}>Who We Are</h2>
              <p>
                Noble Mortgages is a professional mortgage and insurance
                advisory firm dedicated to helping individuals and families
                across the UK make confident financial decisions. Our team of
                experienced advisors provides clear, honest guidance tailored to
                your unique circumstances.
              </p>
              <p>
                We believe that finding the right mortgage or insurance
                shouldn't be overwhelming. That's why we take the time to
                understand your needs, search the whole market on your behalf,
                and provide straightforward advice you can trust.
              </p>
              <p>
                Whether you're a first-time buyer, moving home, or looking to
                protect your family's future, we're here to guide you through
                every step of the process with professionalism and care.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.highlight}>
              <h3>Our Core Values</h3>
              <p>
                ✓ <strong>Trustworthy and professional</strong> - Building
                lasting relationships through integrity
                <br />✓ <strong>Clear and simple guidance</strong> - Making
                complex decisions straightforward
                <br />✓ <strong>UK expertise</strong> - Deep knowledge of the UK
                mortgage and insurance markets
                <br />✓ <strong>Client-focused</strong> - Your best interests
                always come first
                <br />✓ <strong>Whole market access</strong> - Comprehensive
                search across 90+ lenders
              </p>
            </div>
          </div>
        </div>

        <div className={styles.processSteps}>
          <h2 className={styles.sectionTitle}>Why Choose Noble Mortgages?</h2>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h4>Whole Market Access</h4>
              <p>
                We search our panel of 90+ lenders to find you the best deals,
                including exclusive rates not available to the public.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h4>Expert Guidance</h4>
              <p>
                Our experienced team provides professional advice tailored to
                your specific needs and circumstances.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h4>End-to-End Support</h4>
              <p>
                From initial consultation to completion, we're with you every
                step of the way, liaising with all parties involved.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h4>FCA Regulated</h4>
              <p>
                We're authorised and regulated by the Financial Conduct
                Authority, ensuring your protection is our priority.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>5</div>
            <div className={styles.stepContent}>
              <h4>No Obligation Advice</h4>
              <p>
                Our initial discovery call is completely free with no obligation,
                allowing you to make informed decisions.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <div className={styles.text}>
              <p>
                <strong>Mortgage Solutions:</strong> First-time buyers, home
                movers, remortgages, buy-to-let, new build, Help to Buy, limited
                companies, and bridging loans.
              </p>
              <p>
                <strong>Insurance Protection:</strong> Life insurance, income
                protection, critical illness cover, accident sickness &
                unemployment insurance, and home insurance.
              </p>
              <p>
                <strong>Ongoing Support:</strong> Regular reviews, policy
                management, and assistance with any queries or changes to your
                circumstances.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <h2 className={styles.sectionTitle}>Our Commitment</h2>
            <div className={styles.text}>
              <p>
                We're committed to providing clear, unbiased advice that puts
                your interests first. We'll always explain our recommendations
                in plain English and ensure you understand all your options.
              </p>
              <p>
                Our goal is to build long-term relationships with our clients,
                providing ongoing support and advice as your circumstances
                change throughout your life.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Ready to Get Started?</h3>
          <p>
            Contact us today for a free, no obligation and discover
            how we can help you achieve your financial goals.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Get In Touch Today
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default About;
