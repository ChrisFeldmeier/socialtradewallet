"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { 
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Search,
  Filter,
  Star,
  Info
} from "lucide-react";

const data = [
  { name: "Jan", value: 40000 },
  { name: "Feb", value: 45000 },
  { name: "Mar", value: 42000 },
  { name: "Apr", value: 47000 },
  { name: "Mai", value: 44000 },
  { name: "Jun", value: 48000 },
  { name: "Jul", value: 46000 }
];

const assets = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: 40000,
    change: 5.2,
    volume: "12.5B",
    marketCap: "800B",
    image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: 2200,
    change: -2.1,
    volume: "8.2B",
    marketCap: "260B",
    image: "https://assets.coingecko.com/coins/images/279/small/ethereum.png"
  },
  {
    id: 3,
    name: "Apple",
    symbol: "AAPL",
    price: 180.5,
    change: 1.8,
    volume: "5.1B",
    marketCap: "2.8T",
    image: "https://companiesmarketcap.com/img/company-logos/64/AAPL.webp"
  },
  {
    id: 4,
    name: "Microsoft",
    symbol: "MSFT",
    price: 320.4,
    change: 2.5,
    volume: "4.2B",
    marketCap: "2.4T",
    image: "https://companiesmarketcap.com/img/company-logos/64/MSFT.webp"
  }
];

const watchlist = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: 40000,
    change: 5.2,
    alert: 42000,
    image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
  },
  {
    id: 2,
    name: "Apple",
    symbol: "AAPL",
    price: 180.5,
    change: 1.8,
    alert: 185,
    image: "https://companiesmarketcap.com/img/company-logos/64/AAPL.webp"
  }
];

export default function InvestPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container max-w-[1200px] mx-auto py-8">
      <div className="grid gap-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Investment</h1>
          <p className="text-gray-500 mt-1">
            Verwalte dein Portfolio und entdecke neue Anlagemöglichkeiten
          </p>
        </div>

        {/* Portfolio Overview */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Portfolio-Wert</p>
              <Info className="h-4 w-4 text-gray-400" />
            </div>
            <p className="text-2xl font-bold mt-2">€48,250.00</p>
            <div className="flex items-center gap-1 mt-1 text-emerald-600 text-sm">
              <ArrowUpRight className="h-4 w-4" />
              <span>+12.5%</span>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">24h Gewinn/Verlust</p>
              <Info className="h-4 w-4 text-gray-400" />
            </div>
            <p className="text-2xl font-bold mt-2">€1,250.00</p>
            <div className="flex items-center gap-1 mt-1 text-emerald-600 text-sm">
              <ArrowUpRight className="h-4 w-4" />
              <span>+2.8%</span>
            </div>
          </div>

          <div className="bg-white rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Offene Positionen</p>
              <Info className="h-4 w-4 text-gray-400" />
            </div>
            <p className="text-2xl font-bold mt-2">8</p>
            <p className="text-sm text-gray-500 mt-1">4 im Gewinn</p>
          </div>

          <div className="bg-white rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">Watchlist</p>
              <Info className="h-4 w-4 text-gray-400" />
            </div>
            <p className="text-2xl font-bold mt-2">6</p>
            <p className="text-sm text-gray-500 mt-1">2 Preisalarme</p>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-lg border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Portfolio-Entwicklung</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">1T</Button>
              <Button variant="outline" size="sm">1W</Button>
              <Button variant="secondary" size="sm">1M</Button>
              <Button variant="outline" size="sm">1J</Button>
              <Button variant="outline" size="sm">Max</Button>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10b981" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Übersicht</TabsTrigger>
            <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input 
                  placeholder="Suche nach Assets..." 
                  className="pl-9"
                />
              </div>
              <Button variant="outline" className="sm:w-auto">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Assets List */}
            <div className="space-y-4">
              {assets.map((asset) => (
                <div 
                  key={asset.id}
                  className="bg-white rounded-lg border p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img 
                        src={asset.image} 
                        alt={asset.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{asset.name}</h3>
                          <Badge variant="secondary">
                            {asset.symbol}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                          <span>Vol: {asset.volume}</span>
                          <span>MCap: {asset.marketCap}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        €{asset.price.toLocaleString()}
                      </p>
                      <div className={cn(
                        "flex items-center gap-1 mt-1 text-sm",
                        asset.change >= 0 ? "text-emerald-600" : "text-red-600"
                      )}>
                        {asset.change >= 0 ? (
                          <ArrowUpRight className="h-4 w-4" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4" />
                        )}
                        <span>{Math.abs(asset.change)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="watchlist" className="space-y-4">
            {watchlist.map((asset) => (
              <div 
                key={asset.id}
                className="bg-white rounded-lg border p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img 
                      src={asset.image} 
                      alt={asset.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{asset.name}</h3>
                        <Badge variant="secondary">
                          {asset.symbol}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span>Alert bei €{asset.alert.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      €{asset.price.toLocaleString()}
                    </p>
                    <div className={cn(
                      "flex items-center gap-1 mt-1 text-sm",
                      asset.change >= 0 ? "text-emerald-600" : "text-red-600"
                    )}>
                      {asset.change >= 0 ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4" />
                      )}
                      <span>{Math.abs(asset.change)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {watchlist.length === 0 && (
              <div className="text-center py-12">
                <Star className="h-12 w-12 mx-auto text-gray-400" />
                <h3 className="mt-4 text-lg font-medium">Keine Assets in der Watchlist</h3>
                <p className="mt-2 text-gray-500">
                  Füge Assets zu deiner Watchlist hinzu, um sie im Auge zu behalten
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 