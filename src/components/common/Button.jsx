import { useState } from 'react';
import { COLORS, BORDER_RADIUS, SPACING, ANIMATIONS } from '../../utils/constants';

export const ButtonPrimary = ({ children, onClick, disabled, fullWidth, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={(e) => {
        setIsHovered(true);
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 82, 255, 0.5)';
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      style={{
        background: isHovered && !disabled ? COLORS.primaryHover : COLORS.primary,
        color: "#FFFFFF",
        borderRadius: BORDER_RADIUS.md,
        padding: `${SPACING.sm}px ${SPACING.lg}px`,
        fontWeight: 600,
        fontSize: 14,
        transition: `all 0.3s ease`,
        fontFamily: "inherit",
        width: fullWidth ? "100%" : "auto",
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        border: "none",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export const ButtonSecondary = ({ children, onClick, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered ? COLORS.bgHover : "transparent",
        color: COLORS.text,
        border: `1px solid ${isHovered ? COLORS.primary : COLORS.border}`,
        borderRadius: BORDER_RADIUS.md,
        padding: `${SPACING.sm}px ${SPACING.lg}px`,
        fontWeight: 500,
        fontSize: 14,
        transition: `all ${ANIMATIONS.normal}`,
        fontFamily: "inherit",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </button>
  );
};