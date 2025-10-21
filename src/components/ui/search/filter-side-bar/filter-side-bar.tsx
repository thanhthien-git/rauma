import { Funnel } from 'lucide-react'

export default function FilterSideBar() {
  return (
    <div className="bg-black flex flex-col w-lg">
      <div className="flex items-center justify-center gap-5">
        <Funnel className="w-5 h-5" />
        <div className="font-spring text-sm text-gray-900 dark:text-gray-100">Search Filter</div>
      </div>
    </div>
  )
}
