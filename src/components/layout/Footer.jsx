import { COLORS, SPACING, FONTS } from '../../utils/constants';

export const Footer = ({ translations }) => {
  const currentYear = new Date().getFullYear();

  const linkSections = [
    {
      title: "Exchanges",
      links: [
        ["CoinSwitch", "https://coinswitch.co"],
        ["Binance", "https://binance.com"],
        ["Coinbase", "https://coinbase.com"],
      ],
    },
    {
      title: "Wallets",
      links: [
        ["Trust Wallet", "https://trustwallet.com"],
        ["MetaMask", "https://metamask.io"],
        ["Phantom", "https://phantom.app"],
      ],
    },
    {
      title: "Research",
      links: [
        ["CoinGecko", "https://coingecko.com"],
        ["DexScreener", "https://dexscreener.com"],
        ["TradingView", "https://tradingview.com"],
      ],
    },
  ];

  return (
    <footer
      style={{
        borderTop: `1px solid ${COLORS.border}`,
        background: COLORS.bgCard,
        padding: `${SPACING.xl}px ${SPACING.md}px ${SPACING.xxxl}px`,
        marginTop: "auto",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: SPACING.xl,
            marginBottom: SPACING.xl,
          }}
        >
          {/* Brand & Call to Action Section */}
          <div style={{ display: "flex", flexDirection: "column", gap: SPACING.sm }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: SPACING.sm,
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: COLORS.primary,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: 13,
                  fontFamily: FONTS.mono,
                }}
              >
                ₿
              </div>
              <span style={{ fontWeight: 600, fontSize: 14, color: COLORS.text }}>
                BuyCryptoWisely
              </span>
            </div>

            <p
              style={{
                color: COLORS.textSec,
                fontSize: 13,
                lineHeight: 1.6,
                maxWidth: 240,
                margin: 0,
              }}
            >
              <strong>Crypto Simplified: Free Guides for India.</strong> No confusion. No hidden agendas. Just honest, clear crypto blueprints.
            </p>
          </div>

          {/* Link Sections */}
          {linkSections.map((section, idx) => (
            <div key={idx}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: COLORS.textSec,
                  marginBottom: SPACING.sm,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {section.title}
              </div>
              {section.links.map(([label, url], linkIdx) => (
                <a
                  key={linkIdx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    color: COLORS.textSec,
                    fontSize: 13,
                    marginBottom: SPACING.xs,
                    transition: "color 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = COLORS.primary)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = COLORS.textSec)
                  }
                >
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: `1px solid ${COLORS.border}`,
            paddingTop: SPACING.lg,
            display: "flex",
            flexWrap: "wrap",
            gap: SPACING.md,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: COLORS.textMuted,
              fontSize: 12,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            © {currentYear} BuyCryptoWisely. {translations?.allRightsReserved || "All rights reserved."}
          </p>
          <span
            style={{
              color: COLORS.textMuted,
              fontSize: 11,
              fontFamily: FONTS.mono,
            }}
          >
            Prices via CoinGecko API
          </span>
        </div>
      </div>
    </footer>
  );
};