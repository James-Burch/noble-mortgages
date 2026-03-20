import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCards.module.css";

interface ProductCard {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  type: "mortgage" | "insurance";
}

interface ProductCardsProps {
  title: string;
  products: ProductCard[];
  type: "mortgage" | "insurance";
}

const CardImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <div className={styles.imageSkeleton} />}
      <img
        src={src}
        alt={alt}
        className={`${styles.cardImage} ${loaded ? styles.cardImageLoaded : styles.cardImageLoading}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </>
  );
};

const ProductCards: React.FC<ProductCardsProps> = ({
  title,
  products,
  type,
}) => {
  return (
    <section
      className={`${styles.section} ${
        type === "mortgage" ? styles.sectionWhite : styles.sectionTiffany
      }`}
    >
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <Link
              key={product.id}
              to={product.link}
              className={styles.cardWrapper}
              aria-label={`Learn more about ${product.title}`}
            >
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <CardImage src={product.image} alt={product.title} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{product.title}</h3>
                  <p className={styles.cardDescription}>
                    {product.description}
                  </p>
                  <span
                    className={`${styles.cardLink} ${
                      type === "mortgage"
                        ? styles.cardLinkPrimary
                        : styles.cardLinkWhite
                    }`}
                  >
                    Learn More
                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
