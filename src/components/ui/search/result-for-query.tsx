interface ISearchResult {
  query: string
}
export default function SearchResult({ query }: ISearchResult) {
  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-2 text-sm">
        <h2 className="font-spring text-base text-gray-900 dark:text-gray-100">
          RESULTS FOR:{' '}
          <span style={{ fontFamily: 'Satoshi, sans-serif' }}>
            "{' '}
            <span className="font-spring text-base text-gray-900 dark:text-gray-100">{query}</span>{' '}
            "
          </span>
        </h2>
      </div>
    </>
  )
}
