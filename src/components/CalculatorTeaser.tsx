import React from "react";
import { Link } from "react-router-dom";
import styles from "./CalculatorTeaser.module.css";

const CalculatorTeaser: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Mortgage Calculators</h2>
            <p className={styles.description}>
              Get instant estimates with our free mortgage calculators. Work out
              your monthly repayments, affordability limits, and deposit
              requirements before you speak to a lender.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.icon}>💰</span>
                <span>Monthly repayment calculator</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.icon}>📊</span>
                <span>Affordability calculator</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.icon}>🏠</span>
                <span>Deposit & term calculator</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.icon}>📈</span>
                <span>Interest rate comparison</span>
              </div>
            </div>
            <Link to="/calculators" className={styles.cta}>
              Try Our Calculators
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
          <div className={styles.imageContent}>
            <img
              src="/images/mortgagecalculatorimage.webp"
              alt="Mortgage calculator with house model and financial documents"
              className={styles.image}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorTeaser;
