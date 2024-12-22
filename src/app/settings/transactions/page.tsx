"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Download,
  Calendar,
  Filter,
  CreditCard,
  Wallet,
  Building2
} from "lucide-react";

const transactions = [
  {
    id: 1,
    type: "deposit",
    method: "bank",
    amount: 1000,
    currency: "EUR",
    status: "completed",
    date: "2024-01-22 14:30",
    reference: "SEPA-123456789"
  },
  {
    id: 2,
    type: "withdrawal",
    method: "bank",
    amount: 500,
    currency: "EUR",
    status: "pending",
    date: "2024-01-21 09:15",
    reference: "SEPA-987654321"
  },
  {
    id: 3,
    type: "deposit",
    method: "card",
    amount: 250,
    currency: "EUR",
    status: "completed",
    date: "2024-01-20 18:45",
    reference: "CARD-123456789"
  },
  {
    id: 4,
    type: "withdrawal",
    method: "bank",
    amount: 1500,
    currency: "EUR",
    status: "failed",
    date: "2024-01-19 11:30",
    reference: "SEPA-456789123"
  },
  {
    id: 5,
    type: "deposit",
    method: "crypto",
    amount: 750,
    currency: "EUR",
    status: "completed",
    date: "2024-01-18 16:20",
    reference: "CRYPTO-123456789"
  }
];

export default function TransactionsSettings() {
  return (
    <div className="container max-w-[1200px] mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Transaktionshistorie</h1>
            <p className="text-gray-500 mt-1">
              Übersicht aller Ein- und Auszahlungen
            </p>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportieren
          </Button>
        </div>

        <div className="grid gap-6">
          {/* Filters */}
          <Card className="p-6">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Label htmlFor="search" className="sr-only">Suche</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input
                      id="search"
                      placeholder="Suche nach Referenznummer..."
                      className="pl-10"
                    />
                  </div>
                </div>
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Zeitraum
                </Button>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </Card>

          {/* Transactions List */}
          <Card className="p-6">
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div 
                  key={transaction.id}
                  className="flex items-center justify-between p-4 rounded-lg border"
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      transaction.type === "deposit" ? "bg-green-100" : "bg-red-100"
                    }`}>
                      {transaction.type === "deposit" ? (
                        <ArrowUpRight className={`h-5 w-5 ${
                          transaction.type === "deposit" ? "text-green-600" : "text-red-600"
                        }`} />
                      ) : (
                        <ArrowDownRight className={`h-5 w-5 ${
                          transaction.type === "deposit" ? "text-green-600" : "text-red-600"
                        }`} />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">
                          {transaction.type === "deposit" ? "Einzahlung" : "Auszahlung"}
                        </h3>
                        <Badge variant="secondary" className={`
                          ${transaction.status === "completed" ? "bg-green-100 text-green-700" : ""}
                          ${transaction.status === "pending" ? "bg-amber-100 text-amber-700" : ""}
                          ${transaction.status === "failed" ? "bg-red-100 text-red-700" : ""}
                        `}>
                          {transaction.status === "completed" ? "Abgeschlossen" : ""}
                          {transaction.status === "pending" ? "In Bearbeitung" : ""}
                          {transaction.status === "failed" ? "Fehlgeschlagen" : ""}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          {transaction.date}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          {transaction.method === "bank" && <Building2 className="h-4 w-4" />}
                          {transaction.method === "card" && <CreditCard className="h-4 w-4" />}
                          {transaction.method === "crypto" && <Wallet className="h-4 w-4" />}
                          {transaction.reference}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      transaction.type === "deposit" ? "text-green-600" : "text-red-600"
                    }`}>
                      {transaction.type === "deposit" ? "+" : "-"}
                      {transaction.amount} {transaction.currency}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Summary */}
          <Card className="p-6">
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-500">Gesamte Einzahlungen</p>
                <p className="text-2xl font-bold text-green-600">+2,000 EUR</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Gesamte Auszahlungen</p>
                <p className="text-2xl font-bold text-red-600">-2,000 EUR</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Offene Transaktionen</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 