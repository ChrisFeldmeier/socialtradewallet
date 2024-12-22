"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search,
  MessageSquare,
  Users,
  TrendingUp,
  Clock,
  ChevronRight,
  Star,
  ThumbsUp,
  MessageCircle,
  Share2,
  Filter
} from "lucide-react";
import Link from "next/link";

// Dummy data for forum categories
const categories = [
  {
    id: "trading",
    name: "Trading & Analyse",
    description: "Diskussionen über Trading-Strategien, technische und fundamentale Analyse",
    topics: 1234,
    posts: 5678,
    icon: <TrendingUp className="h-6 w-6" />
  },
  {
    id: "news",
    name: "News & Updates",
    description: "Aktuelle Nachrichten und Entwicklungen aus der Krypto- und Finanzwelt",
    topics: 890,
    posts: 3456,
    icon: <Clock className="h-6 w-6" />
  },
  {
    id: "community",
    name: "Community",
    description: "Allgemeine Diskussionen, Fragen und Austausch zwischen Mitgliedern",
    topics: 567,
    posts: 2345,
    icon: <Users className="h-6 w-6" />
  }
];

// Dummy data for recent discussions
const discussions = [
  {
    id: 1,
    title: "Bitcoin ETF Genehmigung: Auswirkungen auf den Markt",
    excerpt: "Lasst uns über die möglichen Auswirkungen der ETF-Genehmigung auf den Bitcoin-Kurs und den gesamten Kryptomarkt diskutieren.",
    author: {
      name: "Crypto Expert",
      avatar: "CE",
      verified: true
    },
    category: "News & Updates",
    publishedAt: "2024-01-20T10:00:00Z",
    stats: {
      views: 1234,
      replies: 56,
      likes: 234
    },
    tags: ["Bitcoin", "ETF", "Regulierung"]
  },
  {
    id: 2,
    title: "Technische Analyse: Ethereum vor wichtigem Widerstand",
    excerpt: "Ethereum nähert sich einem wichtigen Widerstandsbereich. Hier meine Analyse der aktuellen Situation und mögliche Szenarien.",
    author: {
      name: "Chart Master",
      avatar: "CM",
      verified: true
    },
    category: "Trading & Analyse",
    publishedAt: "2024-01-19T15:30:00Z",
    stats: {
      views: 890,
      replies: 34,
      likes: 156
    },
    tags: ["Ethereum", "Technische Analyse", "Trading"]
  },
  {
    id: 3,
    title: "Erfahrungen mit verschiedenen Trading-Strategien",
    excerpt: "Welche Trading-Strategien haben sich für euch bewährt? Lasst uns Erfahrungen austauschen und voneinander lernen.",
    author: {
      name: "Trading Pro",
      avatar: "TP",
      verified: false
    },
    category: "Trading & Analyse",
    publishedAt: "2024-01-18T09:15:00Z",
    stats: {
      views: 567,
      replies: 45,
      likes: 123
    },
    tags: ["Strategie", "Trading", "Erfahrungen"]
  }
];

export default function ForumPage() {
  return (
    <div className="container max-w-[1200px] mx-auto py-6 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Community Forum</h1>
          <p className="text-gray-500">
            Diskutieren Sie mit anderen Tradern und teilen Sie Ihre Erfahrungen
          </p>
        </div>
        <Button>
          <MessageSquare className="h-4 w-4 mr-2" />
          Neue Diskussion
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Diskussionen durchsuchen..."
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
            <Star className="h-4 w-4" />
            Favoriten
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {categories.map((category) => (
          <Link key={category.id} href={`/social/forum/categories/${category.id}`}>
            <Card className="p-6 hover:shadow-lg transition-shadow h-full">
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
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{category.topics} Themen</span>
                <span>{category.posts} Beiträge</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent Discussions */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Aktuelle Diskussionen</h2>
          <Button variant="outline" size="sm">
            Alle anzeigen
          </Button>
        </div>

        <div className="space-y-4">
          {discussions.map((discussion) => (
            <Link key={discussion.id} href={`/social/forum/discussions/${discussion.id}`}>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                {/* Discussion Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-medium">
                      {discussion.author.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{discussion.author.name}</span>
                        {discussion.author.verified && (
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">
                            Verifiziert
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{new Date(discussion.publishedAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{discussion.category}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-gray-100">
                    {discussion.stats.views} Views
                  </Badge>
                </div>

                {/* Discussion Content */}
                <h3 className="text-xl font-semibold mb-2">{discussion.title}</h3>
                <p className="text-gray-600 mb-4">{discussion.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {discussion.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Discussion Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-500">
                      <MessageCircle className="h-4 w-4" />
                      <span>{discussion.stats.replies} Antworten</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{discussion.stats.likes} Likes</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Share2 className="h-4 w-4" />
                      <span>Teilen</span>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-8">
          <Button variant="outline">
            Mehr Diskussionen laden
          </Button>
        </div>
      </div>
    </div>
  );
} 