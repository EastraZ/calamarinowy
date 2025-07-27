import type { Metadata } from "next"

import { Features } from "@/components/features"
import { Heading } from "@/components/heading"
import { Section } from "@/components/section"

export const metadata: Metadata = {
  title: "Features",
  description: "Explore the features that make this app amazing.",
}

export default function FeaturesPage() {
  return (
    <Section className="space-y-6">
      <Heading size="lg">Features</Heading>
      <Features />
    </Section>
  )
}
