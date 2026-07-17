import { useState } from 'react';
import { COLORS, BORDER_RADIUS, SPACING } from '../../utils/constants';

export const ExternalLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: SPACING.xs,
        background: isHovered ? COLORS.primary + "12" : "transparent",
        color: COLORS.primary,
        borderRadius: BORDER_RADIUS.sm,
        padding: `${SPACING.xs}px ${SPACING.sm}px`,
        fontSize: 13,
        fontWeight: 500,
        transition: "all 0.2s ease",
      }}
    >
      ↗ {children}
    </a>
  );
};