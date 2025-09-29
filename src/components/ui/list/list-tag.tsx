'use client'
export default function SearchTermTag({ terms }: { terms: string[] }) {
  return (
    <>
      {terms.map((term) => (
        <span key={term} className="px-5 py-2 rounded-full bg-gray-100 text-base">
          {term}
        </span>
      ))}
    </>
  )
}
