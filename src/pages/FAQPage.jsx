import { useState } from 'react';
import { COLORS, SPACING, BORDER_RADIUS, ANIMATIONS } from '../utils/constants';

export const FAQPage = ({ translations }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: translations.faq1Q || "What is cryptocurrency?",
      answer: translations.faq1A || "Cryptocurrency is digital money that works on blockchain technology. Unlike regular money (INR), crypto is decentralized - no bank or government controls it. Bitcoin was the first cryptocurrency, created in 2009. Today there are thousands of cryptocurrencies with different uses.",
    },
    {
      question: translations.faq2Q || "How do I start investing in crypto with ₹50?",
      answer: translations.faq2A || "Start by downloading a trusted Indian exchange app like CoinSwitch or CoinDCX. Complete KYC with your PAN and Aadhaar. Add ₹50 via UPI. Buy a small amount of Bitcoin or any coin you like. Our Beginner's Guide has detailed step-by-step instructions.",
    },
    {
      question: translations.faq3Q || "Is cryptocurrency legal in India?",
      answer: translations.faq3A || "Yes, buying, selling, and holding cryptocurrency is legal in India. However, there is a 30% tax on crypto gains and 1% TDS on transactions above certain limits. Always use registered exchanges like CoinSwitch, CoinDCX, or Binance.",
    },
    {
      question: translations.faq4Q || "What is the difference between exchange and wallet?",
      answer: translations.faq4A || "An exchange (like Binance, CoinDCX) is where you BUY crypto - but they hold your private keys. A wallet (like Trust Wallet, MetaMask) is where you STORE crypto - YOU hold the keys. For small amounts, exchanges are fine. For large amounts, use a self-custody wallet.",
    },
    {
      question: translations.faq5Q || "What is a memecoin and are they safe?",
      answer: translations.faq5A || "Memecoins (like Dogecoin, Shiba Inu) are cryptocurrencies with no real utility - their value comes from hype and community. They are EXTREMELY risky. Most memecoins go to zero. Only invest money you can afford to lose completely. Always check for rug pulls before buying.",
    },
    {
      question: translations.faq6Q || "What is DeFi and how does it work?",
      answer: translations.faq6A || "DeFi (Decentralized Finance) lets you use financial services like lending, borrowing, and trading without banks. It works through smart contracts on blockchains like Ethereum and Solana. You can earn interest on your crypto or trade directly from your wallet.",
    },
    {
      question: translations.faq7Q || "How do I protect myself from crypto scams?",
      answer: translations.faq7A || "Never share your seed phrase with anyone. Use 2FA on all exchanges. Bookmark official URLs - never click crypto links from ads or DMs. Send test transactions before large transfers. Never invest in 'guaranteed returns' schemes. Check our Safety Guide for complete security rules.",
    },
    {
      question: translations.faq8Q || "What are the best cryptocurrencies for beginners?",
      answer: translations.faq8A || "For beginners, start with established cryptocurrencies: Bitcoin (BTC) - the original crypto, Ethereum (ETH) - smart contract platform, Solana (SOL) - fast and cheap. Avoid memecoins and new projects until you understand the risks.",
    },
    {
      question: translations.faq9Q || "How do I learn crypto in Assamese language?",
      answer: translations.faq9A || "Our entire website is available in Assamese! Just click the 'অ' button in the top navigation bar to switch to Assamese. All guides, steps, and explanations are translated for Assamese speakers. Start with our Beginner's Guide in Assamese.",
    },
  ];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: `${SPACING.xxxl}px ${SPACING.md}px ${SPACING.xxxl}px` }}>
      <div style={{ textAlign: "center", marginBottom: SPACING.xl }}>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: COLORS.text, marginBottom: SPACING.md }}>
          {translations.faqTitle || "Frequently Asked Questions"}
        </h1>
        <p style={{ fontSize: 16, color: COLORS.textSec }}>
          {translations.faqSubtitle || "Got questions? We've got answers."}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: SPACING.sm }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              background: COLORS.bgCard,
              border: `1px solid ${openIndex === index ? COLORS.primary : COLORS.border}`,
              borderRadius: BORDER_RADIUS.lg,
              overflow: "hidden",
              transition: `all ${ANIMATIONS.normal}`,
            }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: `${SPACING.lg}px ${SPACING.xl}px`,
                cursor: "pointer",
                background: "transparent",
                border: "none",
                textAlign: "left",
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 600, color: COLORS.text, flex: 1, lineHeight: 1.4 }}>
                {faq.question}
              </span>
              <span
                style={{
                  color: openIndex === index ? COLORS.primary : COLORS.textSec,
                  fontSize: 24,
                  transition: `transform ${ANIMATIONS.normal}`,
                  transform: openIndex === index ? "rotate(45deg)" : "rotate(0)",
                  flexShrink: 0,
                  marginLeft: SPACING.md,
                }}
              >
                +
              </span>
            </button>

            {openIndex === index && (
              <div style={{ padding: `0 ${SPACING.xl}px ${SPACING.xl}px ${SPACING.xl}px`, borderTop: `1px solid ${COLORS.border}` }}>
                <p style={{ fontSize: 14, color: COLORS.textSec, lineHeight: 1.7, marginTop: SPACING.md }}>
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};