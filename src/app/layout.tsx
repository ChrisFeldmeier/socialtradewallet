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
  Menu,
  X
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TradeDialog } from "@/components/trade-dialog";
import { DepositDialog } from "@/components/deposit-dialog";
import { SendDialog } from "@/components/send-dialog";
import { NotificationsSheet } from "@/components/notifications-sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const navigationItems = [
  { href: "/", label: "Übersicht" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/discover", label: "Entdecken" },
  { href: "/invest", label: "Investieren" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTradeDialogOpen, setIsTradeDialogOpen] = useState(false);
  const [isDepositDialogOpen, setIsDepositDialogOpen] = useState(false);
  const [isSendDialogOpen, setIsSendDialogOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
                    Kryptobörse
                  </Link>
                  <nav className="hidden md:flex items-center gap-6">
                    {navigationItems.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href} 
                        className={cn(
                          "text-sm hover:text-gray-600",
                          pathname === item.href && "text-blue-600 font-medium"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-2">
                  <div className="hidden md:flex items-center gap-2">
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

                  {/* Mobile Menu Button */}
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    {isMobileMenuOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div 
              className={cn(
                "md:hidden bg-white border-b overflow-hidden transition-all duration-300",
                isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
              )}
            >
              <div className="container max-w-[1200px] mx-auto px-4 py-4 space-y-4">
                {/* Navigation Links */}
                <nav className="space-y-1">
                  {navigationItems.map((item) => (
                    <Link 
                      key={item.href} 
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center h-10 px-4 rounded-md text-sm hover:bg-gray-100",
                        pathname === item.href && "bg-gray-100 font-medium"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Action Buttons */}
                <div className="space-y-2 pt-4 border-t">
                  <Button 
                    variant="default" 
                    className="w-full justify-start"
                    onClick={() => {
                      setIsTradeDialogOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <ArrowUpDown className="h-5 w-5 mr-2" />
                    Handeln
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => {
                      setIsDepositDialogOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Wallet className="h-5 w-5 mr-2" />
                    Geld einzahlen
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => {
                      setIsSendDialogOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Geld senden
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => {
                      setIsNotificationsOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Bell className="h-5 w-5 mr-2" />
                    Benachrichtigungen
                  </Button>
                  <Link 
                    href="/settings/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                    >
                      <User className="h-5 w-5 mr-2" />
                      Profil
                    </Button>
                  </Link>
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
