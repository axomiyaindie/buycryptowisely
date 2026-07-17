import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { BottomNav } from './BottomNav';
import { PriceTicker } from '../crypto/PriceTicker';
import { useLanguage } from '../../context/LanguageContext';
import { useLivePrices } from '../../hooks/useLivePrices';
import { TABS } from '../../data/content';
import { useLocation } from 'react-router-dom';

export const Layout = ({ translations }) => {
  const { language, setLanguage } = useLanguage();
  const { prices, status } = useLivePrices();
  const location = useLocation();
  
  const activeTab = TABS.find((tab) => tab.path === location.pathname) || TABS[0];

  return (
    <div
      style={{
        background: "#05070A",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingBottom: 72,
      }}
    >
      <Header
        activeTabIndex={activeTab.index}
        language={language}
        onLanguageToggle={setLanguage}
        translations={translations}
      />

      <PriceTicker
        prices={prices}
        status={status}
        liveLabel={translations.liveLabel || "LIVE PRICES"}
      />

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <Footer translations={translations} />
      <BottomNav
        activeTabIndex={activeTab.index}
        translations={translations}
      />
    </div>
  );
};