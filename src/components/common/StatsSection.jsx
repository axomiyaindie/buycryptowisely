import { COLORS, SPACING } from '../../utils/constants';

export const StatsSection = ({ stats }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: SPACING.xxl,
        marginTop: SPACING.xxxl,
        marginBottom: SPACING.xxxl,
      }}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          style={{
            textAlign: "center",
            animation: `slideUp 0.5s ease-out ${index * 0.1}s backwards`,
          }}
        >
          <div
            style={{
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 700,
              color: COLORS.primary,
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
              marginBottom: SPACING.xs,
            }}
          >
            {stat.value}
          </div>
          <div
            style={{
              fontSize: 14,
              color: COLORS.textSec,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.03em",
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};