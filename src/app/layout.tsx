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
  X,
  Shield,
  CreditCard,
  History,
  Lock,
  Gift,
  HelpCircle,
  Users,
  ChevronRight,
  Settings
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

const navigation = [
  { name: "Übersicht", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Discover", href: "/discover" },
  { name: "Invest", href: "/invest" },
  { name: "Social", href: "/social" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isTradeDialogOpen, setIsTradeDialogOpen] = useState(false);
  const [isDepositDialogOpen, setIsDepositDialogOpen] = useState(false);
  const [isSendDialogOpen, setIsSendDialogOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
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
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary",
                          pathname === item.href
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.name}
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
                isMobileMenuOpen ? "max-h-[800px]" : "max-h-0"
              )}
            >
              <div className="container max-w-[1200px] mx-auto px-4 py-4 space-y-4">
                {/* Navigation Links */}
                <nav className="space-y-1">
                  {navigation.map((item) => (
                    <Link 
                      key={item.name} 
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center h-10 px-4 rounded-md text-sm hover:bg-gray-100",
                        pathname === item.href && "bg-gray-100 font-medium"
                      )}
                    >
                      {item.name}
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

                  {/* Profile Section with Submenu */}
                  <Button 
                    variant="outline" 
                    className="w-full justify-between"
                    onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  >
                    <div className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Profil & Einstellungen
                    </div>
                    <ChevronRight className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      isSettingsOpen && "rotate-90"
                    )} />
                  </Button>

                  {/* Profile Submenu */}
                  <div className={cn(
                    "space-y-1 overflow-hidden transition-all duration-200",
                    isSettingsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <Link 
                      href="/settings/profile"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-gray-600" />
                        <span className="text-sm">Persönliche Daten</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>

                    <Link 
                      href="/settings/security"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-gray-600" />
                        <span className="text-sm">Sicherheit</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>

                    <Link 
                      href="/settings/payment-methods"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-gray-600" />
                        <span className="text-sm">Zahlungsmethoden</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>

                    <Link 
                      href="/settings/transactions"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center gap-3">
                        <History className="h-5 w-5 text-gray-600" />
                        <span className="text-sm">Transaktionshistorie</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>

                    <Link 
                      href="/settings/limits"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center gap-3">
                        <Lock className="h-5 w-5 text-gray-600" />
                        <span className="text-sm">Limits & Gebühren</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>

                    <Link 
                      href="/settings/alerts"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center gap-3">
                        <Bell className="h-5 w-5 text-gray-600" />
                        <span className="text-sm">Preisalarme</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>

                    <Link 
                      href="/settings/referral"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center gap-3">
                        <Gift className="h-5 w-5 text-gray-600" />
                        <span className="text-sm">Freunde werben</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>

                    <Link 
                      href="/settings/pro"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-gray-600" />
                        <span className="text-sm">Pro Mitgliedschaft</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>

                    <Link 
                      href="/settings/support"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className="h-5 w-5 text-gray-600" />
                        <span className="text-sm">Hilfe & Support</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </Link>
                  </div>
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
