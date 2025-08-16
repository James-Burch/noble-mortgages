import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const serviceId =
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "SERVICE_ID";
      const templateId =
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "TEMPLATE_ID";
      const publicKey =
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "PUBLIC_KEY";

      // Prepare template parameters
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        service_type: formData.mortgageType,
        message: formData.message,
        to_name: "Noble Mortgages Team",
        to_email: "admin@noblemortgages.co.uk",
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        mortgageType: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
                  color: "var(--color-primary)",
                  marginBottom: "var(--spacing-lg)",
                }}
              >
                Contact Information
              </h3>

              <div style={{ marginBottom: "var(--spacing-lg)" }}>
                <h4
                  style={{
                    color: "var(--color-white)",
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
                    color: "var(--color-white)",
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
                    color: "var(--color-white)",
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
            background: "var(--color-primary)",
            padding: "var(--spacing-2xl)",
            borderRadius: "var(--border-radius-xl)",
            margin: "var(--spacing-2xl) 0",
            border: "1px solid rgba(79, 209, 199, 0.2)",
          }}
        >
          <h2
            className={styles.sectionTitle}
            style={{
              textAlign: "center",
              marginBottom: "var(--spacing-xl)",
              color: "var(--color-secondary)",
            }}
          >
            Tell Us About Your Requirements
          </h2>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div
              style={{
                background: "var(--color-secondary)",
                color: "white",
                padding: "var(--spacing-md)",
                borderRadius: "var(--border-radius-lg)",
                marginBottom: "var(--spacing-lg)",
                textAlign: "center",
              }}
            >
              ✅ Thank you! Your message has been sent successfully. We'll get
              back to you within 24 hours.
            </div>
          )}

          {submitStatus === "error" && (
            <div
              style={{
                background: "#dc3545",
                color: "white",
                padding: "var(--spacing-md)",
                borderRadius: "var(--border-radius-lg)",
                marginBottom: "var(--spacing-lg)",
                textAlign: "center",
              }}
            >
              ❌ Sorry, there was an error sending your message. Please try
              again or call us at 07956 758625.
            </div>
          )}

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
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "var(--spacing-md)",
                    border: "2px solid rgba(79, 209, 199, 0.2)",
                    borderRadius: "var(--border-radius-lg)",
                    fontSize: "var(--font-size-base)",
                    transition: "all var(--transition-fast)",
                    backgroundColor: "var(--color-white)",
                    opacity: isSubmitting ? 0.7 : 1,
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
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "var(--spacing-md)",
                    border: "2px solid rgba(79, 209, 199, 0.2)",
                    borderRadius: "var(--border-radius-lg)",
                    fontSize: "var(--font-size-base)",
                    transition: "all var(--transition-fast)",
                    backgroundColor: "var(--color-white)",
                    opacity: isSubmitting ? 0.7 : 1,
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
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "var(--spacing-md)",
                    border: "2px solid rgba(79, 209, 199, 0.2)",
                    borderRadius: "var(--border-radius-lg)",
                    fontSize: "var(--font-size-base)",
                    transition: "all var(--transition-fast)",
                    backgroundColor: "var(--color-white)",
                    opacity: isSubmitting ? 0.7 : 1,
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
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "var(--spacing-md)",
                    border: "2px solid rgba(79, 209, 199, 0.2)",
                    borderRadius: "var(--border-radius-lg)",
                    fontSize: "var(--font-size-base)",
                    transition: "all var(--transition-fast)",
                    backgroundColor: "var(--color-white)",
                    opacity: isSubmitting ? 0.7 : 1,
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
                disabled={isSubmitting}
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
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              />
            </div>

            {/* Submit Button */}
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.ctaButton}
                style={{
                  fontSize: "var(--font-size-lg)",
                  padding: "var(--spacing-lg) var(--spacing-3xl)",
                  minWidth: "300px",
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? "Sending..." : "Get Free Mortgage Advice"}
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
