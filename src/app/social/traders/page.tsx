"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  TrendingUp,
  Users,
  Star,
  ArrowUpRight,
  Filter
} from "lucide-react";
import Link from "next/link";

// Dummy data for traders
const traders = [
  {
    id: 1,
    name: "Sarah Miller",
    handle: "@sarahtrader",
    avatar: "SM",
    verified: true,
    pro: true,
    followers: 12345,
    roi: 45.8,
    winRate: 78,
    trades: 456,
    description: "Full-time crypto trader. Focusing on BTC, ETH and emerging altcoins. Technical analysis expert.",
    topAssets: ["BTC", "ETH", "SOL"]
  },
  {
    id: 2,
    name: "Michael Chen",
    handle: "@tradingmaster",
    avatar: "MC",
    verified: true,
    pro: true,
    followers: 8901,
    roi: 38.2,
    winRate: 72,
    trades: 789,
    description: "Stock market veteran. Value investing strategy. 10+ years experience in traditional markets.",
    topAssets: ["AAPL", "MSFT", "GOOGL"]
  },
  // Add more traders
];

export default function TradersPage() {
  return (
    <div className="container max-w-[1200px] mx-auto py-6 px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Top Trader</h1>
          <p className="text-gray-500">Entdecke erfolgreiche Trader und folge ihrer Strategie</p>
        </div>
        <Button>
          <Users className="h-4 w-4 mr-2" />
          Trader werden
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Trader suchen..." 
            className="pl-10"
          />
        </div>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sortieren nach" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="roi">Höchste ROI</SelectItem>
              <SelectItem value="followers">Meiste Follower</SelectItem>
              <SelectItem value="winRate">Beste Gewinnrate</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Traders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {traders.map((trader) => (
          <Link 
            key={trader.id}
            href={`/social/traders/${trader.handle.substring(1)}`}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              {/* Trader Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center font-medium">
                  {trader.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{trader.name}</span>
                    {trader.verified && (
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">Verifiziert</Badge>
                    )}
                    {trader.pro && (
                      <Badge variant="outline" className="bg-purple-50 text-purple-700">Pro</Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{trader.handle}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-gray-400" />
              </div>

              {/* Trader Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">ROI</p>
                  <p className="text-lg font-bold text-green-600">+{trader.roi}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Gewinnrate</p>
                  <p className="text-lg font-bold">{trader.winRate}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Follower</p>
                  <p className="text-lg font-bold">{trader.followers.toLocaleString()}</p>
                </div>
              </div>

              {/* Trader Description */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {trader.description}
              </p>

              {/* Top Assets */}
              <div className="flex gap-2">
                {trader.topAssets.map((asset) => (
                  <Badge key={asset} variant="outline">
                    {asset}
                  </Badge>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
} 