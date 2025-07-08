"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Clock } from "lucide-react"
import YouTube from "react-youtube"

export default function Tutorials() {
  const tutorials = [
    {
      id: "getting-started",
      title: "Getting Started with Boostify",
      description: "Learn the basics of setting up your Boostify account",
      duration: "5:32",
      category: "basics",
      thumbnail: "https://img.youtube.com/vi/BwX4d6d1_uQ/hqdefault.jpg",
      videoSrc: "https://www.youtube.com/embed/BwX4d6d1_uQ",
    },
    {
      id: "song-requests",
      title: "Managing Song Requests",
      description: "How to handle incoming song requests during performances",
      duration: "8:15",
      category: "performers",
      thumbnail: "/placeholder.svg?height=200&width=350",
      // videoSrc: "",
    },
    {
      id: "tipping",
      title: "Setting Up Tipping",
      description: "Configure your payment methods for receiving tips",
      duration: "6:47",
      category: "payments",
      thumbnail: "/placeholder.svg?height=200&width=350",
      // videoSrc: "",
    },
    {
      id: "audience",
      title: "Audience Engagement Tips",
      description: "Best practices for engaging with your audience",
      duration: "10:23",
      category: "performers",
      thumbnail: "/placeholder.svg?height=200&width=350",
      // videoSrc: "",
    },
    {
      id: "profile",
      title: "Optimizing Your Profile",
      description: "Make your profile stand out to attract more fans",
      duration: "7:19",
      category: "basics",
      thumbnail: "/placeholder.svg?height=200&width=350",
      // videoSrc: "",
    },
    {
      id: "adding-performer-event",
      title: "Adding a Performer Event",
      description: "Step-by-step guide to adding a new performer event.",
      duration: "3:45",
      category: "performers",
      thumbnail: "https://img.youtube.com/vi/QZaJxnI5zFI/hqdefault.jpg",
      videoSrc: "https://www.youtube.com/embed/QZaJxnI5zFI",
    },
  ]

  const [selected, setSelected] = useState(tutorials[0])
  const [videoEnded, setVideoEnded] = useState(false)

  // Extract YouTube video ID from embed URL
  const getVideoId = (url: string) => {
    const match = url.match(/embed\/([a-zA-Z0-9_-]+)/)
    return match ? match[1] : ""
  }

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

        {/* Main Video Section */}
        <div className="mb-12">
          <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center relative">
            {selected.videoSrc && !videoEnded ? (
              <YouTube
                videoId={getVideoId(selected.videoSrc)}
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 1,
                    rel: 0,
                  },
                }}
                className="w-full h-full rounded-lg"
                onEnd={() => setVideoEnded(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <img
                  src="https://drive.google.com/uc?export=view&id=1Rgj6plpHsJPU3XeP2IIX448HDaVS7V8F"
                  alt="Boostify"
                  className="h-40 w-auto mx-auto"
                />
                <p className="text-lg mt-4">Thanks for watching!</p>
              </div>
            )}
          </div>
          <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
          <p className="text-gray-300 mb-4">{selected.description}</p>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <Card
              key={tutorial.id}
              className={`bg-gray-800 border-gray-700 overflow-hidden cursor-pointer transition-all ${selected.id === tutorial.id ? "ring-2 ring-primary" : ""}`}
              onClick={() => {
                if (tutorial.videoSrc) {
                  setSelected(tutorial)
                  setVideoEnded(false)
                }
              }}
            >
              <div className="aspect-video bg-gray-700 relative">
                <img
                  src={tutorial.thumbnail || "/placeholder.svg"}
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                />
                {/* Show "Coming Soon" overlay only if no videoSrc */}
                {!tutorial.videoSrc && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 z-10">
                    <Clock className="h-10 w-10 mb-2 text-white opacity-70" />
                    <p className="text-lg font-bold text-white">Coming Soon</p>
                  </div>
                )}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-2 py-1 rounded text-sm z-20">
                  {tutorial.duration}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{tutorial.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-400">{tutorial.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
      )
}