"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search,
  Newspaper,
  TrendingUp,
  Filter,
  ThumbsUp,
  MessageCircle,
  Share2,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Dummy data for news
const news = [
  {
    id: 1,
    title: "Ethereum Upgrade: Was bedeutet das für DeFi?",
    excerpt: "Die kommende Ethereum-Aktualisierung könnte den DeFi-Sektor revolutionieren. Wir analysieren die wichtigsten Änderungen und deren Auswirkungen auf das Ökosystem.",
    author: {
      name: "Crypto Expert",
      avatar: "CE",
      verified: true
    },
    category: "ANALYSIS",
    publishedAt: "2024-01-20T10:00:00Z",
    readTime: "5 min",
    likes: 234,
    comments: 56,
    shares: 12,
    tags: ["Ethereum", "DeFi", "Blockchain"]
  },
  {
    id: 2,
    title: "Bitcoin erreicht neues Jahreshoch - Was sind die Gründe?",
    excerpt: "Der Bitcoin-Kurs hat ein neues Jahreshoch erreicht. Wir untersuchen die fundamentalen und technischen Faktoren hinter dieser Entwicklung.",
    author: {
      name: "Sarah Miller",
      avatar: "SM",
      verified: true
    },
    category: "MARKET",
    publishedAt: "2024-01-19T15:30:00Z",
    readTime: "4 min",
    likes: 567,
    comments: 89,
    shares: 145,
    tags: ["Bitcoin", "Krypto", "Trading"]
  },
  // Add more news
];

export default function NewsPage() {
  return (
    <div className="container max-w-[1200px] mx-auto py-6 px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">News & Analysen</h1>
          <p className="text-gray-500">Die wichtigsten Updates und Einblicke aus der Trading-Welt</p>
        </div>
        <Button>
          <Newspaper className="h-4 w-4 mr-2" />
          Analyse erstellen
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="News durchsuchen..." 
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">Alle</TabsTrigger>
              <TabsTrigger value="market">Markt</TabsTrigger>
              <TabsTrigger value="analysis">Analysen</TabsTrigger>
              <TabsTrigger value="education">Bildung</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {news.map((article) => (
                <Link 
                  key={article.id}
                  href={`/social/news/${article.id}`}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    {/* Article Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-medium">
                          {article.author.avatar}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{article.author.name}</span>
                            {article.author.verified && (
                              <Badge variant="outline" className="bg-blue-50 text-blue-700">Verifiziert</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                            <span>•</span>
                            <span>{article.readTime} Lesezeit</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-gray-100">
                        {article.category}
                      </Badge>
                    </div>

                    {/* Article Content */}
                    <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>

                    {/* Tags */}
                    <div className="flex gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Article Footer */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{article.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                          <MessageCircle className="h-4 w-4" />
                          <span>{article.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                          <Share2 className="h-4 w-4" />
                          <span>{article.shares}</span>
                        </button>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </Card>
                </Link>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Trending Topics</h3>
            <div className="space-y-4">
              <Link 
                href="/social/topics/bitcoin"
                className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <div>
                    <span className="font-medium">Bitcoin</span>
                    <p className="text-sm text-gray-500">2.5k Beiträge</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </Link>
              {/* Add more trending topics */}
            </div>
          </Card>

          {/* Popular Authors */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Top Autoren</h3>
            <div className="space-y-4">
              <Link 
                href="/social/authors/crypto-expert"
                className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    CE
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Crypto Expert</span>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">Pro</Badge>
                    </div>
                    <p className="text-sm text-gray-500">156 Artikel</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </Link>
              {/* Add more authors */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 