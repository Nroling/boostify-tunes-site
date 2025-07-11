"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Volume2, VolumeX } from "lucide-react"

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [audioLoaded, setAudioLoaded] = useState(false)
  const [audioError, setAudioError] = useState<string | null>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      const audio = new Audio()
      audio.src =
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flying-on-the-wings-of-love-SBA-300418391-preview%20%281%29-wQAKYZZdFt3nYHNxHHu5ew1hX4wMKn.mp3"
      audio.volume = 0.3
      audio.loop = true

      audioRef.current = audio

      const handleCanPlayThrough = () => {
        setAudioLoaded(true)
        playAudio()
      }

      const handlePlay = () => setIsPlaying(true)
      const handlePause = () => setIsPlaying(false)
      const handleError = (e: Event) => setAudioError("Error loading audio. Please try again.")

      audio.addEventListener("canplaythrough", handleCanPlayThrough)
      audio.addEventListener("play", handlePlay)
      audio.addEventListener("pause", handlePause)
      audio.addEventListener("error", handleError)

      audio.load()

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
      setAudioError("Could not initialize audio player")
    }
  }, [])

  const playAudio = () => {
    if (!audioRef.current) return
    const playPromise = audioRef.current.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => {})
        .catch(() => {
          setIsPlaying(false)
          setAudioError("Browser blocked autoplay. Click the volume button to play.")
          const notification = document.createElement("div")
          notification.className =
            "fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded z-50"
          notification.textContent = "Click the volume button to enable audio"
          notification.style.animation = "fadeOut 5s forwards"
          document.body.appendChild(notification)
          setTimeout(() => {
            document.body.removeChild(notification)
          }, 5000)
        })
    }
  }

  const toggleAudio = () => {
    if (!audioRef.current) {
      setAudioError("Audio player not ready. Please try again.")
      return
    }
    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(() => setAudioError("Browser blocked autoplay. Please click again."))
        }
      }
    } catch {
      setAudioError("Error controlling audio playback")
    }
  }

  const handleVideoLoad = () => {
    setVideoLoaded(true)
    setVideoError(false)
  }

  const handleVideoError = () => {
    setVideoError(true)
    setVideoLoaded(false)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background Video */}
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
            src="/videos/Home-Screen-Video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {videoError && (
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-gradient-to-b from-purple-900 via-black to-black z-0"
              style={{
                backgroundSize: "400% 400%",
                animation: "gradient 15s ease infinite",
              }}
            />
            <div className="absolute inset-0 overflow-hidden">
              <div className="concert-light light-1"></div>
              <div className="concert-light light-2"></div>
              <div className="concert-light light-3"></div>
            </div>
            <div
              className="absolute bottom-0 left-0 w-full h-1/3 bg-black z-10"
              style={{
                maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>
        )}
        <div className="absolute inset-0 bg-black opacity-30 z-1"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 w-full p-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-auto">
            <Image
              src="/images/boostify-logo.png"
              alt="Boostify Tunes Logo"
              width={240}
              height={80}
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <div className="flex gap-6">
          <Link href="/performers" className="hover:text-gray-300 transition-colors">
            Performers
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>
      </nav>

      {/* Audio Control Button */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <button
          onClick={toggleAudio}
          className="p-4 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label={isPlaying ? "Mute audio" : "Play audio"}
        >
          {isPlaying ? <Volume2 className="h-7 w-7 text-white" /> : <VolumeX className="h-7 w-7 text-white" />}
        </button>
        {audioError && (
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 p-2 bg-red-500/80 text-white text-xs rounded whitespace-nowrap">
            {audioError}
          </div>
        )}
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center px-4 pt-6 md:justify-center md:pt-0">
        <h1 className="flex flex-col md:flex-row items-center justify-center text-5xl md:text-7xl font-bold drop-shadow-xl text-center md:text-left">
          <span className="mb-4 md:mb-0 md:mr-4">Welcome to</span>
          <div className="relative h-16 md:h-20 w-auto inline-flex items-center">
            <Image
              src="/images/boostify-logo.png"
              alt="Boostify Tunes"
              width={320}
              height={120}
              className="object-contain"
              priority
            />
          </div>
        </h1>
        <p className="mt-4 text-xl md:text-2xl max-w-2xl">
          Elevating live performances with real-time song requests and tipping
        </p>
        <div className="flex gap-4 mt-72">
          <Button className="text-lg px-6 py-3 rounded-2xl bg-white text-black hover:bg-gray-200">
            Download the App
          </Button>
          <Link href="/performers">
            <Button
              variant="outline"
              className="text-lg px-6 py-3 rounded-2xl border-white text-white hover:bg-white/10"
            >
              Watch Tutorials
            </Button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeOut {
          0% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}