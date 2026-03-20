import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "service";
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "Noble Mortgages - UK Mortgage & Insurance Experts",
  description = "Professional mortgage advisors helping with first-time buyer, remortgage, buy-to-let, and specialist mortgage solutions across the UK.",
  keywords = "mortgage, buying a house, buy-to-let, bridging loans, first-time buyer, new build, life insurance, income protection, critical illness, UK mortgages, Northamptonshire",
  image = "https://noblemortgages.co.uk/og-image.jpg",
  url = "https://noblemortgages.co.uk",
  type = "website",
  noindex = false,
}) => {
  const fullTitle =
    title === "Noble Mortgages - UK Mortgage & Insurance Experts"
      ? title
      : `${title} | Noble Mortgages`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Noble Mortgages" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Noble Mortgages" />
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="United Kingdom" />
      <meta name="language" content="en-GB" />

      {/* Structured Data will be added separately */}
    </Helmet>
  );
};

export default SEO;
