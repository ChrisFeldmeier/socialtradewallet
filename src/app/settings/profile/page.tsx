"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building2,
  CheckCircle2,
  AlertTriangle,
  Shield,
  Bell,
  CreditCard,
  History,
  Lock,
  ChevronRight
} from "lucide-react";

const profile = {
  personalInfo: {
    firstName: "Max",
    lastName: "Mustermann",
    email: "max.mustermann@example.com",
    phone: "+49 123 456789",
    dateOfBirth: "1990-01-01",
    nationality: "Deutsch",
    occupation: "Software Engineer"
  },
  address: {
    street: "Musterstraße 123",
    city: "Berlin",
    postalCode: "10115",
    country: "Deutschland"
  },
  verification: {
    email: true,
    phone: true,
    identity: true,
    address: false
  }
};

const navigationLinks = [
  {
    title: "Sicherheit",
    href: "/settings/security",
    icon: Shield,
    description: "Zwei-Faktor-Authentifizierung und Passwort",
    color: "text-blue-600"
  },
  {
    title: "Preisalarme",
    href: "/settings/alerts",
    icon: Bell,
    description: "Benachrichtigungen für Preisänderungen",
    color: "text-amber-600"
  },
  {
    title: "Zahlungsmethoden",
    href: "/settings/payment-methods",
    icon: CreditCard,
    description: "Verwalte deine Ein- und Auszahlungsmethoden",
    color: "text-purple-600"
  },
  {
    title: "Transaktionen",
    href: "/settings/transactions",
    icon: History,
    description: "Übersicht aller Ein- und Auszahlungen",
    color: "text-emerald-600"
  },
  {
    title: "Limits & Gebühren",
    href: "/settings/limits",
    icon: Lock,
    description: "Handelslimits und Gebührenübersicht",
    color: "text-red-600"
  }
];

export default function ProfileSettings() {
  return (
    <div className="container max-w-[1200px] mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Profil</h1>
          <p className="text-gray-500 mt-1">
            Verwalte deine persönlichen Informationen und Einstellungen
          </p>
        </div>

        <div className="grid gap-6">
          {/* Profile Header */}
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center">
                <User className="h-10 w-10 text-gray-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  {profile.personalInfo.firstName} {profile.personalInfo.lastName}
                </h2>
                <p className="text-gray-500">{profile.personalInfo.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    Pro Mitglied
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Verifiziert
                  </Badge>
                </div>
              </div>
            </div>
          </Card>


          {/* Personal Information */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Persönliche Informationen</h2>
            <div className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Vorname</Label>
                  <Input 
                    id="firstName"
                    value={profile.personalInfo.firstName}
                    onChange={() => {}}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nachname</Label>
                  <Input 
                    id="lastName"
                    value={profile.personalInfo.lastName}
                    onChange={() => {}}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input 
                  id="email"
                  type="email"
                  value={profile.personalInfo.email}
                  onChange={() => {}}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input 
                  id="phone"
                  type="tel"
                  value={profile.personalInfo.phone}
                  onChange={() => {}}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationalität</Label>
                  <Input 
                    id="nationality"
                    value={profile.personalInfo.nationality}
                    onChange={() => {}}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Geburtsdatum</Label>
                  <Input 
                    id="dateOfBirth"
                    type="date"
                    value={profile.personalInfo.dateOfBirth}
                    onChange={() => {}}
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Address */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Adresse</h2>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="street">Straße</Label>
                <Input 
                  id="street"
                  value={profile.address.street}
                  onChange={() => {}}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">Stadt</Label>
                  <Input 
                    id="city"
                    value={profile.address.city}
                    onChange={() => {}}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postalCode">Postleitzahl</Label>
                  <Input 
                    id="postalCode"
                    value={profile.address.postalCode}
                    onChange={() => {}}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Land</Label>
                <Input 
                  id="country"
                  value={profile.address.country}
                  onChange={() => {}}
                />
              </div>
            </div>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button>
              Änderungen speichern
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 