export type ProductVariant = {
  id: string
  name: string
  options: string[]
}

export type ProductSKU = {
  id: string
  image: string
  stock: number
  price: number
}

export type ProductAttribute = {
  id: string
  name: string
  value: string
}

export type MediaAsset = {
  id: string
  url: string
  embeddingId?: string
  isPrimary: boolean
}
