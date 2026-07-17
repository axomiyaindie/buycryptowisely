import { COLORS, BORDER_RADIUS, SPACING, FONTS } from '../../utils/constants';

export const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default: { bg: COLORS.primary + "12", color: COLORS.primary, border: COLORS.primary + "25" },
    success: { bg: COLORS.green + "12", color: COLORS.green, border: COLORS.green + "25" },
    error: { bg: COLORS.red + "12", color: COLORS.red, border: COLORS.red + "25" },
    warning: { bg: COLORS.orange + "12", color: COLORS.orange, border: COLORS.orange + "25" },
  };

  const style = variants[variant] || variants.default;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: style.bg,
        color: style.color,
        border: `1px solid ${style.border}`,
        borderRadius: BORDER_RADIUS.sm,
        padding: `${SPACING.xs}px ${SPACING.sm}px`,
        fontSize: 11,
        fontWeight: 600,
        fontFamily: FONTS.mono,
        lineHeight: 1.4,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
};