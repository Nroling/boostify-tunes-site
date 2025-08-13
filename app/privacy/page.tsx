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
            <h2 className="text-2xl font-bold mb-4 text-white">Privacy Policy</h2>
            <p className="text-gray-300 mb-4">Last updated: July 12, 2025</p>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">1. Introduction</h3>
              <p className="text-gray-300 mb-4">
                Boostify Tunes LLC ("Boostify," "we," "our," or "us") operates the Boostify mobile application (the "App"). We're committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">2. Information We Collect</h3>
              <p className="text-gray-300 mb-4">
                <strong>Account Information:</strong> When you register as a performer or listener, we collect your name, email address, profile picture, and (for performers) short bio.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Bank & Payout Information:</strong> For performers, we collect payment account details via Stripe Connect (e.g. bank account or debit card info) solely to facilitate payouts.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Usage Data:</strong> We log actions within the App (e.g. event creation, song requests, "Boost" activity) for analytics and improving the service.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Financial Data:</strong> We store your Boost Bucks balance. All actual payment processing (both purchases and payouts) is handled by Stripe; we do not store credit-card numbers on our servers.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Device & Technical Data:</strong> We collect device identifiers, IP addresses, OS version, and Firebase analytics data to monitor performance and troubleshoot issues.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">3. How We Use Your Information</h3>
              <p className="text-gray-300 mb-4">
                <strong>Provide & Improve the App:</strong> To create your account, enable event creation and song-request workflows, maintain your Boost Bucks wallet, and personalize your experience.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Payments & Payouts:</strong> To convert Stripe payments into Boost Bucks (at $1 USD = 1 BB), update your in-App balance, and to initiate payouts to performers via Stripe Connect (net of our service fee).
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Security & Fraud Prevention:</strong> To detect and prevent unauthorized or illegal activity.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Communications:</strong> To send you account-related emails (e.g. password resets, receipts).
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">4. Data Sharing & Third Parties</h3>
              <p className="text-gray-300 mb-4">
                <strong>Stripe, Inc.:</strong> Payment processing for Boost Bucks purchases and for performer payouts via Stripe Connect; we share only the minimum information needed to complete these transactions.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Firebase (Google LLC):</strong> Authentication, real-time database, and analytics.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>No Other Sharing:</strong> We never sell or rent your personal data to advertisers or other third parties.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">5. Data Security & Retention</h3>
              <p className="text-gray-300 mb-4">
                We implement industry-standard security measures (encryption in transit and at rest for sensitive data). We retain your personal information for as long as your account is active or as needed to comply with legal obligations.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">6. Children's Privacy</h3>
              <p className="text-gray-300 mb-4">
                The App is not intended for children under 16. We do not knowingly collect data from users under 16; if we learn we have, we will delete it promptly.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">7. Your Rights</h3>
              <p className="text-gray-300 mb-4">
                Depending on your jurisdiction, you may have rights to access, correct, delete, or port your data. To exercise these rights, contact us at support@boostifytunes.com.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">8. Changes to This Policy</h3>
              <p className="text-gray-300 mb-4">
                We may update this Policy—when we do, we'll revise the "Last updated" date and notify you as required by law.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">9. Contact Us</h3>
              <p className="text-gray-300 mb-2">
                <strong>Boostify Tunes LLC</strong>
              </p>
              <p className="text-gray-300 mb-2">
                Email: <a href="mailto:support@boostifytunes.com" className="text-blue-400 hover:text-blue-300">support@boostifytunes.com</a>
              </p>
              <p className="text-gray-300 mb-4">
                Address: 732 S 6th St. Ste. N Las Vegas, NV 89101
              </p>
              <p className="text-gray-300">
                You can also contact us through{" "}
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