import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

// Utility functions
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Updated stamp duty calculation based on UK rates from April 2025
const calculateStampDuty = (
  propertyValue: number,
  isFirstTimeBuyer: boolean
): number => {
  if (isFirstTimeBuyer) {
    // First-time buyer rates (April 2025)
    if (propertyValue <= 300000) return 0; // 0% up to £300,000
    if (propertyValue <= 500000) return (propertyValue - 300000) * 0.05; // 5% on £300,001 to £500,000
    // Above £500,000 - standard rates apply (no first-time buyer relief)
  }

  // Standard rates for all buyers (April 2025)
  if (propertyValue <= 125000) return 0; // 0% up to £125,000
  if (propertyValue <= 250000) return (propertyValue - 125000) * 0.02; // 2% on £125,001 to £250,000
  if (propertyValue <= 925000) {
    return 2500 + (propertyValue - 250000) * 0.05; // 5% on £250,001 to £925,000
  }
  if (propertyValue <= 1500000) {
    return 36250 + (propertyValue - 925000) * 0.1; // 10% on £925,001 to £1,500,000
  }
  return 93750 + (propertyValue - 1500000) * 0.12; // 12% on £1,500,001+
};

interface MortgageResults {
  monthlyPayment: number;
  totalCost: number;
  totalInterest: number;
  stampDuty: number;
}

const MortgageCalculatorComponent: React.FC = () => {
  const [propertyValue, setPropertyValue] = useState<number>(250000);
  const [deposit, setDeposit] = useState<number>(25000);
  const [depositPercentage, setDepositPercentage] = useState<number>(10);
  const [interestRate, setInterestRate] = useState<number>(5.5);
  const [loanTerm, setLoanTerm] = useState<number>(25);
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState<boolean>(false);
  const [results, setResults] = useState<MortgageResults | null>(null);

  // Handler functions
  const handlePropertyValueChange = (value: number) => {
    setPropertyValue(value);
    // Recalculate deposit based on current percentage
    setDeposit((value * depositPercentage) / 100);
  };

  const handleDepositChange = (value: number) => {
    setDeposit(value);
    // Recalculate percentage based on property value
    setDepositPercentage((value / propertyValue) * 100);
  };

  const handleDepositPercentageChange = (value: number) => {
    setDepositPercentage(value);
    // Recalculate deposit amount based on property value
    setDeposit((propertyValue * value) / 100);
  };

  const adjustInterestRate = (adjustment: number) => {
    const newRate = Math.round((interestRate + adjustment) * 100) / 100;
    setInterestRate(Math.max(0, newRate));
  };

  const adjustDepositPercentage = (adjustment: number) => {
    const newPercentage =
      Math.round((depositPercentage + adjustment) * 10) / 10;
    const adjustedPercentage = Math.max(0, Math.min(100, newPercentage));
    setDepositPercentage(adjustedPercentage);
    setDeposit((propertyValue * adjustedPercentage) / 100);
  };

  const calculateMortgage = () => {
    const loanAmount = propertyValue - deposit;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment =
      (loanAmount *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    const totalCost = monthlyPayment * numberOfPayments;
    const totalInterest = totalCost - loanAmount;
    const stampDuty = calculateStampDuty(propertyValue, isFirstTimeBuyer);

    setResults({
      monthlyPayment,
      totalCost: totalCost + deposit,
      totalInterest,
      stampDuty,
    });
  };

  return (
    <div
      style={{
        background: "var(--color-primary)",
        padding: "var(--spacing-2xl)",
        borderRadius: "var(--border-radius-xl)",
        margin: "var(--spacing-2xl) 0",
        border: "1px solid rgba(79, 209, 199, 0.2)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "var(--spacing-xl)" }}>
        <h2 style={{color: "var(--color-secondary)"}}>Calculate Your Mortgage</h2>
        <p
          style={{
            color: "var(--color-white)",
            fontSize: "var(--font-size-lg)",
          }}
        >
          Get instant estimates for your monthly payments and total costs
        </p>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* First Time Buyer Checkbox */}
        <div style={{ marginBottom: "var(--spacing-lg)", textAlign: "center" }}>
          <label
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--spacing-sm)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--color-secondary)",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={isFirstTimeBuyer}
              onChange={(e) => setIsFirstTimeBuyer(e.target.checked)}
              style={{
                width: "20px",
                height: "20px",
                accentColor: "var(--color-primary)",
              }}
            />
            I am a first-time buyer
          </label>
          <p
            style={{
              fontSize: "var(--font-size-sm)",
              color: "var(--color-white)",
              marginTop: "var(--spacing-xs)",
            }}
          >
            As of April 2025 first-time buyers pay no stamp duty up to £300,000 (properties under
            £500,000). However, it is your responsibility to check your SDLT status.
          </p>
        </div>

        {/* Input Form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--spacing-lg)",
            marginBottom: "var(--spacing-xl)",
          }}
          className="calculator-grid"
        >
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "var(--spacing-sm)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--color-secondary)",
              }}
            >
              Property Value
            </label>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: "var(--spacing-md)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--color-grey)",
                  fontWeight: "var(--font-weight-semibold)",
                }}
              >
                £
              </span>
              <input
                type="number"
                value={propertyValue}
                onChange={(e) =>
                  handlePropertyValueChange(Number(e.target.value))
                }
                placeholder="250000"
                style={{
                  width: "100%",
                  padding: "var(--spacing-md)",
                  paddingLeft: "var(--spacing-xl)",
                  border: "2px solid rgba(79, 209, 199, 0.2)",
                  borderRadius: "var(--border-radius-lg)",
                  fontSize: "var(--font-size-base)",
                  backgroundColor: "var(--color-white)",
                }}
              />
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "var(--spacing-sm)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--color-secondary)",
              }}
            >
              Deposit
            </label>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: "var(--spacing-md)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--color-grey)",
                  fontWeight: "var(--font-weight-semibold)",
                }}
              >
                £
              </span>
              <input
                type="number"
                value={deposit}
                onChange={(e) => handleDepositChange(Number(e.target.value))}
                placeholder="25000"
                style={{
                  width: "100%",
                  padding: "var(--spacing-md)",
                  paddingLeft: "var(--spacing-xl)",
                  border: "2px solid rgba(79, 209, 199, 0.2)",
                  borderRadius: "var(--border-radius-lg)",
                  fontSize: "var(--font-size-base)",
                  backgroundColor: "var(--color-white)",
                }}
              />
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "var(--spacing-sm)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--color-secondary)",
              }}
            >
              Deposit Percentage
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="number"
                step="0.1"
                value={depositPercentage.toFixed(1)}
                onChange={(e) =>
                  handleDepositPercentageChange(Number(e.target.value))
                }
                placeholder="10.0"
                style={{
                  width: "100%",
                  padding: "var(--spacing-md)",
                  paddingRight: "var(--spacing-xl)",
                  border: "2px solid rgba(79, 209, 199, 0.2)",
                  borderRadius: "var(--border-radius-lg)",
                  fontSize: "var(--font-size-base)",
                  backgroundColor: "var(--color-white)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  right: "var(--spacing-md)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--color-grey)",
                  fontWeight: "var(--font-weight-semibold)",
                }}
              >
                %
              </span>
            </div>

            {/* Deposit percentage adjustment buttons */}
            <div
              style={{
                display: "flex",
                gap: "var(--spacing-xs)",
                marginTop: "var(--spacing-sm)",
                justifyContent: "center",
              }}
            >
              <button
                type="button"
                onClick={() => adjustDepositPercentage(-1.0)}
                style={{
                  padding: "var(--spacing-xs) var(--spacing-sm)",
                  border: "1px solid rgba(79, 209, 199, 0.3)",
                  borderRadius: "var(--border-radius-md)",
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-secondary)",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  e.currentTarget.style.color = "var(--color-white)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-white)";
                  e.currentTarget.style.color = "var(--color-secondary)";
                }}
              >
                -1.0%
              </button>

              <button
                type="button"
                onClick={() => adjustDepositPercentage(1.0)}
                style={{
                  padding: "var(--spacing-xs) var(--spacing-sm)",
                  border: "1px solid rgba(79, 209, 199, 0.3)",
                  borderRadius: "var(--border-radius-md)",
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-secondary)",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  e.currentTarget.style.color = "var(--color-white)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-white)";
                  e.currentTarget.style.color = "var(--color-secondary)";
                }}
              >
                +1.0%
              </button>
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "var(--spacing-sm)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--color-secondary)",
              }}
            >
              Interest Rate
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="number"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                placeholder="5.5"
                style={{
                  width: "100%",
                  padding: "var(--spacing-md)",
                  paddingRight: "var(--spacing-xl)",
                  border: "2px solid rgba(79, 209, 199, 0.2)",
                  borderRadius: "var(--border-radius-lg)",
                  fontSize: "var(--font-size-base)",
                  backgroundColor: "var(--color-white)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  right: "var(--spacing-md)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--color-grey)",
                  fontWeight: "var(--font-weight-semibold)",
                }}
              >
                %
              </span>
            </div>

            {/* Fine-tuning buttons */}
            <div
              style={{
                display: "flex",
                gap: "var(--spacing-xs)",
                marginTop: "var(--spacing-sm)",
                justifyContent: "center",
              }}
            >
              <button
                type="button"
                onClick={() => adjustInterestRate(-0.1)}
                style={{
                  padding: "var(--spacing-xs) var(--spacing-sm)",
                  border: "1px solid rgba(79, 209, 199, 0.3)",
                  borderRadius: "var(--border-radius-md)",
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-secondary)",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  e.currentTarget.style.color = "var(--color-white)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-white)";
                  e.currentTarget.style.color = "var(--color-secondary)";
                }}
              >
                -0.1%
              </button>

              <button
                type="button"
                onClick={() => adjustInterestRate(-0.01)}
                style={{
                  padding: "var(--spacing-xs) var(--spacing-sm)",
                  border: "1px solid rgba(79, 209, 199, 0.3)",
                  borderRadius: "var(--border-radius-md)",
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-secondary)",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  e.currentTarget.style.color = "var(--color-white)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-white)";
                  e.currentTarget.style.color = "var(--color-secondary)";
                }}
              >
                -0.01%
              </button>

              <button
                type="button"
                onClick={() => adjustInterestRate(0.01)}
                style={{
                  padding: "var(--spacing-xs) var(--spacing-sm)",
                  border: "1px solid rgba(79, 209, 199, 0.3)",
                  borderRadius: "var(--border-radius-md)",
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-secondary)",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  e.currentTarget.style.color = "var(--color-white)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-white)";
                  e.currentTarget.style.color = "var(--color-secondary)";
                }}
              >
                +0.01%
              </button>

              <button
                type="button"
                onClick={() => adjustInterestRate(0.1)}
                style={{
                  padding: "var(--spacing-xs) var(--spacing-sm)",
                  border: "1px solid rgba(79, 209, 199, 0.3)",
                  borderRadius: "var(--border-radius-md)",
                  backgroundColor: "var(--color-white)",
                  color: "var(--color-secondary)",
                  fontSize: "var(--font-size-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  e.currentTarget.style.color = "var(--color-white)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-white)";
                  e.currentTarget.style.color = "var(--color-secondary)";
                }}
              >
                +0.1%
              </button>
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "var(--spacing-sm)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--color-secondary)",
              }}
            >
              Loan Term
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                placeholder="25"
                style={{
                  width: "100%",
                  padding: "var(--spacing-md)",
                  paddingRight: "var(--spacing-2xl)",
                  border: "2px solid rgba(79, 209, 199, 0.2)",
                  borderRadius: "var(--border-radius-lg)",
                  fontSize: "var(--font-size-base)",
                  backgroundColor: "var(--color-white)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  right: "var(--spacing-md)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--color-grey)",
                  fontWeight: "var(--font-weight-semibold)",
                }}
              >
                years
              </span>
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <div style={{ textAlign: "center", marginBottom: "var(--spacing-xl)" }}>
          <button
            onClick={calculateMortgage}
            className={styles.ctaButton}
            style={{
              fontSize: "var(--font-size-lg)",
              padding: "var(--spacing-lg) var(--spacing-3xl)",
              minWidth: "250px",
            }}
          >
            Calculate Mortgage
          </button>
        </div>

        {/* Results */}
        {results && (
          <div
            style={{
              background: "var(--color-white)",
              padding: "var(--spacing-xl)",
              borderRadius: "var(--border-radius-lg)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                marginBottom: "var(--spacing-xl)",
                color: "var(--color-secondary)",
                fontSize: "var(--font-size-xl)",
              }}
            >
              Your Results
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "var(--spacing-lg)",
                marginBottom: "var(--spacing-xl)",
              }}
              className="results-grid"
            >
              <div
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-white)",
                  padding: "var(--spacing-lg)",
                  borderRadius: "var(--border-radius-lg)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "var(--font-size-2xl)",
                    marginBottom: "var(--spacing-sm)",
                  }}
                >
                  £
                </div>
                <div
                  style={{
                    fontSize: "var(--font-size-sm)",
                    marginBottom: "var(--spacing-xs)",
                  }}
                >
                  Monthly Payment
                </div>
                <div
                  style={{
                    fontSize: "var(--font-size-xl)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  {formatCurrency(results.monthlyPayment)}
                </div>
              </div>

              <div
                style={{
                  background: "var(--color-light-grey)",
                  padding: "var(--spacing-lg)",
                  borderRadius: "var(--border-radius-lg)",
                  textAlign: "center",
                  border: "1px solid rgba(79, 209, 199, 0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: "var(--font-size-2xl)",
                    marginBottom: "var(--spacing-sm)",
                  }}
                >
                  💰
                </div>
                <div
                  style={{
                    fontSize: "var(--font-size-sm)",
                    marginBottom: "var(--spacing-xs)",
                    color: "var(--color-grey)",
                  }}
                >
                  Total Cost
                </div>
                <div
                  style={{
                    fontSize: "var(--font-size-lg)",
                    fontWeight: "var(--font-weight-bold)",
                    color: "var(--color-secondary)",
                  }}
                >
                  {formatCurrency(results.totalCost)}
                </div>
              </div>

              <div
                style={{
                  background: "var(--color-light-grey)",
                  padding: "var(--spacing-lg)",
                  borderRadius: "var(--border-radius-lg)",
                  textAlign: "center",
                  border: "1px solid rgba(79, 209, 199, 0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: "var(--font-size-2xl)",
                    marginBottom: "var(--spacing-sm)",
                  }}
                >
                  📈
                </div>
                <div
                  style={{
                    fontSize: "var(--font-size-sm)",
                    marginBottom: "var(--spacing-xs)",
                    color: "var(--color-grey)",
                  }}
                >
                  Total Interest
                </div>
                <div
                  style={{
                    fontSize: "var(--font-size-lg)",
                    fontWeight: "var(--font-weight-bold)",
                    color: "var(--color-secondary)",
                  }}
                >
                  {formatCurrency(results.totalInterest)}
                </div>
              </div>

              <div
                style={{
                  background:
                    results.stampDuty === 0
                      ? "var(--color-primary)"
                      : "var(--color-light-grey)",
                  color:
                    results.stampDuty === 0
                      ? "var(--color-white)"
                      : "var(--color-secondary)",
                  padding: "var(--spacing-lg)",
                  borderRadius: "var(--border-radius-lg)",
                  textAlign: "center",
                  border:
                    results.stampDuty === 0
                      ? "none"
                      : "1px solid rgba(79, 209, 199, 0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: "var(--font-size-2xl)",
                    marginBottom: "var(--spacing-sm)",
                  }}
                >
                  {results.stampDuty === 0 ? "✅" : "🏛️"}
                </div>
                <div
                  style={{
                    fontSize: "var(--font-size-sm)",
                    marginBottom: "var(--spacing-xs)",
                    color:
                      results.stampDuty === 0
                        ? "var(--color-white)"
                        : "var(--color-grey)",
                  }}
                >
                  Stamp Duty{" "}
                  {isFirstTimeBuyer && results.stampDuty === 0
                    ? "(FTB Relief)"
                    : ""}
                </div>
                <div
                  style={{
                    fontSize: "var(--font-size-lg)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  {results.stampDuty === 0
                    ? "£0"
                    : formatCurrency(results.stampDuty)}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div
              style={{
                background: "var(--color-light-grey)",
                padding: "var(--spacing-lg)",
                borderRadius: "var(--border-radius-lg)",
                border: "1px solid rgba(79, 209, 199, 0.2)",
              }}
            >
              <h4
                style={{
                  marginBottom: "var(--spacing-md)",
                  color: "var(--color-secondary)",
                }}
              >
                Summary
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "var(--spacing-sm)",
                }}
              >
                <span>Loan Amount:</span>
                <span style={{ fontWeight: "var(--font-weight-semibold)" }}>
                  {formatCurrency(propertyValue - deposit)}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "var(--spacing-sm)",
                }}
              >
                <span>Loan to Value (LTV):</span>
                <span style={{ fontWeight: "var(--font-weight-semibold)" }}>
                  {(((propertyValue - deposit) / propertyValue) * 100).toFixed(
                    1
                  )}
                  %
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "var(--spacing-sm)",
                }}
              >
                <span>Deposit Percentage:</span>
                <span style={{ fontWeight: "var(--font-weight-semibold)" }}>
                  {((deposit / propertyValue) * 100).toFixed(1)}%
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Buyer Type:</span>
                <span style={{ fontWeight: "var(--font-weight-semibold)" }}>
                  {isFirstTimeBuyer ? "First-Time Buyer" : "Standard Purchase"}
                </span>
              </div>
            </div>

            {/* Stamp Duty Information */}
            <div
              style={{
                background: isFirstTimeBuyer
                  ? "rgba(79, 209, 199, 0.1)"
                  : "rgba(255, 193, 7, 0.1)",
                padding: "var(--spacing-md)",
                borderRadius: "var(--border-radius-md)",
                marginTop: "var(--spacing-lg)",
                border: `1px solid ${
                  isFirstTimeBuyer
                    ? "rgba(79, 209, 199, 0.3)"
                    : "rgba(255, 193, 7, 0.3)"
                }`,
              }}
            >
              <h5
                style={{
                  margin: "0 0 var(--spacing-sm) 0",
                  color: "var(--color-secondary)",
                  fontSize: "var(--font-size-base)",
                }}
              >
                Stamp Duty Information (April 2025 Rates)
              </h5>
              <p
                style={{
                  margin: "0",
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-grey)",
                  lineHeight: "1.4",
                }}
              >
                {isFirstTimeBuyer
                  ? propertyValue <= 300000
                    ? "✅ As a first-time buyer, you pay no stamp duty on properties up to £300,000."
                    : propertyValue <= 500000
                    ? `As a first-time buyer, you pay 0% on the first £300,000 and 5% on the remaining £${formatCurrency(
                        propertyValue - 300000
                      )
                        .replace("£", "")
                        .replace(",", "")}.`
                    : "⚠️ First-time buyer relief only applies to properties under £500,000. Standard rates apply to your purchase."
                  : `Standard rates apply: 0% up to £125k, 2% from £125k-£250k, 5% from £250k-£925k.`}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Add CSS for responsive design */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
            .calculator-grid {
              grid-template-columns: 1fr !important;
            }
            .results-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `,
        }}
      />
    </div>
  );
};

const MortgageCalculator: React.FC = () => {
  return (
    <PageTemplate
      title="Mortgage Calculator"
      subtitle="Calculate your monthly mortgage payments and get an estimate of how much you could borrow"
      backgroundImage="/images/mortgagecalculatorimage.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>How Our Calculator Works</h2>
            <div className={styles.text}>
              <p>
                Our mortgage calculator uses standard calculation methods to
                estimate your monthly payments based on the property value,
                deposit amount, interest rate, and loan term you enter.
              </p>
              <p>
                Simply enter your details and get instant calculations including
                stamp duty estimates based on the latest April 2025 rates. Our
                calculator automatically applies first-time buyer relief where
                applicable, providing you with accurate cost projections.
              </p>
              <p>
                Remember, these are estimates only. For accurate advice tailored
                to your specific circumstances, speak to one of our qualified
                mortgage advisors who can search the whole market for the best
                deals.
              </p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.highlight}>
              <h3>Need More Help?</h3>
              <p style={{ marginBottom: "var(--spacing-lg)" }}>
                Our qualified mortgage advisors can help you understand your
                options and find the best deals available to you from across the
                whole market.
              </p>

              <div style={{ marginBottom: "var(--spacing-md)" }}>
                <Link
                  to="/contact"
                  className={styles.ctaButton}
                  style={{
                    display: "inline-block",
                    marginBottom: "var(--spacing-md)",
                  }}
                >
                  Speak to an Advisor
                </Link>
              </div>

              <div>
                <Link
                  to="/contact"
                  style={{
                    display: "inline-block",
                    padding: "var(--spacing-md) var(--spacing-lg)",
                    border: "2px solid var(--color-white)",
                    borderRadius: "var(--border-radius-lg)",
                    color: "var(--color-white)",
                    textDecoration: "none",
                    fontWeight: "var(--font-weight-semibold)",
                    transition: "all var(--transition-fast)",
                  }}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator Component */}
        <MortgageCalculatorComponent />

        <div className={styles.processSteps}>
          <h2 className={styles.sectionTitle}>How to Use the Calculator</h2>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h4>Select Buyer Type & Enter Property Details</h4>
              <p>
                Choose if you're a first-time buyer to apply stamp duty relief,
                then input the property value and your available deposit amount.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h4>Fine-Tune Your Deposit & Interest Rate</h4>
              <p>
                Use the percentage controls and precision buttons to adjust your
                deposit and interest rate to the exact amounts you need.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h4>Get Instant Results</h4>
              <p>
                See your monthly payment, total cost, interest, and accurate
                stamp duty calculations based on current UK rates.
              </p>
            </div>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h4>Review Summary & Stamp Duty</h4>
              <p>
                Check your loan-to-value ratio, deposit percentage, and stamp
                duty breakdown including any first-time buyer savings.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Ready to Take the Next Step?</h3>
          <p>
            Get expert mortgage advice and access to exclusive deals from our
            panel of 90+ lenders.
          </p>
          <Link to="/contact" className={styles.ctaButton}>
            Speak to a Mortgage Expert
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default MortgageCalculator;
