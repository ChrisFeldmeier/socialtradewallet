"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpDown, TrendingUp, TrendingDown, Search } from "lucide-react";
import { assets, getAssetsByType, searchAssets } from "@/lib/market-data";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TradeDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TradeDialog({ isOpen, onOpenChange }: TradeDialogProps) {
  const [selectedAsset, setSelectedAsset] = useState(assets[0].id);
  const [amount, setAmount] = useState("");
  const [tab, setTab] = useState("buy");
  const [assetType, setAssetType] = useState<"crypto" | "stock">("crypto");
  const [searchQuery, setSearchQuery] = useState("");

  const handleTrade = () => {
    // Hier würde die Handelslogik implementiert werden
    console.log(`${tab === "buy" ? "Buying" : "Selling"} ${amount}€ of ${selectedAsset}`);
    onOpenChange(false);
  };

  const filteredAssets = searchQuery 
    ? searchAssets(searchQuery)
    : getAssetsByType(assetType);

  const asset = assets.find((a) => a.id === selectedAsset);

  const getAssetAmount = () => {
    if (!asset || !amount) return "0";
    return (parseFloat(amount) / asset.price).toFixed(8);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Schnell Handeln</DialogTitle>
          <DialogDescription>
            Wähle ein Asset und starte den Handel.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Tabs value={tab} onValueChange={setTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="buy" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" /> Kaufen
              </TabsTrigger>
              <TabsTrigger value="sell" className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4" /> Verkaufen
              </TabsTrigger>
            </TabsList>
            <div className="mt-4 space-y-4">
              <div className="flex gap-2">
                <Button
                  variant={assetType === "crypto" ? "default" : "outline"}
                  size="sm"
                  className="flex-1"
                  onClick={() => setAssetType("crypto")}
                >
                  Krypto
                </Button>
                <Button
                  variant={assetType === "stock" ? "default" : "outline"}
                  size="sm"
                  className="flex-1"
                  onClick={() => setAssetType("stock")}
                >
                  Aktien
                </Button>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Suche nach Assets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>

              <ScrollArea className="h-[200px] rounded-md border">
                <div className="p-4 space-y-2">
                  {filteredAssets.map((asset) => {
                    const isSelected = asset.id === selectedAsset;
                    const isPositive = asset.change24h >= 0;
                    return (
                      <div
                        key={asset.id}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${
                          isSelected 
                            ? "bg-emerald-50 border-emerald-200" 
                            : "hover:bg-gray-50"
                        }`}
                        onClick={() => setSelectedAsset(asset.id)}
                      >
                        <div className="flex items-center gap-3">
                          <img 
                            src={asset.image} 
                            alt={asset.name} 
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <div className="font-medium">{asset.name}</div>
                            <div className="text-sm text-gray-500">{asset.symbol}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">€{asset.price.toLocaleString()}</div>
                          <div className={`text-sm ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                            {isPositive ? '+' : ''}{asset.change24h}%
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {filteredAssets.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      Keine Assets gefunden
                    </div>
                  )}
                </div>
              </ScrollArea>

              <div className="space-y-2">
                <Input
                  type="number"
                  placeholder="Betrag in EUR"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="text-sm text-gray-500 flex items-center justify-between">
                  <span>Sie erhalten:</span>
                  <span className="font-medium">
                    {getAssetAmount()} {asset?.symbol}
                  </span>
                </div>
                {asset && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">24h Volumen:</span>
                      <span className="font-medium">
                        €{asset.volume24h.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Marktkapitalisierung:</span>
                      <span className="font-medium">
                        €{asset.marketCap.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Rang:</span>
                      <span className="font-medium">#{asset.rank}</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      {asset.description}
                    </div>
                  </div>
                )}
              </div>

              <Button
                className="w-full bg-emerald-500 hover:bg-emerald-600"
                onClick={handleTrade}
                disabled={!amount || parseFloat(amount) <= 0}
              >
                <ArrowUpDown className="h-4 w-4 mr-2" />
                {tab === "buy" ? "Jetzt kaufen" : "Jetzt verkaufen"}
              </Button>
            </div>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
} 