import { SPACING, COLORS } from '../../utils/constants';
import { Badge } from '../common/Badge';

export const Section = ({ children, maxWidth = 1120, padding = SPACING.xxl }) => {
  return (
    <section
      style={{
        maxWidth,
        margin: "0 auto",
        padding: `${padding}px ${SPACING.md}px`,
      }}
    >
      {children}
    </section>
  );
};

export const SectionHeader = ({ badge, title, subtitle }) => {
  return (
    <div style={{ marginBottom: SPACING.xl }}>
      {badge && <Badge>{badge}</Badge>}
      <h2
        style={{
          fontSize: "clamp(24px, 4vw, 32px)",
          fontWeight: 700,
          color: COLORS.text,
          marginTop: SPACING.sm,
          marginBottom: SPACING.sm,
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: COLORS.textSec,
            fontSize: 15,
            lineHeight: 1.6,
            maxWidth: 580,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};