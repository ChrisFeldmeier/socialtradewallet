"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Shield,
  Smartphone,
  Mail,
  Key,
  AlertTriangle,
  CheckCircle2,
  Clock,
  LogOut
} from "lucide-react";

const securitySettings = {
  twoFactor: true,
  emailVerified: true,
  phoneVerified: true,
  lastLogin: "2024-01-22 14:30",
  lastLoginLocation: "Berlin, Deutschland",
  lastLoginDevice: "Chrome auf MacOS",
  loginHistory: [
    {
      date: "2024-01-22 14:30",
      location: "Berlin, Deutschland",
      device: "Chrome auf MacOS",
      status: "success"
    },
    {
      date: "2024-01-21 09:15",
      location: "Berlin, Deutschland",
      device: "Safari auf iOS",
      status: "success"
    },
    {
      date: "2024-01-20 18:45",
      location: "Frankfurt, Deutschland",
      device: "Firefox auf Windows",
      status: "failed"
    }
  ]
};

export default function SecuritySettings() {
  return (
    <div className="container max-w-[1200px] mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Sicherheit</h1>
          <p className="text-gray-500 mt-1">
            Verwalte deine Sicherheitseinstellungen und Anmeldeinformationen
          </p>
        </div>

        <div className="grid gap-6">
          {/* Two-Factor Authentication */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Zwei-Faktor-Authentifizierung</h2>
                  <p className="text-sm text-gray-500">
                    Erhöhe die Sicherheit deines Kontos mit 2FA
                  </p>
                </div>
              </div>
              <Switch checked={securitySettings.twoFactor} />
            </div>
          </Card>

          {/* Verification Status */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Verifizierungsstatus</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <p className="text-sm text-gray-500">max.mustermann@example.com</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Verifiziert
                </Badge>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-4">
                  <Smartphone className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-sm text-gray-500">+49 123 456789</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Verifiziert
                </Badge>
              </div>
            </div>
          </Card>

          {/* Login History */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Anmeldeverlauf</h2>
            <div className="space-y-4">
              {securitySettings.loginHistory.map((login, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      login.status === "success" ? "bg-green-100" : "bg-red-100"
                    }`}>
                      {login.status === "success" ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{login.device}</p>
                        {login.status === "failed" && (
                          <Badge variant="secondary" className="bg-red-100 text-red-700">
                            Fehlgeschlagen
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        {login.date}
                        <span>•</span>
                        {login.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Actions */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Sicherheitsaktionen</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-4">
                  <Key className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Passwort ändern</p>
                    <p className="text-sm text-gray-500">
                      Zuletzt geändert vor 3 Monaten
                    </p>
                  </div>
                </div>
                <Button variant="outline">Ändern</Button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-4">
                  <LogOut className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-medium">Alle Geräte abmelden</p>
                    <p className="text-sm text-gray-500">
                      Melde dich von allen anderen Geräten ab
                    </p>
                  </div>
                </div>
                <Button variant="outline">Abmelden</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 