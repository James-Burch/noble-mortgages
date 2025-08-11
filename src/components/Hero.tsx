import React from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage = "/images/homeinsurance.webp",
  className = "",
  children,
}) => {
  return (
    <section
      className={`${styles.hero} ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      role="banner"
    >
      {/* Subtle dark overlay for text readability */}
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
          {children && <div className={styles.actions}>{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default Hero;
