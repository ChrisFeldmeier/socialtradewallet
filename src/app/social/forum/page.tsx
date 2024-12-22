"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  MessageSquare,
  Filter,
  ThumbsUp,
  MessageCircle,
  ChevronRight,
  TrendingUp,
  Newspaper,
  Lightbulb,
  HelpCircle,
  Plus
} from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Dummy data for forum categories
const categories = [
  {
    id: "trading",
    name: "Trading Strategien",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-100",
    description: "Diskutiere Trading-Strategien und teile deine Erfahrungen",
    topics: 234,
    posts: 1567
  },
  {
    id: "news",
    name: "Markt News",
    icon: Newspaper,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    description: "Aktuelle Nachrichten und deren Auswirkungen auf den Markt",
    topics: 156,
    posts: 892
  },
  {
    id: "education",
    name: "Trading Bildung",
    icon: Lightbulb,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    description: "Lerne von der Community und teile dein Wissen",
    topics: 89,
    posts: 445
  },
  {
    id: "help",
    name: "Hilfe & Support",
    icon: HelpCircle,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    description: "Fragen und Antworten rund um die Plattform",
    topics: 123,
    posts: 678
  }
];

// Dummy data for latest discussions
const discussions = [
  {
    id: 1,
    title: "Wie interpretiert ihr die aktuelle Bitcoin-Chartformation?",
    excerpt: "Ich sehe ein potenzielles Cup-and-Handle-Pattern im 4-Stunden-Chart. Was ist eure Meinung dazu?",
    author: {
      name: "Trading Pro",
      avatar: "TP",
      verified: true
    },
    category: "Trading Strategien",
    publishedAt: "2024-01-20T10:00:00Z",
    likes: 34,
    replies: 12,
    views: 234,
    tags: ["Bitcoin", "Technische Analyse", "Chartanalyse"]
  },
  {
    id: 2,
    title: "Erfahrungen mit Stop-Loss-Strategien bei volatilen Märkten",
    excerpt: "Welche Stop-Loss-Strategien verwendet ihr bei hochvolatilen Märkten? Teilt eure Erfahrungen.",
    author: {
      name: "Risk Manager",
      avatar: "RM",
      verified: true
    },
    category: "Trading Bildung",
    publishedAt: "2024-01-19T15:30:00Z",
    likes: 56,
    replies: 23,
    views: 567,
    tags: ["Risikomanagement", "Stop-Loss", "Volatilität"]
  }
];

export default function ForumPage() {
  return (
    <div className="container max-w-[1200px] mx-auto py-6 px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Community Forum</h1>
          <p className="text-gray-500">Diskutiere mit der Community und teile dein Wissen</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Neues Thema
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Forum durchsuchen..." 
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link 
              key={category.id}
              href={`/social/forum/categories/${category.id}`}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`h-12 w-12 rounded-full ${category.bgColor} flex items-center justify-center`}>
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-1">{category.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{category.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{category.topics} Themen</span>
                      <span>{category.posts} Beiträge</span>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Latest Discussions */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Aktuelle Diskussionen</h2>
          <Button variant="outline">Alle anzeigen</Button>
        </div>

        <div className="space-y-6">
          {discussions.map((discussion) => (
            <Link 
              key={discussion.id}
              href={`/social/forum/discussions/${discussion.id}`}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                {/* Discussion Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-medium">
                      {discussion.author.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{discussion.author.name}</span>
                        {discussion.author.verified && (
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">Verifiziert</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{new Date(discussion.publishedAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{discussion.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Discussion Content */}
                <h3 className="text-lg font-medium mb-2">{discussion.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{discussion.excerpt}</p>

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {discussion.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Discussion Footer */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-500">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{discussion.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MessageCircle className="h-4 w-4" />
                      <span>{discussion.replies} Antworten</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <MessageSquare className="h-4 w-4" />
                      <span>{discussion.views} Views</span>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 