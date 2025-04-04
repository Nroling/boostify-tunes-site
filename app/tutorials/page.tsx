"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Clock } from "lucide-react"

export default function Tutorials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const tutorials = [
    {
      id: "getting-started",
      title: "Getting Started with Boostify",
      description: "Learn the basics of setting up your Boostify account",
      duration: "5:32",
      category: "basics",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: "song-requests",
      title: "Managing Song Requests",
      description: "How to handle incoming song requests during performances",
      duration: "8:15",
      category: "performers",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: "tipping",
      title: "Setting Up Tipping",
      description: "Configure your payment methods for receiving tips",
      duration: "6:47",
      category: "payments",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: "audience",
      title: "Audience Engagement Tips",
      description: "Best practices for engaging with your audience",
      duration: "10:23",
      category: "performers",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: "profile",
      title: "Optimizing Your Profile",
      description: "Make your profile stand out to attract more fans",
      duration: "7:19",
      category: "basics",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
    {
      id: "analytics",
      title: "Understanding Analytics",
      description: "How to use Boostify analytics to grow your audience",
      duration: "9:54",
      category: "advanced",
      thumbnail: "/placeholder.svg?height=200&width=350",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="p-0 mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center">
            <div className="relative h-8 w-auto mr-4">
              <Image
                src="/images/boostify-logo.png"
                alt="Boostify Tunes Logo"
                width={100}
                height={30}
                className="object-contain"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Performer Tutorials</h1>
          </div>
        </div>

        {selectedVideo ? (
          <div className="mb-8">
            <div className="aspect-video bg-gray-800 rounded-lg mb-4 relative">
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 z-10">
                <Clock className="h-16 w-16 mb-4 text-white opacity-70" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Coming Soon</h3>
                <p className="text-gray-300 mt-2 max-w-md text-center">
                  We're currently working on creating high-quality tutorial videos for you. Check back soon!
                </p>
              </div>

              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="h-16 w-16 opacity-50" />
                <span className="sr-only">Play video</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">{tutorials.find((t) => t.id === selectedVideo)?.title}</h2>
            <p className="text-gray-300 mb-4">{tutorials.find((t) => t.id === selectedVideo)?.description}</p>
            <Button variant="outline" onClick={() => setSelectedVideo(null)} className="mb-8">
              Back to all tutorials
            </Button>
          </div>
        ) : (
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-gray-800">
              <TabsTrigger value="all">All Tutorials</TabsTrigger>
              <TabsTrigger value="basics">Basics</TabsTrigger>
              <TabsTrigger value="performers">For Performers</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorials.map((tutorial) => (
                  <Card key={tutorial.id} className="bg-gray-800 border-gray-700 overflow-hidden">
                    <div
                      className="aspect-video bg-gray-700 relative cursor-pointer"
                      onClick={() => setSelectedVideo(tutorial.id)}
                    >
                      <img
                        src={tutorial.thumbnail || "/placeholder.svg"}
                        alt={tutorial.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Coming Soon Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 z-10">
                        <Clock className="h-10 w-10 mb-2 text-white opacity-70" />
                        <p className="text-lg font-bold text-white">Coming Soon</p>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity z-20">
                        <Play className="h-12 w-12" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-sm z-20">
                        {tutorial.duration}
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle
                        className="text-lg cursor-pointer hover:text-gray-300"
                        onClick={() => setSelectedVideo(tutorial.id)}
                      >
                        {tutorial.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-400">{tutorial.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {["basics", "performers", "payments", "advanced"].map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tutorials
                    .filter((tutorial) => tutorial.category === category)
                    .map((tutorial) => (
                      <Card key={tutorial.id} className="bg-gray-800 border-gray-700 overflow-hidden">
                        <div
                          className="aspect-video bg-gray-700 relative cursor-pointer"
                          onClick={() => setSelectedVideo(tutorial.id)}
                        >
                          <img
                            src={tutorial.thumbnail || "/placeholder.svg"}
                            alt={tutorial.title}
                            className="w-full h-full object-cover"
                          />

                          {/* Coming Soon Overlay */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 z-10">
                            <Clock className="h-10 w-10 mb-2 text-white opacity-70" />
                            <p className="text-lg font-bold text-white">Coming Soon</p>
                          </div>

                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity z-20">
                            <Play className="h-12 w-12" />
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-sm z-20">
                            {tutorial.duration}
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle
                            className="text-lg cursor-pointer hover:text-gray-300"
                            onClick={() => setSelectedVideo(tutorial.id)}
                          >
                            {tutorial.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-gray-400">{tutorial.description}</CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
    </div>
  )
}

