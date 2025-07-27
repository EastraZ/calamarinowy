import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const pricingPlans = [
  {
    title: "Hobby",
    description: "Perfect for personal projects",
    price: "Free",
    features: ["1 user", "Basic analytics", "Unlimited projects"],
    cta: "Get started",
    href: "#",
  },
  {
    title: "Startup",
    description: "For small teams and businesses",
    price: "$9/month",
    features: ["5 users", "Advanced analytics", "Unlimited projects"],
    cta: "Start free trial",
    href: "#",
  },
  {
    title: "Enterprise",
    description: "For large organizations",
    price: "$99/month",
    features: ["Unlimited users", "Advanced analytics", "Unlimited projects", "Dedicated support"],
    cta: "Contact us",
    href: "#",
  },
]

export default function PricingPage() {
  return (
    <div className="container py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Pricing Plans</h1>
        <p className="mt-2 text-gray-500">Choose the plan that's right for you.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader>
              <CardTitle>{plan.title}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{plan.price}</div>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-500">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href={plan.href}>{plan.cta}</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
