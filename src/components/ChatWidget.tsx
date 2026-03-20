import React, { useState, useEffect, useRef } from "react";
import styles from "./ChatWidget.module.css";

interface ChatWidgetProps {
  className?: string;
}

interface FormData {
  name: string;
  phone: string;
  message: string;
  website: string; // honeypot field — should always be empty
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "redirecting" | "success" | "error"
  >("idle");
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Auto-open after 8 seconds if not dismissed
  useEffect(() => {
    const dismissed = sessionStorage.getItem("chat-dismissed");
    if (dismissed || hasAutoOpened) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasAutoOpened(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, [hasAutoOpened]);

  // Focus management
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      sessionStorage.removeItem("chat-dismissed");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("chat-dismissed", "true");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check — bots will fill this hidden field
    if (formData.website) {
      setSubmitStatus("success");
      return;
    }

    // Rate limit — prevent rapid resubmission
    const lastSubmit = sessionStorage.getItem("chat-last-submit");
    if (lastSubmit && Date.now() - parseInt(lastSubmit) < 30000) {
      return;
    }

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // WhatsApp integration
      const whatsappMessage = `Hi! I'm interested in mortgage advice.

Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}

Please get in touch when convenient.`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/447956758625?text=${encodedMessage}`;

      setSubmitStatus("redirecting");

      // Brief pause so user sees the redirect state
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        sessionStorage.setItem("chat-last-submit", Date.now().toString());
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", message: "", website: "" });

        // Auto-close after success
        setTimeout(() => {
          setIsOpen(false);
          setSubmitStatus("idle");
        }, 3000);
      }, 800);
    } catch (error) {
      console.error("Chat widget error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${styles.chatWidget} ${className}`}>
      {/* Chat Toggle Button */}
      <button
        onClick={handleToggle}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        className={styles.chatToggle}
      >
        {isOpen ? "×" : "💬"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-title"
          className={styles.chatWindow}
        >
          {/* Chat Header */}
          <div className={styles.chatHeader}>
            <div className={styles.chatHeaderContent}>
              <h3 id="chat-title">Get Expert Advice</h3>
              <p>Free discovery call</p>
            </div>
            <button
              onClick={handleClose}
              aria-label="Close chat"
              className={styles.chatClose}
            >
              ×
            </button>
          </div>

          {/* Chat Content */}
          <div className={styles.chatContent}>
            {submitStatus === "redirecting" || submitStatus === "success" ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>
                  {submitStatus === "redirecting" ? "💬" : "✅"}
                </div>
                <h4 className={styles.successTitle}>
                  {submitStatus === "redirecting"
                    ? "Redirecting to WhatsApp..."
                    : "Message Ready!"}
                </h4>
                <p className={styles.successText}>
                  {submitStatus === "redirecting"
                    ? "Please wait a moment..."
                    : "We'll respond as soon as possible!"}
                </p>
              </div>
            ) : (
              <>
                <p className={styles.chatDescription}>
                  Tell us about your mortgage needs and we'll connect you
                  directly via WhatsApp for instant expert advice.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="chat-name" className={styles.label}>
                      Full Name *
                    </label>
                    <input
                      ref={firstInputRef}
                      id="chat-name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="chat-phone" className={styles.label}>
                      Phone Number *
                    </label>
                    <input
                      id="chat-phone"
                      name="phone"
                      type="tel"
                      placeholder="07123 456789"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="chat-message" className={styles.label}>
                      Your Requirements *
                    </label>
                    <textarea
                      id="chat-message"
                      name="message"
                      rows={3}
                      placeholder="e.g., First-time buyer looking for mortgage advice..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className={styles.textarea}
                    />
                  </div>

                  {/* Honeypot — hidden from real users */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      height: 0,
                      overflow: "hidden",
                    }}
                  >
                    <label htmlFor="chat-website">Website</label>
                    <input
                      id="chat-website"
                      name="website"
                      type="text"
                      value={formData.website}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {submitStatus === "error" && (
                    <div className={styles.errorMessage}>
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitButton}
                  >
                    {isSubmitting ? "Connecting..." : "💬 Chat via WhatsApp"}
                  </button>
                </form>

                <div className={styles.disclaimer}>
                  By clicking above, you agree to be contacted via WhatsApp
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
