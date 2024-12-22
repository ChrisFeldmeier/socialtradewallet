"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard,
  Banknote,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  Clock
} from "lucide-react";

const paymentMethods = [
  {
    id: 1,
    type: "card",
    name: "Visa",
    last4: "4242",
    expiry: "12/24",
    isDefault: true,
    status: "verified"
  },
  {
    id: 2,
    type: "bank",
    name: "Deutsche Bank",
    last4: "1234",
    iban: "DE89 3704 0044 0532 0130 00",
    status: "pending"
  },
  {
    id: 3,
    type: "card",
    name: "Mastercard",
    last4: "8888",
    expiry: "09/25",
    status: "verified"
  }
];

export default function PaymentSettings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Zahlungsmethoden</h1>
        <p className="text-gray-500 mt-1">
          Verwalte deine Zahlungsmethoden für Ein- und Auszahlungen
        </p>
      </div>

      <div className="grid gap-8">
        {/* Add Payment Method */}
        <Button className="w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Zahlungsmethode hinzufügen
        </Button>

        {/* Payment Methods List */}
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div 
              key={method.id}
              className="bg-white rounded-lg border p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    {method.type === "card" ? (
                      <CreditCard className="h-6 w-6 text-gray-600" />
                    ) : (
                      <Banknote className="h-6 w-6 text-gray-600" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{method.name}</h3>
                      {method.isDefault && (
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                          Standard
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">
                      {method.type === "card" ? (
                        <>•••• {method.last4} • Gültig bis {method.expiry}</>
                      ) : (
                        <>•••• {method.last4} • {method.iban}</>
                      )}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      {method.status === "verified" ? (
                        <div className="flex items-center gap-1 text-sm text-emerald-600">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Verifiziert</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-sm text-amber-600">
                          <Clock className="h-4 w-4" />
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
            </div>
          ))}
        </div>

        {/* Limits Info */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Limits & Gebühren</h2>
          <div className="grid gap-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Einzahlungslimit</p>
                <p className="text-sm text-gray-500">Pro Transaktion</p>
              </div>
              <p className="font-medium">€10.000</p>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Auszahlungslimit</p>
                <p className="text-sm text-gray-500">Pro Tag</p>
              </div>
              <p className="font-medium">€50.000</p>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">Gebühren</p>
                <p className="text-sm text-gray-500">Für SEPA-Überweisungen</p>
              </div>
              <Badge variant="secondary">Kostenlos</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 