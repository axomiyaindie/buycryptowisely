import { COLORS, SPACING, FONTS } from '../../utils/constants';
import { formatUSD } from '../../utils/formatters';
import { COINS_META } from '../../data/content';

export const PriceTicker = ({ prices, status, liveLabel }) => {
  const tickerItems = [...COINS_META, ...COINS_META];

  return (
    <div
      style={{
        background: COLORS.bgCard,
        borderBottom: `1px solid ${COLORS.border}`,
        borderTop: `1px solid ${COLORS.border}`,
        height: 48,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Live Status Badge - Trust Wallet Style */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 2,
          background: `linear-gradient(90deg, ${COLORS.bgCard} 60%, transparent)`,
          display: "flex",
          alignItems: "center",
          padding: `0 ${SPACING.lg}px 0 ${SPACING.md}px`,
          gap: SPACING.sm,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: status === "live" ? COLORS.green : COLORS.textMuted,
            animation: status === "loading" ? "pulse 1.2s ease infinite" : "none",
            boxShadow: status === "live" ? `0 0 8px ${COLORS.green}` : "none",
          }}
        />
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: COLORS.textSec,
            fontFamily: FONTS.mono,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          {liveLabel || "LIVE PRICES"}
        </span>
      </div>

      {/* Scrolling Ticker - Trust Wallet Style */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          paddingLeft: 110,
          animation: "ticker 45s linear infinite",
          width: "max-content",
          whiteSpace: "nowrap",
        }}
      >
        {tickerItems.map((coin, index) => {
          const price = prices[coin.id];
          const isPositive = (price?.change || 0) >= 0;
          const changeValue = Math.abs(price?.change || 0).toFixed(2);

          return (
            <div
              key={`${coin.id}-${index}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: SPACING.sm,
                padding: `0 ${SPACING.xl}px`,
                fontFamily: FONTS.mono,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <span style={{ color: coin.color, fontWeight: 700, fontSize: 15 }}>{coin.sym}</span>
              <span style={{ color: COLORS.text, fontWeight: 600 }}>
                {formatUSD(price?.usd || 0)}
              </span>
              <span
                style={{
                  color: isPositive ? COLORS.green : COLORS.red,
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {isPositive ? "▲" : "▼"} {changeValue}%
              </span>
            </div>
          );
        })}
      </div>

      {/* Fade Effect on Right */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 40,
          background: `linear-gradient(270deg, ${COLORS.bgCard}, transparent)`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};