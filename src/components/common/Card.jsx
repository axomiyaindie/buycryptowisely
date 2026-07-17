import { COLORS, BORDER_RADIUS, ANIMATIONS } from '../../utils/constants';

export const Card = ({ 
  children, 
  onClick, 
  hoverable = true,
  padding = "md",
  style = {} 
}) => {
  const paddingSizes = {
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
  };

  const baseStyle = {
    background: COLORS.bgCard,
    border: `1px solid ${COLORS.border}`,
    borderRadius: BORDER_RADIUS.lg,
    padding: paddingSizes[padding],
    transition: `all ${ANIMATIONS.normal}`,
    cursor: onClick ? "pointer" : "default",
  };

  const hoverStyle = hoverable ? {
    transition: `all ${ANIMATIONS.normal}`,
  } : {};

  return (
    <div
      className={hoverable ? "trust-card" : ""}
      style={{ ...baseStyle, ...hoverStyle, ...style }}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (hoverable && onClick) {
          e.currentTarget.style.borderColor = COLORS.primary;
          e.currentTarget.style.transform = "translateY(-2px)";
        }
      }}
      onMouseLeave={(e) => {
        if (hoverable && onClick) {
          e.currentTarget.style.borderColor = COLORS.border;
          e.currentTarget.style.transform = "translateY(0)";
        }
      }}
    >
      {children}
    </div>
  );
};