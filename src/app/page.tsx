"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowUpDown,
  TrendingUp,
  TrendingDown,
  Info,
  Plus,
  ChevronRight,
  Wallet,
  Send,
  ChevronUp,
  ChevronDown,
  LineChart as ChartIcon,
  PieChart,
  Clock,
  Bell,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("@/components/chart"), { ssr: false });

export default function Home() {
  return (
    <div className="container max-w-[1200px] mx-auto p-4">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Übersicht</h1>
          <p className="text-gray-500">Willkommen zurück!</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Clock className="h-4 w-4 mr-2" />
            Letzte 7 Tage
          </Button>
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Benachrichtigungen
          </Button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid gap-6">
        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Gesamtwert</p>
                <h2 className="text-2xl font-bold">€15.234,56</h2>
              </div>
              <Badge variant="outline" className="bg-green-50">
                <ChevronUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-green-600">+5.34%</span>
              </Badge>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">24h Gewinn/Verlust</p>
                <h2 className="text-2xl font-bold text-green-600">+€234,56</h2>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Verfügbares Guthaben</p>
                <h2 className="text-2xl font-bold">€1.234,56</h2>
              </div>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Einzahlen
              </Button>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Chart */}
          <Card className="p-6 lg:col-span-2">
            <Tabs defaultValue="chart" className="space-y-4">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="chart">
                    <ChartIcon className="h-4 w-4 mr-2" />
                    Chart
                  </TabsTrigger>
                  <TabsTrigger value="distribution">
                    <PieChart className="h-4 w-4 mr-2" />
                    Verteilung
                  </TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">1T</Button>
                  <Button variant="outline" size="sm">1W</Button>
                  <Button variant="outline" size="sm">1M</Button>
                  <Button variant="outline" size="sm">1J</Button>
                </div>
              </div>

              <TabsContent value="chart" className="space-y-4">
                <div className="h-[400px]">
                  <Chart />
                </div>
              </TabsContent>

              <TabsContent value="distribution" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Bitcoin</span>
                      <span className="text-sm text-gray-500">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Ethereum</span>
                      <span className="text-sm text-gray-500">30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Apple</span>
                      <span className="text-sm text-gray-500">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Right Column - Recent Activity */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Letzte Aktivitäten</h2>
              <Button variant="ghost" size="sm">
                Alle anzeigen
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <ChevronUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Bitcoin gekauft</p>
                    <p className="text-sm text-gray-500">Vor 2 Stunden</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">+0.0234 BTC</p>
                  <p className="text-sm text-gray-500">€1.234,56</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                    <ChevronDown className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium">Ethereum verkauft</p>
                    <p className="text-sm text-gray-500">Vor 5 Stunden</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">-1.5 ETH</p>
                  <p className="text-sm text-gray-500">€2.345,67</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Wallet className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Einzahlung</p>
                    <p className="text-sm text-gray-500">Vor 1 Tag</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">+€1.000,00</p>
                  <p className="text-sm text-gray-500">SEPA</p>
                </div>
              </motion.div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-auto py-4">
            <div className="flex flex-col items-center gap-2">
              <ArrowUpDown className="h-6 w-6" />
              <span>Handeln</span>
            </div>
          </Button>
          <Button variant="outline" className="h-auto py-4">
            <div className="flex flex-col items-center gap-2">
              <Wallet className="h-6 w-6" />
              <span>Einzahlen</span>
            </div>
          </Button>
          <Button variant="outline" className="h-auto py-4">
            <div className="flex flex-col items-center gap-2">
              <Send className="h-6 w-6" />
              <span>Senden</span>
            </div>
          </Button>
          <Button variant="outline" className="h-auto py-4">
            <div className="flex flex-col items-center gap-2">
              <Bell className="h-6 w-6" />
              <span>Preisalarme</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
