import { COLORS, SPACING, BORDER_RADIUS, ANIMATIONS } from '../../utils/constants';

export const FeatureGrid = ({ features }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: SPACING.lg,
        marginTop: SPACING.xl,
      }}
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className="trust-card"
          style={{
            background: COLORS.bgCard,
            border: `1px solid ${COLORS.border}`,
            borderRadius: BORDER_RADIUS.lg,
            padding: SPACING.lg,
            transition: `all ${ANIMATIONS.normal}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = COLORS.primary;
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = COLORS.border;
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div
            style={{
              fontSize: 36,
              marginBottom: SPACING.md,
            }}
          >
            {feature.icon}
          </div>
          <h3
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: COLORS.text,
              marginBottom: SPACING.sm,
            }}
          >
            {feature.title}
          </h3>
          <p
            style={{
              fontSize: 14,
              color: COLORS.textSec,
              lineHeight: 1.6,
            }}
          >
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};