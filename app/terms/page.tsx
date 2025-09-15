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
            <h2 className="text-2xl font-bold mb-4 text-white">Boostify Tunes – Terms & Conditions</h2>
            <p className="text-gray-300 mb-4">Effective Date: July 12, 2025</p>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">1. Acceptance of Terms</h3>
              <p className="text-gray-300 mb-4">
                By downloading or using Boostify Tunes (the "App"), you agree to these Terms & Conditions and our Privacy Policy.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">2. Eligibility</h3>
              <p className="text-gray-300 mb-4">
                You must be at least 16 years old to use the App. By registering, you represent and warrant that you meet this requirement.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">3. Account Registration</h3>
              <p className="text-gray-300 mb-4">
                You may sign up as a Performer or User.
              </p>
              <p className="text-gray-300 mb-4">
                You are responsible for maintaining the confidentiality of your password and for all account activity.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">4. Boost Bucks Wallet & Payments</h3>
              <p className="text-gray-300 mb-4">
                <strong>Purchasing Bucks:</strong> Listeners purchase Boost Bucks via Stripe at $1 USD = 1 BB.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Usage:</strong> Boost Bucks may be used to request songs, boost song positions in an event queue, or tip performers.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Non-Refundable:</strong> All Boost Bucks purchases are strictly non-refundable and have no cash value outside the Boostify Tunes app.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">5. Performer Events, Song Requests & Payouts</h3>
              <p className="text-gray-300 mb-4">
                <strong>Event Creation:</strong> Performers create and manage events, build their portfolios, and playlists.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Reserve Pricing:</strong> For any song in a performer's portfolio, a "reserve" price may be set. Reserve songs remain in the boost zone (main queue) until the reserve amount is met before advancing to "up next" or "now playing."
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Song Requests & Boosting:</strong> Listeners request songs to the queue and may boost them; the App orders the queue based on Boost Bucks spent.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Payouts:</strong>
              </p>
              <ul className="text-gray-300 mb-4 list-disc list-inside ml-4">
                <li>Performers sign up with Stripe Connect—there is no signup fee.</li>
                <li>Once an event is complete (or automatically closed 24 hours after its scheduled end), payouts are initiated via Stripe Connect.</li>
                <li>All payouts are subject to a 25% service fee retained by Boostify Tunes.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">6. Conduct & Content</h3>
              <p className="text-gray-300 mb-4">
                You agree not to post unlawful, harmful, or infringing content.
              </p>
              <p className="text-gray-300 mb-4">
                Boostify Tunes reserves the right to remove any content or suspend accounts for violations.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">7. Intellectual Property</h3>
              <p className="text-gray-300 mb-4">
                All Boostify Tunes trademarks, logos, and software are our property.
              </p>
              <p className="text-gray-300 mb-4">
                You grant us a non-exclusive license to use content you upload solely to operate and improve the App.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">8. Disclaimers & Limitation of Liability</h3>
              <p className="text-gray-300 mb-4">
                The App is provided "as is." We disclaim all warranties, express or implied.
              </p>
              <p className="text-gray-300 mb-4">
                To the maximum extent permitted by law, Boostify Tunes' liability for any claim related to the App is limited to the total amount of Boost Bucks you've purchased in the previous six months.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">9. Termination</h3>
              <p className="text-gray-300 mb-4">
                We may suspend or terminate your access if you breach these Terms. Upon termination, unused Boost Bucks will be forfeited.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">10. Governing Law</h3>
              <p className="text-gray-300 mb-4">
                These Terms are governed by the laws of the State of Nevada, USA, without regard to conflict-of-law principles.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">11. Changes to Terms</h3>
              <p className="text-gray-300 mb-4">
                We may modify these Terms. If changes are material, we'll notify you via the App or email. Continued use after changes constitutes acceptance.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Boost Bucks Terms</h3>
              
              <h4 className="text-lg font-semibold mb-2 text-white">Nature of Boost Bucks</h4>
              <p className="text-gray-300 mb-4">
                Boost Bucks are prepaid, non-transferable credits that may only be used within the Boostify Tunes app to request songs, boost songs, or tip performers. Boost Bucks are strictly non-refundable and have no cash value outside the Boostify Tunes app.
              </p>

              <h4 className="text-lg font-semibold mb-2 text-white">Expiration</h4>
              <p className="text-gray-300 mb-4">
                All Boost Bucks expire 12 months after the date of purchase. After expiration, any unused Boost Bucks will be forfeited and removed from your account.
              </p>

              <h4 className="text-lg font-semibold mb-2 text-white">Governing Law</h4>
              <p className="text-gray-300 mb-4">
                Boost Bucks are issued by Boostify Tunes LLC, a Nevada limited liability company, and are governed exclusively by Nevada law.
              </p>

              <h4 className="text-lg font-semibold mb-2 text-white">Non-Transferability</h4>
              <p className="text-gray-300 mb-4">
                Boost Bucks may not be transferred, sold, or assigned to another user or account.
              </p>

              <h4 className="text-lg font-semibold mb-2 text-white">Fraud & Misuse</h4>
              <p className="text-gray-300 mb-4">
                Boostify Tunes reserves the right to suspend or cancel Boost Bucks balances if they are obtained fraudulently, used in violation of these Terms, or otherwise abused.
              </p>

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