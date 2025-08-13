"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function Terms() {
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
            <h1 className="text-3xl md:text-4xl font-bold">Terms and Conditions</h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto prose prose-invert">
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Terms and Conditions for Boostify Tunes</h2>
            <p className="text-gray-300 mb-4">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">1. Acceptance of Terms</h3>
              <p className="text-gray-300 mb-4">
                By accessing and using Boostify Tunes, you accept and agree to be bound by the 
                terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">2. Use License</h3>
              <p className="text-gray-300 mb-4">
                Permission is granted to temporarily use Boostify Tunes for personal, 
                non-commercial transitory viewing only.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">3. Disclaimer</h3>
              <p className="text-gray-300 mb-4">
                The materials on Boostify Tunes are provided on an 'as is' basis. 
                Boostify Tunes makes no warranties, expressed or implied.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">4. Limitations</h3>
              <p className="text-gray-300 mb-4">
                In no event shall Boostify Tunes or its suppliers be liable for any damages 
                arising out of the use or inability to use the materials on our website.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">5. Contact Information</h3>
              <p className="text-gray-300">
                If you have any questions about these Terms and Conditions, please contact us at{" "}
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