'use client'
interface ShopHeaderProps {
  query: string
}
export default function RelatedStore({ query }: ShopHeaderProps) {
  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-2 text-sm">
        <h2 className="font-medium text-gray-800">
          SHOP LIÊN QUAN ĐẾN <span className="text-red-500">"{query}"</span>
        </h2>
      </div>
    </>
  )
}
