"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  TrendingDown,
  Wallet,
  Shield,
  Settings,
  Info
} from "lucide-react";

interface NotificationsSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const notifications = [
  {
    id: 1,
    type: "success",
    category: "transaction",
    title: "Einzahlung erfolgreich",
    message: "Deine Einzahlung von €1.000 wurde erfolgreich verarbeitet.",
    time: "Vor 5 Minuten",
    icon: CheckCircle2,
    read: false,
    action: {
      label: "Zur Transaktion",
      onClick: () => console.log("Navigate to transaction"),
    },
  },
  {
    id: 2,
    type: "info",
    category: "market",
    title: "Bitcoin steigt",
    message: "Der Bitcoin-Kurs ist in den letzten 24 Stunden um 5% gestiegen. Jetzt könnte ein guter Zeitpunkt sein, um zu investieren.",
    time: "Vor 2 Stunden",
    icon: TrendingUp,
    read: false,
    action: {
      label: "Jetzt handeln",
      onClick: () => console.log("Open trade dialog"),
    },
  },
  {
    id: 3,
    type: "warning",
    category: "market",
    title: "Ethereum fällt",
    message: "Der Ethereum-Kurs ist in den letzten 24 Stunden um 3% gefallen. Behalte den Markt im Auge.",
    time: "Vor 4 Stunden",
    icon: TrendingDown,
    read: true,
    action: {
      label: "Chart ansehen",
      onClick: () => console.log("Navigate to ETH chart"),
    },
  },
  {
    id: 4,
    type: "info",
    category: "system",
    title: "Neue Funktion verfügbar",
    message: "Entdecke unsere neue Trading-Funktion für noch bessere Handelserfahrungen. Jetzt ausprobieren!",
    time: "Vor 1 Tag",
    icon: Bell,
    read: true,
    action: {
      label: "Mehr erfahren",
      onClick: () => console.log("Show feature tour"),
    },
  },
  {
    id: 5,
    type: "warning",
    category: "system",
    title: "Wartungsarbeiten",
    message: "Am Samstag von 02:00 bis 04:00 Uhr finden Wartungsarbeiten statt. Der Handel wird in dieser Zeit eingeschränkt sein.",
    time: "Vor 2 Tagen",
    icon: AlertCircle,
    read: true,
  },
  {
    id: 6,
    type: "success",
    category: "transaction",
    title: "Verkauf erfolgreich",
    message: "Dein Verkauf von 0.5 ETH für €950 wurde erfolgreich ausgeführt.",
    time: "Vor 3 Tagen",
    icon: Wallet,
    read: true,
    action: {
      label: "Zur Transaktion",
      onClick: () => console.log("Navigate to transaction"),
    },
  },
  {
    id: 7,
    type: "info",
    category: "security",
    title: "Sicherheitsupdate",
    message: "Wir haben neue Sicherheitsfunktionen hinzugefügt. Überprüfe deine Einstellungen.",
    time: "Vor 4 Tagen",
    icon: Shield,
    read: true,
    action: {
      label: "Einstellungen öffnen",
      onClick: () => console.log("Open security settings"),
    },
  },
];

export function NotificationsSheet({ isOpen, onOpenChange }: NotificationsSheetProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [readNotifications, setReadNotifications] = useState<number[]>(
    notifications.filter(n => n.read).map(n => n.id)
  );

  const markAsRead = (id: number) => {
    if (!readNotifications.includes(id)) {
      setReadNotifications([...readNotifications, id]);
    }
  };

  const markAllAsRead = () => {
    setReadNotifications(notifications.map(n => n.id));
  };

  const getFilteredNotifications = () => {
    let filtered = notifications;
    
    if (activeTab === "unread") {
      filtered = filtered.filter(n => !readNotifications.includes(n.id));
    } else if (activeTab !== "all") {
      filtered = filtered.filter(n => n.category === activeTab);
    }
    
    return filtered;
  };

  const unreadCount = notifications.filter(n => !readNotifications.includes(n.id)).length;

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-[450px]">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>Benachrichtigungen</SheetTitle>
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" onClick={markAllAsRead} className="dark:hover:bg-gray-800">
                Alle als gelesen markieren
              </Button>
            )}
          </div>
          <SheetDescription>
            Deine letzten Aktivitäten und wichtige Updates.
          </SheetDescription>
        </SheetHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid grid-cols-5 mb-4 dark:bg-gray-900">
            <TabsTrigger value="all" className="relative dark:data-[state=active]:bg-gray-800">
              Alle
              {unreadCount > 0 && (
                <Badge variant="secondary" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 dark:bg-gray-800">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="transaction" className="dark:data-[state=active]:bg-gray-800">
              <Wallet className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="market" className="dark:data-[state=active]:bg-gray-800">
              <TrendingUp className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="security" className="dark:data-[state=active]:bg-gray-800">
              <Shield className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="system" className="dark:data-[state=active]:bg-gray-800">
              <Settings className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[calc(100vh-12rem)] pr-4">
            <div className="space-y-4">
              {getFilteredNotifications().map((notification) => {
                const Icon = notification.icon;
                const isUnread = !readNotifications.includes(notification.id);
                return (
                  <div
                    key={notification.id}
                    className={`flex gap-4 p-4 rounded-lg border transition-colors ${
                      isUnread 
                        ? "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800" 
                        : "bg-white dark:bg-gray-950 border-gray-100 dark:border-gray-800"
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        notification.type === "success"
                          ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400"
                          : notification.type === "warning"
                          ? "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400"
                          : "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <p className="font-medium dark:text-white">{notification.title}</p>
                          {isUnread && (
                            <Badge variant="secondary" className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400">
                              Neu
                            </Badge>
                          )}
                        </div>
                        <Badge
                          variant="secondary"
                          className={
                            notification.type === "success"
                              ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400"
                              : notification.type === "warning"
                              ? "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-400"
                              : "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400"
                          }
                        >
                          {notification.time}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{notification.message}</p>
                      {notification.action && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-2 h-8 px-3 dark:hover:bg-gray-800"
                          onClick={(e) => {
                            e.stopPropagation();
                            notification.action?.onClick();
                          }}
                        >
                          {notification.action.label}
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}

              {getFilteredNotifications().length === 0 && (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Info className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-600 font-medium">Keine Benachrichtigungen</p>
                  <p className="text-sm text-gray-500">
                    {activeTab === "unread" 
                      ? "Du hast alle Benachrichtigungen gelesen"
                      : "In dieser Kategorie gibt es keine Benachrichtigungen"}
                  </p>
                </div>
              )}
            </div>
          </ScrollArea>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
} 