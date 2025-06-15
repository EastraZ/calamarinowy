import ProductCard from "@/components/product-card"
import type { Product } from "@/types"

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Product 1",
    description: "This is product 1",
    price: 20,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Product 2",
    description: "This is product 2",
    price: 30,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Product 3",
    description: "This is product 3",
    price: 40,
    imageUrl: "/placeholder.svg",
  },
]

const ProductsPage = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
