"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CreditCard, Building2, Banknote, Clock, Info, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface DepositDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const paymentMethods = [
  {
    id: "card",
    name: "Kreditkarte",
    description: "Sofort verfügbar",
    icon: CreditCard,
    fee: "1.5%",
    minAmount: 10,
    maxAmount: 10000,
    processingTime: "Sofort",
    supportedCards: ["Visa", "Mastercard"],
  },
  {
    id: "bank",
    name: "Banküberweisung",
    description: "1-3 Werktage",
    icon: Building2,
    fee: "0%",
    minAmount: 10,
    maxAmount: 100000,
    processingTime: "1-3 Werktage",
    bankDetails: {
      iban: "DE89 3704 0044 0532 0130 00",
      bic: "DEUTDEBBXXX",
      reference: "BP-123456",
    },
  },
  {
    id: "instant",
    name: "Sofortüberweisung",
    description: "Sofort verfügbar",
    icon: Banknote,
    fee: "0.9%",
    minAmount: 10,
    maxAmount: 15000,
    processingTime: "Sofort",
    supportedBanks: ["Deutsche Bank", "Commerzbank", "Sparkasse"],
  },
];

const presetAmounts = [50, 100, 250, 500, 1000, 2500];

export function DepositDialog({ isOpen, onOpenChange }: DepositDialogProps) {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("card");
  const [step, setStep] = useState<"amount" | "details">("amount");

  const selectedMethod = paymentMethods.find((pm) => pm.id === method);

  const handleDeposit = () => {
    if (step === "amount") {
      setStep("details");
    } else {
      // Hier würde die Einzahlungslogik implementiert werden
      console.log(`Depositing ${amount}€ via ${method}`);
      onOpenChange(false);
      setStep("amount");
    }
  };

  const getFee = () => {
    if (!selectedMethod || !amount) return 0;
    return (parseFloat(amount) * parseFloat(selectedMethod.fee)) / 100;
  };

  const getTotal = () => {
    return parseFloat(amount || "0") + getFee();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) setStep("amount");
      onOpenChange(open);
    }}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Geld einzahlen</DialogTitle>
          <DialogDescription>
            {step === "amount" 
              ? "Wähle eine Zahlungsmethode und gib den Betrag ein."
              : "Überprüfe die Details deiner Einzahlung."}
          </DialogDescription>
        </DialogHeader>
        
        {step === "amount" ? (
          <div className="mt-4 space-y-6">
            <div className="space-y-4">
              <Label>Zahlungsmethode</Label>
              <RadioGroup value={method} onValueChange={setMethod}>
                {paymentMethods.map((pm) => (
                  <div
                    key={pm.id}
                    className={`flex items-center space-x-4 rounded-lg border p-4 cursor-pointer transition-colors ${
                      method === pm.id ? "border-emerald-500 bg-emerald-50" : "hover:border-gray-300"
                    }`}
                    onClick={() => setMethod(pm.id)}
                  >
                    <RadioGroupItem value={pm.id} id={pm.id} />
                    <pm.icon className="h-5 w-5 text-gray-600" />
                    <Label htmlFor={pm.id} className="flex-1 cursor-pointer">
                      <div className="font-medium">{pm.name}</div>
                      <div className="text-sm text-gray-500">{pm.description}</div>
                    </Label>
                    <div className="text-right text-sm">
                      <div className="text-gray-600">Gebühr: {pm.fee}</div>
                      <div className="text-gray-500">
                        <Clock className="h-3 w-3 inline mr-1" />
                        {pm.processingTime}
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Betrag</Label>
                {selectedMethod && (
                  <span className="text-sm text-gray-500">
                    Min: €{selectedMethod.minAmount} / Max: €{selectedMethod.maxAmount}
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {presetAmounts.map((preset) => (
                  <Button
                    key={preset}
                    variant={amount === preset.toString() ? "default" : "outline"}
                    className="w-full"
                    onClick={() => setAmount(preset.toString())}
                  >
                    €{preset}
                  </Button>
                ))}
              </div>

              <div className="relative">
                <Input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-8"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
              </div>

              {selectedMethod && amount && (
                <div className="p-3 bg-gray-50 rounded-lg space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Einzahlung:</span>
                    <span>€{parseFloat(amount).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Gebühr ({selectedMethod.fee}):</span>
                    <span>€{getFee().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-medium pt-2 border-t">
                    <span>Gesamt:</span>
                    <span>€{getTotal().toFixed(2)}</span>
                  </div>
                </div>
              )}
            </div>

            <Button
              className="w-full bg-emerald-500 hover:bg-emerald-600"
              onClick={handleDeposit}
              disabled={
                !amount || 
                parseFloat(amount) < (selectedMethod?.minAmount || 0) ||
                parseFloat(amount) > (selectedMethod?.maxAmount || 0)
              }
            >
              Weiter
            </Button>
          </div>
        ) : (
          <div className="mt-4 space-y-6">
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Zahlungsmethode:</span>
                  <span className="font-medium">{selectedMethod?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Betrag:</span>
                  <span className="font-medium">€{parseFloat(amount).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gebühr:</span>
                  <span className="font-medium">€{getFee().toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-medium">Gesamt:</span>
                  <span className="font-medium">€{getTotal().toFixed(2)}</span>
                </div>
              </div>

              {method === "bank" && (
                <div className="space-y-3">
                  <Label>Überweisungsdaten</Label>
                  <div className="p-4 border rounded-lg space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">IBAN:</span>
                      <span className="font-medium">{selectedMethod.bankDetails.iban}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">BIC:</span>
                      <span className="font-medium">{selectedMethod.bankDetails.bic}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Verwendungszweck:</span>
                      <span className="font-medium">{selectedMethod.bankDetails.reference}</span>
                    </div>
                  </div>
                </div>
              )}

              {method === "card" && (
                <div className="space-y-3">
                  <Label>Unterstützte Karten</Label>
                  <div className="flex gap-2">
                    {selectedMethod.supportedCards.map((card) => (
                      <div key={card} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {card}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {method === "instant" && (
                <div className="space-y-3">
                  <Label>Unterstützte Banken</Label>
                  <div className="flex flex-wrap gap-2">
                    {selectedMethod.supportedBanks.map((bank) => (
                      <div key={bank} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {bank}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {method === "bank" 
                    ? "Bitte beachte, dass die Überweisung 1-3 Werktage dauern kann."
                    : "Dein Geld wird nach erfolgreicher Zahlung sofort verfügbar sein."}
                </AlertDescription>
              </Alert>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setStep("amount")}
              >
                Zurück
              </Button>
              <Button
                className="flex-1 bg-emerald-500 hover:bg-emerald-600"
                onClick={handleDeposit}
              >
                {method === "bank" ? "Überweisungsdaten kopieren" : "Jetzt bezahlen"}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
} 