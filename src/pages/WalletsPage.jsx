import { useState } from 'react';
import { COLORS, SPACING, BORDER_RADIUS, FONTS } from '../utils/constants';
import { SectionHeader } from '../components/layout/Section';
import { SearchInput } from '../components/common/SearchInput';
import { Badge } from '../components/common/Badge';

export const WalletsPage = ({ translations }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWallets = translations.wallets?.filter((wallet) =>
    wallet.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: `${SPACING.xxl}px ${SPACING.md}px` }}>
      <SectionHeader
        title={translations.wallH2}
        subtitle={translations.wallSub}
      />
      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search wallets..."
      />
      <div
        style={{
          marginTop: SPACING.lg,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: SPACING.md,
        }}
      >
        {filteredWallets.map((wallet, index) => (
          <div
            key={index}
            style={{
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              borderRadius: BORDER_RADIUS.lg,
              padding: SPACING.lg,
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = COLORS.primary + "40")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = COLORS.border)
            }
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: SPACING.md,
              }}
            >
              <span style={{ fontSize: 32 }}>{wallet.icon}</span>
              <Badge variant={wallet.risk === "Low" ? "success" : wallet.risk === "Medium" ? "warning" : "error"}>
                {wallet.risk}
              </Badge>
            </div>
            <h3
              style={{
                fontWeight: 700,
                fontSize: 17,
                color: COLORS.text,
                marginBottom: SPACING.md,
              }}
            >
              {wallet.name}
            </h3>
            {wallet.pros?.map((pro, idx) => (
              <div key={idx} style={{ display: "flex", gap: SPACING.sm, marginBottom: SPACING.xs }}>
                <span style={{ color: COLORS.green, flexShrink: 0 }}>✓</span>
                <span style={{ color: COLORS.textSec, fontSize: 13, lineHeight: 1.5 }}>
                  {pro}
                </span>
              </div>
            ))}
            {wallet.cons?.map((con, idx) => (
              <div key={idx} style={{ display: "flex", gap: SPACING.sm, marginBottom: SPACING.xs }}>
                <span style={{ color: COLORS.red, flexShrink: 0 }}>✗</span>
                <span style={{ color: COLORS.textSec, fontSize: 13, lineHeight: 1.5 }}>
                  {con}
                </span>
              </div>
            ))}
            <div
              style={{
                marginTop: SPACING.md,
                paddingTop: SPACING.sm,
                borderTop: `1px solid ${COLORS.border}`,
                fontFamily: FONTS.mono,
                fontSize: 11,
                color: COLORS.textMuted,
              }}
            >
              {wallet.examples}
            </div>
          </div>
        ))}
      </div>

      {/* Glossary Section */}
      {translations.terms && translations.terms.length > 0 && (
        <div style={{ marginTop: SPACING.xxxl }}>
          <SectionHeader title={translations.glossaryTitle} />
          <div
            style={{
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              borderRadius: BORDER_RADIUS.lg,
              overflow: "hidden",
            }}
          >
            {translations.terms.map(([term, definition], idx) => (
              <div
                key={idx}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(110px, 170px) 1fr",
                  gap: SPACING.md,
                  padding: `${SPACING.sm}px ${SPACING.lg}px`,
                  borderBottom:
                    idx < translations.terms.length - 1
                      ? `1px solid ${COLORS.border}`
                      : "none",
                  background: idx % 2 === 1 ? COLORS.bg + "50" : "transparent",
                }}
              >
                <span
                  style={{
                    color: COLORS.primary,
                    fontWeight: 600,
                    fontSize: 13,
                    fontFamily: FONTS.mono,
                  }}
                >
                  {term}
                </span>
                <span style={{ color: COLORS.textSec, fontSize: 13, lineHeight: 1.6 }}>
                  {definition}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};