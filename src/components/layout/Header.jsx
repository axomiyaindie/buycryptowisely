import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { COLORS, SPACING, BORDER_RADIUS, FONTS, ANIMATIONS } from '../../utils/constants';
import { TABS } from '../../data/content';

export const Header = ({ activeTabIndex, language, onLanguageToggle, translations }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavigation = (tab) => {
    navigate(tab.path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter out the Home tab (index 0) - keep all other tabs
  const navTabs = TABS.filter(tab => tab.index !== 0);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: isScrolled ? COLORS.bg + "F2" : COLORS.bg,
        borderBottom: `1px solid ${isScrolled ? COLORS.border : "transparent"}`,
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        transition: `all ${ANIMATIONS.normal}`,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: `0 ${SPACING.lg}px`,
          gap: SPACING.md,
        }}
      >
        {/* Logo Section - Links to Home */}
        <div
          onClick={() => handleNavigation(TABS[0])}
          style={{
            display: "flex",
            alignItems: "center",
            gap: SPACING.sm,
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: BORDER_RADIUS.md,
              background: COLORS.primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: 18,
              fontFamily: FONTS.mono,
            }}
          >
            ₿
          </div>
          <span
            className="logo-text"
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: COLORS.text,
              letterSpacing: "-0.01em",
            }}
          >
            BuyCryptoWisely
          </span>
        </div>

        {/* Desktop Navigation - No Home tab */}
        <nav
          style={{
            display: "flex",
            gap: SPACING.xs,
            backgroundColor: COLORS.bgCard,
            borderRadius: BORDER_RADIUS.xl,
            padding: `${SPACING.xs}px`,
            border: `1px solid ${COLORS.border}`,
          }}
        >
          {navTabs.map((tab) => {
            const label = translations[tab.desktopKey];
            const isActive = activeTabIndex === tab.index;
            return (
              <button
                key={tab.index}
                onClick={() => handleNavigation(tab)}
                className="desk-nav-item"
                style={{
                  background: isActive ? COLORS.primary : "transparent",
                  color: isActive ? "#FFFFFF" : COLORS.textSec,
                  borderRadius: BORDER_RADIUS.lg,
                  padding: `${SPACING.sm}px ${SPACING.lg}px`,
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 500,
                  transition: `all ${ANIMATIONS.fast}`,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </button>
            );
          })}
        </nav>

        {/* Right Section - Language Toggle & Mobile Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: SPACING.sm,
            flexShrink: 0,
          }}
        >
          {/* Language Toggle */}
          <div
            style={{
              display: "flex",
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              borderRadius: BORDER_RADIUS.xl,
              overflow: "hidden",
            }}
          >
            {["en", "as"].map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageToggle(lang)}
                style={{
                  background: language === lang ? COLORS.primary : "transparent",
                  color: language === lang ? "#FFFFFF" : COLORS.textSec,
                  padding: `${SPACING.sm}px ${SPACING.md}px`,
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: FONTS.mono,
                  transition: `all ${ANIMATIONS.fast}`,
                  minWidth: 46,
                  cursor: "pointer",
                }}
              >
                {lang === "en" ? "EN" : "অ"}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hamburger"
            style={{
              flexDirection: "column",
              gap: 6,
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              borderRadius: BORDER_RADIUS.md,
              padding: `${SPACING.sm}px ${SPACING.md}px`,
              cursor: "pointer",
            }}
          >
            <span
              style={{
                display: "block",
                width: 20,
                height: 2,
                borderRadius: 2,
                background: isMobileMenuOpen ? COLORS.primary : COLORS.text,
                transition: `all ${ANIMATIONS.fast}`,
              }}
            />
            <span
              style={{
                display: "block",
                width: 14,
                height: 2,
                borderRadius: 2,
                background: isMobileMenuOpen ? COLORS.primary : COLORS.textSec,
                transition: `all ${ANIMATIONS.fast}`,
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu - No Home tab */}
      {isMobileMenuOpen && (
        <div
          style={{
            background: COLORS.bgCard,
            borderTop: `1px solid ${COLORS.border}`,
            borderBottom: `1px solid ${COLORS.border}`,
            position: "absolute",
            top: 72,
            left: 0,
            right: 0,
            zIndex: 99,
          }}
        >
          {navTabs.map((tab) => {
            const isActive = activeTabIndex === tab.index;
            const label = translations[tab.desktopKey];
            return (
              <button
                key={tab.index}
                onClick={() => handleNavigation(tab)}
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: `${SPACING.md}px ${SPACING.lg}px`,
                  background: isActive ? COLORS.primary + "10" : "transparent",
                  color: isActive ? COLORS.primary : COLORS.text,
                  borderBottom:
                    tab.index < navTabs.length - 1
                      ? `1px solid ${COLORS.border}`
                      : "none",
                  fontSize: 16,
                  fontWeight: isActive ? 600 : 400,
                  cursor: "pointer",
                  transition: `background ${ANIMATIONS.fast}`,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = COLORS.bgHover;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                <span>
                  {tab.icon} {label}
                </span>
                {isActive && (
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: COLORS.primary,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};