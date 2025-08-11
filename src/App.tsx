import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";

// Components
import ContactBar from "./components/ContactBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LendersCarousel from "./components/LendersCarousel";
import ProductCards from "./components/ProductCards";
import CalculatorTeaser from "./components/CalculatorTeaser";
import FAQSection from "./components/FAQSection";
import ContactCTA from "./components/ContactCTA";

// Mortgage Pages
import MortgagesOverview from "./pages/MortgagesOverview";
import FirstTimeBuyers from "./pages/FirstTimeBuyers";
import Remortgage from "./pages/Remortgage";
import HomeMover from "./pages/HomeMover";
import BuyToLet from "./pages/BuyToLet";
import NewBuild from "./pages/NewBuild";
import HelpToBuy from "./pages/HelpToBuy";
import LimitedCompanies from "./pages/LimitedCompanies";
import BridgingLoans from "./pages/BridgingLoans";

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

                  <ContactBar />

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

            {/* Mortgage Pages */}
            <Route path="/mortgages" element={<MortgagesOverview />} />
            <Route
              path="/mortgages/first-time-buyers"
              element={<FirstTimeBuyers />}
            />
            <Route path="/mortgages/remortgage" element={<Remortgage />} />
            <Route path="/mortgages/home-mover" element={<HomeMover />} />
            <Route path="/mortgages/buy-to-let" element={<BuyToLet />} />
            <Route path="/mortgages/new-build" element={<NewBuild />} />
            <Route path="/mortgages/help-to-buy" element={<HelpToBuy />} />
            <Route
              path="/mortgages/limited-companies"
              element={<LimitedCompanies />}
            />
            <Route
              path="/mortgages/bridging-loans"
              element={<BridgingLoans />}
            />

            {/* Placeholder routes for remaining mortgage pages */}
            <Route
              path="/mortgages/self-employed"
              element={
                <div className="container" style={{ padding: "2rem 0" }}>
                  <h1>Self-Employed</h1>
                  <p>Self-Employed mortgages page coming soon...</p>
                </div>
              }
            />

            {/* Insurance placeholder routes */}
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
              path="/insurance/life-insurance"
              element={
                <div className="container" style={{ padding: "2rem 0" }}>
                  <h1>Life Insurance</h1>
                  <p>Life Insurance page coming soon...</p>
                </div>
              }
            />
            <Route
              path="/insurance/income-protection"
              element={
                <div className="container" style={{ padding: "2rem 0" }}>
                  <h1>Income Protection</h1>
                  <p>Income Protection page coming soon...</p>
                </div>
              }
            />
            <Route
              path="/insurance/critical-illness"
              element={
                <div className="container" style={{ padding: "2rem 0" }}>
                  <h1>Critical Illness</h1>
                  <p>Critical Illness page coming soon...</p>
                </div>
              }
            />
            <Route
              path="/insurance/accident-sickness-unemployment"
              element={
                <div className="container" style={{ padding: "2rem 0" }}>
                  <h1>Accident, Sickness & Unemployment</h1>
                  <p>ASU Insurance page coming soon...</p>
                </div>
              }
            />
            <Route
              path="/insurance/home-buildings-contents"
              element={
                <div className="container" style={{ padding: "2rem 0" }}>
                  <h1>Home, Buildings & Contents Insurance</h1>
                  <p>Home Insurance page coming soon...</p>
                </div>
              }
            />

            {/* Other pages */}
            <Route
              path="/mortgage-calculator"
              element={
                <div className="container" style={{ padding: "2rem 0" }}>
                  <h1>Mortgage Calculator</h1>
                  <p>Calculator page coming soon...</p>
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

            {/* Catch all other routes */}
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
