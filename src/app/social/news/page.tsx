"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search,
  Filter,
  TrendingUp,
  Clock,
  Star,
  ThumbsUp,
  MessageCircle,
  Share2,
  ChevronRight,
  Globe,
  Newspaper,
  BarChart2
} from "lucide-react";

// Dummy data for news categories
const categories = [
  {
    id: "market",
    name: "Marktanalysen",
    description: "Tägliche Marktanalysen und Preisprognosen",
    icon: <BarChart2 className="h-6 w-6" />
  },
  {
    id: "news",
    name: "Aktuelle News",
    description: "Breaking News und wichtige Updates",
    icon: <Newspaper className="h-6 w-6" />
  },
  {
    id: "global",
    name: "Globale Märkte",
    description: "Entwicklungen an den internationalen Märkten",
    icon: <Globe className="h-6 w-6" />
  }
];

// Dummy data for news articles
const articles = [
  {
    id: 1,
    title: "Bitcoin ETF Zulassung: SEC genehmigt erste Spot-ETFs",
    excerpt: "Die US-Börsenaufsicht SEC hat heute die ersten Bitcoin Spot-ETFs zugelassen. Diese Entscheidung wird als historischer Moment für die Kryptoindustrie gesehen.",
    image: "/images/news/bitcoin-etf.jpg",
    author: {
      name: "Crypto News",
      avatar: "CN",
      verified: true
    },
    category: "Breaking News",
    publishedAt: "2024-01-20T10:00:00Z",
    stats: {
      views: 12345,
      comments: 234,
      likes: 567
    },
    tags: ["Bitcoin", "ETF", "SEC", "Regulierung"]
  },
  {
    id: 2,
    title: "Ethereum 2.0: Nächstes großes Update steht bevor",
    excerpt: "Das Ethereum-Netzwerk bereitet sich auf sein nächstes großes Update vor. Die Änderungen sollen die Skalierbarkeit verbessern und Transaktionsgebühren senken.",
    image: "/images/news/ethereum-update.jpg",
    author: {
      name: "Tech Analysis",
      avatar: "TA",
      verified: true
    },
    category: "Technologie",
    publishedAt: "2024-01-19T15:30:00Z",
    stats: {
      views: 8901,
      comments: 123,
      likes: 345
    },
    tags: ["Ethereum", "Blockchain", "Technology"]
  },
  {
    id: 3,
    title: "Marktanalyse: Krypto-Markt zeigt bullische Signale",
    excerpt: "Die technische Analyse zeigt mehrere bullische Indikatoren für den Kryptomarkt. Bitcoin und andere Top-Altcoins könnten vor einem wichtigen Ausbruch stehen.",
    image: "/images/news/market-analysis.jpg",
    author: {
      name: "Market Expert",
      avatar: "ME",
      verified: true
    },
    category: "Marktanalyse",
    publishedAt: "2024-01-18T09:15:00Z",
    stats: {
      views: 5678,
      comments: 89,
      likes: 234
    },
    tags: ["Analyse", "Bitcoin", "Altcoins", "Trading"]
  }
];

export default function NewsPage() {
  return (
    <div className="container max-w-[1200px] mx-auto py-6 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">News & Analysen</h1>
          <p className="text-gray-500">
            Bleiben Sie auf dem Laufenden mit den neuesten Entwicklungen
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Clock className="h-4 w-4 mr-2" />
            Letzte 24h
          </Button>
          <Button>
            <Star className="h-4 w-4 mr-2" />
            Watchlist
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="News durchsuchen..."
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Trending
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Neueste
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {categories.map((category) => (
          <Card key={category.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-medium mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.description}</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </Card>
        ))}
      </div>

      {/* News Articles */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Aktuelle News</h2>
          <Button variant="outline" size="sm">
            Alle anzeigen
          </Button>
        </div>

        <div className="space-y-6">
          {articles.map((article) => (
            <Card key={article.id} className="p-6 hover:shadow-lg transition-shadow">
              {/* Article Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-medium">
                    {article.author.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{article.author.name}</span>
                      {article.author.verified && (
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
                          Verifiziert
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{article.category}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="bg-gray-100">
                  {article.stats.views} Views
                </Badge>
              </div>

              {/* Article Content */}
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Article Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-500">
                    <MessageCircle className="h-4 w-4" />
                    <span>{article.stats.comments} Kommentare</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{article.stats.likes} Likes</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Share2 className="h-4 w-4" />
                    <span>Teilen</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Weiterlesen
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-8">
          <Button variant="outline">
            Mehr News laden
          </Button>
        </div>
      </div>
    </div>
  );
} 