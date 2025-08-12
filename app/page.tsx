"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-center mb-12">
          <div className="text-center">
            <Image
              src="/images/boostify-logo.png"
              alt="Boostify Tunes Logo"
              width={200}
              height={60}
              className="mx-auto mb-4"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Boostify Tunes</h1>
            <p className="text-xl text-gray-300 mb-8">
              Boost your fan experience with our performer tools
            </p>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link href="/tutorials">
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              <h2 className="text-2xl font-bold mb-4">Performer Tutorials</h2>
              <p className="text-gray-300 mb-4">
                Learn how to use Boostify to enhance your performances and engage with fans
              </p>
              <Button>View Tutorials</Button>
            </div>
          </Link>

          <Link href="/performers">
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              <h2 className="text-2xl font-bold mb-4">For Performers</h2>
              <p className="text-gray-300 mb-4">
                Discover tools and features designed specifically for performers
              </p>
              <Button>Learn More</Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}