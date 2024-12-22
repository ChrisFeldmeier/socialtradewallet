"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard,
  Building2,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

const paymentMethods = {
  bankAccounts: [
    {
      id: 1,
      type: "SEPA",
      name: "Deutsche Bank",
      accountNumber: "DE89 3704 0044 0532 0130 00",
      verified: true,
      primary: true
    },
    {
      id: 2,
      type: "SEPA",
      name: "Sparkasse",
      accountNumber: "DE02 5001 0517 0648 4898 90",
      verified: false,
      primary: false
    }
  ],
  cards: [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "12/24",
      verified: true,
      primary: true
    },
    {
      id: 2,
      type: "Mastercard",
      last4: "8888",
      expiry: "06/25",
      verified: true,
      primary: false
    }
  ]
};

export default function PaymentMethodsSettings() {
  return (
    <div className="container max-w-[1200px] mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Zahlungsmethoden</h1>
            <p className="text-gray-500 mt-1">
              Verwalte deine Ein- und Auszahlungsmethoden
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Neue Zahlungsmethode
          </Button>
        </div>

        <div className="grid gap-6">
          {/* Bank Accounts */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Bankkonten</h2>
                  <p className="text-sm text-gray-500">
                    SEPA Überweisungen und Lastschriften
                  </p>
                </div>
              </div>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Bankkonto hinzufügen
              </Button>
            </div>

            <div className="space-y-4">
              {paymentMethods.bankAccounts.map((account) => (
                <div 
                  key={account.id}
                  className="flex items-center justify-between p-4 rounded-lg border"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{account.name}</h3>
                        {account.primary && (
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                            Standard
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{account.accountNumber}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {account.verified ? (
                          <div className="flex items-center gap-1 text-sm text-green-600">
                            <CheckCircle2 className="h-4 w-4" />
                            <span>Verifiziert</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-sm text-amber-600">
                            <AlertTriangle className="h-4 w-4" />
                            <span>Verifizierung ausstehend</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
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

          {/* Credit Cards */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Kreditkarten</h2>
                  <p className="text-sm text-gray-500">
                    Visa, Mastercard und mehr
                  </p>
                </div>
              </div>
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Karte hinzufügen
              </Button>
            </div>

            <div className="space-y-4">
              {paymentMethods.cards.map((card) => (
                <div 
                  key={card.id}
                  className="flex items-center justify-between p-4 rounded-lg border"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{card.type}</h3>
                        {card.primary && (
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                            Standard
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        •••• {card.last4} | Gültig bis {card.expiry}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        {card.verified ? (
                          <div className="flex items-center gap-1 text-sm text-green-600">
                            <CheckCircle2 className="h-4 w-4" />
                            <span>Verifiziert</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-sm text-amber-600">
                            <AlertTriangle className="h-4 w-4" />
                            <span>Verifizierung ausstehend</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
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

          {/* Info Card */}
          <Card className="p-6 bg-blue-50 border-blue-200">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Sicherheitshinweis</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Wir speichern deine Kartendaten sicher und verschlüsselt. 
                  Deine vollständige Kartennummer ist für uns nicht sichtbar.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 