import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FAQSection.module.css";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: "how-much-can-i-borrow",
    question: "How much can I borrow for a mortgage?",
    answer:
      "Most lenders will lend up to 4.5 times your annual income, though this can vary. We assess your full financial situation including income, expenses, and credit history to find you the best deal from our panel of 90+ lenders.",
  },
  {
    id: "mortgage-application-process",
    question: "What's involved in the mortgage application process?",
    answer:
      "We handle all the paperwork, liaise with lenders on your behalf, and guide you through each step of the process. Our expert team ensures a smooth journey from initial consultation to completion, taking care of all the complex details so you don't have to.",
  },
  {
    id: "deposit-needed",
    question: "Do I need a deposit to buy a house?",
    answer:
      "While most mortgages require a deposit, the amount varies. First-time buyers can get mortgages with as little as 5% deposit. We'll help you explore all options including government schemes and 95% LTV mortgages.",
  },
];

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFAQ(id);
    }
  };

  // Handle FAQ link - scroll to FAQ section smoothly
  const handleFAQClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Use a more robust selector approach
    const faqSection = document.getElementById("faq-section");
    if (faqSection) {
      faqSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="faq-section"
      className={`${styles.section} faq-section`}
      data-section="faq"
      aria-labelledby="faq-heading"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="faq-heading" className={styles.title}>
            Frequently Asked Questions
          </h2>
          <p className={styles.subtitle}>
            Get quick answers to common questions about mortgages and insurance
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <div key={faq.id} className={styles.faqItem}>
              <button
                className={styles.question}
                onClick={() => toggleFAQ(faq.id)}
                onKeyDown={(e) => handleKeyDown(e, faq.id)}
                aria-expanded={openFAQ === faq.id}
                aria-controls={`answer-${faq.id}`}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <span
                  className={`${styles.icon} ${
                    openFAQ === faq.id ? styles.iconOpen : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                id={`answer-${faq.id}`}
                className={`${styles.answer} ${
                  openFAQ === faq.id ? styles.answerOpen : ""
                }`}
                role="region"
                aria-labelledby={`question-${faq.id}`}
              >
                <div className={styles.answerContent}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Have more questions? We're here to help with personalized advice.
          </p>
          <Link
            to="/contact"
            className={styles.viewAllLink}
            aria-label="Contact us for more help"
          >
            Have another question? Contact us here
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
