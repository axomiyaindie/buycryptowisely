import { useNavigate } from 'react-router-dom';
import { COLORS, SPACING, BORDER_RADIUS } from '../utils/constants';
import { Badge } from '../components/common/Badge';
import { ButtonPrimary, ButtonSecondary } from '../components/common/Button';
import { StatsSection } from '../components/common/StatsSection';
import { FeatureGrid } from '../components/common/FeatureGrid';
import { FAQSection } from '../components/common/FAQSection';
import { Premium3DCard } from '../components/common/Premium3DCard';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { usePerformanceMode } from '../components/common/PerformanceMonitor';
import { TABS, COINS_META } from '../data/content';
import { formatUSD, formatINR } from '../utils/formatters';
import { useLivePrices } from '../hooks/useLivePrices';

export const HomePage = ({ translations }) => {
  const navigate = useNavigate();
  const { prices, status } = useLivePrices();
  const { disableEffects } = usePerformanceMode();
  const topCoins = COINS_META.slice(0, 8);

  // Stats - Using translations
  const stats = [
    { value: "50+", label: translations.guidesStat || "Guides" },
    { value: "100+", label: translations.topicsStat || "Topics Covered" },
    { value: "2", label: translations.languagesStat || "Languages" },
    { value: "₹50", label: translations.startStat || "Start with" },
  ];

  // Features - Using translations
  const features = [
    {
      icon: "📚",
      title: translations.feature1Title || "Free Educational Content",
      description: translations.feature1Desc || "Completely free guides to help you understand cryptocurrency. No hidden fees, no paid courses.",
    },
    {
      icon: "🌐",
      title: translations.feature2Title || "Bilingual Learning",
      description: translations.feature2Desc || "Full support for English and Assamese. Learn crypto in your preferred language.",
    },
    {
      icon: "🎯",
      title: translations.feature3Title || "Beginner Friendly",
      description: translations.feature3Desc || "Start from absolute zero. Step-by-step guides designed for complete beginners.",
    },
    {
      icon: "🛡️",
      title: translations.feature4Title || "Safety First Education",
      description: translations.feature4Desc || "Learn how to protect yourself from scams, rug pulls, and common crypto risks.",
    },
  ];

  const heroStyle = {
    position: "relative",
    overflow: "hidden",
    padding: `clamp(80px, 12vw, 140px) ${SPACING.md}px clamp(60px, 8vw, 100px)`,
    textAlign: "center",
    background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${COLORS.primary}08 0%, transparent 70%)`,
  };

  const cardStyle = {
    background: COLORS.bgCard,
    border: `1px solid ${COLORS.border}`,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    cursor: "pointer",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: SPACING.md,
  };

  return (
    <div>
      {/* Hero Section with Scroll Reveal */}
      <ScrollReveal>
        <div style={heroStyle}>
          <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <Badge>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span>📖</span> {translations.heroBadge || "India's Free Crypto Education Platform"}
              </span>
            </Badge>

            <h1
              style={{
                fontSize: "clamp(44px, 9vw, 84px)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.03em",
                marginTop: SPACING.xl,
                marginBottom: SPACING.md,
                color: COLORS.text,
              }}
            >
              {translations.heroHeading1 || "Your Complete"}
              <br />
              <span style={{ color: COLORS.primary }}>
                {translations.heroHeading2 || "Crypto Guide"}
              </span>
              <br />
              {translations.heroHeading3 || "from Zero to Hero"}
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 2.5vw, 18px)",
                color: COLORS.textSec,
                maxWidth: 650,
                margin: `0 auto ${SPACING.xl}px`,
                lineHeight: 1.6,
              }}
            >
              {translations.heroSubheading || "From ₹50 to self-custody — everything you need to know, in one place. Learn about Bitcoin, DeFi, and how to stay safe."}
            </p>

            <div
              style={{
                display: "flex",
                gap: SPACING.md,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <ButtonPrimary
                onClick={() => navigate("/beginners")}
                style={{
                  padding: `${SPACING.md}px ${SPACING.xl}px`,
                  fontSize: 16,
                  fontWeight: 600,
                  borderRadius: BORDER_RADIUS.xl,
                }}
              >
                {translations.heroCta1Full || "Start Learning Free"} →
              </ButtonPrimary>
              <ButtonSecondary
                onClick={() => navigate("/tools")}
                style={{
                  padding: `${SPACING.md}px ${SPACING.xl}px`,
                  fontSize: 16,
                  fontWeight: 500,
                  borderRadius: BORDER_RADIUS.xl,
                }}
              >
                {translations.heroCta2Full || "Explore Tools"}
              </ButtonSecondary>
            </div>

            {/* Trust Indicators */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: SPACING.xl,
                marginTop: SPACING.xxxl,
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: SPACING.sm }}>
                <span style={{ fontSize: 20 }}>📚</span>
                <span style={{ fontSize: 13, color: COLORS.textSec }}>{translations.trust1 || "Free Guides"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: SPACING.sm }}>
                <span style={{ fontSize: 20 }}>🌐</span>
                <span style={{ fontSize: 13, color: COLORS.textSec }}>{translations.trust2 || "Bilingual"}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: SPACING.sm }}>
                <span style={{ fontSize: 20 }}>🛡️</span>
                <span style={{ fontSize: 13, color: COLORS.textSec }}>{translations.trust3 || "Safety Education"}</span>
              </div>
            </div>
          </div>

          <StatsSection stats={stats} />
        </div>
      </ScrollReveal>

      {/* Price Cards Section with Conditional 3D Effect */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: `${SPACING.xxl}px ${SPACING.md}px` }}>
        <div style={{ textAlign: "center", marginBottom: SPACING.xl }}>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, color: COLORS.text }}>
            {translations.priceSectionTitle || "Cryptocurrency Reference Prices"}
          </h2>
          <p style={{ fontSize: 16, color: COLORS.textSec, marginTop: SPACING.sm }}>
            {translations.priceSectionSub || "Real-time market data for educational purposes"}
          </p>
        </div>

        <div style={gridStyle}>
          {topCoins.map((coin) => {
            const price = prices[coin.id];
            const isPositive = (price?.change || 0) >= 0;
            const changeValue = Math.abs(price?.change || 0).toFixed(2);

            const cardContent = (
              <div
                className="trust-card"
                style={cardStyle}
                onClick={() => window.open(`https://coingecko.com/en/coins/${coin.id}`, "_blank")}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: SPACING.sm,
                    marginBottom: SPACING.md,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: coin.color + "20",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: coin.color,
                      fontSize: 18,
                      fontWeight: 700,
                    }}
                  >
                    {coin.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 16, color: COLORS.text }}>
                      {coin.sym}
                    </div>
                    <div style={{ fontSize: 12, color: COLORS.textSec }}>
                      {coin.name}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: COLORS.text,
                    marginBottom: SPACING.xs,
                  }}
                >
                  {formatUSD(price?.usd || 0)}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: COLORS.textSec,
                    marginBottom: SPACING.xs,
                  }}
                >
                  {formatINR(price?.inr || 0)}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: isPositive ? COLORS.green : COLORS.red,
                  }}
                >
                  {isPositive ? "▲" : "▼"} {changeValue}%
                </div>
              </div>
            );

            return disableEffects ? (
              <div key={coin.id}>{cardContent}</div>
            ) : (
              <Premium3DCard key={coin.id}>{cardContent}</Premium3DCard>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <ScrollReveal delay={0.1}>
        <div
          style={{
            background: COLORS.trustBg,
            padding: `${SPACING.xxxl}px ${SPACING.md}px`,
            marginTop: SPACING.xxl,
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, color: COLORS.text }}>
              {translations.whyChooseTitle || "Why Choose BuyCryptoWisely"}
            </h2>
            <p style={{ fontSize: 16, color: COLORS.textSec, maxWidth: 600, margin: `${SPACING.md}px auto ${SPACING.xl}px` }}>
              {translations.whyChooseSub || "Pure education. No exchange. No trading. Just knowledge."}
            </p>
            <FeatureGrid features={features} />
          </div>
        </div>
      </ScrollReveal>

      {/* Quick Navigation Cards - Explore Crypto Guides */}
      <ScrollReveal delay={0.2}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: `${SPACING.xxxl}px ${SPACING.md}px ${SPACING.xl}px`,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: SPACING.xl }}>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, color: COLORS.text }}>
              {translations.exploreTitle || "Explore Crypto Guides"}
            </h2>
            <p style={{ fontSize: 16, color: COLORS.textSec, marginTop: SPACING.sm }}>
              {translations.exploreSub || "Step-by-step guides for every crypto journey"}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: SPACING.md,
            }}
          >
            {TABS.slice(1).map((tab) => (
              <div
                key={tab.index}
                onClick={() => {
                  navigate(tab.path);
                  window.scrollTo({ top: 0 });
                }}
                className="trust-card"
                style={{
                  background: COLORS.bgCard,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: BORDER_RADIUS.lg,
                  padding: `${SPACING.xl}px ${SPACING.md}px`,
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 40, marginBottom: SPACING.md }}>{tab.icon}</div>
                <div style={{ fontWeight: 600, fontSize: 16, color: COLORS.text }}>
                  {translations[tab.desktopKey]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal delay={0.3}>
        <div style={{ marginBottom: SPACING.xxl }}>
          <FAQSection translations={translations} />
        </div>
      </ScrollReveal>
    </div>
  );
};