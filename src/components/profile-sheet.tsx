"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Settings, 
  Shield, 
  CreditCard, 
  History, 
  Bell, 
  HelpCircle,
  LogOut,
  ChevronRight,
  User,
  Lock,
  Wallet,
  Gift,
  Users
} from "lucide-react";
import Link from "next/link";

interface ProfileSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const menuItems = [
  {
    title: "Account",
    items: [
      {
        icon: User,
        label: "Persönliche Daten",
        href: "/settings/profile",
        badge: "Verifiziert",
      },
      {
        icon: Lock,
        label: "Sicherheit",
        href: "/settings/security",
      },
      {
        icon: Wallet,
        label: "Zahlungsmethoden",
        href: "/settings/payment",
        badge: "3 aktiv",
      },
    ],
  },
  {
    title: "Handel",
    items: [
      {
        icon: History,
        label: "Transaktionshistorie",
        href: "/history",
      },
      {
        icon: CreditCard,
        label: "Limits & Gebühren",
        href: "/settings/limits",
      },
      {
        icon: Bell,
        label: "Preisalarme",
        href: "/settings/alerts",
        badge: "2 aktiv",
      },
    ],
  },
  {
    title: "Extras",
    items: [
      {
        icon: Gift,
        label: "Freunde werben",
        href: "/referral",
        badge: "50€ Bonus",
      },
      {
        icon: Users,
        label: "Pro Mitgliedschaft",
        href: "/pro",
        badge: "Upgrade",
      },
      {
        icon: HelpCircle,
        label: "Hilfe & Support",
        href: "/support",
      },
    ],
  },
];

export function ProfileSheet({ isOpen, onOpenChange }: ProfileSheetProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    // Hier würde die Logout-Logik implementiert werden
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoggingOut(false);
    onOpenChange(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-[400px] p-0">
        <div className="p-6 border-b">
          <SheetHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-emerald-500">
                <AvatarImage src="/avatar.jpg" alt="User" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <SheetTitle>Chris Nissen</SheetTitle>
                <p className="text-sm text-gray-500">chris@example.com</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                    Pro Mitglied
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Verifiziert
                  </Badge>
                </div>
              </div>
            </div>
          </SheetHeader>
        </div>

        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="p-6 space-y-6">
            {menuItems.map((section, i) => (
              <div key={i} className="space-y-3">
                <h3 className="text-sm font-medium text-gray-500">{section.title}</h3>
                <div className="space-y-1">
                  {section.items.map((item, j) => {
                    const Icon = item.icon;
                    return (
                      <Link 
                        key={j} 
                        href={item.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => onOpenChange(false)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <Icon className="h-4 w-4 text-gray-600" />
                          </div>
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {item.badge && (
                            <Badge variant="secondary" className="font-normal">
                              {item.badge}
                            </Badge>
                          )}
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-6 border-t mt-auto">
          <Button 
            variant="destructive" 
            className="w-full"
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            <LogOut className="h-4 w-4 mr-2" />
            {isLoggingOut ? "Wird abgemeldet..." : "Abmelden"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
} 