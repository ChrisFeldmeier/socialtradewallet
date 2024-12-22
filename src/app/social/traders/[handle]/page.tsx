"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  Users,
  Star,
  TrendingUp,
  Clock,
  ChevronRight,
  BarChart2,
  PieChart,
  Activity,
  MessageCircle,
  Share2,
  ThumbsUp
} from "lucide-react";
import { Chart } from "@/components/chart";

// Dummy data for trader profile
const trader = {
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
    riskScore: 7.2,
    profitFactor: 2.4,
    sharpeRatio: 1.8,
    maxDrawdown: 15.6
  },
  performance: {
    daily: 2.4,
    weekly: 12.8,
    monthly: 45.6,
    yearly: 234.5
  },
  portfolio: {
    totalValue: 1234567,
    pnl: 234567,
    allocation: [
      { symbol: "BTC", allocation: 45, value: 555555, pnl: 123456 },
      { symbol: "ETH", allocation: 30, value: 370000, pnl: 78900 },
      { symbol: "SOL", allocation: 15, value: 185000, pnl: 34500 },
      { symbol: "Other", allocation: 10, value: 124012, pnl: 12345 }
    ]
  },
  recentTrades: [
    {
      id: 1,
      asset: "BTC/USD",
      type: "LONG",
      entry: 42000,
      exit: 45000,
      size: 0.5,
      pnl: 1500,
      pnlPercent: 7.14,
      date: "2024-01-20T10:00:00Z"
    },
    {
      id: 2,
      asset: "ETH/USD",
      type: "SHORT",
      entry: 2800,
      exit: 2600,
      size: 5,
      pnl: 1000,
      pnlPercent: 7.14,
      date: "2024-01-19T15:30:00Z"
    },
    {
      id: 3,
      asset: "SOL/USD",
      type: "LONG",
      entry: 95,
      exit: 105,
      size: 100,
      pnl: 1000,
      pnlPercent: 10.53,
      date: "2024-01-18T09:15:00Z"
    }
  ],
  posts: [
    {
      id: 1,
      content: "Bitcoin zeigt starke bullische Signale auf dem 4-Stunden-Chart. Der EMA50 hat den EMA200 gekreuzt und das Volumen steigt. Ich erwarte einen Test der $45,000 in den nächsten Tagen.",
      publishedAt: "2024-01-20T10:00:00Z",
      likes: 234,
      comments: 56,
      shares: 12
    },
    {
      id: 2,
      content: "Ethereum Update steht vor der Tür. Die technischen Verbesserungen könnten den Preis positiv beeinflussen. Ich erhöhe meine ETH Position.",
      publishedAt: "2024-01-19T15:30:00Z",
      likes: 189,
      comments: 34,
      shares: 8
    }
  ]
};

export default function TraderProfilePage() {
  return (
    <div className="container max-w-[1200px] mx-auto py-6 px-4">
      {/* Header */}
      <Card className="p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Trader Info */}
          <div className="flex-1">
            <div className="flex items-start gap-4 mb-4">
              <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center font-medium text-2xl">
                {trader.avatar}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold">{trader.name}</h1>
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
                <div className="text-gray-500 mb-2">@{trader.handle}</div>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <span>{trader.stats.followers.toLocaleString()} Follower</span>
                  <span>{trader.stats.copiers.toLocaleString()} Kopieren</span>
                  <span>{trader.stats.totalTrades} Trades</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{trader.description}</p>
            <div className="flex gap-2">
              <Button>
                <Users className="h-4 w-4 mr-2" />
                Kopieren
              </Button>
              <Button variant="outline">
                <Star className="h-4 w-4 mr-2" />
                Folgen
              </Button>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Teilen
              </Button>
            </div>
          </div>

          {/* Performance Overview */}
          <div className="md:w-80 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-gray-500">Performance (30d)</div>
              <div className="flex items-center gap-1">
                <ArrowUpRight className="h-4 w-4 text-green-600" />
                <span className="font-medium text-green-600">
                  +{trader.performance.monthly}%
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Win-Rate</div>
                <div className="font-medium">{trader.stats.winRate}%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Profit Faktor</div>
                <div className="font-medium">{trader.stats.profitFactor}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Sharpe Ratio</div>
                <div className="font-medium">{trader.stats.sharpeRatio}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Max Drawdown</div>
                <div className="font-medium text-red-600">-{trader.stats.maxDrawdown}%</div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 p-2 bg-gray-100 rounded text-sm text-gray-500">
              <AlertTriangle className="h-4 w-4" />
              <span>Risk Score: {trader.stats.riskScore}/10</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="trades">Trades</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          {/* Performance Chart */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">Performance Chart</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">1D</Button>
                <Button variant="outline" size="sm">1W</Button>
                <Button size="sm">1M</Button>
                <Button variant="outline" size="sm">1Y</Button>
              </div>
            </div>
            <div className="h-[400px]">
              <Chart />
            </div>
          </Card>

          {/* Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4 text-gray-500">
                <Activity className="h-5 w-5" />
                <h3 className="font-medium">Trading Statistiken</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Trades</span>
                  <span className="font-medium">{trader.stats.totalTrades}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Win-Rate</span>
                  <span className="font-medium">{trader.stats.winRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Ø Gewinn</span>
                  <span className="font-medium text-green-600">+{trader.stats.avgProfit}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Ø Verlust</span>
                  <span className="font-medium text-red-600">-{trader.stats.avgLoss}%</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4 text-gray-500">
                <BarChart2 className="h-5 w-5" />
                <h3 className="font-medium">Performance Metriken</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Profit Faktor</span>
                  <span className="font-medium">{trader.stats.profitFactor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sharpe Ratio</span>
                  <span className="font-medium">{trader.stats.sharpeRatio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Max Drawdown</span>
                  <span className="font-medium text-red-600">-{trader.stats.maxDrawdown}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Risk Score</span>
                  <span className="font-medium">{trader.stats.riskScore}/10</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4 text-gray-500">
                <TrendingUp className="h-5 w-5" />
                <h3 className="font-medium">Returns</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">24H</span>
                  <span className="font-medium text-green-600">+{trader.performance.daily}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">7D</span>
                  <span className="font-medium text-green-600">+{trader.performance.weekly}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">30D</span>
                  <span className="font-medium text-green-600">+{trader.performance.monthly}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">1Y</span>
                  <span className="font-medium text-green-600">+{trader.performance.yearly}%</span>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-6">
          {/* Portfolio Overview */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-medium mb-1">Portfolio Übersicht</h2>
                <div className="text-sm text-gray-500">
                  Gesamtwert: €{trader.portfolio.totalValue.toLocaleString()}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Gesamt P/L</div>
                <div className="font-medium text-green-600">
                  +€{trader.portfolio.pnl.toLocaleString()}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-[300px]">
                <PieChart className="w-full h-full text-gray-200" />
              </div>
              <div className="space-y-4">
                {trader.portfolio.allocation.map((asset) => (
                  <div key={asset.symbol} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium mb-1">{asset.symbol}</div>
                      <div className="text-sm text-gray-500">
                        {asset.allocation}% • €{asset.value.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">
                        +€{asset.pnl.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="trades" className="space-y-6">
          {/* Recent Trades */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">Letzte Trades</h2>
              <Button variant="outline" size="sm">
                Alle anzeigen
              </Button>
            </div>
            <div className="space-y-4">
              {trader.recentTrades.map((trade) => (
                <div key={trade.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{trade.asset}</span>
                      <Badge variant={trade.type === "LONG" ? "outline" : "secondary"}>
                        {trade.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">
                      Entry: ${trade.entry} • Exit: ${trade.exit} • Size: {trade.size}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600 mb-1">
                      +${trade.pnl.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(trade.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="posts" className="space-y-6">
          {/* Recent Posts */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">Letzte Posts</h2>
              <Button variant="outline" size="sm">
                Alle anzeigen
              </Button>
            </div>
            <div className="space-y-6">
              {trader.posts.map((post) => (
                <div key={post.id} className="space-y-4">
                  <p className="text-gray-600">{post.content}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Share2 className="h-4 w-4" />
                        <span>{post.shares}</span>
                      </div>
                    </div>
                    <div>
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                  {post.id !== trader.posts.length && <hr className="my-4" />}
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
} 