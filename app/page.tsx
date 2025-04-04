"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Volume2, VolumeX } from "lucide-react"

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioLoaded, setAudioLoaded] = useState(false)
  const [audioError, setAudioError] = useState<string | null>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  // Initialize audio on component mount
  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      // Create audio element
      const audio = new Audio()
      audio.src =
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flying-on-the-wings-of-love-SBA-300418391-preview%20%281%29-wQAKYZZdFt3nYHNxHHu5ew1hX4wMKn.mp3"
      audio.volume = 0.3
      audio.loop = true

      // Store reference
      audioRef.current = audio

      // Add event listeners
      const handleCanPlayThrough = () => {
        console.log("Audio loaded and can play")
        setAudioLoaded(true)
      }

      const handlePlay = () => {
        console.log("Audio playing")
        setIsPlaying(true)
      }

      const handlePause = () => {
        console.log("Audio paused")
        setIsPlaying(false)
      }

      const handleError = (e: Event) => {
        console.error("Audio error:", e)
        setAudioError("Error loading audio. Please try again.")
      }

      audio.addEventListener("canplaythrough", handleCanPlayThrough)
      audio.addEventListener("play", handlePlay)
      audio.addEventListener("pause", handlePause)
      audio.addEventListener("error", handleError)

      // Preload the audio
      audio.load()

      // Cleanup function
      return () => {
        if (audioRef.current) {
          audioRef.current.pause()
          audioRef.current.removeEventListener("canplaythrough", handleCanPlayThrough)
          audioRef.current.removeEventListener("play", handlePlay)
          audioRef.current.removeEventListener("pause", handlePause)
          audioRef.current.removeEventListener("error", handleError)
          audioRef.current = null
        }
      }
    } catch (error) {
      console.error("Error initializing audio:", error)
      setAudioError("Could not initialize audio player")
    }
  }, [])

  // Function to toggle audio playback
  const toggleAudio = () => {
    console.log("Toggle audio button clicked")

    if (!audioRef.current) {
      console.error("Audio element not initialized")
      setAudioError("Audio player not ready. Please try again.")
      return
    }

    try {
      if (isPlaying) {
        console.log("Attempting to pause audio")
        audioRef.current.pause()
      } else {
        console.log("Attempting to play audio")
        const playPromise = audioRef.current.play()

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Audio playback started successfully")
            })
            .catch((error) => {
              console.error("Audio playback was prevented:", error)
              setAudioError("Browser blocked autoplay. Please click again.")
            })
        }
      }
    } catch (error) {
      console.error("Error toggling audio:", error)
      setAudioError("Error controlling audio playback")
    }
  }

  // Handle video load success
  const handleVideoLoad = () => {
    setVideoLoaded(true)
    setVideoError(false)
  }

  // Handle video error
  const handleVideoError = () => {
    setVideoError(true)
    setVideoLoaded(false)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background Video with direct Cloudfront URL */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        >
          <source
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/SyjJvDm-2lfvizvfc/videoblocks-645ef8411b460b77fcd3de03_h5eqjyvibn__d2d90ce8d78fcda5501a3b47fea8c2e8__P360.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Fallback animated background if video fails */}
        {videoError && (
          <div className="absolute inset-0">
            {/* Concert-like animated gradient background */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-purple-900 via-black to-black z-0"
              style={{
                backgroundSize: "400% 400%",
                animation: "gradient 15s ease infinite",
              }}
            />

            {/* Animated concert lights */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="concert-light light-1"></div>
              <div className="concert-light light-2"></div>
              <div className="concert-light light-3"></div>
            </div>

            {/* Crowd silhouette overlay */}
            <div
              className="absolute bottom-0 left-0 w-full h-1/3 bg-black z-10"
              style={{
                maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>
        )}

        {/* Overlay to darken the video slightly */}
        <div className="absolute inset-0 bg-black opacity-30 z-1"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 w-full p-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-auto">
            <Image
              src="/images/boostify-logo.png"
              alt="Boostify Tunes Logo"
              width={100}
              height={30}
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <div className="flex gap-6">
          <Link href="/tutorials" className="hover:text-gray-300 transition-colors">
            Tutorials
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>
      </nav>

      {/* Audio Control Button - Moved closer to the middle */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <button
          onClick={toggleAudio}
          className="p-4 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label={isPlaying ? "Mute audio" : "Play audio"}
        >
          {isPlaying ? <Volume2 className="h-7 w-7 text-white" /> : <VolumeX className="h-7 w-7 text-white" />}
        </button>

        {/* Audio Status (for debugging) */}
        {audioError && (
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 p-2 bg-red-500/80 text-white text-xs rounded whitespace-nowrap">
            {audioError}
          </div>
        )}
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-xl flex items-center justify-center flex-wrap">
          <span className="mr-2">Welcome to</span>
          <div className="relative h-16 md:h-20 w-auto inline-flex items-center">
            <Image
              src="/images/boostify-logo.png"
              alt="Boostify Tunes"
              width={240}
              height={80}
              className="object-contain"
              priority
            />
          </div>
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-2xl">
          Elevating live performances with real-time song requests and tipping
        </p>
        <div className="flex gap-4 mt-8">
          <Button className="text-lg px-6 py-3 rounded-2xl bg-white text-black hover:bg-gray-200">
            Download the App
          </Button>
          <Link href="/tutorials">
            <Button
              variant="outline"
              className="text-lg px-6 py-3 rounded-2xl border-white text-white hover:bg-white/10"
            >
              Watch Tutorials
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

