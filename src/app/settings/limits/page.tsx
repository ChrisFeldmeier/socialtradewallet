"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Lock,
  CreditCard,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  ShieldCheck,
  Info
} from "lucide-react";

const limits = {
  daily: {
    deposit: {
      used: 1500,
      max: 10000
    },
    withdrawal: {
      used: 500,
      max: 5000
    },
    trading: {
      used: 2500,
      max: 20000
    }
  },
  verificationLevel: 2,
  fees: {
    sepa: {
      deposit: "0.00%",
      withdrawal: "0.90€"
    },
    card: {
      deposit: "1.99%",
      withdrawal: "1.99%"
    },
    crypto: {
      deposit: "0.00%",
      withdrawal: "Netzwerkgebühr"
    }
  }
};

const verificationLevels = [
  {
    level: 1,
    name: "Basis",
    requirements: ["E-Mail", "Telefon"],
    limits: {
      deposit: "1,000€",
      withdrawal: "1,000€",
      trading: "5,000€"
    }
  },
  {
    level: 2,
    name: "Verifiziert",
    requirements: ["Personalausweis", "Adressnachweis"],
    limits: {
      deposit: "10,000€",
      withdrawal: "5,000€",
      trading: "20,000€"
    }
  },
  {
    level: 3,
    name: "Pro",
    requirements: ["Einkommensnachweise", "Zusätzliche Dokumente"],
    limits: {
      deposit: "100,000€",
      withdrawal: "50,000€",
      trading: "Unbegrenzt"
    }
  }
];

export default function LimitsSettings() {
  return (
    <div className="container max-w-[1200px] mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Limits & Gebühren</h1>
          <p className="text-gray-500 mt-1">
            Übersicht deiner Handelslimits und anfallenden Gebühren
          </p>
        </div>

        <div className="grid gap-6">
          {/* Daily Limits */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Tägliche Limits</h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">Einzahlungen</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {limits.daily.deposit.used}€ / {limits.daily.deposit.max}€
                  </span>
                </div>
                <Progress value={(limits.daily.deposit.used / limits.daily.deposit.max) * 100} />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <ArrowDownRight className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">Auszahlungen</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {limits.daily.withdrawal.used}€ / {limits.daily.withdrawal.max}€
                  </span>
                </div>
                <Progress value={(limits.daily.withdrawal.used / limits.daily.withdrawal.max) * 100} />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Wallet className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">Trading</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {limits.daily.trading.used}€ / {limits.daily.trading.max}€
                  </span>
                </div>
                <Progress value={(limits.daily.trading.used / limits.daily.trading.max) * 100} />
              </div>
            </div>
          </Card>

          {/* Fees */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Gebühren</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">SEPA Überweisung</h3>
                    <p className="text-sm text-gray-500">1-2 Werktage</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">Einzahlung: {limits.fees.sepa.deposit}</p>
                  <p className="text-sm text-gray-500">Auszahlung: {limits.fees.sepa.withdrawal}</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Kreditkarte</h3>
                    <p className="text-sm text-gray-500">Sofort</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">Einzahlung: {limits.fees.card.deposit}</p>
                  <p className="text-sm text-gray-500">Auszahlung: {limits.fees.card.withdrawal}</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Wallet className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Krypto</h3>
                    <p className="text-sm text-gray-500">Blockchain-abhängig</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">Einzahlung: {limits.fees.crypto.deposit}</p>
                  <p className="text-sm text-gray-500">Auszahlung: {limits.fees.crypto.withdrawal}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Verification Levels */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold">Verifizierungslevel</h2>
                <p className="text-sm text-gray-500">
                  Aktuelles Level: {limits.verificationLevel}
                </p>
              </div>
              <Button variant="outline">
                <ShieldCheck className="h-4 w-4 mr-2" />
                Level erhöhen
              </Button>
            </div>

            <div className="space-y-4">
              {verificationLevels.map((level) => (
                <div 
                  key={level.level}
                  className={`p-4 rounded-lg border ${
                    level.level === limits.verificationLevel ? "bg-blue-50 border-blue-200" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Level {level.level}: {level.name}</h3>
                      {level.level === limits.verificationLevel && (
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          Aktuell
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Anforderungen:</p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        {level.requirements.map((req, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Info className="h-4 w-4" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">Limits:</p>
                      <ul className="text-sm text-gray-500 space-y-1">
                        <li className="flex items-center justify-between">
                          <span>Einzahlung:</span>
                          <span className="font-medium">{level.limits.deposit}</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Auszahlung:</span>
                          <span className="font-medium">{level.limits.withdrawal}</span>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Trading:</span>
                          <span className="font-medium">{level.limits.trading}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 