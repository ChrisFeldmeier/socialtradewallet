"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Star,
  Info,
  ChevronRight,
  PieChart,
  Activity
} from "lucide-react";

// Dummy data for the portfolio performance chart
const performanceData = [
  { name: "Jan", value: 10000 },
  { name: "Feb", value: 12000 },
  { name: "Mar", value: 11500 },
  { name: "Apr", value: 13500 },
  { name: "May", value: 14200 },
  { name: "Jun", value: 15800 },
];

// Dummy data for portfolio assets
const portfolioAssets = [
  { 
    name: "Bitcoin", 
    symbol: "BTC", 
    amount: 0.5432,
    value: 23456.78,
    change: 2.34,
    allocation: 45
  },
  { 
    name: "Ethereum", 
    symbol: "ETH", 
    amount: 3.2109,
    value: 12345.67,
    change: -1.23,
    allocation: 35
  },
  { 
    name: "Apple", 
    symbol: "AAPL", 
    amount: 15,
    value: 5678.90,
    change: 0.45,
    allocation: 20
  },
];

export default function Portfolio() {
  const [selectedTab, setSelectedTab] = useState("assets");
  const totalValue = portfolioAssets.reduce((sum, asset) => sum + asset.value, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Content */}
          <div className="col-span-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold">Portfolio</h1>
                  <div className="flex items-center gap-4 mt-2">
                    <p className="text-3xl font-semibold">
                      €{totalValue.toLocaleString()}
                    </p>
                    <Badge variant="outline" className="flex items-center">
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                      +15.67%
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" size="icon">
                  <PieChart className="h-4 w-4" />
                </Button>
              </div>

              <div className="h-[300px] mt-8">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">24h Änderung</p>
                  <p className="text-lg font-medium mt-1 text-emerald-500">+€1,234.56</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">7T Rendite</p>
                  <p className="text-lg font-medium mt-1 text-emerald-500">+5.67%</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">30T Rendite</p>
                  <p className="text-lg font-medium mt-1 text-emerald-500">+15.67%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="assets" className="flex-1">Assets</TabsTrigger>
                  <TabsTrigger value="transactions" className="flex-1">Transaktionen</TabsTrigger>
                </TabsList>
                <TabsContent value="assets">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Asset</TableHead>
                        <TableHead>Menge</TableHead>
                        <TableHead>Wert</TableHead>
                        <TableHead>24h</TableHead>
                        <TableHead>Allokation</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {portfolioAssets.map((asset) => (
                        <TableRow key={asset.symbol}>
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              {asset.name}
                              <Badge variant="secondary">{asset.symbol}</Badge>
                            </div>
                          </TableCell>
                          <TableCell>{asset.amount}</TableCell>
                          <TableCell>€{asset.value.toLocaleString()}</TableCell>
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
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress value={asset.allocation} className="w-24" />
                              {asset.allocation}%
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="transactions">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Datum</TableHead>
                        <TableHead>Asset</TableHead>
                        <TableHead>Typ</TableHead>
                        <TableHead>Betrag</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>15. Jun 2024</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            Bitcoin
                            <Badge variant="secondary">BTC</Badge>
                          </div>
                        </TableCell>
                        <TableCell>Kauf</TableCell>
                        <TableCell className="text-emerald-500">+€1,234.56</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>14. Jun 2024</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            Ethereum
                            <Badge variant="secondary">ETH</Badge>
                          </div>
                        </TableCell>
                        <TableCell>Verkauf</TableCell>
                        <TableCell className="text-red-500">-€567.89</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4 space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Performance</h2>
                <Info className="h-4 w-4 text-gray-400" />
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Investiert</p>
                    <p className="text-lg font-medium mt-1">€35,678.90</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Aktueller Wert</p>
                    <p className="text-lg font-medium mt-1">€41,481.35</p>
                  </div>
                </div>
                <Progress value={65} className="h-2" />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Absolut</p>
                    <p className="text-emerald-500 font-medium">+€5,802.45</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Prozentual</p>
                    <p className="text-emerald-500 font-medium">+16.26%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Aktivität</h2>
                <Activity className="h-4 w-4 text-gray-400" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div>
                      <p className="font-medium">Bitcoin gekauft</p>
                      <p className="text-sm text-gray-500">Vor 2 Stunden</p>
                    </div>
                  </div>
                  <p className="text-emerald-500">+€1,234.56</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center">
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium">Ethereum verkauft</p>
                      <p className="text-sm text-gray-500">Vor 5 Stunden</p>
                    </div>
                  </div>
                  <p className="text-red-500">-€567.89</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 