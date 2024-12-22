"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Clock,
  ChevronRight,
  PieChart,
  Wallet,
  Send,
  Bell
} from "lucide-react";
import { Chart } from "@/components/chart";
import Link from "next/link";
import { useState } from "react";

// Dummy data for recent activity
const recentActivity = [
  {
    id: 1,
    type: "BUY",
    asset: "Bitcoin",
    amount: "€1.234,56",
    date: "2024-01-20T10:00:00Z"
  },
  {
    id: 2,
    type: "SELL",
    asset: "Ethereum",
    amount: "€567,89",
    date: "2024-01-19T15:30:00Z"
  },
  {
    id: 3,
    type: "DEPOSIT",
    amount: "€1.000,00",
    date: "2024-01-18T09:15:00Z"
  }
];

export default function HomePage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState<"1D" | "1W" | "1M" | "1Y">("1M");

  return (
    <div className="container max-w-[1200px] mx-auto py-6 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Willkommen zurück!</h1>
          <p className="text-gray-500">
            Hier ist ein Überblick über Ihr Portfolio
          </p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Wallet className="h-4 w-4 mr-2" />
            Geld einzahlen
          </Button>
          <Button variant="outline">
            <Send className="h-4 w-4 mr-2" />
            Geld senden
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-500">Gesamtwert</div>
            <Badge variant="outline">EUR</Badge>
          </div>
          <div className="text-2xl font-bold mb-2">€12.345,67</div>
          <div className="flex items-center gap-2 text-sm text-green-600">
            <ArrowUpRight className="h-4 w-4" />
            <span>+5,67% (24h)</span>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-500">Gewinn/Verlust</div>
            <Badge variant="outline">24h</Badge>
          </div>
          <div className="text-2xl font-bold text-green-600 mb-2">+€567,89</div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <TrendingUp className="h-4 w-4" />
            <span>Seit gestern</span>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-500">Verfügbar</div>
            <Badge variant="outline">EUR</Badge>
          </div>
          <div className="text-2xl font-bold mb-2">€2.345,67</div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>Sofort verfügbar</span>
          </div>
        </Card>
      </div>

      {/* Chart Section */}
      <Card className="mb-8">
        <Tabs defaultValue="chart" className="w-full">
          <div className="flex items-center justify-between p-6 border-b">
            <TabsList>
              <TabsTrigger value="chart">Chart</TabsTrigger>
              <TabsTrigger value="distribution">Verteilung</TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Button 
                variant={selectedTimeRange === "1D" ? "default" : "outline"} 
                size="sm"
                onClick={() => setSelectedTimeRange("1D")}
              >
                1D
              </Button>
              <Button 
                variant={selectedTimeRange === "1W" ? "default" : "outline"} 
                size="sm"
                onClick={() => setSelectedTimeRange("1W")}
              >
                1W
              </Button>
              <Button 
                variant={selectedTimeRange === "1M" ? "default" : "outline"} 
                size="sm"
                onClick={() => setSelectedTimeRange("1M")}
              >
                1M
              </Button>
              <Button 
                variant={selectedTimeRange === "1Y" ? "default" : "outline"} 
                size="sm"
                onClick={() => setSelectedTimeRange("1Y")}
              >
                1Y
              </Button>
            </div>
          </div>
          <TabsContent value="chart" className="p-6">
            <div className="h-[400px]">
              <Chart timeRange={selectedTimeRange} />
            </div>
          </TabsContent>
          <TabsContent value="distribution" className="p-6">
            <div className="h-[400px] flex items-center justify-center text-gray-500">
              <PieChart className="h-6 w-6 mr-2" />
              Portfolio Verteilung (Coming Soon)
            </div>
          </TabsContent>
        </Tabs>
      </Card>

      {/* Recent Activity */}
      <Card>
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-medium">Letzte Aktivitäten</h2>
          <Button variant="outline" size="sm">
            Alle anzeigen
          </Button>
        </div>
        <div className="divide-y">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  activity.type === "BUY" ? "bg-green-100 text-green-600" :
                  activity.type === "SELL" ? "bg-red-100 text-red-600" :
                  "bg-blue-100 text-blue-600"
                }`}>
                  {activity.type === "BUY" ? "+" :
                   activity.type === "SELL" ? "-" :
                   "€"}
                </div>
                <div>
                  <div className="font-medium">
                    {activity.type === "DEPOSIT" ? "Einzahlung" :
                     activity.type === "BUY" ? `${activity.asset} gekauft` :
                     `${activity.asset} verkauft`}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(activity.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-medium ${
                  activity.type === "BUY" ? "text-red-600" :
                  activity.type === "SELL" ? "text-green-600" :
                  "text-blue-600"
                }`}>
                  {activity.type === "BUY" ? "-" : "+"}{activity.amount}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <Link href="/settings/alerts">
          <Button size="icon" variant="outline" className="h-12 w-12 rounded-full shadow-lg">
            <Bell className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
