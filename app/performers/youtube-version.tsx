"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PerformersYouTube() {
  const [isLoading, setIsLoading] = useState(true)

  // REPLACE THIS with your actual YouTube video ID
  // The ID is the part after "v=" in a YouTube URL
  // For example, in https://www.youtube.com/watch?v=dQw4w9WgXcQ, the ID is dQw4w9WgXcQ
  const youtubeVideoId = "YOUR_YOUTUBE_VIDEO_ID"

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation bar */}
      <div className="relative z-10 p-4">
        <Link href="/">
          <Button variant="ghost" className="p-0">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Video container */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
            <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
          </div>
        )}

        {/* YouTube Embed */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full max-w-5xl aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=0&controls=1&rel=0&showinfo=0`}
              title="Performers Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
            ></iframe>
          </div>
        </div>
      </div>

      {/* Instructions panel */}
      <div className="p-4 bg-gray-900 text-sm">
        <h3 className="font-bold mb-2">How to Use This YouTube Version:</h3>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Upload your video to YouTube (can be unlisted if you prefer)</li>
          <li>Get the video ID from the YouTube URL (the part after "v=")</li>
          <li>Replace "YOUR_YOUTUBE_VIDEO_ID" in the code with your actual video ID</li>
          <li>Rename this file to "page.tsx" to use it instead of the direct video player</li>
        </ol>
        <p className="mt-2 text-yellow-400">
          YouTube embed is the most reliable way to ensure autoplay works across browsers.
        </p>
      </div>
    </div>
  )
}

