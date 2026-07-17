import { useState } from 'react';
import { COLORS, SPACING, BORDER_RADIUS } from '../utils/constants';
import { SectionHeader } from '../components/layout/Section';
import { SearchInput } from '../components/common/SearchInput';

export const SafetyPage = ({ translations }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRules = translations.safeRules?.filter((rule) =>
    rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    rule.body.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: `${SPACING.xxl}px ${SPACING.md}px` }}>
      <SectionHeader
        badge="Read carefully"
        title={translations.safeH2}
        subtitle={translations.safeSub}
      />

      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search safety topics..."
      />

      <div
        style={{
          marginTop: SPACING.lg,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: SPACING.md,
        }}
      >
        {filteredRules.map((rule, idx) => (
          <div
            key={idx}
            style={{
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              borderRadius: BORDER_RADIUS.lg,
              padding: `${SPACING.lg}px ${SPACING.lg}px`,
              display: "flex",
              gap: SPACING.md,
            }}
          >
            <span style={{ fontSize: 24, flexShrink: 0 }}>{rule.icon}</span>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  color: COLORS.text,
                  marginBottom: SPACING.xs,
                }}
              >
                {rule.title}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: COLORS.textSec,
                  lineHeight: 1.6,
                }}
              >
                {rule.body}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leverage Warning */}
      <div
        style={{
          marginTop: SPACING.xl,
          background: COLORS.red + "0c",
          border: `1px solid ${COLORS.red}35`,
          borderRadius: BORDER_RADIUS.lg,
          padding: `${SPACING.xl}px ${SPACING.xl}px`,
        }}
      >
        <h3
          style={{
            color: COLORS.red,
            fontWeight: 700,
            fontSize: 18,
            marginBottom: SPACING.sm,
          }}
        >
          ⚠️ Leverage Trading — Do Not Touch
        </h3>
        <p
          style={{
            color: COLORS.textSec,
            fontSize: 14,
            lineHeight: 1.7,
            maxWidth: 620,
          }}
        >
          Binance Futures, CoinDCX Futures, and any leveraged product with 5x–20x multiplies both gains and losses.
          A 10x position is liquidated — wiping your entire investment — from a mere 10% adverse move.
          Markets regularly move 10–20% in minutes. If you are a beginner:{" "}
          <strong style={{ color: COLORS.red }}>do not use leverage.</strong>
        </p>
      </div>
    </div>
  );
};