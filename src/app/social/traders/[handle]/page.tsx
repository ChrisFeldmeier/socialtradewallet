"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users,
  TrendingUp,
  Star,
  ChevronRight,
  ThumbsUp,
  MessageCircle,
  Share2,
  Bell,
  BarChart2,
  LineChart,
  PieChart,
  Activity
} from "lucide-react";
import Link from "next/link";
import { Chart } from "@/components/chart";

// Dummy data for trader profile
const trader = {
  name: "Sarah Miller",
  handle: "@sarahtrader",
  avatar: "SM",
  verified: true,
  pro: true,
  followers: 12345,
  following: 234,
  roi: 45.8,
  winRate: 78,
  trades: 456,
  description: "Full-time crypto trader. Focusing on BTC, ETH and emerging altcoins. Technical analysis expert with 5+ years of experience in cryptocurrency markets. Sharing daily insights and trade setups.",
  location: "New York, USA",
  joinedDate: "2021-06-15",
  website: "https://sarahtrader.com",
  stats: {
    totalTrades: 1234,
    successfulTrades: 987,
    averageReturn: 12.5,
    bestTrade: 156.7,
    worstTrade: -23.4,
    averageHoldingTime: "3.5 days"
  },
  portfolio: {
    totalValue: 125000,
    distribution: [
      { asset: "BTC", percentage: 45 },
      { asset: "ETH", percentage: 30 },
      { asset: "SOL", percentage: 15 },
      { asset: "Other", percentage: 10 }
    ]
  },
  recentTrades: [
    {
      id: 1,
      asset: "Bitcoin",
      type: "LONG",
      entry: 42000,
      exit: 45000,
      profit: 7.14,
      date: "2024-01-20T10:00:00Z"
    },
    {
      id: 2,
      asset: "Ethereum",
      type: "SHORT",
      entry: 2500,
      exit: 2300,
      profit: 8.0,
      date: "2024-01-19T15:30:00Z"
    }
  ],
  posts: [
    {
      id: 1,
      content: "Just opened a long position on $BTC. Technical analysis shows strong support at current levels. Expecting a breakout above $45k in the next few days. 📈",
      publishedAt: "2024-01-20T10:00:00Z",
      likes: 234,
      comments: 56,
      shares: 12
    },
    {
      id: 2,
      content: "Quick market update: ETH showing bullish divergence on the 4h chart. Keep an eye on the $2,500 resistance level. Could be a good entry point for swing traders. 🎯",
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
      {/* Profile Header */}
      <Card className="p-6 mb-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Avatar and Basic Info */}
          <div className="flex items-center gap-6">
            <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-medium">
              {trader.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold">{trader.name}</h1>
                {trader.verified && (
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">Verifiziert</Badge>
                )}
                {trader.pro && (
                  <Badge variant="outline" className="bg-purple-50 text-purple-700">Pro</Badge>
                )}
              </div>
              <p className="text-gray-500">{trader.handle}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span>{trader.location}</span>
                <span>•</span>
                <span>Mitglied seit {new Date(trader.joinedDate).getFullYear()}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 ml-auto">
            <Button variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Folgen
            </Button>
            <Button>
              <Users className="h-4 w-4 mr-2" />
              Copy Trading
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div>
            <p className="text-sm text-gray-500">ROI (30d)</p>
            <p className="text-2xl font-bold text-green-600">+{trader.roi}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Gewinnrate</p>
            <p className="text-2xl font-bold">{trader.winRate}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Follower</p>
            <p className="text-2xl font-bold">{trader.followers.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Trades</p>
            <p className="text-2xl font-bold">{trader.trades}</p>
          </div>
        </div>
      </Card>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Übersicht</TabsTrigger>
              <TabsTrigger value="trades">Trades</TabsTrigger>
              <TabsTrigger value="posts">Beiträge</TabsTrigger>
              <TabsTrigger value="stats">Statistiken</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="space-y-6">
                {/* About */}
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Über mich</h3>
                  <p className="text-gray-600">{trader.description}</p>
                </Card>

                {/* Performance Chart */}
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Performance</h3>
                  <div className="h-[300px]">
                    <Chart />
                  </div>
                </Card>

                {/* Recent Trades */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">Letzte Trades</h3>
                    <Button variant="outline">Alle anzeigen</Button>
                  </div>
                  <div className="space-y-4">
                    {trader.recentTrades.map((trade) => (
                      <div key={trade.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{trade.asset}</span>
                            <Badge variant={trade.type === "LONG" ? "outline" : "secondary"}>
                              {trade.type}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            Entry: ${trade.entry} • Exit: ${trade.exit}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={cn(
                            "font-medium",
                            trade.profit > 0 ? "text-green-600" : "text-red-600"
                          )}>
                            {trade.profit > 0 ? "+" : ""}{trade.profit}%
                          </div>
                          <div className="text-sm text-gray-500">
                            {new Date(trade.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Recent Posts */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">Letzte Beiträge</h3>
                    <Button variant="outline">Alle anzeigen</Button>
                  </div>
                  <div className="space-y-6">
                    {trader.posts.map((post) => (
                      <div key={post.id} className="border-b last:border-0 pb-6 last:pb-0">
                        <p className="text-gray-600 mb-4">{post.content}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                              <MessageCircle className="h-4 w-4" />
                              <span>{post.comments}</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                              <Share2 className="h-4 w-4" />
                              <span>{post.shares}</span>
                            </button>
                          </div>
                          <span className="text-sm text-gray-500">
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Trading Stats */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Trading Statistiken</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Trades gesamt</span>
                <span className="font-medium">{trader.stats.totalTrades}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Erfolgreiche Trades</span>
                <span className="font-medium">{trader.stats.successfulTrades}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Durchschn. Return</span>
                <span className="font-medium text-green-600">+{trader.stats.averageReturn}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Bester Trade</span>
                <span className="font-medium text-green-600">+{trader.stats.bestTrade}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Schlechtester Trade</span>
                <span className="font-medium text-red-600">{trader.stats.worstTrade}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Durchschn. Haltedauer</span>
                <span className="font-medium">{trader.stats.averageHoldingTime}</span>
              </div>
            </div>
          </Card>

          {/* Portfolio Distribution */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Portfolio Verteilung</h3>
            <div className="space-y-4">
              {trader.portfolio.distribution.map((item) => (
                <div key={item.asset} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.asset}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 