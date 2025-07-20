import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Gamepad2 } from "lucide-react" // Example icon

interface ProductDropdownCardProps {
  title: string
  description: string
  imageUrl?: string
  comingSoon?: boolean
  href: string
}

export function ProductDropdownCard({ title, description, imageUrl, comingSoon, href }: ProductDropdownCardProps) {
  return (
    <div className="w-72 bg-[#1C1F2A] border border-[#2A2E3B] rounded-lg p-4 flex flex-col text-center hover:border-red-500/60 transition-colors duration-200">
      <div className="h-36 bg-[#2A2E3B] rounded-md mb-4 flex items-center justify-center relative overflow-hidden">
        {comingSoon ? (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <span className="text-slate-300 font-semibold text-lg">Coming soon...</span>
          </div>
        ) : imageUrl ? (
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={288}
            height={144}
            className="object-cover w-full h-full"
          />
        ) : (
          <Gamepad2 className="w-16 h-16 text-slate-500" /> // Placeholder if no image
        )}
      </div>
      <Gamepad2 className="w-6 h-6 text-red-500 mx-auto mb-2" />
      <h3 className="text-md font-semibold text-white mb-1">{title}</h3>
      <p className="text-xs text-slate-400 mb-4 flex-grow">{description}</p>
      <Button
        asChild
        variant="outline"
        className="w-full bg-[#2A2E3B] border-[#393D4A] text-slate-300 hover:bg-[#393D4A] hover:text-white text-xs"
        disabled={comingSoon}
      >
        <Link href={href}>View Product</Link>
      </Button>
    </div>
  )
}
