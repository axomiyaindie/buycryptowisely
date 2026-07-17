import { useState } from 'react';
import { COLORS, SPACING, BORDER_RADIUS } from '../utils/constants';
import { SectionHeader } from '../components/layout/Section';
import { SearchInput } from '../components/common/SearchInput';

export const ToolsPage = ({ translations }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = translations.toolCats || [];

  let filteredCategories = activeCategory === null
    ? categories
    : categories.filter((cat) => cat.cat === activeCategory);

  if (searchQuery) {
    filteredCategories = filteredCategories
      .map((cat) => ({
        ...cat,
        tools: cat.tools.filter(
          (tool) =>
            tool.n.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.d.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((cat) => cat.tools.length > 0);
  }

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: `${SPACING.xxl}px ${SPACING.md}px` }}>
      <SectionHeader
        title={translations.toolsH2}
        subtitle={translations.toolsSub}
      />

      <SearchInput
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search tools..."
      />

      {/* Category Filters */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: SPACING.sm,
          marginBottom: SPACING.xl,
        }}
      >
        <button
          onClick={() => setActiveCategory(null)}
          style={{
            background: activeCategory === null ? COLORS.primary : COLORS.bgCard,
            color: activeCategory === null ? "#FFFFFF" : COLORS.textSec,
            border: `1px solid ${activeCategory === null ? COLORS.primary : COLORS.border}`,
            borderRadius: BORDER_RADIUS.md,
            padding: `${SPACING.xs}px ${SPACING.md}px`,
            fontSize: 13,
            fontWeight: 600,
            transition: "all 0.2s ease",
          }}
        >
          All
        </button>
        {categories.map((cat, idx) => {
          const isActive = activeCategory === cat.cat;
          return (
            <button
              key={idx}
              onClick={() => setActiveCategory(isActive ? null : cat.cat)}
              style={{
                background: isActive ? COLORS.primary + "12" : COLORS.bgCard,
                color: isActive ? COLORS.primary : COLORS.textSec,
                border: `1px solid ${isActive ? COLORS.primary : COLORS.border}`,
                borderRadius: BORDER_RADIUS.md,
                padding: `${SPACING.xs}px ${SPACING.md}px`,
                fontSize: 12,
                fontWeight: isActive ? 600 : 400,
                transition: "all 0.2s ease",
              }}
            >
              {cat.cat}
            </button>
          );
        })}
      </div>

      {/* Tools Grid */}
      {filteredCategories.length === 0 ? (
        <div style={{ textAlign: "center", padding: SPACING.xxxl, color: COLORS.textSec }}>
          No tools found
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: SPACING.xl }}>
          {filteredCategories.map((cat, idx) => (
            <div key={idx}>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: COLORS.text,
                  marginBottom: SPACING.md,
                }}
              >
                {cat.cat}
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: SPACING.sm,
                }}
              >
                {cat.tools.map((tool, toolIdx) => (
                  <a
                    key={toolIdx}
                    href={tool.u}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: COLORS.bgCard,
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: BORDER_RADIUS.lg,
                      padding: `${SPACING.md}px ${SPACING.md}px`,
                      display: "block",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = COLORS.primary;
                      e.currentTarget.style.background = COLORS.bgHover;
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = COLORS.border;
                      e.currentTarget.style.background = COLORS.bgCard;
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div
                      style={{
                        color: COLORS.primary,
                        fontWeight: 600,
                        fontSize: 14,
                        marginBottom: SPACING.xs,
                      }}
                    >
                      ↗ {tool.n}
                    </div>
                    <div
                      style={{
                        color: COLORS.textSec,
                        fontSize: 12,
                        lineHeight: 1.5,
                      }}
                    >
                      {tool.d}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};