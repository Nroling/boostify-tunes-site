"use client";

import "../animations.css";
import Tutorials from "../tutorials/page";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function PerformersPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoStarted, setVideoStarted] = useState(false);

  // Ensure video is paused on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  // Play video on hover (desktop)
  const handleVideoMouseEnter = () => {
    if (videoRef.current && !videoStarted) {
      videoRef.current.play();
      setVideoStarted(true);
    }
  };

  // Play video when scrolled down (mobile/tablet)
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && !videoStarted) {
        const rect = videoRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          videoRef.current.play();
          setVideoStarted(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [videoStarted]);

  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      {/* Navigation */}
      <nav className="relative z-20 w-full p-4 flex justify-between items-center bg-black">
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
          <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
            Contact
          </Link>
          <Link href="/documents" className="text-white hover:text-gray-300 transition-colors">
            Documents
          </Link>
        </div>
      </nav>

      {/* Background Video */}
      <video
        ref={videoRef}
        src="/videos/Home-Screen-Video.mp4"
        loop
        muted
        playsInline
        controls={false}
        preload="none"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onMouseEnter={handleVideoMouseEnter}
        style={{ pointerEvents: "auto" }}
      />

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