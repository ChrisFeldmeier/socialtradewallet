"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ThumbsUp,
  MessageCircle,
  Share2,
  ChevronLeft,
  Bookmark
} from "lucide-react";
import Link from "next/link";

// Dummy data for article
const article = {
  id: 1,
  title: "Ethereum Upgrade: Was bedeutet das für DeFi?",
  content: `
    Die kommende Ethereum-Aktualisierung könnte den DeFi-Sektor revolutionieren. Wir analysieren die wichtigsten Änderungen und deren Auswirkungen auf das Ökosystem.

    Die wichtigsten Punkte:

    1. Verbesserte Skalierbarkeit
    Die neue Version verspricht deutlich höhere Transaktionsgeschwindigkeiten bei gleichzeitig niedrigeren Gebühren. Dies könnte zu einer verstärkten Adoption von DeFi-Protokollen führen.

    2. Energieeffizienz
    Der Übergang zu Proof-of-Stake reduziert den Energieverbrauch des Netzwerks um bis zu 99,95%. Dies macht Ethereum nicht nur umweltfreundlicher, sondern auch attraktiver für institutionelle Investoren.

    3. Sicherheitsverbesserungen
    Neue Sicherheitsmechanismen schützen das Netzwerk besser vor Angriffen und machen DeFi-Protokolle sicherer für Benutzer.

    Auswirkungen auf den DeFi-Sektor:

    - Höhere Transaktionsgeschwindigkeiten ermöglichen komplexere DeFi-Anwendungen
    - Niedrigere Gebühren machen DeFi auch für kleinere Investoren zugänglich
    - Verbesserte Sicherheit könnte mehr institutionelle Investoren anziehen

    Fazit:
    Das Upgrade markiert einen wichtigen Meilenstein in der Entwicklung von Ethereum und könnte den DeFi-Sektor nachhaltig verändern. Investoren sollten die Entwicklungen genau im Auge behalten.
  `,
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
  tags: ["Ethereum", "DeFi", "Blockchain"],
  relatedArticles: [
    {
      id: 2,
      title: "DeFi Trends 2024: Diese Entwicklungen sollten Sie kennen",
      excerpt: "Ein Überblick über die wichtigsten Trends im DeFi-Sektor für das kommende Jahr.",
      author: "Market Analyst",
      publishedAt: "2024-01-19T15:30:00Z"
    },
    {
      id: 3,
      title: "Institutionelle Investoren entdecken DeFi",
      excerpt: "Immer mehr institutionelle Investoren interessieren sich für dezentrale Finanzprodukte.",
      author: "Finance Pro",
      publishedAt: "2024-01-18T09:15:00Z"
    }
  ]
};

export default function ArticlePage() {
  return (
    <div className="container max-w-[1200px] mx-auto py-6 px-4">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/social/news">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Zurück zu News
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Card className="p-8">
            {/* Article Header */}
            <div className="mb-8">
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
              <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
              <div className="flex gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Article Content */}
            <div className="prose max-w-none mb-8">
              {article.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Article Footer */}
            <div className="flex items-center justify-between pt-6 border-t">
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
              <Button variant="outline">
                <Bookmark className="h-4 w-4 mr-2" />
                Speichern
              </Button>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Related Articles */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Ähnliche Artikel</h3>
            <div className="space-y-4">
              {article.relatedArticles.map((related) => (
                <Link 
                  key={related.id}
                  href={`/social/news/${related.id}`}
                  className="block hover:bg-gray-50 p-2 rounded-lg"
                >
                  <h4 className="font-medium mb-1">{related.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{related.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{related.author}</span>
                    <span>•</span>
                    <span>{new Date(related.publishedAt).toLocaleDateString()}</span>
                  </div>
                </Link>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Mehr Artikel anzeigen
            </Button>
          </Card>

          {/* Tags */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Trending Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Bitcoin", "Ethereum", "DeFi", "NFTs", "Trading", "Blockchain", "Krypto", "Altcoins"].map((tag) => (
                <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-gray-100">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 