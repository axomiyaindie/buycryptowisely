import { COLORS, BORDER_RADIUS, SPACING } from '../../utils/constants';

export const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 360 }}>
      <span
        style={{
          position: "absolute",
          left: 12,
          top: "50%",
          transform: "translateY(-50%)",
          color: COLORS.textMuted,
          fontSize: 16,
          pointerEvents: "none",
        }}
      >
        🔍
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Search..."}
        style={{
          width: "100%",
          padding: `${SPACING.sm}px ${SPACING.sm}px ${SPACING.sm}px 40px`,
          background: COLORS.bgSecondary,
          border: `1px solid ${COLORS.border}`,
          borderRadius: BORDER_RADIUS.md,
          color: COLORS.text,
          fontSize: 14,
          fontFamily: "inherit",
          outline: "none",
          transition: "all 0.2s ease",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = COLORS.primary)}
        onBlur={(e) => (e.currentTarget.style.borderColor = COLORS.border)}
      />
    </div>
  );
};