"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  TrendingUp, 
  TrendingDown,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  SortAsc,
  Sparkles
} from "lucide-react";

// Dummy data for trending assets
const trendingAssets = [
  { 
    name: "Bitcoin", 
    symbol: "BTC", 
    price: 44323.45, 
    change: 2.34,
    volume: "€12.4M",
    marketCap: "€834.2B",
    chart: [
      { time: "1", value: 44000 },
      { time: "2", value: 44100 },
      { time: "3", value: 44200 },
      { time: "4", value: 44150 },
      { time: "5", value: 44323 },
    ]
  },
  { 
    name: "Ethereum", 
    symbol: "ETH", 
    price: 2234.12, 
    change: -1.23,
    volume: "€8.2M",
    marketCap: "€234.5B",
    chart: [
      { time: "1", value: 2250 },
      { time: "2", value: 2240 },
      { time: "3", value: 2230 },
      { time: "4", value: 2235 },
      { time: "5", value: 2234 },
    ]
  },
  { 
    name: "Apple", 
    symbol: "AAPL", 
    price: 178.23, 
    change: 0.45,
    volume: "€45.6M",
    marketCap: "€2.8T",
    chart: [
      { time: "1", value: 177 },
      { time: "2", value: 177.5 },
      { time: "3", value: 178 },
      { time: "4", value: 178.1 },
      { time: "5", value: 178.23 },
    ]
  },
];

// Dummy data for all assets
const allAssets = [
  ...trendingAssets,
  { 
    name: "Microsoft", 
    symbol: "MSFT", 
    price: 334.45, 
    change: 1.23,
    volume: "€34.2M",
    marketCap: "€2.5T",
    chart: [
      { time: "1", value: 333 },
      { time: "2", value: 333.5 },
      { time: "3", value: 334 },
      { time: "4", value: 334.2 },
      { time: "5", value: 334.45 },
    ]
  },
  { 
    name: "Amazon", 
    symbol: "AMZN", 
    price: 145.67, 
    change: -0.34,
    volume: "€28.9M",
    marketCap: "€1.5T",
    chart: [
      { time: "1", value: 146 },
      { time: "2", value: 145.8 },
      { time: "3", value: 145.7 },
      { time: "4", value: 145.65 },
      { time: "5", value: 145.67 },
    ]
  },
];

export default function Discover() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAssets = allAssets.filter(asset => 
    asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold dark:text-white">Entdecken</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Entdecke neue Assets und verfolge die neuesten Trends im Markt.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Suche nach Assets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 dark:bg-gray-950 dark:border-gray-800 dark:placeholder-gray-400"
              />
            </div>
            <Button variant="outline" className="gap-2 dark:border-gray-800 dark:hover:bg-gray-800">
              <Filter className="h-4 w-4" /> Filter
            </Button>
            <Button variant="outline" className="gap-2 dark:border-gray-800 dark:hover:bg-gray-800">
              <SortAsc className="h-4 w-4" /> Sortieren
            </Button>
          </div>

          {/* Trending Section */}
          <div className="bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                <h2 className="text-xl font-semibold dark:text-white">Trending</h2>
              </div>
              <Button variant="ghost" size="sm" className="dark:hover:bg-gray-800">
                Alle anzeigen
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {trendingAssets.map((asset) => (
                <motion.div
                  key={asset.symbol}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-emerald-500 transition-colors dark:bg-gray-900"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium dark:text-white">{asset.name}</h3>
                        <Badge variant="secondary" className="dark:bg-gray-800">{asset.symbol}</Badge>
                      </div>
                      <p className="text-2xl font-semibold mt-1 dark:text-white">
                        €{asset.price.toLocaleString()}
                      </p>
                      <div className={`flex items-center mt-1 ${
                        asset.change >= 0 ? "text-emerald-500" : "text-red-500"
                      }`}>
                        {asset.change >= 0 ? (
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 mr-1" />
                        )}
                        {Math.abs(asset.change)}%
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="dark:hover:bg-gray-800">
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="h-[100px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={asset.chart}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke={asset.change >= 0 ? "#10b981" : "#ef4444"}
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* All Assets */}
          <div className="bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
              <TabsList className="w-full dark:bg-gray-900">
                <TabsTrigger value="all" className="flex-1 dark:data-[state=active]:bg-gray-800">Alle Assets</TabsTrigger>
                <TabsTrigger value="stocks" className="flex-1 dark:data-[state=active]:bg-gray-800">Aktien</TabsTrigger>
                <TabsTrigger value="crypto" className="flex-1 dark:data-[state=active]:bg-gray-800">Krypto</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <Table>
                  <TableHeader>
                    <TableRow className="dark:border-gray-800">
                      <TableHead className="dark:text-gray-400">Asset</TableHead>
                      <TableHead className="dark:text-gray-400">Preis</TableHead>
                      <TableHead className="dark:text-gray-400">24h</TableHead>
                      <TableHead className="dark:text-gray-400">Volumen (24h)</TableHead>
                      <TableHead className="dark:text-gray-400">Marktkapitalisierung</TableHead>
                      <TableHead className="dark:text-gray-400">Chart (7T)</TableHead>
                      <TableHead className="dark:text-gray-400"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAssets.map((asset) => (
                      <TableRow key={asset.symbol} className="dark:border-gray-800">
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div>
                              <div className="font-medium dark:text-white">{asset.name}</div>
                              <Badge variant="secondary" className="dark:bg-gray-800">{asset.symbol}</Badge>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="dark:text-gray-300">€{asset.price.toLocaleString()}</TableCell>
                        <TableCell className={asset.change >= 0 ? "text-emerald-500" : "text-red-500"}>
                          <div className="flex items-center">
                            {asset.change >= 0 ? (
                              <TrendingUp className="h-4 w-4 mr-1" />
                            ) : (
                              <TrendingDown className="h-4 w-4 mr-1" />
                            )}
                            {Math.abs(asset.change)}%
                          </div>
                        </TableCell>
                        <TableCell className="dark:text-gray-300">{asset.volume}</TableCell>
                        <TableCell className="dark:text-gray-300">{asset.marketCap}</TableCell>
                        <TableCell className="w-[100px]">
                          <div className="h-[40px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={asset.chart}>
                                <Line
                                  type="monotone"
                                  dataKey="value"
                                  stroke={asset.change >= 0 ? "#10b981" : "#ef4444"}
                                  strokeWidth={2}
                                  dot={false}
                                />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="dark:hover:bg-gray-800">
                            <Star className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent value="stocks">
                <div className="p-4 text-center text-gray-500">
                  Aktien werden hier angezeigt...
                </div>
              </TabsContent>
              <TabsContent value="crypto">
                <div className="p-4 text-center text-gray-500">
                  Kryptowährungen werden hier angezeigt...
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
} 