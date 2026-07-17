import { useState } from 'react';
import { SPACING } from '../utils/constants';
import { Section, SectionHeader } from '../components/layout/Section';
import { SearchInput } from '../components/common/SearchInput';
import { AccordionItem } from '../components/crypto/AccordionItem';
import { COLORS } from '../utils/constants';

export const BeginnersPage = ({ translations }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openSteps, setOpenSteps] = useState({});

  const toggleStep = (index) => {
    setOpenSteps((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const filteredSteps = translations.steps?.filter((step) =>
    step.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    step.body.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: `${SPACING.xxl}px ${SPACING.md}px` }}>
      <SectionHeader
        badge="Step-by-step"
        title={translations.beginH2}
        subtitle={translations.beginSub}
      />
      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search guide topics..."
      />
      <div style={{ marginTop: SPACING.lg, display: "flex", flexDirection: "column", gap: SPACING.sm }}>
        {filteredSteps.map((step, index) => (
          <AccordionItem
            key={index}
            step={step}
            isOpen={openSteps[index]}
            onToggle={() => toggleStep(index)}
            accentColor={COLORS.primary}
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