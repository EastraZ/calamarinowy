import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 bg-gradient-to-br from-gray-900 via-red-900/10 to-gray-900", className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  )
}
