"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search,
  Filter,
  TrendingUp,
  Clock,
  Star,
  Users,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle
} from "lucide-react";
import Link from "next/link";

// Dummy data for trader categories
const categories = [
  {
    id: "crypto",
    name: "Krypto Trader",
    description: "Spezialisiert auf Kryptowährungen",
    traders: 234,
    avgReturn: 45.6
  },
  {
    id: "stocks",
    name: "Aktien Trader",
    description: "Fokus auf Aktien und ETFs",
    traders: 156,
    avgReturn: 23.4
  },
  {
    id: "forex",
    name: "Forex Trader",
    description: "Devisenhandel und Währungspaare",
    traders: 89,
    avgReturn: 18.9
  }
];

// Dummy data for top traders
const traders = [
  {
    id: 1,
    name: "Alex Thompson",
    handle: "crypto_master",
    avatar: "AT",
    verified: true,
    pro: true,
    description: "Erfahrener Krypto-Trader mit Fokus auf technische Analyse und Swing-Trading. Spezialisiert auf DeFi und Large Caps.",
    stats: {
      followers: 12453,
      copiers: 567,
      totalTrades: 1234,
      winRate: 78.5,
      avgProfit: 12.4,
      avgLoss: 5.2,
      riskScore: 7.2
    },
    performance: {
      daily: 2.4,
      weekly: 12.8,
      monthly: 45.6,
      yearly: 234.5
    },
    topHoldings: [
      { symbol: "BTC", allocation: 45 },
      { symbol: "ETH", allocation: 30 },
      { symbol: "SOL", allocation: 15 }
    ]
  },
  {
    id: 2,
    name: "Sarah Miller",
    handle: "stock_expert",
    avatar: "SM",
    verified: true,
    pro: true,
    description: "Professionelle Aktien-Traderin mit über 10 Jahren Erfahrung. Spezialisiert auf Growth Stocks und Dividendenstrategie.",
    stats: {
      followers: 8901,
      copiers: 345,
      totalTrades: 890,
      winRate: 82.3,
      avgProfit: 8.9,
      avgLoss: 3.4,
      riskScore: 5.8
    },
    performance: {
      daily: 1.2,
      weekly: 5.6,
      monthly: 18.9,
      yearly: 156.7
    },
    topHoldings: [
      { symbol: "AAPL", allocation: 25 },
      { symbol: "MSFT", allocation: 20 },
      { symbol: "GOOGL", allocation: 15 }
    ]
  },
  {
    id: 3,
    name: "Michael Chen",
    handle: "forex_trader",
    avatar: "MC",
    verified: true,
    pro: false,
    description: "Forex Trader mit Schwerpunkt auf asiatischen Märkten. Technische Analyse und News-basiertes Trading.",
    stats: {
      followers: 5678,
      copiers: 234,
      totalTrades: 567,
      winRate: 75.8,
      avgProfit: 6.7,
      avgLoss: 2.8,
      riskScore: 6.4
    },
    performance: {
      daily: 0.8,
      weekly: 3.4,
      monthly: 12.3,
      yearly: 89.4
    },
    topHoldings: [
      { symbol: "EUR/USD", allocation: 40 },
      { symbol: "GBP/JPY", allocation: 30 },
      { symbol: "USD/JPY", allocation: 20 }
    ]
  }
];

export default function TradersPage() {
  return (
    <div className="container max-w-[1200px] mx-auto py-6 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Top Trader</h1>
          <p className="text-gray-500">
            Entdecken Sie erfolgreiche Trader und kopieren Sie ihre Strategien
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Users className="h-4 w-4 mr-2" />
            Meine Trader
          </Button>
          <Button>
            <Star className="h-4 w-4 mr-2" />
            Watchlist
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Trader suchen..."
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Performance
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Aktivität
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {categories.map((category) => (
          <Card key={category.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-medium mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.description}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">{category.traders} Trader</span>
              <span className="text-green-600">Ø +{category.avgReturn}% ROI</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Traders List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Top Performer</h2>
          <Button variant="outline" size="sm">
            Alle anzeigen
          </Button>
        </div>

        <div className="space-y-6">
          {traders.map((trader) => (
            <Link key={trader.id} href={`/social/traders/${trader.handle}`}>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                {/* Trader Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center font-medium text-xl">
                      {trader.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold">{trader.name}</h3>
                        {trader.verified && (
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">
                            Verifiziert
                          </Badge>
                        )}
                        {trader.pro && (
                          <Badge variant="outline" className="bg-purple-50 text-purple-700">
                            Pro
                          </Badge>
                        )}
                      </div>
                      <div className="text-gray-500">@{trader.handle}</div>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span>{trader.stats.followers.toLocaleString()} Follower</span>
                        <span>{trader.stats.copiers.toLocaleString()} Kopieren</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-2">
                      <ArrowUpRight className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-green-600">
                        +{trader.performance.monthly}% (30d)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Risk Score: {trader.stats.riskScore}/10</span>
                    </div>
                  </div>
                </div>

                {/* Performance Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Win-Rate</div>
                    <div className="font-medium">{trader.stats.winRate}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Trades</div>
                    <div className="font-medium">{trader.stats.totalTrades}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Ø Gewinn</div>
                    <div className="font-medium text-green-600">+{trader.stats.avgProfit}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Ø Verlust</div>
                    <div className="font-medium text-red-600">-{trader.stats.avgLoss}%</div>
                  </div>
                </div>

                {/* Top Holdings */}
                <div>
                  <div className="text-sm text-gray-500 mb-3">Top Holdings</div>
                  <div className="flex gap-2">
                    {trader.topHoldings.map((holding) => (
                      <Badge key={holding.symbol} variant="outline">
                        {holding.symbol} {holding.allocation}%
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-8">
          <Button variant="outline">
            Mehr Trader laden
          </Button>
        </div>
      </div>
    </div>
  );
} 