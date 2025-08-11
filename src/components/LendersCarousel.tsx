import React from "react";
import styles from "./LendersCarousel.module.css";

interface Lender {
  id: string;
  name: string;
  logo: string;
}

const lenders: Lender[] = [
  // High Street Banks
  { id: "hsbc", name: "HSBC", logo: "/images/lenders/hsbc-logo.svg" },
  {
    id: "barclays",
    name: "Barclays",
    logo: "/images/lenders/barclays-logo.svg",
  },
  {
    id: "lloyds",
    name: "Lloyds Bank",
    logo: "/images/lenders/lloyds-logo.svg",
  },
  { id: "natwest", name: "NatWest", logo: "/images/lenders/natwest-logo.svg" },
  {
    id: "santander",
    name: "Santander",
    logo: "/images/lenders/santander-logo.svg",
  },
  { id: "halifax", name: "Halifax", logo: "/images/lenders/halifax-logo.svg" },
  {
    id: "nationwide",
    name: "Nationwide",
    logo: "/images/lenders/nationwide-logo.svg",
  },

  // Insurance Providers
  { id: "aviva", name: "Aviva", logo: "/images/lenders/aviva-logo.svg" },
  { id: "zurich", name: "Zurich", logo: "/images/lenders/zurich-logo.svg" },
  {
    id: "vitality",
    name: "Vitality",
    logo: "/images/lenders/vitality-logo.svg",
  },
  { id: "lv", name: "LV=", logo: "/images/lenders/lv-logo.svg" },
  { id: "axa", name: "AXA", logo: "/images/lenders/axa-logo.svg" },
  {
    id: "legal-general",
    name: "Legal & General",
    logo: "/images/lenders/legal-general-logo.svg",
  },
];

const LendersCarousel: React.FC = () => {
  // Duplicate the lenders array for seamless scrolling
  const duplicatedLenders = [...lenders, ...lenders];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Trusted Partners</h2>
        <p className={styles.subtitle}>
          We work with leading lenders and insurance providers to find you the
          best deals
        </p>

        <div className={styles.carousel}>
          <div className={styles.track}>
            {duplicatedLenders.map((lender, index) => (
              <div key={`${lender.id}-${index}`} className={styles.slide}>
                <img
                  src={lender.logo}
                  alt={`${lender.name} logo`}
                  className={styles.logo}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LendersCarousel;
