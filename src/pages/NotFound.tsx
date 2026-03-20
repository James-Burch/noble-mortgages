import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to Noble Mortgages homepage for mortgage and insurance advice."
        noindex={true}
      />
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2C3E50",
          padding: "2rem",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "600px" }}>
          <h1
            style={{
              color: "#4FD1C7",
              fontSize: "5rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
              lineHeight: 1,
            }}
          >
            404
          </h1>
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1.5rem",
            }}
          >
            Page Not Found
          </h2>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            Sorry, the page you're looking for doesn't exist or may have been
            moved. Let us help you find what you need.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/"
              style={{
                backgroundColor: "#4FD1C7",
                color: "#FFFFFF",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.75rem",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Go to Homepage
            </Link>
            <Link
              to="/contact"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                border: "2px solid #FFFFFF",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.75rem",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
