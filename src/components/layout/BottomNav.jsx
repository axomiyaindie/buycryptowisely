import { useNavigate } from 'react-router-dom';
import { COLORS, SPACING } from '../../utils/constants';
import { TABS } from '../../data/content';

export const BottomNav = ({ activeTabIndex, translations }) => {
  const navigate = useNavigate();

  return (
    <nav
      className="bottom-nav"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: COLORS.bgCard + "F2",
        backdropFilter: "blur(20px)",
        borderTop: `1px solid ${COLORS.border}`,
        zIndex: 200,
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        display: "flex",
      }}
    >
      {TABS.map((tab) => {
        const isActive = activeTabIndex === tab.index;
        const label = translations[tab.mobileKey];
        return (
          <button
            key={tab.index}
            onClick={() => {
              navigate(tab.path);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              padding: `${SPACING.sm}px ${SPACING.xs}px ${SPACING.sm}px`,
              color: isActive ? COLORS.primary : COLORS.textSec,
              transition: "color 0.2s ease",
              borderTop: isActive ? `2px solid ${COLORS.primary}` : "2px solid transparent",
            }}
          >
            <span style={{ fontSize: 20 }}>{tab.icon}</span>
            <span style={{ fontSize: 10, fontWeight: isActive ? 600 : 400 }}>
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};