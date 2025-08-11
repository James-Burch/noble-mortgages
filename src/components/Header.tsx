import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

interface NavigationItem {
  name: string;
  path: string;
}

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMortgagesOpen, setIsMortgagesOpen] = useState(false);
  const [isInsuranceOpen, setIsInsuranceOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMortgagesOpen, setIsMobileMortgagesOpen] = useState(false);
  const [isMobileInsuranceOpen, setIsMobileInsuranceOpen] = useState(false);
  const mortgagesDropdownRef = useRef<HTMLLIElement>(null);
  const insuranceDropdownRef = useRef<HTMLLIElement>(null);

  const mortgages: NavigationItem[] = [
    { name: "First Time Buyers", path: "/mortgages/first-time-buyers" },
    { name: "Home Mover", path: "/mortgages/home-mover" },
    { name: "Remortgage", path: "/mortgages/remortgage" },
    { name: "Buy to Let", path: "/mortgages/buy-to-let" },
    { name: "New Build", path: "/mortgages/new-build" },
    { name: "Help to Buy", path: "/mortgages/help-to-buy" },
    { name: "Limited Companies", path: "/mortgages/limited-companies" },
    { name: "Bridging Loans", path: "/mortgages/bridging-loans" },
  ];

  const insurance: NavigationItem[] = [
    { name: "Life Insurance", path: "/insurance/life-insurance" },
    { name: "Income Protection", path: "/insurance/income-protection" },
    { name: "Critical Illness", path: "/insurance/critical-illness" },
    {
      name: "Accident, Sickness & Unemployment",
      path: "/insurance/accident-sickness-unemployment",
    },
    {
      name: "Home, Buildings & Contents Insurance",
      path: "/insurance/home-buildings-contents",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mortgagesDropdownRef.current &&
        !mortgagesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsMortgagesOpen(false);
      }
      if (
        insuranceDropdownRef.current &&
        !insuranceDropdownRef.current.contains(event.target as Node)
      ) {
        setIsInsuranceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Enhanced keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMortgagesOpen(false);
        setIsInsuranceOpen(false);
        setIsMobileMenuOpen(false);
        setIsMobileMortgagesOpen(false);
        setIsMobileInsuranceOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMortgages = () => {
    setIsMortgagesOpen(!isMortgagesOpen);
    setIsInsuranceOpen(false);
  };

  const toggleInsurance = () => {
    setIsInsuranceOpen(!isInsuranceOpen);
    setIsMortgagesOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close dropdowns when toggling mobile menu
    if (!isMobileMenuOpen) {
      setIsMobileMortgagesOpen(false);
      setIsMobileInsuranceOpen(false);
    }
  };

  const toggleMobileMortgages = () => {
    setIsMobileMortgagesOpen(!isMobileMortgagesOpen);
  };

  const toggleMobileInsurance = () => {
    setIsMobileInsuranceOpen(!isMobileInsuranceOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileMortgagesOpen(false);
    setIsMobileInsuranceOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    closeMobileMenu();
  };

  const isMortgagesActive = location.pathname.startsWith("/mortgages");
  const isInsuranceActive = location.pathname.startsWith("/insurance");

  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo Text */}
          <Link
            to="/"
            className={styles.logo}
            onClick={handleLogoClick}
            aria-label="Noble Mortgages - Home"
          >
            <h1 className={styles.logoText}>Noble Mortgages</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={styles.nav}
            role="navigation"
            aria-label="Main navigation"
          >
            <ul className={styles.navList}>
              <li>
                <Link
                  to="/"
                  className={
                    location.pathname === "/"
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                  aria-current={location.pathname === "/" ? "page" : undefined}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className={
                    location.pathname === "/about"
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                  aria-current={
                    location.pathname === "/about" ? "page" : undefined
                  }
                >
                  About
                </Link>
              </li>

              {/* Mortgages Dropdown */}
              <li className={styles.dropdown} ref={mortgagesDropdownRef}>
                <button
                  className={`${styles.dropdownToggle} ${
                    isMortgagesActive ? styles.active : ""
                  }`}
                  onClick={toggleMortgages}
                  aria-expanded={isMortgagesOpen}
                  aria-haspopup="true"
                  aria-label="Mortgages menu"
                >
                  Mortgages
                  <span
                    className={`${styles.dropdownArrow} ${
                      isMortgagesOpen ? styles.open : ""
                    }`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </button>

                <ul
                  className={`${styles.dropdownMenu} ${
                    isMortgagesOpen ? styles.dropdownMenuOpen : ""
                  }`}
                  role="menu"
                  aria-labelledby="mortgages-dropdown"
                >
                  <div className={styles.dropdownContent}>
                    {mortgages.map((mortgage) => (
                      <li key={mortgage.path}>
                        <Link
                          to={mortgage.path}
                          className={styles.dropdownLink}
                          role="menuitem"
                          onClick={() => setIsMortgagesOpen(false)}
                          tabIndex={isMortgagesOpen ? 0 : -1}
                        >
                          <div className={styles.itemContent}>
                            <span className={styles.itemName}>
                              {mortgage.name}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </li>

              {/* Insurance Dropdown */}
              <li className={styles.dropdown} ref={insuranceDropdownRef}>
                <button
                  className={`${styles.dropdownToggle} ${
                    isInsuranceActive ? styles.active : ""
                  }`}
                  onClick={toggleInsurance}
                  aria-expanded={isInsuranceOpen}
                  aria-haspopup="true"
                  aria-label="Insurance menu"
                >
                  Insurance
                  <span
                    className={`${styles.dropdownArrow} ${
                      isInsuranceOpen ? styles.open : ""
                    }`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </button>

                <ul
                  className={`${styles.dropdownMenu} ${
                    isInsuranceOpen ? styles.dropdownMenuOpen : ""
                  }`}
                  role="menu"
                  aria-labelledby="insurance-dropdown"
                >
                  <div className={styles.dropdownContent}>
                    {insurance.map((insuranceItem) => (
                      <li key={insuranceItem.path}>
                        <Link
                          to={insuranceItem.path}
                          className={styles.dropdownLink}
                          role="menuitem"
                          onClick={() => setIsInsuranceOpen(false)}
                          tabIndex={isInsuranceOpen ? 0 : -1}
                        >
                          <div className={styles.itemContent}>
                            <span className={styles.itemName}>
                              {insuranceItem.name}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </li>

              <li>
                <Link
                  to="/mortgage-calculator"
                  className={
                    location.pathname === "/mortgage-calculator"
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                  aria-current={
                    location.pathname === "/mortgage-calculator"
                      ? "page"
                      : undefined
                  }
                >
                  Calculator
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className={
                    location.pathname === "/contact"
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                  aria-current={
                    location.pathname === "/contact" ? "page" : undefined
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <span className={styles.hamburgerIcon} aria-hidden="true">
              {isMobileMenuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
        id="mobile-nav-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-nav-title"
      >
        <div className={styles.mobileHeader}>
          <Link
            to="/"
            className={styles.logo}
            onClick={handleLogoClick}
            aria-label="Noble Mortgages - Home"
          >
            <h2 className={styles.logoText}>Noble Mortgages</h2>
          </Link>
          <button
            onClick={closeMobileMenu}
            className={styles.mobileCloseBtn}
            aria-label="Close navigation menu"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <nav
          className={styles.mobileNav}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul className={styles.mobileNavList}>
            <li>
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? `${styles.mobileNavLink} ${styles.active}`
                    : styles.mobileNavLink
                }
                onClick={closeMobileMenu}
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={
                  location.pathname === "/about"
                    ? `${styles.mobileNavLink} ${styles.active}`
                    : styles.mobileNavLink
                }
                onClick={closeMobileMenu}
                aria-current={
                  location.pathname === "/about" ? "page" : undefined
                }
              >
                About
              </Link>
            </li>

            {/* Mobile Mortgages Dropdown */}
            <li>
              <button
                className={styles.mobileDropdownToggle}
                onClick={toggleMobileMortgages}
                aria-expanded={isMobileMortgagesOpen}
                aria-controls="mobile-mortgages-menu"
              >
                Mortgages
                <span aria-hidden="true">
                  {isMobileMortgagesOpen ? "▲" : "▼"}
                </span>
              </button>

              <ul
                className={`${styles.mobileSubMenu} ${
                  isMobileMortgagesOpen ? styles.mobileSubMenuOpen : ""
                }`}
                id="mobile-mortgages-menu"
              >
                {mortgages.map((mortgage) => (
                  <li key={mortgage.path}>
                    <Link
                      to={mortgage.path}
                      className={styles.mobileSubLink}
                      onClick={closeMobileMenu}
                    >
                      {mortgage.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Mobile Insurance Dropdown */}
            <li>
              <button
                className={styles.mobileDropdownToggle}
                onClick={toggleMobileInsurance}
                aria-expanded={isMobileInsuranceOpen}
                aria-controls="mobile-insurance-menu"
              >
                Insurance
                <span aria-hidden="true">
                  {isMobileInsuranceOpen ? "▲" : "▼"}
                </span>
              </button>

              <ul
                className={`${styles.mobileSubMenu} ${
                  isMobileInsuranceOpen ? styles.mobileSubMenuOpen : ""
                }`}
                id="mobile-insurance-menu"
              >
                {insurance.map((insuranceItem) => (
                  <li key={insuranceItem.path}>
                    <Link
                      to={insuranceItem.path}
                      className={styles.mobileSubLink}
                      onClick={closeMobileMenu}
                    >
                      {insuranceItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link
                to="/mortgage-calculator"
                className={
                  location.pathname === "/mortgage-calculator"
                    ? `${styles.mobileNavLink} ${styles.active}`
                    : styles.mobileNavLink
                }
                onClick={closeMobileMenu}
                aria-current={
                  location.pathname === "/mortgage-calculator"
                    ? "page"
                    : undefined
                }
              >
                Calculator
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? `${styles.mobileNavLink} ${styles.active}`
                    : styles.mobileNavLink
                }
                onClick={closeMobileMenu}
                aria-current={
                  location.pathname === "/contact" ? "page" : undefined
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
