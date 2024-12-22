"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Send, Wallet } from "lucide-react";

interface SendDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const assets = [
  { 
    id: "btc", 
    name: "Bitcoin", 
    symbol: "BTC", 
    balance: 0.12345678,
    value: 4321.09,
    network: "Bitcoin",
    image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
    minWithdraw: 0.0001,
    fee: 0.0001
  },
  { 
    id: "eth", 
    name: "Ethereum", 
    symbol: "ETH", 
    balance: 1.23456789,
    value: 2469.13,
    network: "Ethereum",
    image: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
    minWithdraw: 0.01,
    fee: 0.002
  },
  { 
    id: "usdt", 
    name: "Tether", 
    symbol: "USDT", 
    balance: 1000.00,
    value: 1000.00,
    network: "Ethereum",
    image: "https://assets.coingecko.com/coins/images/325/small/Tether.png",
    minWithdraw: 20,
    fee: 5
  },
  { 
    id: "sol", 
    name: "Solana", 
    symbol: "SOL", 
    balance: 25.5,
    value: 2422.50,
    network: "Solana",
    image: "https://assets.coingecko.com/coins/images/4128/small/solana.png",
    minWithdraw: 0.1,
    fee: 0.01
  },
  { 
    id: "ada", 
    name: "Cardano", 
    symbol: "ADA", 
    balance: 2500,
    value: 1250.00,
    network: "Cardano",
    image: "https://assets.coingecko.com/coins/images/975/small/cardano.png",
    minWithdraw: 10,
    fee: 1
  }
];

export function SendDialog({ isOpen, onOpenChange }: SendDialogProps) {
  const [selectedAsset, setSelectedAsset] = useState(assets[0].id);
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleSend = () => {
    // Hier würde die Senden-Logik implementiert werden
    console.log(`Sending ${amount} ${selectedAsset} to ${address}`);
    onOpenChange(false);
  };

  const asset = assets.find((a) => a.id === selectedAsset);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Assets senden</DialogTitle>
          <DialogDescription>
            Wähle ein Asset und gib die Empfängeradresse ein.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          <div className="space-y-2">
            <Label>Asset auswählen</Label>
            <Select value={selectedAsset} onValueChange={setSelectedAsset}>
              <SelectTrigger>
                <SelectValue placeholder="Wähle ein Asset" />
              </SelectTrigger>
              <SelectContent>
                {assets.map((asset) => (
                  <SelectItem key={asset.id} value={asset.id}>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <img 
                          src={asset.image} 
                          alt={asset.name} 
                          className="w-6 h-6 rounded-full"
                        />
                        <span>{asset.name} ({asset.symbol})</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{asset.balance} {asset.symbol}</div>
                        <div className="text-xs text-gray-500">≈ €{asset.value.toFixed(2)}</div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {asset && (
              <div className="space-y-2">
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <Wallet className="h-4 w-4" />
                  Verfügbar: {asset.balance} {asset.symbol} (≈ €{asset.value.toFixed(2)})
                </p>
                <div className="p-3 bg-gray-50 rounded-lg space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Netzwerk:</span>
                    <span className="font-medium">{asset.network}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mindestbetrag:</span>
                    <span className="font-medium">{asset.minWithdraw} {asset.symbol}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Netzwerkgebühr:</span>
                    <span className="font-medium">{asset.fee} {asset.symbol}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label>Empfängeradresse</Label>
            <Input
              placeholder={`${asset?.symbol}-Adresse eingeben`}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <p className="text-xs text-gray-500">
              Bitte überprüfe die Adresse sorgfältig. Transaktionen können nicht rückgängig gemacht werden.
            </p>
          </div>

          <div className="space-y-2">
            <Label>Menge</Label>
            <div className="relative">
              <Input
                type="number"
                placeholder="0.00000000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pr-20"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                {asset?.symbol}
              </div>
            </div>
            {asset && (
              <div className="space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => setAmount(asset.balance.toString())}
                >
                  Max: {asset.balance} {asset.symbol}
                </Button>
                {amount && (
                  <p className="text-sm text-gray-500 text-right">
                    ≈ €{(parseFloat(amount) * (asset.value / asset.balance)).toFixed(2)}
                  </p>
                )}
              </div>
            )}
          </div>

          <Button
            className="w-full bg-emerald-500 hover:bg-emerald-600"
            onClick={handleSend}
            disabled={
              !address || 
              !amount || 
              parseFloat(amount) <= 0 || 
              (asset && parseFloat(amount) < asset.minWithdraw) ||
              (asset && parseFloat(amount) > asset.balance)
            }
          >
            <Send className="h-4 w-4 mr-2" />
            Senden
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 