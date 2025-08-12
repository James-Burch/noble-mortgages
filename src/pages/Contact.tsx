import React, { useState } from "react";
import PageTemplate from "../components/PageTemplate";
import styles from "../components/PageTemplate.module.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    mortgageType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (Netlify forms or email service)
    console.log("Form submitted:", formData);
  };

  return (
    <PageTemplate
      title="Contact Us"
      subtitle="Get expert mortgage and insurance advice tailored to your needs"
      backgroundImage="/images/image1.webp"
    >
      <div className={styles.container}>
        {/* Two Column Layout */}
        <div className={styles.twoColumnSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <div className={styles.text}>
              <p>
                Ready to take the next step? Our qualified mortgage and
                insurance advisors are here to help you make confident financial
                decisions. Get in touch today for your free, no-obligation
                consultation.
              </p>
              <p>
                Whether you're looking to buy your first home, remortgage, or
                protect your family with insurance, we'll search the whole
                market to find the best deals for your circumstances.
              </p>
            </div>

            <div style={{ marginTop: "var(--spacing-2xl)" }}>
              <h3
                style={{
                  color: "var(--color-secondary)",
                  marginBottom: "var(--spacing-lg)",
                }}
              >
                Contact Information
              </h3>

              <div style={{ marginBottom: "var(--spacing-lg)" }}>
                <h4
                  style={{
                    color: "var(--color-secondary)",
                    marginBottom: "var(--spacing-sm)",
                  }}
                >
                  Phone
                </h4>
                <p
                  style={{
                    fontSize: "var(--font-size-lg)",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "var(--color-primary)",
                  }}
                >
                  07956 758625
                </p>
              </div>

              <div style={{ marginBottom: "var(--spacing-lg)" }}>
                <h4
                  style={{
                    color: "var(--color-secondary)",
                    marginBottom: "var(--spacing-sm)",
                  }}
                >
                  Email
                </h4>
                <p
                  style={{
                    fontSize: "var(--font-size-lg)",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "var(--color-primary)",
                  }}
                >
                  admin@noblemortgages.co.uk
                </p>
              </div>

              <div>
                <h4
                  style={{
                    color: "var(--color-secondary)",
                    marginBottom: "var(--spacing-sm)",
                  }}
                >
                  WhatsApp
                </h4>
                <p
                  style={{
                    fontSize: "var(--font-size-lg)",
                    fontWeight: "var(--font-weight-semibold)",
                    color: "var(--color-primary)",
                  }}
                >
                  07956 758625
                </p>
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.highlight}>
              <h3
                style={{
                  color: "var(--color-white)",
                  marginBottom: "var(--spacing-lg)",
                }}
              >
                Why Choose Us?
              </h3>
              <p style={{ color: "rgba(255, 255, 255, 0.95)" }}>
                ✓ No fees to you - completely free advice
                <br />✓ Access to 90+ lenders
                <br />✓ FCA regulated for your protection
                <br />✓ Whole of market access
                <br />✓ Expert guidance tailored to you
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div
          style={{
            background: "var(--color-light-grey)",
            padding: "var(--spacing-2xl)",
            borderRadius: "var(--border-radius-xl)",
            margin: "var(--spacing-2xl) 0",
            border: "1px solid rgba(79, 209, 199, 0.2)",
          }}
        >
          <h2
            className={styles.sectionTitle}
            style={{ textAlign: "center", marginBottom: "var(--spacing-xl)" }}
          >
            Tell Us About Your Requirements
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            {/* First Row - Name and Email */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--spacing-lg)",
                marginBottom: "var(--spacing-lg)",
              }}
              className="form-row"
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
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="John Smith"
                  style={{
                    width: "100%",
                    padding: "var(--spacing-md)",
                    border: "2px solid rgba(79, 209, 199, 0.2)",
                    borderRadius: "var(--border-radius-lg)",
                    fontSize: "var(--font-size-base)",
                    transition: "all var(--transition-fast)",
                    backgroundColor: "var(--color-white)",
                  }}
                />
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
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john.smith@example.com"
                  style={{
                    width: "100%",
                    padding: "var(--spacing-md)",
                    border: "2px solid rgba(79, 209, 199, 0.2)",
                    borderRadius: "var(--border-radius-lg)",
                    fontSize: "var(--font-size-base)",
                    transition: "all var(--transition-fast)",
                    backgroundColor: "var(--color-white)",
                  }}
                />
              </div>
            </div>

            {/* Second Row - Phone and Mortgage Type */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--spacing-lg)",
                marginBottom: "var(--spacing-lg)",
              }}
              className="form-row"
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
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="07123 456789"
                  style={{
                    width: "100%",
                    padding: "var(--spacing-md)",
                    border: "2px solid rgba(79, 209, 199, 0.2)",
                    borderRadius: "var(--border-radius-lg)",
                    fontSize: "var(--font-size-base)",
                    transition: "all var(--transition-fast)",
                    backgroundColor: "var(--color-white)",
                  }}
                />
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
                  Service Type
                </label>
                <select
                  name="mortgageType"
                  value={formData.mortgageType}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "var(--spacing-md)",
                    border: "2px solid rgba(79, 209, 199, 0.2)",
                    borderRadius: "var(--border-radius-lg)",
                    fontSize: "var(--font-size-base)",
                    transition: "all var(--transition-fast)",
                    backgroundColor: "var(--color-white)",
                  }}
                >
                  <option value="">Select service type</option>
                  <option value="first-time-buyer">First Time Buyer</option>
                  <option value="home-mover">Home Mover</option>
                  <option value="remortgage">Remortgage</option>
                  <option value="buy-to-let">Buy to Let</option>
                  <option value="new-build">New Build</option>
                  <option value="help-to-buy">Help to Buy</option>
                  <option value="limited-companies">Limited Companies</option>
                  <option value="bridging-loans">Bridging Loans</option>
                  <option value="life-insurance">Life Insurance</option>
                  <option value="income-protection">Income Protection</option>
                  <option value="critical-illness">Critical Illness</option>
                  <option value="home-insurance">Home Insurance</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div style={{ marginBottom: "var(--spacing-xl)" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "var(--spacing-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--color-secondary)",
                }}
              >
                Additional Information
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Tell us about your situation, timeline, or any specific requirements..."
                style={{
                  width: "100%",
                  padding: "var(--spacing-md)",
                  border: "2px solid rgba(79, 209, 199, 0.2)",
                  borderRadius: "var(--border-radius-lg)",
                  fontSize: "var(--font-size-base)",
                  transition: "all var(--transition-fast)",
                  backgroundColor: "var(--color-white)",
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
            </div>

            {/* Submit Button */}
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                className={styles.ctaButton}
                style={{
                  fontSize: "var(--font-size-lg)",
                  padding: "var(--spacing-lg) var(--spacing-3xl)",
                  minWidth: "300px",
                }}
              >
                Get Free Mortgage Advice
              </button>
            </div>

            {/* Disclaimer */}
            <div
              style={{ marginTop: "var(--spacing-lg)", textAlign: "center" }}
            >
              <p
                style={{
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-grey)",
                  lineHeight: "var(--line-height-normal)",
                }}
              >
                By submitting this form, you consent to being contacted by our
                mortgage advisors. Your home may be repossessed if you do not
                keep up repayments on your mortgage.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Add CSS for responsive design */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
            .form-row {
              grid-template-columns: 1fr !important;
            }
          }
        `,
        }}
      />
    </PageTemplate>
  );
};

export default Contact;
