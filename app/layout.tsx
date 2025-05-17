import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

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
  return <ClientLayout>{children}</ClientLayout>
}



import './globals.css'
