"use client"

import type React from "react"

import "@/styles/globals.css"
import { Playfair_Display } from "next/font/google"
import { AnimatePresence } from "framer-motion"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} antialiased`}>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  )
}

