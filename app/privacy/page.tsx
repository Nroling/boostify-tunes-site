"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
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
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Privacy Policy for Boostify Tunes</h2>
            <p className="text-gray-300 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">1. Information We Collect</h3>
              <p className="text-gray-300 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">2. How We Use Your Information</h3>
              <p className="text-gray-300 mb-4">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, and communicate with you.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">3. Information Sharing</h3>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">4. Data Security</h3>
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">5. Contact Us</h3>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                  our contact page
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}