/* ─── DESIGN TOKENS ─────────────────────────────────────────────────────────  */
export const B = {
  bg:      "#0B0E11",
  surf1:   "#161A1E",
  surf2:   "#1E2329",
  surf3:   "#2B3139",
  yellow:  "#F0B90B",
  yellowD: "#C99800",
  green:   "#0ECB81",
  red:     "#F6465D",
  blue:    "#1890FF",
  text:    "#EAECEF",
  textSec: "#848E9C",
  textMut: "#474D57",
  border:  "#2B3139",
  border2: "#363C45",
};

export const F = {
  sans: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  mono: "'IBM Plex Mono', 'SFMono-Regular', 'Fira Code', Consolas, monospace",
};

/* ─── TABS CONFIG ───────────────────────────────────────────────────────────── */
export const TABS = [
  { path: "/",           index: 0, icon: "🏠", accent: B.yellow,  desktopKey: "nav0", mobileKey: "mob0" },
  { path: "/beginners",  index: 1, icon: "📗", accent: B.yellow,  desktopKey: "nav1", mobileKey: "mob1" },
  { path: "/memecoins",  index: 2, icon: "🎰", accent: "#9945FF", desktopKey: "nav2", mobileKey: "mob2" },
  { path: "/wallets",    index: 3, icon: "💼", accent: B.blue,    desktopKey: "nav3", mobileKey: "mob3" },
  { path: "/tools",      index: 4, icon: "🔗", accent: B.green,   desktopKey: "nav4", mobileKey: "mob4" },
  { path: "/safety",     index: 5, icon: "🛡️", accent: B.red,     desktopKey: "nav5", mobileKey: "mob5" },
  { path: "/faq",        index: 6, icon: "❓", accent: "#0052FF",  desktopKey: "nav6", mobileKey: "mob6" },
  { path: "/media",      index: 7, icon: "📺", accent: "#00B1A5",  desktopKey: "nav7", mobileKey: "mob7" },  
];

/* ─── COINS ────────────────────────────────────────────────────────────────── */
export const COINS_META = [
  { id: "bitcoin",       sym: "BTC", name: "Bitcoin",   color: "#F7931A", icon: "₿",  defaultUsd: 97420,  defaultInr: 8115000, defaultChange: 2.41  },
  { id: "ethereum",      sym: "ETH", name: "Ethereum",  color: "#627EEA", icon: "Ξ",  defaultUsd: 3418,   defaultInr: 284600,  defaultChange: 1.83  },
  { id: "solana",        sym: "SOL", name: "Solana",    color: "#9945FF", icon: "◎",  defaultUsd: 182,    defaultInr: 15160,   defaultChange: 3.21  },
  { id: "binancecoin",   sym: "BNB", name: "BNB",       color: "#F0B90B", icon: "⬡",  defaultUsd: 618,    defaultInr: 51450,   defaultChange: -0.54 },
  { id: "tron",          sym: "TRX", name: "Tron",      color: "#FF0013", icon: "◈",  defaultUsd: 0.23,   defaultInr: 19.15,   defaultChange: 1.12  },
  { id: "ripple",        sym: "XRP", name: "XRP",       color: "#00AAE4", icon: "✕",  defaultUsd: 2.14,   defaultInr: 178.2,   defaultChange: -1.33 },
];

/* ─── TRANSLATIONS ──────────────────────────────────────────────────────────── */
export const COPY = {

  /* ── ENGLISH ────────────────────────────────────────────────────────────── */
  en: {
    /* Navigation labels */
    nav0: "Home",       nav1: "Beginners",  nav2: "Memecoins",
    nav3: "Wallets",    nav4: "Tools",      nav5: "Safety",
    nav6: "FAQ",
    mob0: "Home",       mob1: "Learn",      mob2: "Meme",
    mob3: "Wallet",     mob4: "Tools",      mob5: "Safety",
    mob6: "FAQ",  
    nav7: "Media",      mob7: "Media",

    /* SEO */
    siteTitle:    "BuyCryptoWisely — Bitcoin, DeFi & Memecoins Guide",
    siteDesc:     "Complete beginner-to-pro guide to buying Bitcoin, DeFi, Memecoins in India. Start with ₹50. Available in English & Assamese.",
    siteKeywords: "bitcoin india, buy bitcoin assam, crypto guide assamese, memecoin guide, defi india, coinswitch, binance india, buycryptowisely",

    pageTitles: {
      "/":          "BuyCryptoWisely — Bitcoin, DeFi & Memecoins Guide",
      "/beginners": "Beginner's Guide to Crypto in India — BuyCryptoWisely",
      "/memecoins": "Memecoin Survival Guide India — BuyCryptoWisely",
      "/wallets":   "Crypto Wallets Guide India — BuyCryptoWisely",
      "/tools":     "Best Crypto Tools & Exchanges India — BuyCryptoWisely",
      "/safety":    "Crypto Security Guide India — BuyCryptoWisely",
      "/faq":       "Frequently Asked Questions — BuyCryptoWisely",
    },
    pageDescs: {
      "/":          "Free crypto education for India. Start investing in Bitcoin with ₹50. English & Assamese.",
      "/beginners": "Step-by-step guide to buying your first Bitcoin or crypto in India with ₹50.",
      "/memecoins": "How to trade memecoins on Solana, BSC and ETH. Rug pull protection guide.",
      "/wallets":   "Custodial vs self-custody vs hardware wallets explained for Indian crypto users.",
      "/tools":     "Complete directory of crypto exchanges, wallets, DEX, research tools for India.",
      "/safety":    "Essential crypto security rules to protect your funds from hacks and scams in India.",
      "/faq":       "Answers to common questions about cryptocurrency, investing, security, and more.",
    },

    /* Hero */
    heroBadge:  "Free Crypto Education",
    heroH1a:    "Your Complete",
    heroH1b:    "Crypto Guide",
    heroH1c:    "From Zero to Hero",
    heroSub:    "From ₹50 to self-custody — everything you need, in one place. Start with Bitcoin, explore DeFi, survive the memecoin jungle.",
    heroCta1:   "Start Learning",
    heroCta2:   "View All Tools",
    heroStat1:  "Start with",   heroStat1v: "₹50",
    heroStat2:  "Platforms",    heroStat2v: "30+",
    heroStat3:  "Languages",    heroStat3v: "2",
    liveLabel:  "LIVE",

    /* HomePage specific translations */
    heroBadgeFull: "India's Free Crypto Education Platform",
    heroHeading1: "Your Complete",
    heroHeading2: "Crypto Guide",
    heroHeading3: "From Zero to Hero",
    heroSubheading: "From ₹50 to self-custody — everything you need to know, in one place. Learn about Bitcoin, DeFi, and how to stay safe.",
    heroCta1Full: "Start Learning Free",
    heroCta2Full: "Explore Tools",

    trust1: "Free Guides",
    trust2: "Bilingual",
    trust3: "Safety Education",

    guidesStat: "Guides",
    topicsStat: "Topics Covered",
    languagesStat: "Languages",
    startStat: "Start with",

    priceSectionTitle: "Cryptocurrency Reference Prices",
    priceSectionSub: "Real-time market data for educational purposes",

    whyChooseTitle: "Why Choose BuyCryptoWisely",
    whyChooseSub: "Pure education. No exchange. No trading. Just knowledge.",

    exploreTitle: "Explore Crypto Guides",
    exploreSub: "Step-by-step guides for every crypto journey",

    feature1Title: "Free Educational Content",
    feature1Desc: "Completely free guides to help you understand cryptocurrency. No hidden fees, no paid courses.",
    feature2Title: "Bilingual Learning",
    feature2Desc: "Full support for English and Assamese. Learn crypto in your preferred language.",
    feature3Title: "Beginner Friendly",
    feature3Desc: "Start from absolute zero. Step-by-step guides designed for complete beginners.",
    feature4Title: "Safety First Education",
    feature4Desc: "Learn how to protect yourself from scams, rug pulls, and common crypto risks.",

    /* FAQ Section */
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Got questions? We've got answers.",
    faq1Q: "What is cryptocurrency?",
    faq1A: "Cryptocurrency is digital money that works on blockchain technology. Unlike regular money (INR), crypto is decentralized - no bank or government controls it. Bitcoin was the first cryptocurrency, created in 2009. Today there are thousands of cryptocurrencies with different uses.",
    faq2Q: "How do I start investing in crypto with ₹50?",
    faq2A: "Start by downloading a trusted Indian exchange app like CoinSwitch or CoinDCX. Complete KYC with your PAN and Aadhaar. Add ₹50 via UPI. Buy a small amount of Bitcoin or any coin you like. Our Beginner's Guide has detailed step-by-step instructions.",
    faq3Q: "Is cryptocurrency legal in India?",
    faq3A: "Yes, buying, selling, and holding cryptocurrency is legal in India. However, there is a 30% tax on crypto gains and 1% TDS on transactions above certain limits. Always use registered exchanges like CoinSwitch, CoinDCX, or Binance.",
    faq4Q: "What is the difference between exchange and wallet?",
    faq4A: "An exchange (like Binance, CoinDCX) is where you BUY crypto - but they hold your private keys. A wallet (like Trust Wallet, MetaMask) is where you STORE crypto - YOU hold the keys. For small amounts, exchanges are fine. For large amounts, use a self-custody wallet.",
    faq5Q: "What is a memecoin and are they safe?",
    faq5A: "Memecoins (like Dogecoin, Shiba Inu) are cryptocurrencies with no real utility - their value comes from hype and community. They are EXTREMELY risky. Most memecoins go to zero. Only invest money you can afford to lose completely. Always check for rug pulls before buying.",
    faq6Q: "What is DeFi and how does it work?",
    faq6A: "DeFi (Decentralized Finance) lets you use financial services like lending, borrowing, and trading without banks. It works through smart contracts on blockchains like Ethereum and Solana. You can earn interest on your crypto or trade directly from your wallet.",
    faq7Q: "How do I protect myself from crypto scams?",
    faq7A: "Never share your seed phrase with anyone. Use 2FA on all exchanges. Bookmark official URLs - never click crypto links from ads or DMs. Send test transactions before large transfers. Never invest in 'guaranteed returns' schemes. Check our Safety Guide for complete security rules.",
    faq8Q: "What are the best cryptocurrencies for beginners?",
    faq8A: "For beginners, start with established cryptocurrencies: Bitcoin (BTC) - the original crypto, Ethereum (ETH) - smart contract platform, Solana (SOL) - fast and cheap. Avoid memecoins and new projects until you understand the risks.",
    faq9Q: "How do I learn crypto in Assamese language?",
    faq9A: "Our entire website is available in Assamese! Just click the 'অ' button in the top navigation bar to switch to Assamese. All guides, steps, and explanations are translated for Assamese speakers. Start with our Beginner's Guide in Assamese.",

    /* Beginners */
    beginH2:  "Beginner's Guide",
    beginSub: "Start with just ₹50. Follow these 5 steps in order.",
    steps: [
      {
        num: "01", icon: "📲",
        title: "Download a custodial app",
        body: "The easiest entry point. Install CoinSwitch, CoinDCX, WazirX, or BNS from the official App Store or Play Store. Complete KYC with your PAN and Aadhaar. Add money via UPI — minimum ₹50. Buy any listed coin instantly.",
        warn: "These are custodial apps — the platform holds your private keys, not you. If they get hacked or go offline (WazirX 2024 incident), your funds may be locked. Always plan to move large amounts to your own wallet.",
        links: [
          { n: "CoinSwitch",   u: "https://coinswitch.co" },
          { n: "CoinDCX",      u: "https://coindcx.com" },
          { n: "WazirX",       u: "https://wazirx.com" },
          { n: "BNS (Bitbns)", u: "https://bitbns.com" },
        ]
      },
      {
        num: "02", icon: "🌐",
        title: "Use a global exchange for larger amounts",
        body: "Once comfortable, move to Binance or Coinbase. More coins, lower fees, global liquidity. Sign up → complete KYC → use P2P trading to buy USDT with INR → use USDT to buy BTC, ETH, SOL, or any coin.",
        links: [
          { n: "Binance",  u: "https://binance.com" },
          { n: "Coinbase", u: "https://coinbase.com" },
          { n: "Gemini",   u: "https://gemini.com" },
          { n: "Kraken",   u: "https://kraken.com" },
        ]
      },
      {
        num: "03", icon: "🔐",
        title: "Install a self-custody wallet",
        body: "True ownership. A self-custody wallet means YOU hold the private keys — no company can freeze, ban, or lose your funds. Install from official websites ONLY. Write your 12-word seed phrase on paper. Store offline, never photograph, never type online.",
        warn: "Hundreds of fake wallet apps exist on app stores. Download only from official website URLs below. One wrong install = all funds gone.",
        links: [
          { n: "Trust Wallet",  u: "https://trustwallet.com" },
          { n: "MetaMask",      u: "https://metamask.io" },
          { n: "Phantom (SOL)", u: "https://phantom.app" },
          { n: "Solflare",      u: "https://solflare.com" },
        ]
      },
      {
        num: "04", icon: "🔀",
        title: "Withdraw from exchange to your wallet",
        body: "On Binance: Account → Wallet → Withdraw → select coin → paste wallet address → select correct network (ETH on ETH, SOL on SOL, BNB on BSC). Send a tiny test amount first. Wait for confirmation. Then send the rest.",
        warn: "Wrong network = permanent, irrecoverable loss of funds. Triple-check the network every single time."
      },
      {
        num: "05", icon: "📊",
        title: "Track prices & plan your strategy",
        body: "Use CoinGecko or CoinMarketCap to track prices. For long-term HODLing, consider a hardware wallet (Ledger/Trezor). For active trading, TradingView has professional charts.",
        links: [
          { n: "CoinGecko",     u: "https://coingecko.com" },
          { n: "CoinMarketCap", u: "https://coinmarketcap.com" },
          { n: "TradingView",   u: "https://tradingview.com" },
          { n: "Ledger",        u: "https://ledger.com" },
          { n: "Trezor",        u: "https://trezor.io" },
        ]
      },
    ],

    /* Memecoins */
    memeH2:   "Memecoin Survival Guide",
    memeSub:  "High risk. Possible high reward. Read before you ape in.",
    memeWarn: "Memecoins have no inherent value. Most go to zero within days or weeks. Rug pulls, honeypots, and pump-and-dump schemes are extremely common. Only use money you are completely willing to lose.",
    memeSteps: [
      {
        num: "01", icon: "🔍",
        title: "Find trending tokens on Dexscreener",
        body: "Go to dexscreener.com. Select your chain (Solana, BSC, or ETH). Sort by 24h volume or trending. Look for: high volume, multiple buyers (not one whale), locked liquidity, and renounced contract.",
        links: [
          { n: "Dexscreener",   u: "https://dexscreener.com" },
          { n: "Dextools",      u: "https://dextools.io" },
          { n: "Birdeye (SOL)", u: "https://birdeye.so" },
          { n: "Bubblemaps",    u: "https://bubblemaps.io" },
        ]
      },
      {
        num: "02", icon: "🛡️",
        title: "Verify the token before buying",
        body: "Copy the contract address. Check: (1) Token Sniffer for honeypot/rug risk score, (2) Bubblemaps to see if one wallet holds 50%+ supply, (3) Dexscreener to verify liquidity is locked. Never buy a token from a DM.",
        links: [
          { n: "Token Sniffer",  u: "https://tokensniffer.com" },
          { n: "Bubblemaps",     u: "https://bubblemaps.io" },
          { n: "RugCheck (SOL)", u: "https://rugcheck.xyz" },
        ]
      },
      {
        num: "03", icon: "💱",
        title: "Buy on the right DEX",
        body: "Solana tokens → Jupiter (jup.ag). BSC tokens → PancakeSwap. ETH tokens → Uniswap. Connect wallet → paste contract → set slippage 1–5% → confirm swap. Start with a tiny amount.",
        warn: "Never invest money you can't completely lose. A rug pull can happen within seconds of you buying.",
        links: [
          { n: "Jupiter (SOL)",    u: "https://jup.ag" },
          { n: "PancakeSwap (BSC)",u: "https://pancakeswap.finance" },
          { n: "Uniswap (ETH)",    u: "https://uniswap.org" },
          { n: "Raydium (SOL)",    u: "https://raydium.io" },
        ]
      },
      {
        num: "04", icon: "🧪",
        title: "Create your own memecoin",
        body: "On Solana, pump.fun lets you launch in 2 minutes. Need: name, ticker, image (PNG), description. Cost: ~0.02 SOL (~₹250). Coin is immediately tradable. When it hits a market cap target it lists on Raydium automatically.",
        links: [
          { n: "pump.fun",  u: "https://pump.fun" },
          { n: "Moonshot",  u: "https://moonshot.money" },
        ]
      },
    ],

    /* Wallets */
    wallH2:  "Wallet Types Explained",
    wallSub: "Understanding custody is the single most important concept in crypto.",
    wallets: [
      {
        icon: "🏦", name: "Custodial (Exchange)",
        risk: "Medium", riskColor: B.yellow,
        pros: ["Easy to use, no setup", "Account recovery via email", "INR deposits via UPI"],
        cons: ["Platform holds your keys", "Can freeze your account", "Hack risk (WazirX 2024)"],
        examples: "CoinSwitch · CoinDCX · Binance · Coinbase"
      },
      {
        icon: "📱", name: "Self-Custody (Mobile)",
        risk: "Low", riskColor: B.green,
        pros: ["You hold your keys", "No one can freeze funds", "Works on any chain"],
        cons: ["Lose seed = lose funds forever", "No account recovery", "You are responsible"],
        examples: "Trust Wallet · Phantom · MetaMask · Solflare"
      },
      {
        icon: "🔑", name: "Hardware Wallet",
        risk: "Very Low", riskColor: B.green,
        pros: ["Keys never touch internet", "Best for large amounts", "PIN + recovery phrase"],
        cons: ["Costs ₹8,000–₹20,000", "Physical device can be lost", "Slower for daily use"],
        examples: "Ledger Nano X · Trezor Model T · Coldcard"
      },
      {
        icon: "📄", name: "Paper Wallet",
        risk: "Low*", riskColor: B.yellow,
        pros: ["Completely offline", "No device to hack", "Free"],
        cons: ["Paper can burn/flood/be stolen", "Easy to lose", "No UI, manual process"],
        examples: "Generate offline · Store in fireproof safe"
      },
    ],

    /* Glossary */
    glossaryTitle: "Crypto Glossary",
    terms: [
      ["Bitcoin (BTC)",    "First cryptocurrency. Digital gold. Fixed supply of 21 million."],
      ["Blockchain",       "A public, tamper-proof ledger recording every transaction ever made."],
      ["Wallet",           "Software that stores your private keys and lets you send/receive crypto."],
      ["Seed Phrase",      "12 or 24 words — the master key to your entire wallet."],
      ["Private Key",      "A secret string proving ownership of a wallet address."],
      ["DeFi",             "Decentralised Finance — financial services without banks."],
      ["DEX",              "Decentralised Exchange — trade crypto without an account."],
      ["CEX",              "Centralised Exchange — Binance, CoinDCX. Has an account system."],
      ["Memecoin",         "A coin with no utility, driven purely by speculation."],
      ["Rug Pull",         "Developers abandon a project and steal all the liquidity."],
      ["Honeypot",         "A token you can buy but not sell — a trap."],
      ["Gas Fee",          "Cost of processing a transaction on a blockchain network."],
      ["HODLing",          "Holding cryptocurrency long-term through market volatility."],
      ["Altcoin",          "Any cryptocurrency that is not Bitcoin."],
      ["Stablecoin",       "A coin pegged 1:1 to a fiat currency. Example: USDT, USDC."],
      ["Smart Contract",   "Self-executing code on a blockchain that runs automatically."],
      ["Liquidity",        "Funds available to trade a token without large price impact."],
      ["Market Cap",       "Total supply × current price = total value of all coins."],
      ["KYC",              "Know Your Customer — identity verification required by exchanges."],
      ["P2P",              "Peer-to-peer trading — buy/sell directly with another person."],
    ],

    /* Tools directory */
    toolsH2:  "Complete Tools Directory",
    toolsSub: "Every platform you need — direct links, no middleman.",
    toolCats: [
      { cat: "Indian Exchanges 🇮🇳", tools: [
        { n: "CoinSwitch",    u: "https://coinswitch.co",   d: "Best for beginners, UPI, ₹50 min" },
        { n: "CoinDCX",       u: "https://coindcx.com",     d: "Large selection, futures, staking" },
        { n: "WazirX",        u: "https://wazirx.com",      d: "P2P market, wide coin selection" },
        { n: "BNS (Bitbns)",  u: "https://bitbns.com",      d: "SIP-style crypto investing" },
        { n: "Mudrex",        u: "https://mudrex.com",      d: "Algo trading, coin sets" },
      ]},
      { cat: "Global Exchanges 🌍", tools: [
        { n: "Binance",       u: "https://binance.com",     d: "World's largest, P2P INR, 350+ coins" },
        { n: "Coinbase",      u: "https://coinbase.com",    d: "Most trusted, great for beginners" },
        { n: "Gemini",        u: "https://gemini.com",      d: "SOC 2 certified, regulated" },
        { n: "Kraken",        u: "https://kraken.com",      d: "Low fees, long-standing reputation" },
        { n: "OKX",           u: "https://okx.com",         d: "DeFi, NFTs, Web3 wallet built-in" },
      ]},
      { cat: "Wallets 💼", tools: [
        { n: "Trust Wallet",  u: "https://trustwallet.com", d: "All-in-one, 70+ blockchains" },
        { n: "MetaMask",      u: "https://metamask.io",     d: "ETH & all EVM chains" },
        { n: "Phantom",       u: "https://phantom.app",     d: "Best Solana + multi-chain" },
        { n: "Solflare",      u: "https://solflare.com",    d: "Solana native staking" },
        { n: "Ledger",        u: "https://ledger.com",      d: "Hardware wallet #1 globally" },
        { n: "Trezor",        u: "https://trezor.io",       d: "Open source hardware wallet" },
        { n: "Exodus",        u: "https://exodus.com",      d: "Beautiful UI, desktop + mobile" },
      ]},
      { cat: "DeFi & DEX 🔀", tools: [
        { n: "Jupiter",       u: "https://jup.ag",                d: "Best Solana DEX aggregator" },
        { n: "Uniswap",       u: "https://uniswap.org",           d: "Original ETH/EVM DEX" },
        { n: "PancakeSwap",   u: "https://pancakeswap.finance",   d: "BSC DEX, huge volume" },
        { n: "Raydium",       u: "https://raydium.io",            d: "Solana AMM + yield farming" },
        { n: "1inch",         u: "https://1inch.io",              d: "DEX aggregator, best rates" },
        { n: "pump.fun",      u: "https://pump.fun",              d: "Create & trade Solana memecoins" },
      ]},
      { cat: "Research & Charts 🔍", tools: [
        { n: "CoinGecko",     u: "https://coingecko.com",     d: "Prices, data, project info" },
        { n: "CoinMarketCap", u: "https://coinmarketcap.com", d: "Market cap, volume, rankings" },
        { n: "Dexscreener",   u: "https://dexscreener.com",   d: "Real-time DEX token charts" },
        { n: "Dextools",      u: "https://dextools.io",       d: "DEX analytics & token info" },
        { n: "Birdeye",       u: "https://birdeye.so",        d: "Solana token analytics" },
        { n: "TradingView",   u: "https://tradingview.com",   d: "Professional charting" },
        { n: "Token Sniffer", u: "https://tokensniffer.com",  d: "Rug pull & honeypot detection" },
        { n: "Bubblemaps",    u: "https://bubblemaps.io",     d: "Token holder visualization" },
      ]},
      { cat: "Block Explorers 🔎", tools: [
        { n: "Etherscan",    u: "https://etherscan.io",   d: "Ethereum transaction explorer" },
        { n: "Solscan",      u: "https://solscan.io",     d: "Solana transaction explorer" },
        { n: "BscScan",      u: "https://bscscan.com",    d: "BSC transaction explorer" },
        { n: "Polygonscan",  u: "https://polygonscan.com",d: "Polygon transaction explorer" },
      ]},
      { cat: "Learn & News 📚", tools: [
        { n: "Bitcoin Whitepaper", u: "https://bitcoin.org/bitcoin.pdf",  d: "Satoshi's original paper — read it" },
        { n: "Ethereum Learn",     u: "https://ethereum.org/en/learn/",   d: "Official ETH learning hub" },
        { n: "CoinDesk",           u: "https://coindesk.com",             d: "Crypto news #1" },
        { n: "The Block",          u: "https://theblock.co",              d: "Institutional research & news" },
        { n: "Bankless",           u: "https://bankless.com",             d: "DeFi culture & deep dives" },
        { n: "Decrypt",            u: "https://decrypt.co",               d: "Beginner-friendly crypto news" },
      ]},
    ],

    /* Safety */
    safeH2:  "Security Rules",
    safeSub: "Most losses in crypto are self-inflicted. Read this once. Remember it always.",
    safeRules: [
      { icon: "🔑", title: "Seed phrase = your money",         body: "Your 12–24 word seed phrase IS your wallet. Write on paper, store offline, never photograph, never type anywhere digital. Lose it = lose everything, permanently." },
      { icon: "🔐", title: "Use 2FA everywhere",               body: "Enable 2FA on every exchange. Use an authenticator app (Google Authenticator or Authy) — NOT SMS. SIM swap attacks are common in India." },
      { icon: "🌐", title: "Bookmark official URLs",           body: "Phishing sites look identical to real ones. Bookmark binance.com, coinswitch.co manually. Never click crypto links from Google ads, DMs, or emails." },
      { icon: "📵", title: "Ignore DMs completely",            body: "Any DM offering crypto help, airdrops, or exclusive groups = scam. 100% of the time. Binance, MetaMask, WazirX never DM users." },
      { icon: "🧪", title: "Always send a test transaction",   body: "Before any large transfer, send ₹10–20 worth first. Verify it arrived. Then send the rest. Costs ~₹1 in fees and can save everything." },
      { icon: "⛓️", title: "Wrong network = lost funds",       body: "ETH sent on Solana network is gone. SOL sent on ETH network is gone. Triple-check the network before confirming every withdrawal." },
      { icon: "📊", title: "Never use leverage as a beginner", body: "10x leveraged positions liquidate from a 10% market move. Markets regularly move 10–20% in minutes. Even professionals consistently lose on leverage." },
      { icon: "🎣", title: "Guaranteed returns = scam",        body: "No crypto investment guarantees returns. Anyone promising 10x, daily profits, or guaranteed ROI is running a scam. Always." },
      { icon: "👤", title: "Complete KYC on exchanges",        body: "Complete KYC on regulated exchanges. Unverified accounts face withdrawal limits and can be frozen under government regulations." },
      { icon: "💾", title: "Backup in multiple locations",     body: "Store seed phrases in 2–3 secure physical locations. One fire or flood should not destroy your access." },
    ],

    footerDisclaimer: "Educational guide only. Not financial advice. Crypto investments are high risk. DYOR. We are not SEBI registered advisors.",
  },

  /* ── ASSAMESE ─────────────────────────────────────────────────────────────── */
  as: {
    nav0: "মূল পৃষ্ঠা", nav1: "নতুনসকল",  nav2: "Memecoins",
    nav3: "Wallets",     nav4: "সঁজুলি",    nav5: "সুৰক্ষা",
    nav6: "প্ৰশ্নোত্তৰ",
    mob0: "মূল",         mob1: "শিক্ষা",    mob2: "Meme",
    mob3: "Wallet",      mob4: "সঁজুলি",    mob5: "সুৰক্ষা",
    mob6: "FAQ", 
    nav7: "মিডিয়া",
    mob7: "মিডিয়া",

    siteTitle:    "BuyCryptoWisely — Bitcoin, DeFi আৰু Memecoins গাইড",
    siteDesc:     "ভাৰতত Bitcoin কিনাৰ সম্পূৰ্ণ গাইড। ₹৫০ৰে আৰম্ভ কৰক। English আৰু Assamese-ত উপলব্ধ।",
    siteKeywords: "bitcoin assam, bitcoin assamese, crypto guide assam, memecoin assamese, defi india, bitcoin india, buycryptowisely",

    pageTitles: {
      "/":          "BuyCryptoWisely — Bitcoin, DeFi আৰু Memecoins গাইড",
      "/beginners": "Crypto নতুনসকলৰ গাইড — BuyCryptoWisely",
      "/memecoins": "Memecoin গাইড — BuyCryptoWisely",
      "/wallets":   "Crypto Wallet গাইড — BuyCryptoWisely",
      "/tools":     "সৰ্বোত্তম Crypto সঁজুলি — BuyCryptoWisely",
      "/safety":    "Crypto সুৰক্ষা গাইড — BuyCryptoWisely",
      "/faq":       "সঘনাই সোধা প্ৰশ্ন — BuyCryptoWisely",
    },
    pageDescs: {
      "/":          "ভাৰতৰ বাবে বিনামূলীয়া crypto শিক্ষা। ₹৫০ৰে Bitcoin-ত বিনিয়োগ কৰক। English আৰু Assamese।",
      "/beginners": "ভাৰতত প্ৰথম Bitcoin বা crypto কিনাৰ step-by-step গাইড।",
      "/memecoins": "Solana, BSC আৰু ETH-ত memecoins কেনেকৈ trade কৰিব।",
      "/wallets":   "ভাৰতীয় crypto users-ৰ বাবে custodial বনাম self-custody wallet।",
      "/tools":     "ভাৰতৰ বাবে সম্পূৰ্ণ crypto exchange, wallet, DEX তালিকা।",
      "/safety":    "Crypto security-ৰ অত্যাৱশ্যকীয় নিয়ম — hack আৰু scam ৰক্ষা।",
      "/faq":       "ক্ৰিপ্টোকাৰেন্সি, বিনিয়োগ, সুৰক্ষা সম্পৰ্কে সাধাৰণ প্ৰশ্নৰ উত্তৰ।",
    },

    heroBadge:  "বিনামূলীয়া ক্ৰিপ্টো শিক্ষা",
    heroH1a:    "আপোনাৰ সম্পূৰ্ণ",
    heroH1b:    "ক্ৰিপ্টো গাইড",
    heroH1c:    "শূন্যৰ পৰা হিৰোলৈ",
    heroSub:    "₹৫০ৰ পৰা self-custody লৈ — সকলো তথ্য এঠাইতে। Bitcoin শিকক, DeFi বুজক, memecoin জগতত টিকি থাকক।",
    heroCta1:   "শিকা আৰম্ভ কৰক",
    heroCta2:   "সকলো সঁজুলি",
    heroStat1:  "আৰম্ভ কৰক",   heroStat1v: "₹৫০",
    heroStat2:  "Platform",     heroStat2v: "৩০+",
    heroStat3:  "ভাষা",         heroStat3v: "২",
    liveLabel:  "লাইভ",

    /* HomePage specific translations - Assamese */
    heroBadgeFull: "ভাৰতৰ বিনামূলীয়া ক্ৰিপ্টো শিক্ষা প্লেটফৰ্ম",
    heroHeading1: "আপোনাৰ সম্পূৰ্ণ",
    heroHeading2: "ক্ৰিপ্টো গাইড",
    heroHeading3: "শূন্যৰ পৰা হিৰোলৈ",
    heroSubheading: "₹৫০ৰ পৰা self-custody লৈ — আপুনি জানিব লগা সকলো তথ্য এঠাইতে। Bitcoin, DeFi, আৰু সুৰক্ষিত থকাৰ উপায় শিকক।",
    heroCta1Full: "বিনামূলীয়া শিক্ষা আৰম্ভ কৰক",
    heroCta2Full: "সঁজুলি অন্বেষণ কৰক",

    trust1: "বিনামূলীয়া গাইড",
    trust2: "দ্বিভাষিক",
    trust3: "সুৰক্ষা শিক্ষা",

    guidesStat: "গাইড",
    topicsStat: "বিষয়",
    languagesStat: "ভাষা",
    startStat: "আৰম্ভ কৰক",

    priceSectionTitle: "ক্ৰিপ্টো কৰেন্সিৰ মূল্য",
    priceSectionSub: "শৈক্ষিক উদ্দেশ্যেৰে বাস্তৱ সময়ৰ বজাৰ তথ্য",

    whyChooseTitle: "কিয় BuyCryptoWisely বাছক",
    whyChooseSub: "কেৱল শিক্ষা। কোনো এক্সচেঞ্জ নহয়। কোনো ট্ৰেডিং নহয়। কেৱল জ্ঞান।",

    exploreTitle: "ক্ৰিপ্টো গাইড অন্বেষণ কৰক",
    exploreSub: "প্ৰতিটো ক্ৰিপ্টো যাত্ৰাৰ বাবে স্তৰীয় গাইড",

    feature1Title: "বিনামূলীয়া শৈক্ষিক সমল",
    feature1Desc: "ক্ৰিপ্টো কৰেন্সি বুজিবলৈ সম্পূৰ্ণ বিনামূলীয়া গাইড। কোনো লুকাইত খৰচ নাই, কোনো পেইড কোৰ্চ নাই।",
    feature2Title: "দ্বিভাষিক শিক্ষা",
    feature2Desc: "ইংৰাজী আৰু অসমীয়া ভাষাত সম্পূৰ্ণ সমৰ্থন। আপোনাৰ পছন্দৰ ভাষাত ক্ৰিপ্টো শিকক।",
    feature3Title: "নতুনসকলৰ বাবে উপযোগী",
    feature3Desc: "শূন্যৰ পৰা আৰম্ভ কৰক। সম্পূৰ্ণ নতুনসকলৰ বাবে ডিজাইন কৰা স্তৰীয় গাইড।",
    feature4Title: "সুৰক্ষা প্ৰথম শিক্ষা",
    feature4Desc: "স্কেম, ৰাগ পুল, আৰু সাধাৰণ ক্ৰিপ্টো বিপদৰ পৰা নিজকে কেনেকৈ বচাব শিকক।",

    /* FAQ Section - Assamese */
    faqTitle: "সঘনাই সোধা প্ৰশ্ন",
    faqSubtitle: "প্ৰশ্ন আছে? আমাৰ ওচৰত উত্তৰ আছে।",
    faq1Q: "ক্ৰিপ্টোকাৰেন্সি কি?",
    faq1A: "ক্ৰিপ্টোকাৰেন্সি হৈছে ব্লকচেইন প্ৰযুক্তিত কাম কৰা ডিজিটেল টকা। নিয়মীয়া টকাৰ দৰে নহয়, ক্ৰিপ্টো বিকেন্দ্ৰীকৃত - কোনো বেংক বা চৰকাৰে ইয়াক নিয়ন্ত্ৰণ নকৰে। বিটকইন আছিল প্ৰথম ক্ৰিপ্টোকাৰেন্সি, ২০০৯ চনত সৃষ্টি কৰা হৈছিল।",
    faq2Q: "₹৫০ৰে ক্ৰিপ্টোত বিনিয়োগ কেনেকৈ আৰম্ভ কৰিম?",
    faq2A: "CoinSwitch বা CoinDCX দৰে বিশ্বাসযোগ্য ভাৰতীয় এক্সচেঞ্জ এপ ডাউনলোড কৰক। আপোনাৰ PAN আৰু Aadhaar দি KYC সম্পূৰ্ণ কৰক। UPI-ৰে ₹৫০ যোগ কৰক। সৰু পৰিমাণৰ বিটকইন বা যিকোনো ক্ৰিপ্টো কিনক। আমাৰ 'নতুনসকলৰ গাইড'ত বিস্তাৰিত পদক্ষেপ আছে।",
    faq3Q: "ভাৰতত ক্ৰিপ্টোকাৰেন্সি বৈধ নে?",
    faq3A: "হয়, ভাৰতত ক্ৰিপ্টোকাৰেন্সি কিনা, বেচা আৰু ধৰি ৰখা বৈধ। কিন্তু ক্ৰিপ্টো লাভৰ ওপৰত ৩০% কৰ আৰু নিৰ্দিষ্ট সীমাৰ ওপৰৰ লেনদেনত ১% TDS প্ৰযোজ্য। সদায় CoinSwitch, CoinDCX, বা Binance দৰে পঞ্জীয়নভুক্ত এক্সচেঞ্জ ব্যৱহাৰ কৰক।",
    faq4Q: "এক্সচেঞ্জ আৰু ওৱলেটৰ মাজত পাৰ্থক্য কি?",
    faq4A: "এক্সচেঞ্জ (যেনে Binance, CoinDCX) হৈছে আপুনি ক্ৰিপ্টো কিনা ঠাই - কিন্তু তেওঁলোকে আপোনাৰ প্ৰাইভেট কিজ ধৰে। ওৱলেট (যেনে Trust Wallet, MetaMask) হৈছে আপুনি ক্ৰিপ্টো সংৰক্ষণ কৰা ঠাই - আপুনি নিজে কিজ ধৰে। সৰু পৰিমাণৰ বাবে এক্সচেঞ্জ ভাল। বড় পৰিমাণৰ বাবে self-custody ওৱলেট ব্যৱহাৰ কৰক।",
    faq5Q: "মেমেকইন কি? ইয়াক সুৰক্ষিত বুলি ভবা হয় নে?",
    faq5A: "মেমেকইন (যেনে Dogecoin, Shiba Inu) হৈছে কোনো প্ৰকৃত উপযোগিতাহীন ক্ৰিপ্টোকাৰেন্সি - ইয়াৰ মূল্য হাইপ আৰু কমিউনিটিৰ পৰা আহে। অতি বিপজ্জনক। বেছিভাগ মেমেকইন শূন্যলৈ যায়। আপুনি সম্পূৰ্ণৰূপে হেৰুৱাবলৈ সাজু থকা ধনহে বিনিয়োগ কৰক। কিনাৰ আগতে সদায় ৰাগ পুল পৰীক্ষা কৰক।",
    faq6Q: "DeFi কি আৰু ই কেনেকৈ কাম কৰে?",
    faq6A: "DeFi (বিকেন্দ্ৰীকৃত ফাইনেন্স) আপোনাক বেংক অবিহনে ধাৰ দিয়া, ধাৰ লোৱা, আৰু ট্ৰেডিং কৰাৰ সুবিধা দিয়ে। ইথেৰিয়াম আৰু ছোলানা দৰে ব্লকচেইনত স্মাৰ্ট কণ্ট্ৰেক্টৰ জৰিয়তে কাম কৰে। আপুনি আপোনাৰ ক্ৰিপ্টোৰ ওপৰত সুত উপাৰ্জন কৰিব পাৰে বা পোনপটীয়াকৈ ওৱলেটৰ পৰা ট্ৰেড কৰিব পাৰে।",
    faq7Q: "ক্ৰিপ্টো স্কেমৰ পৰা নিজকে কেনেকৈ ৰক্ষা কৰিম?",
    faq7A: "কেতিয়াও আপোনাৰ ছিড ফ্ৰেজ কাকো নকয়। সকলো এক্সচেঞ্জত 2FA ব্যৱহাৰ কৰক। অফিচিয়াল URL বুকমাৰ্ক কৰক - কেতিয়াও বিজ্ঞাপন বা DMৰ পৰা ক্ৰিপ্টো লিংকত ক্লিক নকৰিব। বড় ট্ৰান্সফাৰৰ আগতে টেষ্ট ট্ৰান্সফাৰ কৰক। 'গুৰান্টীড ৰিটাৰ্ণ' স্কীমত কেতিয়াও বিনিয়োগ নকৰিব। সম্পূৰ্ণ সুৰক্ষা নিয়মৰ বাবে আমাৰ 'সুৰক্ষা গাইড' চাওক।",
    faq8Q: "নতুনসকলৰ বাবে শ্ৰেষ্ঠ ক্ৰিপ্টোকাৰেন্সি কি কি?",
    faq8A: "নতুনসকলৰ বাবে প্ৰতিষ্ঠিত ক্ৰিপ্টোকাৰেন্সিৰ পৰা আৰম্ভ কৰক: বিটকইন (BTC) - মূল ক্ৰিপ্টো, ইথেৰিয়াম (ETH) - স্মাৰ্ট কণ্ট্ৰেক্ট প্লেটফৰ্ম, ছোলানা (SOL) - দ্ৰুত আৰু সস্তা। বিপদ বুজি নোপোৱালৈকে মেমেকইন আৰু নতুন প্ৰকল্প পৰিহাৰ কৰক।",
    faq9Q: "অসমীয়া ভাষাত ক্ৰিপ্টো কেনেকৈ শিকিম?",
    faq9A: "আমাৰ সম্পূৰ্ণ ৱেবছাইট অসমীয়াত উপলব্ধ! কেৱল শীৰ্ষ নেভিগেশ্বন বাৰত 'অ' বুটামত ক্লিক কৰক। সকলো গাইড, পদক্ষেপ, আৰু ব্যাখ্যা অসমীয়াত অনুবাদ কৰা হৈছে। অসমীয়াত আমাৰ 'নতুনসকলৰ গাইড'ৰ পৰা আৰম্ভ কৰক।",

    beginH2:  "নতুনসকলৰ গাইড",
    beginSub: "মাত্ৰ ₹৫০ৰে আৰম্ভ কৰক। এই ৫টা পদক্ষেপ ক্ৰমে অনুসৰণ কৰক।",
    steps: [
      {
        num: "০১", icon: "📲",
        title: "Custodial App ডাউনলোড কৰক",
        body: "সবচেয়ে সহজ আৰম্ভণি। আধিকাৰিক App Store বা Play Store-ৰ পৰা CoinSwitch, CoinDCX, WazirX, বা BNS install কৰক। PAN আৰু Aadhaar দিৰে KYC সম্পূৰ্ণ কৰক। UPI-ৰে টকা যোগ কৰক — কম্পক্ষে ₹৫০।",
        warn: "এইবোৰ custodial app — platform-এ আপোনাৰ private keys ধৰে। WazirX ২০২৪-ত hack হৈছিল। বড় পৰিমাণ সদায় নিজৰ wallet-লৈ transfer কৰক।",
        links: [
          { n: "CoinSwitch",   u: "https://coinswitch.co" },
          { n: "CoinDCX",      u: "https://coindcx.com" },
          { n: "WazirX",       u: "https://wazirx.com" },
          { n: "BNS (Bitbns)", u: "https://bitbns.com" },
        ]
      },
      {
        num: "০২", icon: "🌐",
        title: "বড় পৰিমাণৰ বাবে Global Exchange",
        body: "আৰামদায়ক হলে Binance বা Coinbase-লৈ যাওক। বেছি coins, কম fees। Sign up → KYC → P2P-ৰে INR দিৰে USDT কিনক → BTC, ETH, SOL কিনক।",
        links: [
          { n: "Binance",  u: "https://binance.com" },
          { n: "Coinbase", u: "https://coinbase.com" },
          { n: "Gemini",   u: "https://gemini.com" },
        ]
      },
      {
        num: "০৩", icon: "🔐",
        title: "Self-Custody Wallet Install কৰক",
        body: "এয়াই সঁচা মালিকানা। কেৱল আধিকাৰিক website-ৰ পৰাহে install কৰক। Seed phrase কাগজত লিখক। Offline ৰাখক, কেতিয়াও ফটো নোলোৱাব।",
        warn: "App store-ত শতশত নকল wallet app আছে। কেৱল official website URL-ৰ পৰাহে download কৰক।",
        links: [
          { n: "Trust Wallet",  u: "https://trustwallet.com" },
          { n: "MetaMask",      u: "https://metamask.io" },
          { n: "Phantom (SOL)", u: "https://phantom.app" },
          { n: "Solflare",      u: "https://solflare.com" },
        ]
      },
      {
        num: "০৪", icon: "🔀",
        title: "Wallet-লৈ Withdraw কৰক",
        body: "Binance → Withdraw → coin → সঠিক network → address। প্ৰথমে সৰু পৰিমাণ পঠিয়াওক। নিশ্চিত হলে বাকী পঠিয়াওক।",
        warn: "ভুল network = চিৰকালৰ বাবে হেৰোৱা funds। প্ৰতিবাৰ network তিনিবাৰ পৰীক্ষা কৰক।"
      },
      {
        num: "০৫", icon: "📊",
        title: "Prices Track কৰক",
        body: "CoinGecko বা CoinMarketCap-ৰে prices track কৰক। দীৰ্ঘমেয়াদী holding-ৰ বাবে Ledger বা Trezor বিবেচনা কৰক।",
        links: [
          { n: "CoinGecko",     u: "https://coingecko.com" },
          { n: "CoinMarketCap", u: "https://coinmarketcap.com" },
          { n: "Ledger",        u: "https://ledger.com" },
        ]
      },
    ],

    memeH2:   "Memecoin গাইড",
    memeSub:  "উচ্চ ঝুঁকি। সম্ভাব্য উচ্চ পুৰস্কাৰ। আগে পঢ়ক।",
    memeWarn: "Memecoins-ৰ কোনো অন্তৰ্নিহিত মূল্য নাই। বেছিভাগ শূন্যলৈ যায়। Rug pulls, honeypots সাধাৰণ। কেৱল সম্পূৰ্ণ হেৰুৱাবলৈ সাজু থকা টকাহে ব্যৱহাৰ কৰক।",
    memeSteps: [
      {
        num: "০১", icon: "🔍",
        title: "Dexscreener-ত Trending Tokens বিচাৰক",
        body: "dexscreener.com-লৈ যাওক। Chain বাছক। 24h volume-ৰে sort কৰক। High volume, locked liquidity আৰু renounced contract বিচাৰক।",
        links: [
          { n: "Dexscreener",   u: "https://dexscreener.com" },
          { n: "Birdeye (SOL)", u: "https://birdeye.so" },
        ]
      },
      {
        num: "০২", icon: "🛡️",
        title: "Token Verify কৰক",
        body: "Contract address copy কৰক। Token Sniffer-ত rug risk পৰীক্ষা কৰক। Bubblemaps-ত wallet concentration পৰীক্ষা কৰক। DM-ৰ পৰা token কেতিয়াও নকিনিব।",
        links: [
          { n: "Token Sniffer",  u: "https://tokensniffer.com" },
          { n: "Bubblemaps",     u: "https://bubblemaps.io" },
          { n: "RugCheck (SOL)", u: "https://rugcheck.xyz" },
        ]
      },
      {
        num: "০৩", icon: "💱",
        title: "DEX-ত কিনক",
        body: "Solana → Jupiter। BSC → PancakeSwap। ETH → Uniswap। Wallet connect → contract paste → slippage 1-5% → swap।",
        warn: "সম্পূৰ্ণ হেৰুৱাবলৈ সাজু নোহোৱা টকা কেতিয়াও নিবেশ নকৰিব।",
        links: [
          { n: "Jupiter (SOL)",    u: "https://jup.ag" },
          { n: "PancakeSwap (BSC)",u: "https://pancakeswap.finance" },
          { n: "Uniswap (ETH)",    u: "https://uniswap.org" },
        ]
      },
      {
        num: "০৪", icon: "🧪",
        title: "নিজৰ Coin বনাওক",
        body: "Pump.fun-ৰে ২ মিনিটত Solana coin launch কৰক। খৰচ ~০.০২ SOL (~₹২৫০)।",
        links: [{ n: "pump.fun", u: "https://pump.fun" }]
      },
    ],

    wallH2:  "Wallet-ৰ প্ৰকাৰ",
    wallSub: "Custody বুজাটো crypto-ৰ সৰ্বাধিক গুৰুত্বপূৰ্ণ ধাৰণা।",
    wallets: [
      {
        icon: "🏦", name: "Custodial (Exchange)",
        risk: "মধ্যম", riskColor: B.yellow,
        pros: ["ব্যৱহাৰ সহজ", "Email-ৰে recover", "UPI deposit"],
        cons: ["Platform keys ধৰে", "Account freeze হব পাৰে", "Hack ঝুঁকি"],
        examples: "CoinSwitch · CoinDCX · Binance"
      },
      {
        icon: "📱", name: "Self-Custody (Mobile)",
        risk: "কম", riskColor: B.green,
        pros: ["আপুনি keys ধৰে", "কোনোৱে freeze কৰিব নোৱাৰে", "যিকোনো chain"],
        cons: ["Seed হেৰালে = চিৰকালৰ বাবে গ'ল", "Recovery নাই", "নিজে দায়িত্বশীল"],
        examples: "Trust Wallet · Phantom · MetaMask"
      },
      {
        icon: "🔑", name: "Hardware Wallet",
        risk: "অতি কম", riskColor: B.green,
        pros: ["Keys internet-ত নাযায়", "বড় পৰিমাণৰ বাবে সৰ্বোত্তম", "PIN সুৰক্ষা"],
        cons: ["₹৮,০০০–₹২০,০০০ খৰচ", "Physical device হেৰাব পাৰে"],
        examples: "Ledger Nano X · Trezor Model T"
      },
      {
        icon: "📄", name: "Paper Wallet",
        risk: "কম*", riskColor: B.yellow,
        pros: ["সম্পূৰ্ণ offline", "Hack নহয়", "বিনামূলীয়া"],
        cons: ["পুৰিব/ভিজিব পাৰে", "হেৰুৱাটো সহজ"],
        examples: "Offline generate · Safe-ত ৰখা"
      },
    ],

    glossaryTitle: "Crypto শব্দকোষ",
    terms: [
      ["Bitcoin (BTC)",  "প্ৰথম cryptocurrency। Digital gold। ২১ million-ৰ সৰ্বোচ্চ supply।"],
      ["Blockchain",     "প্ৰতিটো transaction record কৰা public ledger।"],
      ["Wallet",         "Private keys ৰখা app।"],
      ["Seed Phrase",    "Wallet-ৰ ১২-২৪ শব্দৰ master key।"],
      ["DeFi",           "Bank অবিহনে financial services।"],
      ["DEX",            "Account নোখোজাকৈ trade কৰা exchange।"],
      ["Memecoin",       "Utility নথকা, speculation-চালিত coin।"],
      ["Rug Pull",       "Developers project এৰি সকলো টকা চুৰি কৰা।"],
      ["Honeypot",       "কিনিব পাৰি কিন্তু বেচিব নোৱাৰি — ফান্দ।"],
      ["Gas Fee",        "Transaction process কৰাৰ খৰচ।"],
      ["HODLing",        "দীৰ্ঘমেয়াদে cryptocurrency ধৰি ৰখা।"],
      ["Stablecoin",     "USD-ত pegged coin। USDT, USDC।"],
      ["KYC",            "পৰিচয় verification।"],
    ],

    toolsH2:  "সম্পূৰ্ণ সঁজুলি তালিকা",
    toolsSub: "আপোনাৰ প্ৰয়োজনীয় সকলো platform — direct links।",
    toolCats: [
      { cat: "ভাৰতীয় Exchange 🇮🇳", tools: [
        { n: "CoinSwitch",   u: "https://coinswitch.co",  d: "নতুনসকলৰ বাবে সৰ্বোত্তম, UPI" },
        { n: "CoinDCX",      u: "https://coindcx.com",    d: "বৃহৎ selection, futures" },
        { n: "WazirX",       u: "https://wazirx.com",     d: "P2P market" },
        { n: "BNS (Bitbns)", u: "https://bitbns.com",     d: "SIP-style investing" },
      ]},
      { cat: "Global Exchange 🌍", tools: [
        { n: "Binance",  u: "https://binance.com",  d: "বিশ্বৰ সৰ্ববৃহৎ, P2P INR" },
        { n: "Coinbase", u: "https://coinbase.com", d: "সৰ্বাধিক বিশ্বাসযোগ্য" },
        { n: "OKX",      u: "https://okx.com",      d: "DeFi, NFTs built-in" },
      ]},
      { cat: "Wallets 💼", tools: [
        { n: "Trust Wallet", u: "https://trustwallet.com", d: "All-in-one, ৭০+ chains" },
        { n: "MetaMask",     u: "https://metamask.io",     d: "ETH + EVM chains" },
        { n: "Phantom",      u: "https://phantom.app",     d: "Solana wallet" },
        { n: "Ledger",       u: "https://ledger.com",      d: "Hardware wallet #1" },
      ]},
      { cat: "DeFi & DEX 🔀", tools: [
        { n: "Jupiter",     u: "https://jup.ag",              d: "Solana DEX" },
        { n: "PancakeSwap", u: "https://pancakeswap.finance", d: "BSC DEX" },
        { n: "Uniswap",     u: "https://uniswap.org",         d: "ETH DEX" },
        { n: "pump.fun",    u: "https://pump.fun",            d: "Memecoins বনাওক" },
      ]},
      { cat: "গৱেষণা সঁজুলি 🔍", tools: [
        { n: "CoinGecko",     u: "https://coingecko.com",     d: "মূল্য, তথ্য" },
        { n: "Dexscreener",   u: "https://dexscreener.com",   d: "DEX charts" },
        { n: "Token Sniffer", u: "https://tokensniffer.com",  d: "Rug pull detection" },
        { n: "Etherscan",     u: "https://etherscan.io",      d: "ETH explorer" },
        { n: "Solscan",       u: "https://solscan.io",        d: "Solana explorer" },
      ]},
      { cat: "শিকক আৰু বাতৰি 📚", tools: [
        { n: "Bitcoin Whitepaper", u: "https://bitcoin.org/bitcoin.pdf", d: "Satoshi-ৰ মূল কাগজ" },
        { n: "CoinDesk",           u: "https://coindesk.com",           d: "Crypto বাতৰি" },
        { n: "Decrypt",            u: "https://decrypt.co",             d: "নতুনসকলৰ বাবে" },
      ]},
    ],

    safeH2:  "সুৰক্ষাৰ নিয়ম",
    safeSub: "Crypto-ত বেছিভাগ ক্ষতি নিজেই কৰা হয়। এবাৰ পঢ়ক। সদায় মনত ৰাখক।",
    safeRules: [
      { icon: "🔑", title: "Seed phrase = আপোনাৰ টকা",       body: "১২–২৪ শব্দ হ'ল master key। কাগজত লিখক, offline ৰাখক, কেতিয়াও ফটো নোলোৱাব। হেৰালে = চিৰকালৰ বাবে গ'ল।" },
      { icon: "🔐", title: "সৰ্বত্ৰ 2FA ব্যৱহাৰ কৰক",        body: "Authenticator app ব্যৱহাৰ কৰক (Google Authenticator বা Authy) — SMS নহয়।" },
      { icon: "🌐", title: "Official URLs bookmark কৰক",      body: "Phishing sites আচলৰ দৰেই দেখা যায়। সদায় manually bookmark কৰক।" },
      { icon: "📵", title: "DMs উপেক্ষা কৰক",                body: "Airdrops, টকা দুগুণ, exclusive groups — সকলো DM = scam।" },
      { icon: "🧪", title: "Test Transaction পঠিয়াওক",       body: "বড় transfer-ৰ আগে ₹১০ পঠিয়াওক। নিশ্চিত হলে বাকী পঠিয়াওক।" },
      { icon: "⛓️", title: "ভুল network = funds হেৰোৱা",     body: "প্ৰতিবাৰ withdrawal-ৰ আগে network তিনিবাৰ পৰীক্ষা কৰক।" },
      { icon: "📊", title: "Leverage ব্যৱহাৰ নকৰিব",         body: "10x leverage 10% market move-তে সব liquidate কৰে। অভিজ্ঞরাও হেৰায়।" },
      { icon: "🎣", title: "Guaranteed returns = scam",       body: "কোনো crypto-এ returns guarantee নকৰে। প্ৰতিশ্ৰুতি দিওঁতা scam।" },
    ],

    footerDisclaimer: "শৈক্ষিক গাইড মাত্ৰ। Financial advice নহয়। Crypto investment উচ্চ ঝুঁকিপূৰ্ণ। DYOR। আমি SEBI-registered advisor নহওঁ।",
  },
};