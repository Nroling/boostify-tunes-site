import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Music, Users, DollarSign, Award } from "lucide-react"

export default function About() {
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
            <h1 className="text-3xl md:text-4xl font-bold flex items-center">
              About
              <div className="relative h-10 md:h-12 w-auto ml-3">
                <Image
                  src="/images/boostify-logo.png"
                  alt="Boostify Tunes Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Boostify was built with one simple goal: to make live music more interactive, rewarding, and personal—for
              both performers and the fans who support them.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              As longtime fans of the live scene and creators at heart, we saw a missing link between the crowd and the
              people behind the mic. Traditional tip jars and shouted song requests just didn't cut it anymore. Boostify
              brings that old-school vibe into the digital age—where your favorite local artist, DJ, or performer can
              now get paid instantly, and fans can directly influence the vibe by boosting songs in the setlist in
              real-time.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We designed Boostify as a free, intuitive app for both artists and audiences. Whether you're at a packed
              club, a chill patio show, or a wedding dance floor, Boostify turns passive listening into active
              participation. Every request and every tip flows through the app seamlessly, with a queue that updates
              live based on total contributions. No more awkward interruptions, no more cash needed—just a clean,
              engaging way to connect.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              For performers, Boostify is more than a digital tip jar—it's a tool to increase earnings, grow your
              following, and control your set while letting the crowd help shape the show. With automated payouts,
              dynamic pricing, and a sleek dashboard, you can focus on your craft while the app takes care of the rest.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Boostify is the bridge between performance and participation. Built by creators, for creators—and powered
              by fans.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Music className="h-8 w-8 mr-3 text-white" />
                  <h3 className="text-xl font-bold">Real-time Song Requests</h3>
                </div>
                <p className="text-gray-300">
                  Audience members can request songs directly through the app, allowing performers to see what their
                  fans want to hear.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <DollarSign className="h-8 w-8 mr-3 text-white" />
                  <h3 className="text-xl font-bold">Direct Tipping</h3>
                </div>
                <p className="text-gray-300">
                  Fans can show their appreciation by sending tips directly to performers during or after shows.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 mr-3 text-white" />
                  <h3 className="text-xl font-bold">Audience Engagement</h3>
                </div>
                <p className="text-gray-300">
                  Interactive features that allow performers to connect with their audience in meaningful ways.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 mr-3 text-white" />
                  <h3 className="text-xl font-bold">Performance Analytics</h3>
                </div>
                <p className="text-gray-300">
                  Detailed insights into audience preferences and engagement to help performers optimize their sets.
                </p>
              </div>
            </div>
          </section>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-6">Ready to transform your performances?</h2>
            <Link href="/">
              <Button className="text-lg px-6 py-3 rounded-2xl bg-white text-black hover:bg-gray-200">
                Download the App
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

