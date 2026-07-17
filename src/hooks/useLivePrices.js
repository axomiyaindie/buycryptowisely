import { useState, useEffect } from 'react';
import { COINS_META } from '../data/content';

export const useLivePrices = () => {
  const defaultPrices = Object.fromEntries(
    COINS_META.map(coin => [
      coin.id,
      { usd: coin.defaultUsd, inr: coin.defaultInr, change: coin.defaultChange }
    ])
  );

  const [prices, setPrices] = useState(defaultPrices);
  const [status, setStatus] = useState("loading");
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const coinIds = COINS_META.map(c => c.id).join(",");

    const fetchPrices = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=usd,inr&include_24hr_change=true`,
          { signal: controller.signal }
        );

        clearTimeout(timeoutId);

        if (!response.ok) throw new Error("API request failed");

        const data = await response.json();
        
        if (!isMounted) return;

        const updatedPrices = {};
        for (const [id, coinData] of Object.entries(data)) {
          updatedPrices[id] = {
            usd: coinData.usd,
            inr: coinData.inr,
            change: coinData.usd_24h_change?.toFixed(2) || 0,
          };
        }

        setPrices(prev => ({ ...prev, ...updatedPrices }));
        setStatus("live");
        setLastUpdated(new Date());
      } catch (error) {
        if (isMounted) {
          setStatus("error");
          console.error("Price fetch error:", error);
        }
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return { prices, status, lastUpdated };
};