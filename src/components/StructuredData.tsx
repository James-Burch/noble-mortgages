import React from "react";
import { Helmet } from "react-helmet-async";

interface LocalBusinessData {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  services: string[];
}

interface FAQData {
  question: string;
  answer: string;
}

interface StructuredDataProps {
  type: "LocalBusiness" | "FAQPage" | "Service";
  data?: LocalBusinessData;
  faqs?: FAQData[];
  serviceName?: string;
  serviceDescription?: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({
  type,
  data,
  faqs,
  serviceName,
  serviceDescription,
}) => {
  const generateLocalBusinessData = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data?.name || "Noble Mortgages",
    description:
      data?.description ||
      "Professional mortgage and insurance advisors across the UK",
    url: data?.url || "https://noblemortgages.co.uk",
    telephone: data?.telephone || "07956758625",
    email: data?.email || "admin@noblemortgages.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: data?.address.streetAddress || "",
      addressLocality: data?.address.addressLocality || "Northamptonshire",
      postalCode: data?.address.postalCode || "",
      addressCountry: data?.address.addressCountry || "GB",
    },
    areaServed: "United Kingdom",
    serviceType: data?.services || [
      "Mortgage Advice",
      "First Time Buyer Mortgages",
      "Remortgage Services",
      "Buy to Let Mortgages",
      "Life Insurance",
      "Income Protection",
      "Critical Illness Cover",
    ],
    priceRange: "Free initial consultation",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Bank Transfer, Credit Card",
    openingHours: "Mo-Fr 09:00-17:00",
    sameAs: [
      "https://www.facebook.com/noblemortgages",
      "https://www.linkedin.com/company/noblemortgages",
    ],
  });

  const generateFAQData = () => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity:
      faqs?.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })) || [],
  });

  const generateServiceData = () => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "Organization",
      name: "Noble Mortgages",
      url: "https://noblemortgages.co.uk",
    },
    areaServed: "United Kingdom",
    serviceType: "Financial Services",
  });

  const getStructuredData = () => {
    switch (type) {
      case "LocalBusiness":
        return generateLocalBusinessData();
      case "FAQPage":
        return generateFAQData();
      case "Service":
        return generateServiceData();
      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
