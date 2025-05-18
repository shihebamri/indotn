import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "INDONESIAN RESTAURANT",
  description: "Made With ❤️",
  icons: {
    icon: "logo.png", // Replace with your actual favicon URL
    shortcut: "logo.png", // Replace with your actual favicon URL
    apple: "logo.png", // Replace with your actual favicon URL

  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
