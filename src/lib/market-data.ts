// Marktdaten von CoinGecko und Yahoo Finance (kostenlose APIs)
export const assets = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    type: "crypto",
    price: 35000,
    change24h: 2.34,
    volume24h: 28900000000,
    marketCap: 680000000000,
    image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
    description: "Die erste und bekannteste Kryptowährung.",
    rank: 1
  },
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    type: "crypto",
    price: 2000,
    change24h: -1.23,
    volume24h: 15600000000,
    marketCap: 240000000000,
    image: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
    description: "Die zweitgrößte Kryptowährung und Smart-Contract-Plattform.",
    rank: 2
  },
  {
    id: "bnb",
    name: "Binance Coin",
    symbol: "BNB",
    type: "crypto",
    price: 310,
    change24h: 0.85,
    volume24h: 980000000,
    marketCap: 47000000000,
    image: "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
    description: "Die native Kryptowährung der Binance Exchange.",
    rank: 3
  },
  {
    id: "sol",
    name: "Solana",
    symbol: "SOL",
    type: "crypto",
    price: 95,
    change24h: 5.67,
    volume24h: 2300000000,
    marketCap: 41000000000,
    image: "https://assets.coingecko.com/coins/images/4128/small/solana.png",
    description: "Eine schnelle, sichere und zensurresistente Blockchain.",
    rank: 4
  },
  {
    id: "ada",
    name: "Cardano",
    symbol: "ADA",
    type: "crypto",
    price: 0.5,
    change24h: -2.45,
    volume24h: 890000000,
    marketCap: 17000000000,
    image: "https://assets.coingecko.com/coins/images/975/small/cardano.png",
    description: "Eine Blockchain-Plattform für Changemaker und Innovatoren.",
    rank: 5
  },
  {
    id: "xrp",
    name: "XRP",
    symbol: "XRP",
    type: "crypto",
    price: 0.6,
    change24h: 1.12,
    volume24h: 1200000000,
    marketCap: 32000000000,
    image: "https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png",
    description: "Digitale Zahlungslösung für globale Transaktionen.",
    rank: 6
  },
  {
    id: "doge",
    name: "Dogecoin",
    symbol: "DOGE",
    type: "crypto",
    price: 0.08,
    change24h: 3.45,
    volume24h: 560000000,
    marketCap: 11000000000,
    image: "https://assets.coingecko.com/coins/images/5/small/dogecoin.png",
    description: "Die ursprüngliche Meme-Kryptowährung.",
    rank: 7
  },
  {
    id: "dot",
    name: "Polkadot",
    symbol: "DOT",
    type: "crypto",
    price: 7.2,
    change24h: -0.78,
    volume24h: 340000000,
    marketCap: 9000000000,
    image: "https://assets.coingecko.com/coins/images/12171/small/polkadot.png",
    description: "Protokoll für die Verbindung von Blockchains.",
    rank: 8
  },
  {
    id: "matic",
    name: "Polygon",
    symbol: "MATIC",
    type: "crypto",
    price: 0.85,
    change24h: 1.56,
    volume24h: 450000000,
    marketCap: 8500000000,
    image: "https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png",
    description: "Ethereum-Skalierungslösung für Web3-Anwendungen.",
    rank: 9
  },
  {
    id: "link",
    name: "Chainlink",
    symbol: "LINK",
    type: "crypto",
    price: 13.5,
    change24h: 2.34,
    volume24h: 280000000,
    marketCap: 7200000000,
    image: "https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png",
    description: "Dezentrales Oracle-Netzwerk für Smart Contracts.",
    rank: 10
  },
  {
    id: "aapl",
    name: "Apple Inc.",
    symbol: "AAPL",
    type: "stock",
    price: 180,
    change24h: 0.45,
    volume24h: 980000000,
    marketCap: 2800000000000,
    image: "https://companiesmarketcap.com/img/company-logos/64/AAPL.webp",
    description: "Technologieunternehmen und Hersteller von iPhones.",
    rank: 1
  },
  {
    id: "msft",
    name: "Microsoft",
    symbol: "MSFT",
    type: "stock",
    price: 310,
    change24h: 1.23,
    volume24h: 850000000,
    marketCap: 2300000000000,
    image: "https://companiesmarketcap.com/img/company-logos/64/MSFT.webp",
    description: "Softwareunternehmen und Cloud-Computing-Anbieter.",
    rank: 2
  },
  {
    id: "googl",
    name: "Alphabet (Google)",
    symbol: "GOOGL",
    type: "stock",
    price: 140,
    change24h: 0.89,
    volume24h: 680000000,
    marketCap: 1700000000000,
    image: "https://companiesmarketcap.com/img/company-logos/64/GOOGL.webp",
    description: "Technologieunternehmen und Suchmaschinenanbieter.",
    rank: 3
  },
  {
    id: "amzn",
    name: "Amazon",
    symbol: "AMZN",
    type: "stock",
    price: 125,
    change24h: -0.78,
    volume24h: 720000000,
    marketCap: 1300000000000,
    image: "https://companiesmarketcap.com/img/company-logos/64/AMZN.webp",
    description: "E-Commerce und Cloud-Computing-Unternehmen.",
    rank: 4
  },
  {
    id: "nvda",
    name: "NVIDIA",
    symbol: "NVDA",
    type: "stock",
    price: 450,
    change24h: 2.56,
    volume24h: 560000000,
    marketCap: 1100000000000,
    image: "https://companiesmarketcap.com/img/company-logos/64/NVDA.webp",
    description: "Hersteller von Grafikprozessoren und KI-Chips.",
    rank: 5
  },
  {
    id: "meta",
    name: "Meta Platforms",
    symbol: "META",
    type: "stock",
    price: 330,
    change24h: 1.45,
    volume24h: 480000000,
    marketCap: 850000000000,
    image: "https://companiesmarketcap.com/img/company-logos/64/META.webp",
    description: "Social Media und Metaverse-Unternehmen.",
    rank: 6
  },
  {
    id: "tsla",
    name: "Tesla",
    symbol: "TSLA",
    type: "stock",
    price: 240,
    change24h: -1.23,
    volume24h: 520000000,
    marketCap: 760000000000,
    image: "https://companiesmarketcap.com/img/company-logos/64/TSLA.webp",
    description: "Elektrofahrzeug- und Energieunternehmen.",
    rank: 7
  },
  {
    id: "brk-b",
    name: "Berkshire Hathaway",
    symbol: "BRK.B",
    type: "stock",
    price: 350,
    change24h: 0.34,
    volume24h: 280000000,
    marketCap: 720000000000,
    image: "https://companiesmarketcap.com/img/company-logos/64/BRK.B.webp",
    description: "Investmentholding von Warren Buffett.",
    rank: 8
  },
  {
    id: "v",
    name: "Visa",
    symbol: "V",
    type: "stock",
    price: 250,
    change24h: 0.67,
    volume24h: 240000000,
    marketCap: 520000000000,
    image: "https://companiesmarketcap.com/img/company-logos/64/V.webp",
    description: "Globales Zahlungstechnologieunternehmen.",
    rank: 9
  },
  {
    id: "jnj",
    name: "Johnson & Johnson",
    symbol: "JNJ",
    type: "stock",
    price: 160,
    change24h: -0.45,
    volume24h: 180000000,
    marketCap: 480000000000,
    image: "https://companiesmarketcap.com/img/company-logos/64/JNJ.webp",
    description: "Healthcare und Pharmazieunternehmen.",
    rank: 10
  }
];

export type Asset = typeof assets[0];

export function getAssetsByType(type: "crypto" | "stock") {
  return assets.filter(asset => asset.type === type);
}

export function getTopAssets(limit: number = 10) {
  return assets.slice(0, limit);
}

export function searchAssets(query: string) {
  const lowercaseQuery = query.toLowerCase();
  return assets.filter(asset => 
    asset.name.toLowerCase().includes(lowercaseQuery) ||
    asset.symbol.toLowerCase().includes(lowercaseQuery)
  );
}

export function getAssetById(id: string) {
  return assets.find(asset => asset.id === id);
}

// Simulierte historische Daten für Charts
export function getAssetHistory(id: string, days: number = 30) {
  const asset = getAssetById(id);
  if (!asset) return [];

  const data = [];
  let currentPrice = asset.price;
  const now = new Date();

  for (let i = days; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);

    // Simuliere Preisschwankungen
    const change = (Math.random() - 0.5) * 0.05; // ±2.5% Änderung
    currentPrice = currentPrice * (1 + change);

    data.push({
      date: date.toISOString(),
      price: currentPrice,
      volume: asset.volume24h * (0.5 + Math.random()),
    });
  }

  return data;
} 