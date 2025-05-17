"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function HoverCard({ children, className, ...props }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "transform-gpu rounded-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

