"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  User,
  Shield,
  Bell,
  CreditCard,
  History,
  Lock,
  ChevronRight
} from "lucide-react";

const navigationLinks = [
  {
    title: "Profil",
    href: "/settings/profile",
    icon: User,
    description: "Persönliche Informationen und Einstellungen"
  },
  {
    title: "Sicherheit",
    href: "/settings/security",
    icon: Shield,
    description: "Zwei-Faktor-Authentifizierung und Passwort"
  },
  {
    title: "Preisalarme",
    href: "/settings/alerts",
    icon: Bell,
    description: "Benachrichtigungen für Preisänderungen"
  },
  {
    title: "Zahlungsmethoden",
    href: "/settings/payment-methods",
    icon: CreditCard,
    description: "Verwalte deine Ein- und Auszahlungsmethoden"
  },
  {
    title: "Transaktionen",
    href: "/settings/transactions",
    icon: History,
    description: "Übersicht aller Ein- und Auszahlungen"
  },
  {
    title: "Limits & Gebühren",
    href: "/settings/limits",
    icon: Lock,
    description: "Handelslimits und Gebührenübersicht"
  }
];

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="container max-w-[1200px] mx-auto py-8 px-4">
      <div className="flex gap-8">
        {/* Sidebar Navigation */}
        <div className="w-80 flex-shrink-0">
          <div className="sticky top-8 space-y-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-lg border hover:bg-gray-50 transition-colors",
                  pathname === link.href && "bg-gray-50 border-blue-200"
                )}
              >
                <div className={cn(
                  "h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center",
                  pathname === link.href && "bg-blue-100"
                )}>
                  <link.icon className={cn(
                    "h-5 w-5 text-gray-600",
                    pathname === link.href && "text-blue-600"
                  )} />
                </div>
                <div className="flex-1">
                  <h3 className={cn(
                    "font-medium",
                    pathname === link.href && "text-blue-600"
                  )}>
                    {link.title}
                  </h3>
                  <p className="text-sm text-gray-500">{link.description}</p>
                </div>
                <ChevronRight className={cn(
                  "h-5 w-5 text-gray-400",
                  pathname === link.href && "text-blue-400"
                )} />
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
} 