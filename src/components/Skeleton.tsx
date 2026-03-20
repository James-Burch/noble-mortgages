import React from "react";
import styles from "./Skeleton.module.css";

interface SkeletonBlockProps {
  width?: string;
  height?: string;
  light?: boolean;
  className?: string;
}

export const SkeletonBlock: React.FC<SkeletonBlockProps> = ({
  width = "100%",
  height = "1rem",
  light = false,
  className = "",
}) => (
  <div
    className={`${light ? styles.skeletonLight : styles.skeleton} ${styles.block} ${className}`}
    style={{ width, height }}
    aria-hidden="true"
  />
);

export const HeroSkeleton: React.FC = () => (
  <div className={`${styles.skeleton} ${styles.hero}`} aria-hidden="true">
    <div className={`${styles.skeleton} ${styles.heroTitle}`} />
    <div className={`${styles.skeleton} ${styles.heroSubtitle}`} />
  </div>
);

interface CardGridSkeletonProps {
  count?: number;
  light?: boolean;
}

export const CardGridSkeleton: React.FC<CardGridSkeletonProps> = ({
  count = 3,
  light = false,
}) => {
  const baseClass = light ? styles.skeletonLight : styles.skeleton;
  return (
    <div aria-hidden="true">
      <div className={`${baseClass} ${styles.sectionTitle}`} />
      <div className={styles.cardGrid}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={styles.card}>
            <div className={`${baseClass} ${styles.cardImage}`} />
            <div className={styles.cardBody}>
              <div className={`${baseClass} ${styles.cardTitle}`} />
              <div
                className={`${baseClass} ${styles.cardText} ${styles.textLong}`}
              />
              <div
                className={`${baseClass} ${styles.cardText} ${styles.textMedium}`}
              />
              <div className={`${baseClass} ${styles.cardLink}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const FAQSkeleton: React.FC = () => (
  <div className={styles.faqList} aria-hidden="true">
    <div className={`${styles.skeleton} ${styles.sectionTitle}`} />
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className={`${styles.skeleton} ${styles.faqItem}`} />
    ))}
  </div>
);

export const CarouselSkeleton: React.FC = () => (
  <div className={styles.carousel} aria-hidden="true">
    {Array.from({ length: 7 }).map((_, i) => (
      <div
        key={i}
        className={`${styles.skeletonLight} ${styles.carouselItem}`}
      />
    ))}
  </div>
);

export const CalculatorTeaserSkeleton: React.FC = () => (
  <div className={styles.calculatorTeaser} aria-hidden="true">
    <div className={styles.calculatorText}>
      <div className={`${styles.skeleton} ${styles.heroTitle}`} />
      <div className={`${styles.skeleton} ${styles.text} ${styles.textLong}`} />
      <div className={`${styles.skeleton} ${styles.text} ${styles.textLong}`} />
      <div
        className={`${styles.skeleton} ${styles.text} ${styles.textMedium}`}
      />
    </div>
    <div className={`${styles.skeleton} ${styles.calculatorImage}`} />
  </div>
);

export const ContentSkeleton: React.FC = () => (
  <div className={styles.contentBlock} aria-hidden="true">
    <div className={`${styles.skeleton} ${styles.text} ${styles.textLong}`} />
    <div className={`${styles.skeleton} ${styles.text} ${styles.textLong}`} />
    <div className={`${styles.skeleton} ${styles.text} ${styles.textMedium}`} />
    <div className={`${styles.skeleton} ${styles.text} ${styles.textShort}`} />
    <div className={`${styles.skeleton} ${styles.text} ${styles.textLong}`} />
    <div className={`${styles.skeleton} ${styles.text} ${styles.textLong}`} />
    <div className={`${styles.skeleton} ${styles.text} ${styles.textMedium}`} />
  </div>
);

export const PageSkeleton: React.FC = () => (
  <div aria-label="Loading page content" role="status">
    <HeroSkeleton />
    <ContentSkeleton />
  </div>
);
