"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Bell,
  Plus,
  TrendingUp,
  TrendingDown,
  Trash2,
  Edit2
} from "lucide-react";

const priceAlerts = [
  {
    id: 1,
    asset: "Bitcoin",
    symbol: "BTC",
    price: "35000",
    condition: "above",
    active: true
  },
  {
    id: 2,
    asset: "Ethereum",
    symbol: "ETH",
    price: "1500",
    condition: "below",
    active: true
  },
  {
    id: 3,
    asset: "Apple",
    symbol: "AAPL",
    price: "150",
    condition: "below",
    active: false
  }
];

export default function AlertsSettings() {
  return (
    <div className="container max-w-[1200px] mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Preisalarme</h1>
            <p className="text-gray-500 mt-1">
              Verwalte deine Preisbenachrichtigungen für verschiedene Assets
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Neuer Alarm
          </Button>
        </div>

        <div className="grid gap-6">
          {/* Notifications Settings */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <Bell className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Benachrichtigungen</h2>
                  <p className="text-sm text-gray-500">
                    Erhalte Push-Benachrichtigungen für deine Preisalarme
                  </p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </Card>

          {/* Price Alerts */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Aktive Alarme</h2>
            <div className="space-y-4">
              {priceAlerts.map((alert) => (
                <div 
                  key={alert.id}
                  className="flex items-center justify-between p-4 rounded-lg border"
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      alert.condition === "above" ? "bg-green-100" : "bg-red-100"
                    }`}>
                      {alert.condition === "above" ? (
                        <TrendingUp className={`h-5 w-5 ${
                          alert.condition === "above" ? "text-green-600" : "text-red-600"
                        }`} />
                      ) : (
                        <TrendingDown className={`h-5 w-5 ${
                          alert.condition === "above" ? "text-green-600" : "text-red-600"
                        }`} />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{alert.asset}</h3>
                        <Badge variant="secondary" className="font-normal">
                          {alert.symbol}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500">
                        {alert.condition === "above" ? "Über" : "Unter"} €{alert.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch checked={alert.active} />
                    <Button variant="ghost" size="icon">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Create New Alert */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Neuen Alarm erstellen</h2>
            <div className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="asset">Asset</Label>
                  <Input id="asset" placeholder="z.B. Bitcoin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Preis (€)</Label>
                  <Input id="price" type="number" placeholder="z.B. 35000" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Alarm erstellen
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 