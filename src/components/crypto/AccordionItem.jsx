import { COLORS, SPACING, BORDER_RADIUS, FONTS } from '../../utils/constants';
import { ExternalLink } from '../common/ExternalLink';

export const AccordionItem = ({ step, isOpen, onToggle, accentColor }) => {
  return (
    <div
      style={{
        background: COLORS.bgCard,
        border: `1px solid ${isOpen ? COLORS.primary + "40" : COLORS.border}`,
        borderRadius: BORDER_RADIUS.lg,
        overflow: "hidden",
        transition: "all 0.2s ease",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: SPACING.md,
          padding: `${SPACING.lg}px ${SPACING.lg}px`,
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            fontWeight: 600,
            color: accentColor || COLORS.primary,
            background: (accentColor || COLORS.primary) + "12",
            padding: `${SPACING.xs}px ${SPACING.sm}px`,
            borderRadius: BORDER_RADIUS.sm,
            border: `1px solid ${(accentColor || COLORS.primary) + "25"}`,
            flexShrink: 0,
          }}
        >
          {step.num}
        </span>
        <span style={{ fontSize: 24, flexShrink: 0 }}>{step.icon}</span>
        <span
          style={{
            fontWeight: 600,
            fontSize: 16,
            color: COLORS.text,
            flex: 1,
          }}
        >
          {step.title}
        </span>
        <span
          style={{
            color: isOpen ? COLORS.primary : COLORS.textSec,
            fontSize: 24,
            flexShrink: 0,
            transform: isOpen ? "rotate(45deg)" : "none",
            transition: "all 0.2s ease",
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div
          style={{
            padding: `0 ${SPACING.lg}px ${SPACING.lg}px`,
            borderTop: `1px solid ${COLORS.border}`,
          }}
        >
          <p
            style={{
              color: COLORS.textSec,
              lineHeight: 1.7,
              marginTop: SPACING.md,
              fontSize: 14,
            }}
          >
            {step.body}
          </p>

          {step.warn && (
            <div
              style={{
                background: COLORS.red + "0c",
                border: `1px solid ${COLORS.red}30`,
                borderRadius: BORDER_RADIUS.md,
                padding: `${SPACING.sm}px ${SPACING.md}px`,
                marginTop: SPACING.md,
                display: "flex",
                gap: SPACING.sm,
                alignItems: "flex-start",
              }}
            >
              <span style={{ flexShrink: 0 }}>⚠️</span>
              <span style={{ color: COLORS.red, fontSize: 13, lineHeight: 1.6 }}>
                {step.warn}
              </span>
            </div>
          )}

          {step.links && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: SPACING.sm,
                marginTop: SPACING.md,
              }}
            >
              {step.links.map((link, idx) => (
                <ExternalLink key={idx} href={link.u}>
                  {link.n}
                </ExternalLink>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};