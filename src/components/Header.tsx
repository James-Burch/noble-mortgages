import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close mobile menu and dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(`.${styles.nav}`) &&
        !target.closest(`.${styles.mobileMenuToggle}`)
      ) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    console.log(
      "Toggling dropdown:",
      dropdown,
      "Current active:",
      activeDropdown
    );
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <Link
            to="/"
            className={styles.logo}
            aria-label="Noble Mortgages - Home"
          >
            <h1 className={styles.logoText}>Noble Mortgages</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav} aria-label="Main navigation">
            <ul className={styles.navList}>
              <li>
                <Link to="/" className={styles.navLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.navLink}>
                  About
                </Link>
              </li>

              {/* Mortgages Dropdown */}
              <li
                className={styles.dropdown}
                onMouseEnter={() => setActiveDropdown("mortgages")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`${styles.navLink} ${styles.dropdownToggle}`}
                  onClick={() => toggleDropdown("mortgages")}
                  onKeyDown={(e) =>
                    handleKeyDown(e, () => toggleDropdown("mortgages"))
                  }
                  aria-expanded={activeDropdown === "mortgages"}
                  aria-haspopup="true"
                >
                  Mortgages
                  <span className={styles.dropdownArrow} aria-hidden="true">
                    ▼
                  </span>
                </button>
                <ul
                  className={`${styles.dropdownMenu} ${
                    activeDropdown === "mortgages"
                      ? styles.dropdownMenuOpen
                      : ""
                  }`}
                  role="menu"
                >
                  <li>
                    <Link
                      to="/mortgages"
                      className={styles.dropdownLink}
                      role="menuitem"
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/first-time-buyers"
                      className={styles.dropdownLink}
                      role="menuitem"
                    >
                      First Time Buyers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/home-mover"
                      className={styles.dropdownLink}
                      role="menuitem"
                    >
                      Home Mover
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/remortgage"
                      className={styles.dropdownLink}
                      role="menuitem"
                    >
                      Remortgage
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/buy-to-let"
                      className={styles.dropdownLink}
                      role="menuitem"
                    >
                      Buy to Let
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/new-build"
                      className={styles.dropdownLink}
                      role="menuitem"
                    >
                      New Build
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/help-to-buy"
                      className={styles.dropdownLink}
                      role="menuitem"
                    >
                      Help to Buy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/limited-companies"
                      className={styles.dropdownLink}
                      role="menuitem"
                    >
                      Limited Companies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/bridging-loans"
                      className={styles.dropdownLink}
                      role="menuitem"
                    >
                      Bridging Loans
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Insurance Dropdown */}
              <li
                className={styles.dropdown}
                onMouseEnter={() => setActiveDropdown("insurance")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`${styles.navLink} ${styles.dropdownToggle}`}
                  onClick={() => toggleDropdown("insurance")}
                  onKeyDown={(e) =>
                    handleKeyDown(e, () => toggleDropdown("insurance"))
                  }
                  aria-expanded={activeDropdown === "insurance"}
                  aria-haspopup="true"
                >
                  Insurance
                  <span className={styles.dropdownArrow} aria-hidden="true">
                    ▼
                  </span>
                </button>
                <ul
                  className={`${styles.dropdownMenu} ${
                    activeDropdown === "insurance"
                      ? styles.dropdownMenuOpen
                      : ""
                  }`}
                  role="menu"
                >
                  <li>
                    <Link
                      to="/insurance"
                      className={styles.dropdownLink}
                      role="menuitem"
                    >
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/insurance/life-insurance"
                      className={styles.dropdownLink}
                      role="menuitem"
                    >
                      Life Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/insurance/income-protection"
                      className={styles.dropdownLink}
                      role="menuitem"
                    >
                      Income Protection
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/insurance/critical-illness"
                      className={styles.dropdownLink}
                      role="menuitem"
                    >
                      Critical Illness
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/insurance/accident-sickness-unemployment"
                      className={styles.dropdownLink}
                      role="menuitem"
                    >
                      Accident, Sickness & Unemployment
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/insurance/home-buildings-contents"
                      className={styles.dropdownLink}
                      role="menuitem"
                    >
                      Home, Buildings & Contents Insurance
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/calculators" className={styles.navLink}>
                  Calculators
                </Link>
              </li>
              <li>
                <Link to="/faqs" className={styles.navLink}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.navLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            onKeyDown={(e) => handleKeyDown(e, toggleMobileMenu)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <nav className={styles.mobileNav} aria-label="Mobile navigation">
            <ul className={styles.mobileNavList}>
              <li>
                <Link to="/" className={styles.mobileNavLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.mobileNavLink}>
                  About
                </Link>
              </li>

              {/* Mobile Mortgages Section */}
              <li>
                <button
                  className={`${styles.mobileNavLink} ${styles.mobileDropdownToggle}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDropdown("mortgages-mobile");
                  }}
                  aria-expanded={activeDropdown === "mortgages-mobile"}
                  type="button"
                >
                  Mortgages
                  <span className={styles.dropdownArrow} aria-hidden="true">
                    {activeDropdown === "mortgages-mobile" ? "▲" : "▼"}
                  </span>
                </button>
                <ul
                  className={`${styles.mobileSubMenu} ${
                    activeDropdown === "mortgages-mobile"
                      ? styles.mobileSubMenuOpen
                      : ""
                  }`}
                >
                  <li>
                    <Link to="/mortgages" className={styles.mobileSubLink}>
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/first-time-buyers"
                      className={styles.mobileSubLink}
                    >
                      First Time Buyers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/home-mover"
                      className={styles.mobileSubLink}
                    >
                      Home Mover
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/remortgage"
                      className={styles.mobileSubLink}
                    >
                      Remortgage
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/buy-to-let"
                      className={styles.mobileSubLink}
                    >
                      Buy to Let
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/new-build"
                      className={styles.mobileSubLink}
                    >
                      New Build
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/help-to-buy"
                      className={styles.mobileSubLink}
                    >
                      Help to Buy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/limited-companies"
                      className={styles.mobileSubLink}
                    >
                      Limited Companies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/mortgages/bridging-loans"
                      className={styles.mobileSubLink}
                    >
                      Bridging Loans
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Mobile Insurance Section */}
              <li>
                <button
                  className={`${styles.mobileNavLink} ${styles.mobileDropdownToggle}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDropdown("insurance-mobile");
                  }}
                  aria-expanded={activeDropdown === "insurance-mobile"}
                  type="button"
                >
                  Insurance
                  <span className={styles.dropdownArrow} aria-hidden="true">
                    {activeDropdown === "insurance-mobile" ? "▲" : "▼"}
                  </span>
                </button>
                <ul
                  className={`${styles.mobileSubMenu} ${
                    activeDropdown === "insurance-mobile"
                      ? styles.mobileSubMenuOpen
                      : ""
                  }`}
                >
                  <li>
                    <Link to="/insurance" className={styles.mobileSubLink}>
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/insurance/life-insurance"
                      className={styles.mobileSubLink}
                    >
                      Life Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/insurance/income-protection"
                      className={styles.mobileSubLink}
                    >
                      Income Protection
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/insurance/critical-illness"
                      className={styles.mobileSubLink}
                    >
                      Critical Illness
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/insurance/accident-sickness-unemployment"
                      className={styles.mobileSubLink}
                    >
                      Accident, Sickness & Unemployment
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/insurance/home-buildings-contents"
                      className={styles.mobileSubLink}
                    >
                      Home, Buildings & Contents Insurance
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/calculators" className={styles.mobileNavLink}>
                  Calculators
                </Link>
              </li>
              <li>
                <Link to="/faqs" className={styles.mobileNavLink}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.mobileNavLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
