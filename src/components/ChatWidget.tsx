import React, { useState, useEffect, useRef } from "react";
import styles from "./ChatWidget.module.css";

interface ChatWidgetProps {
  className?: string;
}

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  const firstInputRef = useRef<HTMLInputElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Auto-open after 5 seconds if not dismissed
  useEffect(() => {
    const dismissed = sessionStorage.getItem("chat-dismissed");
    if (dismissed || hasAutoOpened) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasAutoOpened(true);
    }, 1000);

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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

      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", message: "" });

      // Auto-close after success
      setTimeout(() => {
        setIsOpen(false);
        setSubmitStatus("idle");
      }, 3000);
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
            {submitStatus === "success" ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✅</div>
                <h4 className={styles.successTitle}>Opening WhatsApp...</h4>
                <p className={styles.successText}>
                  We'll respond as soon as possible!
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
