"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock } from "lucide-react"
import YouTube from "react-youtube"

export default function Tutorials() {
  const tutorials = [
    {
      id: "getting-started",
      title: "Boost your fans Experience",
      description: "Performers use Boostify to Boost the Fan Experience",
      duration: "0:41",
      category: "basics",
      thumbnail: "/images/Boostify-logo.png",
      videoSrc: "https://www.youtube.com/embed/BwX4d6d1_uQ",
    },
    {
      id: "creating-performer-event",
      title: "Creating a Performer Event",
      description: "Step-by-step guide to creating a new performer event.",
      duration: "3:01",
      category: "performers",
      thumbnail: "/images/Boostify-logo.png",
      videoSrc: "/videos/Adding_a_Performer_Event.mp4",
    },
    {
      id: "creating-a-performer-playlist",
      title: "Creating Performer Playlists",
      description: "How to create and manage your playlists effectively",
      duration: "2:53",
      category: "playlists",
      thumbnail: "/images/Boostify-logo.png",
      videoSrc: "/videos/Creating_a_Performer_Playlist.mp4",
    },
    {
      id: "adding-playlist-to-event",
      title: "Adding a Playlist to and Event",
      description: "Best practices for engaging with your audience",
      duration: "0:51",
      category: "playlists",
      thumbnail: "/images/Boostify-logo.png",
      videoSrc: "/videos/Adding_a_Playlist_to_an_Event.mp4",
    },
    {
      id: "managing-live-event-playlist",
      title: "Managing Song Requests Live",
      description: "How to handle incoming song requests during a live performances",
      duration: "5:23",
      category: "performers",
      thumbnail: "/images/Boostify-logo.png",
      videoSrc: "/videos/Managing_a_Live_Event_Playlist.mp4",
    },
    {
      id: "portfolio",
      title: "using-your-portfolio",
      description: "Your Portfolio is a complete list of every song you know",
      duration: "?:??",
      category: "Performers",
      thumbnail: "/images/Boostify-logo.png",
    },
  ]

  const [selected, setSelected] = useState(tutorials[0])
  const [videoEnded, setVideoEnded] = useState(false)
  const [videoShouldPlay, setVideoShouldPlay] = useState(false)
  const videoContainerRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  // Extract YouTube video ID from embed URL
  const getVideoId = (url: string) => {
    const match = url.match(/embed\/([a-zA-Z0-9_-]+)/)
    return match ? match[1] : ""
  }

  // Helper to check if src is YouTube
  const isYouTube = (src: string) => src.includes("youtube.com")

  // Play video on hover (desktop)
  const handleMouseEnter = () => {
    if (!videoShouldPlay) setVideoShouldPlay(true)
  }

  // Play video when scrolled into view (mobile/tablet)
  useEffect(() => {
    const handleScroll = () => {
      if (videoContainerRef.current && !videoShouldPlay) {
        const rect = videoContainerRef.current.getBoundingClientRect()
        if (rect.bottom < window.innerHeight && rect.top > 0) {
          setVideoShouldPlay(true)
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [videoShouldPlay])

  // Play/pause native video when state changes
  useEffect(() => {
    if (videoRef.current) {
      if (videoShouldPlay) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [videoShouldPlay, selected])

  // Reset play state when changing video
  useEffect(() => {
    setVideoShouldPlay(false)
    setVideoEnded(false)
  }, [selected])

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
        <div
          className="mb-12"
          ref={videoContainerRef}
          onMouseEnter={handleMouseEnter}
        >
          <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center relative">
            {selected.videoSrc && !videoEnded && videoShouldPlay ? (
              isYouTube(selected.videoSrc) ? (
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
                <video
                  ref={videoRef}
                  src={selected.videoSrc}
                  controls
                  style={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}
                  preload="none"
                  onEnded={() => setVideoEnded(true)}
                />
              )
            ) : (
              <div className="flex items-center justify-center w-full h-full cursor-pointer">
                <img
                  src="/images/boostify-logo.png"
                  alt="Boostify"
                  className="h-64 w-auto mx-auto"
                  style={{ maxHeight: "300px" }}
                />
                <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 px-4 py-2 rounded text-white text-lg">
                  Hover or scroll to play
                </span>
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
                }
              }}
            >
              <div className="aspect-video bg-gray-700 relative">
                <img
                  src="/images/boostify-logo.png"
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