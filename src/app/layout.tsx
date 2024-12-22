"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  CircleDot,
  Wallet,
  Send,
  ArrowUpDown,
  User,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TradeDialog } from "@/components/trade-dialog";
import { DepositDialog } from "@/components/deposit-dialog";
import { SendDialog } from "@/components/send-dialog";
import { NotificationsSheet } from "@/components/notifications-sheet";
import { ProfileSheet } from "@/components/profile-sheet";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTradeDialogOpen, setIsTradeDialogOpen] = useState(false);
  const [isDepositDialogOpen, setIsDepositDialogOpen] = useState(false);
  const [isSendDialogOpen, setIsSendDialogOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <html lang="de">
      <body className={cn("min-h-screen bg-gray-50", inter.className)}>
        <header className="sticky top-0 z-50 w-full border-b bg-white">
          <div className="container max-w-[1200px] mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              {/* Logo and Navigation */}
              <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-2">
                  <CircleDot className="h-6 w-6" />
                  <span className="font-semibold">Bitpanda</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                  <Link 
                    href="/" 
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    Übersicht
                  </Link>
                  <Link 
                    href="/portfolio" 
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    Portfolio
                  </Link>
                  <Link 
                    href="/discover" 
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    Entdecken
                  </Link>
                  <Link 
                    href="/invest" 
                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    Investieren
                  </Link>
                </nav>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsDepositDialogOpen(true)}
                >
                  <Wallet className="h-4 w-4 mr-2" />
                  Einzahlen
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsSendDialogOpen(true)}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Senden
                </Button>
                <Button 
                  size="sm"
                  onClick={() => setIsTradeDialogOpen(true)}
                >
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  Handeln
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative"
                  onClick={() => setIsNotificationsOpen(true)}
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-600 text-[10px] font-medium text-white flex items-center justify-center">
                    3
                  </span>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsProfileOpen(true)}
                >
                  <User className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                >
                  CN
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main>
          {children}
        </main>

        {/* Dialogs and Sheets */}
        <TradeDialog 
          isOpen={isTradeDialogOpen} 
          onOpenChange={setIsTradeDialogOpen} 
        />
        <DepositDialog 
          isOpen={isDepositDialogOpen} 
          onOpenChange={setIsDepositDialogOpen} 
        />
        <SendDialog 
          isOpen={isSendDialogOpen} 
          onOpenChange={setIsSendDialogOpen} 
        />
        <NotificationsSheet 
          isOpen={isNotificationsOpen} 
          onOpenChange={setIsNotificationsOpen} 
        />
        <ProfileSheet 
          isOpen={isProfileOpen} 
          onOpenChange={setIsProfileOpen} 
        />
      </body>
    </html>
  );
}
