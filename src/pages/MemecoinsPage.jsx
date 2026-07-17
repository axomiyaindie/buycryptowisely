import { useState } from 'react';
import { COLORS, SPACING, BORDER_RADIUS } from '../utils/constants';
import { SectionHeader } from '../components/layout/Section';
import { SearchInput } from '../components/common/SearchInput';
import { AccordionItem } from '../components/crypto/AccordionItem';

export const MemecoinsPage = ({ translations }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openSteps, setOpenSteps] = useState({});

  const toggleStep = (index) => {
    setOpenSteps((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const filteredSteps = translations.memeSteps?.filter((step) =>
    step.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    step.body.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: `${SPACING.xxl}px ${SPACING.md}px` }}>
      <div
        style={{
          background: COLORS.red + "0c",
          border: `1px solid ${COLORS.red}30`,
          borderRadius: BORDER_RADIUS.lg,
          padding: `${SPACING.md}px ${SPACING.lg}px`,
          marginBottom: SPACING.xl,
          display: "flex",
          gap: SPACING.sm,
          alignItems: "flex-start",
        }}
      >
        <span style={{ fontSize: 20, flexShrink: 0 }}>⚠️</span>
        <p style={{ color: COLORS.text, fontSize: 14, lineHeight: 1.6 }}>
          {translations.memeWarn}
        </p>
      </div>

      <SectionHeader
        badge="High risk zone"
        title={translations.memeH2}
        subtitle={translations.memeSub}
      />

      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search memecoin guides..."
      />

      <div style={{ marginTop: SPACING.lg, display: "flex", flexDirection: "column", gap: SPACING.sm }}>
        {filteredSteps.map((step, index) => (
          <AccordionItem
            key={index}
            step={step}
            isOpen={openSteps[index]}
            onToggle={() => toggleStep(index)}
            accentColor={COLORS.purple}
          />
        ))}
        {filteredSteps.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: SPACING.xxxl,
              color: COLORS.textSec,
            }}
          >
            No results found for "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};