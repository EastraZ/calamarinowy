import { cn } from "@/lib/utils"
import type React from "react"

interface HeadingProps {
  children: React.ReactNode
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export function Heading({ children, className, level = 2 }: HeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements

  const baseStyles = {
    1: "text-4xl md:text-6xl font-bold",
    2: "text-3xl md:text-5xl font-bold",
    3: "text-2xl md:text-4xl font-bold",
    4: "text-xl md:text-3xl font-bold",
    5: "text-lg md:text-2xl font-bold",
    6: "text-base md:text-xl font-bold",
  }

  return (
    <Component
      className={cn(
        baseStyles[level],
        "bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </Component>
  )
}
