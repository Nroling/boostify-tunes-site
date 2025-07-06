import '../styles/globals.css';
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import './globals.css';
import "../app/animations.css";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Boostify Tunes - Marketing & Tutorial Hub",
  description: "Elevating live performances with real-time song requests and tipping",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
