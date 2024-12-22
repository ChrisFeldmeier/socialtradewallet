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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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

  return (
    <html lang="de">
      <body className={cn("min-h-screen bg-gray-50", inter.className)}>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="border-b bg-white fixed top-0 left-0 right-0 z-50">
            <div className="container max-w-[1200px] mx-auto h-16 px-4">
              <div className="flex items-center justify-between h-full">
                {/* Left side */}
                <div className="flex items-center gap-8">
                  <Link href="/" className="flex items-center gap-2 font-medium">
                    <CircleDot className="h-5 w-5" />
                    Bitpanda
                  </Link>
                  <nav className="flex items-center gap-6">
                    <Link href="/" className="text-sm hover:text-gray-600">Übersicht</Link>
                    <Link href="/portfolio" className="text-sm hover:text-gray-600">Portfolio</Link>
                    <Link href="/discover" className="text-sm hover:text-gray-600">Entdecken</Link>
                    <Link href="/invest" className="text-sm hover:text-gray-600">Investieren</Link>
                  </nav>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-gray-600 hover:text-gray-900"
                          onClick={() => setIsDepositDialogOpen(true)}
                        >
                          Geld einzahlen
                          <Wallet className="h-5 w-5 ml-2" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Einzahlen</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-gray-600 hover:text-gray-900"
                          onClick={() => setIsSendDialogOpen(true)}
                        >
                          Geld senden
                          <Send className="h-5 w-5 ml-2" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Senden</TooltipContent>
                    </Tooltip>

                    <Button 
                      variant="default" 
                      size="sm"
                      onClick={() => setIsTradeDialogOpen(true)}
                    >
                      <ArrowUpDown className="h-5 w-5 mr-2" />
                      Handeln
                    </Button>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-gray-600 hover:text-gray-900"
                          onClick={() => setIsNotificationsOpen(true)}
                        >
                          <Bell className="h-5 w-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Benachrichtigungen</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link href="/settings/profile">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-gray-600 hover:text-gray-900"
                          >
                            <User className="h-5 w-5" />
                          </Button>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Profil</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 mt-16">
            {children}
          </main>

          {/* Dialogs */}
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
        </div>
      </body>
    </html>
  );
}
