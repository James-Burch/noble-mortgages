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
import ScrollToTop from "./components/ScrollToTop";
import ChatWidget from './components/ChatWidget';

// Insurance/Mortgage Pages
import InsuranceOverview from "./pages/InsuranceOverview";
import LifeInsurance from "./pages/LifeInsurance";
import IncomeProtection from "./pages/IncomeProtection";
import CriticalIllness from "./pages/CriticalIllness";
import AccidentSicknessUnemployment from "./pages/AccidentSicknessUnemployment";
import HomeBuildingsContents from "./pages/HomeBuildingsContents";
import MortgagesOverview from "./pages/MortgagesOverview";
import FirstTimeBuyers from "./pages/FirstTimeBuyers";
import Remortgage from "./pages/Remortgage";
import HomeMover from "./pages/HomeMover";
import BuyToLet from "./pages/BuyToLet";
import NewBuild from "./pages/NewBuild";
import HelpToBuy from "./pages/HelpToBuy";
import LimitedCompanies from "./pages/LimitedCompanies";
import BridgingLoans from "./pages/BridgingLoans";

// Other Pages
import About from "./pages/About";
import MortgageCalculator from "./pages/MortgageCalculator";
import Contact from "./pages/Contact";

// Data
import { mortgageProducts, insuranceProducts } from "./data/products";

function App() {
  return (
    <Router>
      <ScrollToTop />
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

                  <ChatWidget />

                  <ContactCTA />
                </>
              }
            />

            <Route path="/about" element={<About />} />

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

            {/* Insurance Pages */}
            <Route path="/insurance" element={<InsuranceOverview />} />
            <Route
              path="/insurance/life-insurance"
              element={<LifeInsurance />}
            />
            <Route
              path="/insurance/income-protection"
              element={<IncomeProtection />}
            />
            <Route
              path="/insurance/critical-illness"
              element={<CriticalIllness />}
            />
            <Route
              path="/insurance/accident-sickness-unemployment"
              element={<AccidentSicknessUnemployment />}
            />
            <Route
              path="/insurance/home-buildings-contents"
              element={<HomeBuildingsContents />}
            />

            {/* Other pages */}
            <Route
              path="/mortgage-calculator"
              element={<MortgageCalculator />}
            />
            <Route path="/contact" element={<Contact />} />

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
