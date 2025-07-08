import "../animations.css";
import Tutorials from "../tutorials/page";
import Link from "next/link";
import Image from "next/image";

export default function PerformersPage() {
  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      {/* Navigation */}
      <nav className="relative z-20 w-full p-4 flex justify-between items-center bg-black/70">
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
          <Link href="/performers" className="hover:text-gray-300 transition-colors">
            Performers
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
          <Link href="/documents" className="hover:text-gray-300 transition-colors">
            Documents
          </Link>
        </div>
      </nav>

      {/* Concert Lights */}
      <div className="concert-light light-1" />
      <div className="concert-light light-2" />
      <div className="concert-light light-3" />

      {/* Stage Lights */}
      <div className="stage-lights">
        <div className="spotlight spotlight-1" />
        <div className="spotlight spotlight-2" />
        <div className="spotlight spotlight-3" />
        <div className="spotlight spotlight-4" />
        <div className="spotlight spotlight-5" />
      </div>

      {/* Lasers */}
      <div className="laser-container">
        <div className="laser laser-1" />
        <div className="laser laser-2" />
        <div className="laser laser-3" />
        <div className="laser laser-4" />
      </div>

      {/* Crowd */}
      <div className="crowd-container">
        <div className="crowd-row crowd-row-1" />
        <div className="crowd-row crowd-row-2" />
        <div className="crowd-row crowd-row-3" />
      </div>

      {/* Particles */}
      <div className="particles-container">
        <div className="particle p1" />
        <div className="particle p2" />
        <div className="particle p3" />
        <div className="particle p4" />
        <div className="particle p5" />
        <div className="particle p6" />
        <div className="particle p7" />
        <div className="particle p8" />
      </div>

      {/* Tutorials Grid at the bottom */}
      <div style={{ position: "relative", zIndex: 10, marginTop: "4rem" }}>
        <Tutorials />
      </div>
    </div>
  );
}