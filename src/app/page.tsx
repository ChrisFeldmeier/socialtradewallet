"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart } from "@tremor/react";
import { 
  ArrowUpDown,
  TrendingUp,
  TrendingDown,
  Info,
  Plus,
  ChevronRight,
  Wallet,
  Send,
} from "lucide-react";

const assets = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "35,824.91",
    change: "+2.34%",
    isPositive: true
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "1,824.32",
    change: "-1.23%",
    isPositive: false
  },
  {
    name: "Apple",
    symbol: "AAPL",
    price: "178.85",
    change: "+0.45%",
    isPositive: true
  },
  // ... weitere Assets
];

const chartdata = [
  {
    date: "Jan 23",
    "Bitcoin": 29452,
  },
  {
    date: "Feb 23",
    "Bitcoin": 31234,
  },
  {
    date: "Mar 23",
    "Bitcoin": 34123,
  },
  {
    date: "Apr 23",
    "Bitcoin": 32567,
  },
  {
    date: "May 23",
    "Bitcoin": 35789,
  },
];

export default function Home() {
  return (
    <div className="container max-w-[1200px] mx-auto py-8 px-4">
      {/* Portfolio Overview */}
      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <p className="text-gray-500">Deine Investitionen auf einen Blick</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Wallet className="h-4 w-4 mr-2" />
              Einzahlen
            </Button>
            <Button variant="outline" size="sm">
              <Send className="h-4 w-4 mr-2" />
              Senden
            </Button>
            <Button size="sm">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Handeln
            </Button>
          </div>
        </div>

        {/* Portfolio Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Gesamtwert</p>
                <h2 className="text-2xl font-bold">€12,345.67</h2>
              </div>
              <Badge variant="outline" className="bg-green-100 text-green-700">
                +2.34%
              </Badge>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">24h Gewinn/Verlust</p>
                <h2 className="text-2xl font-bold text-green-600">+€234.56</h2>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Verfügbares Guthaben</p>
                <h2 className="text-2xl font-bold">€1,234.56</h2>
              </div>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Einzahlen
              </Button>
            </div>
          </Card>
        </div>

        {/* Market Overview */}
        <Card className="p-6">
          <Tabs defaultValue="overview" className="space-y-4">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="overview">Übersicht</TabsTrigger>
                <TabsTrigger value="assets">Assets</TabsTrigger>
                <TabsTrigger value="transactions">Transaktionen</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Info className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  Zeitraum: 1M
                </Button>
              </div>
            </div>

            <TabsContent value="overview" className="space-y-4">
              <div className="h-[400px]">
                <LineChart
                  data={chartdata}
                  index="date"
                  categories={["Bitcoin"]}
                  colors={["blue"]}
                  yAxisWidth={60}
                  showAnimation
                />
              </div>
            </TabsContent>

            <TabsContent value="assets">
              <div className="space-y-4">
                {assets.map((asset) => (
                  <div
                    key={asset.symbol}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-gray-100" />
                      <div>
                        <h3 className="font-medium">{asset.name}</h3>
                        <p className="text-sm text-gray-500">{asset.symbol}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium">€{asset.price}</p>
                        <p className={`text-sm ${
                          asset.isPositive ? "text-green-600" : "text-red-600"
                        }`}>
                          {asset.change}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="transactions">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Bitcoin gekauft</h3>
                      <p className="text-sm text-gray-500">Heute, 14:30</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">+0.0234 BTC</p>
                    <p className="text-sm text-gray-500">€789.12</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                      <TrendingDown className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Ethereum verkauft</h3>
                      <p className="text-sm text-gray-500">Gestern, 09:15</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">-1.5 ETH</p>
                    <p className="text-sm text-gray-500">€2,567.34</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
