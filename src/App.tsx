import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LendersCarousel from "./components/LendersCarousel";
import ProductCards from "./components/ProductCards";
import CalculatorTeaser from "./components/CalculatorTeaser";
import FAQSection from "./components/FAQSection";
import ContactCTA from "./components/ContactCTA";

// Data
import { mortgageProducts, insuranceProducts } from "./data/products";

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <Header />

        <main id="main-content" style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero
                    title="Expert Mortgage & Insurance Advice"
                    subtitle="Professional guidance to help you make confident financial decisions for your future"
                    backgroundImage="/images/homeinsurance.webp"
                  >
                    <button
                      className="btn-primary"
                      style={{ marginRight: "1rem" }}
                    >
                      Get Expert Advice
                    </button>
                    <button className="btn-outline">
                      Calculate Your Mortgage
                    </button>
                  </Hero>

                  <LendersCarousel />

                  <ProductCards
                    title="Mortgage Solutions"
                    products={mortgageProducts}
                    type="mortgage"
                  />

                  <ProductCards
                    title="Insurance Protection"
                    products={insuranceProducts}
                    type="insurance"
                  />

                  <CalculatorTeaser />

                  <FAQSection />

                  <ContactCTA />
                </>
              }
            />

            <Route
              path="/about"
              element={
                <>
                  <Hero
                    title="About Noble Mortgages"
                    subtitle="Your trusted mortgage and insurance advisors"
                    backgroundImage="/images/apartmentblock.webp"
                  />
                  <div className="container" style={{ padding: "2rem 0" }}>
                    <h2>About Us</h2>
                    <p>Learn more about our team and services...</p>
                  </div>
                </>
              }
            />

            {/* Other placeholder routes */}
            <Route
              path="/mortgages"
              element={
                <div className="container" style={{ padding: "2rem 0" }}>
                  <h1>Mortgages</h1>
                  <p>Mortgages page coming soon...</p>
                </div>
              }
            />
            <Route
              path="/insurance"
              element={
                <div className="container" style={{ padding: "2rem 0" }}>
                  <h1>Insurance</h1>
                  <p>Insurance page coming soon...</p>
                </div>
              }
            />
            <Route
              path="/calculators"
              element={
                <div className="container" style={{ padding: "2rem 0" }}>
                  <h1>Calculators</h1>
                  <p>Calculators page coming soon...</p>
                </div>
              }
            />
            <Route
              path="/faqs"
              element={
                <div className="container" style={{ padding: "2rem 0" }}>
                  <h1>FAQs</h1>
                  <p>FAQs page coming soon...</p>
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="container" style={{ padding: "2rem 0" }}>
                  <h1>Contact</h1>
                  <p>Contact page coming soon...</p>
                </div>
              }
            />
            {/* Catch all other routes for now */}
            <Route
              path="*"
              element={
                <div className="container" style={{ padding: "2rem 0" }}>
                  <h1>Page Coming Soon</h1>
                  <p>This page is under construction.</p>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
