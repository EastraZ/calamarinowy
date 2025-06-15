import type { Metadata } from "next"
import DiscordCommunity from "@/components/discord-community"

export const metadata: Metadata = {
  title: "Discord Community - AI Tool Directory",
  description:
    "Join our Discord community to connect with other AI enthusiasts, share your projects, and get feedback.",
}

const DiscordCommunityPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <DiscordCommunity />
    </main>
  )
}

export default DiscordCommunityPage
