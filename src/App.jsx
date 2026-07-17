import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import { useLanguage } from './context/LanguageContext';
import { COPY } from './data/content';

// Page Imports
import { HomePage } from './pages/HomePage';
import { BeginnersPage } from './pages/BeginnersPage';
import { MemecoinsPage } from './pages/MemecoinsPage';
import { WalletsPage } from './pages/WalletsPage';
import { ToolsPage } from './pages/ToolsPage';
import { SafetyPage } from './pages/SafetyPage';
import { FAQPage } from './pages/FAQPage';
import { MediaPage } from './pages/MediaPage';

function AppRoutes() {
  const { language } = useLanguage();
  const translations = COPY[language] || COPY.en;

  return (
    <Routes>
      <Route path="/" element={<Layout translations={translations} />}>
        <Route index element={<HomePage translations={translations} />} />
        <Route path="beginners" element={<BeginnersPage translations={translations} />} />
        <Route path="memecoins" element={<MemecoinsPage translations={translations} />} />
        <Route path="wallets" element={<WalletsPage translations={translations} />} />
        <Route path="tools" element={<ToolsPage translations={translations} />} />
        <Route path="safety" element={<SafetyPage translations={translations} />} />
        <Route path="faq" element={<FAQPage translations={translations} />} />
        <Route path="media" element={<MediaPage translations={translations} />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  );
}

export default App;