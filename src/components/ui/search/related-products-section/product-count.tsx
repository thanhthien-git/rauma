'use client'

interface ProductCountProps {
  currentPage: number
  perPage: number
  total: number
}

export function ProductCount({ currentPage, perPage, total }: ProductCountProps) {
  const start = (currentPage - 1) * perPage + 1
  const end = Math.min(currentPage * perPage, total)

  return (
    <div className="text-gray-500 text-sm">
      Showing{' '}
      <span className="font-medium text-gray-700">
        {start}-{end}{' '}
      </span>
      of <span className="font-medium text-gray-700">{total}</span> Products
    </div>
  )
}
