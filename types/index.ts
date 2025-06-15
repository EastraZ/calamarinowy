export interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
}

export interface GameProduct {
  id: string
  name: string
  description: string
  features: string[]
  popular?: boolean
  rating: number
  users: string
  variants: ProductVariant[]
}

export interface ProductVariant {
  name: string
  price: number
  stock: number
}
