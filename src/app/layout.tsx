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
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
