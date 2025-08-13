import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./styles/global.css";

// Data
import { mortgageProducts, insuranceProducts } from "./data/products";

// Performance and SEO Components
import { measurePerformance, addResourceHints } from "./utils/performance";
import SEO from "./components/SEO";
import StructuredData from "./components/StructuredData";
import usePreloadImages from "./hooks/usePreloadImages";

// Core Components (always loaded)
import ContactBar from "./components/ContactBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import ChatWidget from "./components/ChatWidget";

// Lazy load heavy components for better performance
const LendersCarousel = lazy(() => import("./components/LendersCarousel"));
const ProductCards = lazy(() => import("./components/ProductCards"));
const CalculatorTeaser = lazy(() => import("./components/CalculatorTeaser"));
const FAQSection = lazy(() => import("./components/FAQSection"));
const ContactCTA = lazy(() => import("./components/ContactCTA"));

// Lazy load pages
const InsuranceOverview = lazy(() => import("./pages/InsuranceOverview"));
const LifeInsurance = lazy(() => import("./pages/LifeInsurance"));
const IncomeProtection = lazy(() => import("./pages/IncomeProtection"));
const CriticalIllness = lazy(() => import("./pages/CriticalIllness"));
const AccidentSicknessUnemployment = lazy(
  () => import("./pages/AccidentSicknessUnemployment")
);
const HomeBuildingsContents = lazy(
  () => import("./pages/HomeBuildingsContents")
);
const MortgagesOverview = lazy(() => import("./pages/MortgagesOverview"));
const FirstTimeBuyers = lazy(() => import("./pages/FirstTimeBuyers"));
const Remortgage = lazy(() => import("./pages/Remortgage"));
const HomeMover = lazy(() => import("./pages/HomeMover"));
const BuyToLet = lazy(() => import("./pages/BuyToLet"));
const NewBuild = lazy(() => import("./pages/NewBuild"));
const HelpToBuy = lazy(() => import("./pages/HelpToBuy"));
const LimitedCompanies = lazy(() => import("./pages/LimitedCompanies"));
const BridgingLoans = lazy(() => import("./pages/BridgingLoans"));
const About = lazy(() => import("./pages/About"));
const MortgageCalculator = lazy(() => import("./pages/MortgageCalculator"));
const Contact = lazy(() => import("./pages/Contact"));

// Loading component for better UX
const PageLoader = () => (
  <div
    style={{
      height: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f8f9fa",
    }}
  >
    <div
      style={{
        width: "40px",
        height: "40px",
        border: "4px solid #4FD1C7",
        borderTop: "4px solid transparent",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
  </div>
);

// SEO wrapper component for each route
const SEOWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const getPageSEO = () => {
    switch (location.pathname) {
      case "/":
        return {
          title: "Noble Mortgages - UK Mortgage & Insurance Experts",
          description:
            "Professional mortgage advisors helping with first-time buyer, remortgage, buy-to-let, and specialist mortgage solutions across the UK.",
          keywords:
            "mortgage advice UK, first time buyer mortgage, remortgage, buy to let mortgage, life insurance, income protection, Northamptonshire",
          url: "https://noblemortgages.co.uk",
        };
      case "/about":
        return {
          title: "About Noble Mortgages - Professional Mortgage Advisors",
          description:
            "Learn about Noble Mortgages, our experienced team of mortgage advisors and our commitment to finding the best mortgage deals across the UK.",
          keywords:
            "about noble mortgages, mortgage advisors, UK mortgage experts, FCA regulated",
          url: "https://noblemortgages.co.uk/about",
        };
      case "/contact":
        return {
          title: "Contact Noble Mortgages - Free Mortgage Consultation",
          description:
            "Contact our mortgage experts for free advice. Call 07956 758625 or email admin@noblemortgages.co.uk for professional mortgage guidance.",
          keywords:
            "contact mortgage advisor, free mortgage consultation, mortgage advice UK",
          url: "https://noblemortgages.co.uk/contact",
        };
      case "/mortgage-calculator":
        return {
          title:
            "Free Mortgage Calculator - Calculate Monthly Payments | Noble Mortgages",
          description:
            "Use our free mortgage calculator to estimate monthly payments, stamp duty costs, and total interest. Includes 2025 UK stamp duty rates and first-time buyer relief.",
          keywords:
            "mortgage calculator, monthly payment calculator, stamp duty calculator, first time buyer calculator",
          url: "https://noblemortgages.co.uk/mortgage-calculator",
        };
      case "/mortgages":
        return {
          title:
            "Mortgage Solutions - Expert Advice Across the UK | Noble Mortgages",
          description:
            "Comprehensive mortgage solutions including first-time buyer, remortgage, buy-to-let, and specialist mortgages. Expert advice from FCA regulated advisors.",
          keywords:
            "UK mortgages, mortgage solutions, first time buyer, remortgage, buy to let, specialist mortgages",
          url: "https://noblemortgages.co.uk/mortgages",
        };
      case "/mortgages/first-time-buyers":
        return {
          title:
            "First Time Buyer Mortgages - Expert Help & Advice | Noble Mortgages",
          description:
            "First time buyer mortgage advice, Help to Buy schemes, and specialist lenders. Get expert guidance to secure your first home with competitive rates.",
          keywords:
            "first time buyer mortgage, Help to Buy, first home, mortgage deposit, FTB mortgage rates",
          url: "https://noblemortgages.co.uk/mortgages/first-time-buyers",
        };
      case "/insurance":
        return {
          title:
            "Insurance Solutions - Life, Income & Critical Illness | Noble Mortgages",
          description:
            "Comprehensive insurance solutions including life insurance, income protection, and critical illness cover. Protect your family and mortgage payments.",
          keywords:
            "life insurance UK, income protection, critical illness cover, mortgage protection insurance",
          url: "https://noblemortgages.co.uk/insurance",
        };
      default:
        return {
          title: "Noble Mortgages - UK Mortgage & Insurance Experts",
          description:
            "Professional mortgage advisors helping with first-time buyer, remortgage, buy-to-let, and specialist mortgage solutions across the UK.",
          keywords:
            "mortgage, buying a house, buy-to-let, bridging loans, first-time buyer, new build, life insurance, income protection, critical illness, UK mortgages, Northamptonshire",
          url: `https://noblemortgages.co.uk${location.pathname}`,
        };
    }
  };

  const seoData = getPageSEO();

  return (
    <>
      <SEO {...seoData} />
      <StructuredData type="LocalBusiness" />
      {children}
    </>
  );
};

// Homepage component with preloaded images
const HomePage = () => {
  // Preload critical images
  usePreloadImages(["/images/homeinsurance.webp", "/images/hero-bg.webp"]);

  return (
    <>
      <Hero
        title="Your Trusted Mortgage & Insurance Experts"
        subtitle="Professional advice for all your mortgage and insurance needs across the UK"
        backgroundImage="/images/homeinsurance.webp"
      />

      <main style={{ backgroundColor: "#f8f9fa" }}>
        <Suspense fallback={<PageLoader />}>
          <LendersCarousel />
        </Suspense>

        <div style={{ backgroundColor: "white" }}>
          <Suspense fallback={<PageLoader />}>
            <ProductCards
              products={mortgageProducts}
              title="Mortgage Solutions"
              type="mortgage"
            />
          </Suspense>
        </div>
        <ContactBar />
        <div style={{ backgroundColor: "#f8f9fa" }}>
          <Suspense fallback={<PageLoader />}>
            <ProductCards
              products={insuranceProducts}
              title="Insurance Solutions"
              type="insurance"
            />
          </Suspense>
        </div>

        <div style={{ backgroundColor: "white" }}>
          <Suspense fallback={<PageLoader />}>
            <CalculatorTeaser />
          </Suspense>
        </div>

        <div style={{ backgroundColor: "#f8f9fa" }}>
          <Suspense fallback={<PageLoader />}>
            <FAQSection />
          </Suspense>
        </div>
      </main>

      <Suspense fallback={<div />}>
        <ContactCTA />
      </Suspense>
    </>
  );
};

// Performance Provider Component
const PerformanceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    // Initialize performance monitoring
    measurePerformance();
    addResourceHints();

    // Service Worker registration for caching
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    }
  }, []);

  return <>{children}</>;
};

function App() {
  return (
    <HelmetProvider>
      <PerformanceProvider>
        <Router>
          <div className="app">
            <Header />
            <ScrollToTop />
            <ChatWidget />

            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <SEOWrapper>
                      <HomePage />
                    </SEOWrapper>
                  }
                />

                {/* Mortgage Pages */}
                <Route
                  path="/mortgages"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <MortgagesOverview />
                      </Suspense>
                    </SEOWrapper>
                  }
                />
                <Route
                  path="/mortgages/first-time-buyers"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <FirstTimeBuyers />
                      </Suspense>
                    </SEOWrapper>
                  }
                />
                <Route
                  path="/mortgages/remortgage"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <Remortgage />
                      </Suspense>
                    </SEOWrapper>
                  }
                />
                <Route
                  path="/mortgages/home-mover"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <HomeMover />
                      </Suspense>
                    </SEOWrapper>
                  }
                />
                <Route
                  path="/mortgages/buy-to-let"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <BuyToLet />
                      </Suspense>
                    </SEOWrapper>
                  }
                />
                <Route
                  path="/mortgages/new-build"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <NewBuild />
                      </Suspense>
                    </SEOWrapper>
                  }
                />
                <Route
                  path="/mortgages/help-to-buy"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <HelpToBuy />
                      </Suspense>
                    </SEOWrapper>
                  }
                />
                <Route
                  path="/mortgages/limited-companies"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <LimitedCompanies />
                      </Suspense>
                    </SEOWrapper>
                  }
                />
                <Route
                  path="/mortgages/bridging-loans"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <BridgingLoans />
                      </Suspense>
                    </SEOWrapper>
                  }
                />

                {/* Insurance Pages */}
                <Route
                  path="/insurance"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <InsuranceOverview />
                      </Suspense>
                    </SEOWrapper>
                  }
                />
                <Route
                  path="/insurance/life-insurance"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <LifeInsurance />
                      </Suspense>
                    </SEOWrapper>
                  }
                />
                <Route
                  path="/insurance/income-protection"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <IncomeProtection />
                      </Suspense>
                    </SEOWrapper>
                  }
                />
                <Route
                  path="/insurance/critical-illness"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <CriticalIllness />
                      </Suspense>
                    </SEOWrapper>
                  }
                />
                <Route
                  path="/insurance/accident-sickness-unemployment"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <AccidentSicknessUnemployment />
                      </Suspense>
                    </SEOWrapper>
                  }
                />
                <Route
                  path="/insurance/home-buildings-contents"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <HomeBuildingsContents />
                      </Suspense>
                    </SEOWrapper>
                  }
                />

                {/* Other pages */}
                <Route
                  path="/about"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <About />
                      </Suspense>
                    </SEOWrapper>
                  }
                />
                <Route
                  path="/mortgage-calculator"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <MortgageCalculator />
                      </Suspense>
                    </SEOWrapper>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <SEOWrapper>
                      <Suspense fallback={<PageLoader />}>
                        <Contact />
                      </Suspense>
                    </SEOWrapper>
                  }
                />

                {/* Catch all other routes */}
                <Route
                  path="*"
                  element={
                    <SEOWrapper>
                      <div className="container" style={{ padding: "2rem 0" }}>
                        <h1>Page Coming Soon</h1>
                        <p>This page is under construction.</p>
                      </div>
                    </SEOWrapper>
                  }
                />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </PerformanceProvider>
    </HelmetProvider>
  );
}

export default App;
