# BuyCryptoWisely – Crypto Education Platform

A modern, bilingual (English & Assamese) cryptocurrency education platform. It provides guides, tools, safety tips, and a media hub, all wrapped in a premium, game-like 3D interface inspired by Trust Wallet and Coinbase.

## ✨ Key Features

-   **Bilingual Support**: Full website content in English and Assamese with a one-click language toggle.
-   **Live Cryptocurrency Prices**: Real-time price data (USD/INR) and 24h changes from the CoinGecko API, refreshed every 60 seconds.
-   **8 Comprehensive Pages**:
    -   **Home**: Hero section, live price cards, feature highlights, and quick navigation.
    -   **Beginners Guide**: A 5-step accordion guide to buying your first crypto in India.
    -   **Memecoin Guide**: High-risk memecoin trading strategies and safety warnings.
    -   **Wallet Guide**: Breakdown of custodial, self-custody, and hardware wallets.
    -   **Tools Directory**: Curated list of Indian & global exchanges, DeFi tools, and research platforms.
    -   **Safety Guide**: Essential security rules, scam prevention, and leverage trading warnings.
    -   **FAQ Section**: 9 common crypto questions with expandable answers.
    -   **Media Hub**: A dedicated section for educational YouTube videos, expert opinions from industry leaders (Vitalik Buterin, Michael Saylor, etc.), and curated articles.
-   **Premium 3D & Visual Effects**:
    -   GPU-accelerated 3D card tilting with glare effect.
    -   Smooth scroll-triggered reveal animations.
    -   Performance detection to auto-disable heavy effects on slow devices.
    -   Deep galaxy theme with crypto-native color accents (Bitcoin orange, Ethereum blue, Solana purple).
-   **Fully Responsive**: Optimized for mobile, tablet, and desktop with a hamburger menu and bottom navigation bar.
-   **SEO Optimized**: Meta tags, Open Graph images, and structured data for search engines and social sharing.

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Core UI framework |
| **Vite** | Build tool and development server |
| **React Router DOM** | Client-side routing for 8 pages |
| **Framer Motion** | Smooth, production-ready animations |
| **React Intersection Observer** | Scroll-triggered reveal effects |
| **CoinGecko API** | Live cryptocurrency prices (free, no API key) |
| **CSS-in-JS** | Inline styles for dynamic, component-level theming |
| **Netlify** | Recommended hosting platform |

## 📂 Project Structure

```
buycryptowisely/
├── public/
│   ├── favicon.svg          # Browser tab icon
│   └── og-image.png         # Social media share image (1200x630px)
├── src/
│   ├── assets/              # Images, fonts, and SVG icons (logo, crypto icons)
│   ├── components/
│   │   ├── common/          # Reusable UI (Badge, Button, Card, etc.)
│   │   ├── crypto/          # Crypto-specific (PriceTicker, Accordion)
│   │   └── layout/          # Layout components (Header, Footer, Layout)
│   ├── context/             # LanguageContext for bilingual state
│   ├── data/                # content.js (all translations and static content)
│   ├── hooks/               # useLivePrices for CoinGecko API
│   ├── pages/               # 8 page components (Home, Beginners, Media, etc.)
│   ├── styles/              # globals.css (galaxy theme & animations)
│   ├── utils/               # constants.js (design system), formatters.js
│   ├── App.jsx              # Routes configuration
│   └── main.jsx             # Entry point
├── index.html               # Main HTML file (SEO, OG tags, favicon)
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

-   **Node.js** (version 16 or higher)
-   **npm** (comes with Node.js)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/axomiyaindie/buycw.git
    cd buycw
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser** and navigate to `http://localhost:5173`.

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` folder, ready to be deployed to any static hosting service (Netlify, Vercel, etc.).

## ☁️ Deploying to Netlify

1.  Push your code to a GitHub repository.
2.  Log in to [Netlify](https://app.netlify.com/).
3.  Click **"Add new site"** → **"Import an existing project"**.
4.  Connect your GitHub account and select the repository.
5.  **Build settings** will be auto-detected (Presence of Vite).
    -   **Build command:** `npm run build`
    -   **Publish directory:** `dist`
6.  Click **"Deploy site"**.

Your site will be live at `https://buycryptowisely.vercel.app`.

## 🔧 Configuration & Customization

### Adding a New Cryptocurrency Coin

1.  Open `src/data/content.js`.
2.  Add a new object to the `COINS_META` array:
    ```javascript
    { id: "newcoin", sym: "NEW", name: "New Coin", color: "#HEXCODE", icon: "🪙", defaultUsd: 100, defaultInr: 8300, defaultChange: 0.00 }
    ```
    -   `id`: Must match the CoinGecko API ID.
    -   `icon`: Can be an emoji or a path to an SVG.

### Adding a New Page

1.  **Create Component:** Create `src/pages/NewPage.jsx`.
2.  **Add to TABS:** In `src/data/content.js`, add a new object to the `TABS` array.
3.  **Add Translations:** Add `navX` and `mobX` keys to both the `en` and `as` objects in `COPY`.
4.  **Add Route:** In `src/App.jsx`, import the page and add a new `<Route>` inside the main `<Routes>` component.

### Modifying Colors & Theme

All design tokens (colors, spacing, fonts, border radii) are centralized in `src/utils/constants.js`. Modify these values to change the look of the entire website.

### Managing Translations (Bilingual Content)

All text content lives in `src/data/content.js` under the `COPY` object. It has two main sections:
-   `en`: All English translations.
-   `as`: All Assamese translations.

To update any text, find the corresponding key in this file.

## 📄 License

This project is open-source and available under the MIT License.

## 🙏 Acknowledgements

-   **CoinGecko** for the free cryptocurrency price API.
-   **Trust Wallet & Coinbase** for design inspiration.
-   **Framer Motion** for the smooth animation library.

---

**Built with React, Vite, and a passion for crypto education.**