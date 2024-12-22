"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  MessageSquare, 
  Newspaper, 
  Star, 
  TrendingUp,
  ArrowUpRight,
  ThumbsUp,
  MessageCircle,
  Share2
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Dummy data for the social feed
const socialFeed = [
  {
    id: 1,
    user: {
      name: "Sarah Miller",
      handle: "@sarahtrader",
      avatar: "SM",
      verified: true
    },
    content: "Just opened a long position on $BTC. Technical analysis shows strong support at current levels. Expecting a breakout above $45k in the next few days. 📈",
    asset: "Bitcoin",
    type: "ANALYSIS",
    likes: 234,
    comments: 56,
    shares: 12,
    time: "2h ago"
  },
  {
    id: 2,
    user: {
      name: "Crypto Expert",
      handle: "@cryptoexpert",
      avatar: "CE",
      verified: true
    },
    content: "New market analysis: Ethereum's upcoming upgrade could be a game changer for DeFi. Full analysis in the thread below. 🧵",
    asset: "Ethereum",
    type: "NEWS",
    likes: 567,
    comments: 89,
    shares: 145,
    time: "4h ago"
  },
  // Add more feed items as needed
];

export default function SocialPage() {
  return (
    <div className="container max-w-[1200px] mx-auto py-6 px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Social Trading</h1>
          <p className="text-gray-500">Entdecke Top-Trader, Analysen und News</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Users className="h-4 w-4 mr-2" />
            Trader folgen
          </Button>
          <Button>
            <MessageSquare className="h-4 w-4 mr-2" />
            Beitrag erstellen
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Follower</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Performance</p>
              <p className="text-2xl font-bold text-green-600">+24.5%</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
              <MessageSquare className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Beiträge</p>
              <p className="text-2xl font-bold">456</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
              <Star className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Reputation</p>
              <p className="text-2xl font-bold">4.9</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Feed */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Alle</TabsTrigger>
              <TabsTrigger value="trades">Trades</TabsTrigger>
              <TabsTrigger value="analysis">Analysen</TabsTrigger>
              <TabsTrigger value="news">News</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {socialFeed.map((post) => (
                <Card key={post.id} className="p-6">
                  {/* Post Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center font-medium">
                        {post.user.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{post.user.name}</span>
                          {post.user.verified && (
                            <Badge variant="outline" className="bg-blue-50 text-blue-700">Verifiziert</Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{post.user.handle}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-gray-100">
                      {post.type}
                    </Badge>
                  </div>

                  {/* Post Content */}
                  <p className="mb-4">{post.content}</p>

                  {/* Post Footer */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                        <Share2 className="h-4 w-4" />
                        <span>{post.shares}</span>
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">{post.time}</span>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Traders */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Top Trader</h3>
            <div className="space-y-4">
              <Link 
                href="/social/traders/sarah"
                className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    SM
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Sarah Miller</span>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">Pro</Badge>
                    </div>
                    <p className="text-sm text-green-600">+45.8% ROI</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-gray-400" />
              </Link>
              {/* Add more traders */}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Alle Trader anzeigen
            </Button>
          </Card>

          {/* Latest News */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Aktuelle News</h3>
            <div className="space-y-4">
              <Link 
                href="/social/news/ethereum-upgrade"
                className="block hover:bg-gray-50 p-2 rounded-lg"
              >
                <span className="text-sm font-medium">Ethereum Upgrade: Was bedeutet das für DeFi?</span>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                  <Newspaper className="h-4 w-4" />
                  <span>Vor 2 Stunden</span>
                </div>
              </Link>
              {/* Add more news */}
            </div>
            <Button variant="outline" className="w-full mt-4">
              Alle News anzeigen
            </Button>
          </Card>

          {/* Trending Topics */}
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Trending</h3>
            <div className="space-y-2">
              <Link 
                href="/social/topics/bitcoin"
                className="block hover:bg-gray-50 p-2 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">#Bitcoin</span>
                  <Badge variant="outline">23.5k Posts</Badge>
                </div>
              </Link>
              {/* Add more topics */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 