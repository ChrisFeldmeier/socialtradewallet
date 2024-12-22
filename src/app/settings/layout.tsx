"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  User,
  Shield,
  CreditCard,
  History,
  Bell,
  Lock,
  ChevronRight,
  Gift,
  HelpCircle,
  Users,
  X,
  Menu
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const MenuContent = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex items-center gap-4 p-4">
        <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-xl font-medium">
          CN
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium">Max Mustermann</h3>
          <p className="text-gray-500">max@example.com</p>
          <div className="flex gap-2 mt-2">
            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">Pro Mitglied</Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">Verifiziert</Badge>
          </div>
        </div>
      </div>

      {/* Account Section */}
      <div className="space-y-1">
        <h4 className="text-sm font-medium text-gray-500 px-4">Account</h4>
        <Link
          href="/settings/profile"
          className="flex items-center justify-between p-4 hover:bg-gray-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
              <User className="h-5 w-5 text-gray-600" />
            </div>
            <span className="font-medium">Persönliche Daten</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="bg-blue-50 text-blue-700">Verifiziert</Badge>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </Link>

        <Link
          href="/settings/security"
          className="flex items-center justify-between p-4 hover:bg-gray-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
              <Shield className="h-5 w-5 text-gray-600" />
            </div>
            <span className="font-medium">Sicherheit</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>

        <Link
          href="/settings/payment-methods"
          className="flex items-center justify-between p-4 hover:bg-gray-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-gray-600" />
            </div>
            <span className="font-medium">Zahlungsmethoden</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline">3 aktiv</Badge>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </Link>
      </div>

      {/* Handel Section */}
      <div className="space-y-1">
        <h4 className="text-sm font-medium text-gray-500 px-4">Handel</h4>
        <Link
          href="/settings/transactions"
          className="flex items-center justify-between p-4 hover:bg-gray-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
              <History className="h-5 w-5 text-gray-600" />
            </div>
            <span className="font-medium">Transaktionshistorie</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>

        <Link
          href="/settings/limits"
          className="flex items-center justify-between p-4 hover:bg-gray-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
              <Lock className="h-5 w-5 text-gray-600" />
            </div>
            <span className="font-medium">Limits & Gebühren</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>

        <Link
          href="/settings/alerts"
          className="flex items-center justify-between p-4 hover:bg-gray-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
              <Bell className="h-5 w-5 text-gray-600" />
            </div>
            <span className="font-medium">Preisalarme</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline">2 aktiv</Badge>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </Link>
      </div>

      {/* Extras Section */}
      <div className="space-y-1">
        <h4 className="text-sm font-medium text-gray-500 px-4">Extras</h4>
        <Link
          href="/settings/referral"
          className="flex items-center justify-between p-4 hover:bg-gray-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
              <Gift className="h-5 w-5 text-gray-600" />
            </div>
            <span className="font-medium">Freunde werben</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline">50€ Bonus</Badge>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </Link>

        <Link
          href="/settings/pro"
          className="flex items-center justify-between p-4 hover:bg-gray-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
              <Users className="h-5 w-5 text-gray-600" />
            </div>
            <span className="font-medium">Pro Mitgliedschaft</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline">Upgrade</Badge>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        </Link>

        <Link
          href="/settings/support"
          className="flex items-center justify-between p-4 hover:bg-gray-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
              <HelpCircle className="h-5 w-5 text-gray-600" />
            </div>
            <span className="font-medium">Hilfe & Support</span>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="container max-w-[1200px] mx-auto py-8 px-4">
      {/* Mobile Menu Button */}
      <div className="md:hidden mb-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:w-[400px] overflow-y-auto">
            <MenuContent />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Navigation - Desktop */}
        <div className="hidden md:block w-80 flex-shrink-0">
          <div className="sticky top-8 space-y-6">
            <MenuContent />
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